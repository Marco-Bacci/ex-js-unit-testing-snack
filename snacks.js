// snack 1
function getInitials(string) {
  const [name, surname] = string.split(" ");
  return `${name.charAt(0)}${surname.charAt(0)}`;
}

// snack 2
function createSlug(string) {
  return string.toLowerCase();
}

// snack 3

function average(numbers) {
  const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sum / numbers.length;
}

module.exports = {
  getInitials,
  createSlug,
  average,
};
