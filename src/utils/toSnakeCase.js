const toSnakeCase = (str) => (
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
);

module.exports = toSnakeCase;
