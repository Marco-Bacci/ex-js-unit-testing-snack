// snack 1
function getInitials(string) {
  const [name, surname] = string.split(" ");
  return `${name.charAt(0)}${surname.charAt(0)}`;
}

// snack 2 , 4 , 6
function createSlug(string) {
  if (!string) {
    throw new Error("stringa non valida");
  }
  return string.toLowerCase().replaceAll(" ", "-");
}

// snack 3

function average(numbers) {
  const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sum / numbers.length;
}

// snack 5
function isPalindrome(string) {
  let palindrome = false;
  const reversed = string.split("").reverse().join("");
  if (reversed === string) {
    palindrome = true;
  }
  return palindrome;
}

// snack 7
function findPostById(posts, id) {
  if (isNaN(id)) {
    throw new Error(`${id} non è un id corretto`);
  }
  return posts.find((post) => post.id === id);
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
};
