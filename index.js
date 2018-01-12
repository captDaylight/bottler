const { writeFile, lstatSync, readdirSync, readFileSync } = require('fs');
const { join, dirname, resolve, parse } = require('path');
const mkdirp = require('mkdirp');

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

const contents = getDirectories(resolve(__dirname, './docs'));

const compileDirectory = (contents) =>
  contents.reduce((acc, item) => {
    const { name, ext } = parse(item);

    if (!isDirectory(item)) {
      if (ext !== '.md') return acc;

      const content = readFileSync(item, 'utf8');

      return [ ...acc, { name, content } ];
    }

    return [
      ...acc,
      {
        name,
        content: compileDirectory(getDirectories(item)),
      }
    ];
  }, []);

writeFileToFolder('./build/test.json', JSON.stringify(compileDirectory(contents)), (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('The file was saved!');
});
