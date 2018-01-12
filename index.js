const { writeFile, lstatSync, readdirSync, readFileSync, existsSync } = require('fs');
const { join, dirname, resolve, parse } = require('path');
const mkdirp = require('mkdirp');
const YAML = require('yamljs');

const docRoot = resolve(__dirname, './docs');

// helper function to create folder if it doesn't exist, then write file
const writeFileToFolder = (path, contents, cb) => {
  mkdirp(dirname(path), function (err) {
    if (err) return cb(err);

    writeFile(path, contents, cb);
  });
};

const isDirectory =
  source =>
    lstatSync(source).isDirectory();

const getDirectories =
  source =>
    readdirSync(source)
    .map(name => join(source, name))

const contents = getDirectories(docRoot);

const compileDirectory = (contents, docRoot) => {
  const orderPath = `${docRoot}/_order.yml`;
  const order = existsSync(orderPath) ? YAML.load(orderPath) : null;
  console.log(order);
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
      const path = `${dir}/${base}`;

      if (!isDirectory(path)) {
        if (ext !== '.md') return acc;

        // if it's markdown, write contents to the object
        const content = readFileSync(path, 'utf8');

        return [ ...acc, { name, content } ];
      }

      // if directory, recurse through the subdirector
      return [
        ...acc,
        {
          name,
          content: compileDirectory(getDirectories(path), path),
        }
      ];
    }, []);
}

// write documentation json to the build folder
writeFileToFolder('./build/test.json', JSON.stringify(compileDirectory(contents, docRoot)), (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('The file was saved!');
});
