// snack 1
function getInitials(string) {
  const [name, surname] = string.split(" ");
  return `${name.charAt(0)}${surname.charAt(0)}`
}

module.exports = {
  getInitials,
};
