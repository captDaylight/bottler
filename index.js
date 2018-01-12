const fs = require('fs');
const { join, dirname, resolve, parse } = require('path');
const mkdirp = require('mkdirp');

const writeFile = (path, contents, cb) => {
  mkdirp(dirname(path), function (err) {
    if (err) return cb(err);

    fs.writeFile(path, contents, cb);
  });
};

const isDirectory =
  source =>
    fs.lstatSync(source).isDirectory();

const getDirectories =
  source =>
    fs.readdirSync(source)
    .map(name => join(source, name))

const contents = getDirectories(resolve(__dirname, './docs'));

const compileDirectory = (contents) =>
  contents.reduce((acc, item) => {
    const { name, ext } = parse(item);

    if (!isDirectory(item)) {
      if (ext !== '.md') return acc;

      const content = fs.readFileSync(item, 'utf8');

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

writeFile('./build/test.json', JSON.stringify(compileDirectory(contents)), (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('The file was saved!');
});
