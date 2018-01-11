const fs = require('fs');
const path = require('path');

const isDirectory =
  source =>
    fs.lstatSync(source).isDirectory();

const getDirectories =
  source =>
    fs.readdirSync(source)
    .map(name => path.join(source, name))

const contents = getDirectories(path.resolve(__dirname, './docs'));

const compileDirectory = (contents) =>
  contents.reduce((acc, item) => {
    const { name, ext } = path.parse(item);

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

fs.writeFile('./build/test.json', JSON.stringify(compileDirectory(contents)), 'utf-8', function(err) {
  if(err) {
    return console.log(err);
  }

  console.log('The file was saved!');
});
