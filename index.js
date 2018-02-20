const { writeFile, lstatSync, readdirSync, readFileSync, existsSync } = require('fs');
const { join, dirname, resolve, parse } = require('path');
const mkdirp = require('mkdirp');
const YAML = require('yamljs');

// TODO should make this more robust...
const entryFolder = process.argv[2];
const docRoot = resolve(__dirname, entryFolder);
const outFileName = process.argv[3] || 'bundle';

// helper function to create folder if it doesn't exist, then write file
const writeFileToFolder = (path, contents, cb) => {
  mkdirp(dirname(path), (err) => {
    if (err) return cb(err);

    return writeFile(path, contents, cb);
  });
};

const isDirectory =
  source =>
    lstatSync(source).isDirectory();

const getDirectories =
  source =>
    readdirSync(source).map(name => join(source, name));

const rootContents = getDirectories(docRoot);

const compileDirectory = (contents, pathname, path = '') => {
  const orderPath = `${pathname}/_order.yml`;
  const order = existsSync(orderPath) ? YAML.load(orderPath) : null;

  return contents
    .map(item => parse(item))
    .sort((a, b) => {
      const aOrder = order ? order.findIndex(name => name === a.name) : a.name;
      const bOrder = order ? order.findIndex(name => name === b.name) : b.name;

      if (aOrder < bOrder) return -1;
      if (aOrder > bOrder) return 1;
      return 0;
    })
    .reduce((acc, item) => {
      const { base, name, ext, dir } = item;
      const newPathname = `${dir}/${base}`;

      if (!isDirectory(newPathname)) {
        if (ext !== '.md') return acc;

        // if it's markdown, write contents to the object
        const content = readFileSync(newPathname, 'utf8');

        return [...acc, { name, content, url: `https://github.com/captDaylight/bottler/tree/master/${path}/${base}` }];
      }

      // if directory, recurse through the subdirector
      return [
        ...acc,
        {
          name,
          content: compileDirectory(getDirectories(newPathname), newPathname, `${path}/${base}`),
          // TODO hardcoding most of this for now, should be generated in reality
          url: `https://github.com/captDaylight/bottler/tree/master/${entryFolder}${path}/${base}`,
        },
      ];
    }, []);
};

const jsonBundle = JSON.stringify(compileDirectory(rootContents, docRoot));

// write documentation json to the build folder
writeFileToFolder(`./build/${outFileName}.json`, jsonBundle, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log('The file was saved!');
});
