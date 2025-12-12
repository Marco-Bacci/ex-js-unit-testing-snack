const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
} = require("./snacks");

const posts = [
  { id: 1, title: "Ciao mondo", slug: "ciao-mondo" },
  { id: 2, title: "Ancora qui", slug: "ancora-qui" },
  { id: 3, title: "Fine", slug: "fine" },
];

// snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  expect(getInitials("Marco Bacci")).toBe("MB");
});

// snack 2
test("La funzione createSlug restituisce una stringa in lowercase", () => {
  expect(createSlug("HELLO WORLD")).toBe("hello-world");
});

// snack 3
test("La funzione average calcola la media aritmetica di un array di numeri", () => {
  expect(average([6, 10, 8])).toBe(8);
  expect(average([20, 10, 30])).toBe(20);
});

// snack 4
test("La funzione createSlug sostituisce gli spazi con -.", () => {
  expect(createSlug("Questo è un test")).toBe("questo-è-un-test");
});

// snack 5
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
  expect(isPalindrome("osso")).toBeTruthy();
  expect(isPalindrome("ossatura")).toBeFalsy();
});

// snack 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
  expect(() => createSlug("")).toThrow("stringa non valida");
  expect(() => createSlug(null)).toThrow("stringa non valida");
});

// snack 7
test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
  expect(findPostById(posts, 1)).toEqual({
    id: 1,
    title: "Ciao mondo",
    slug: "ciao-mondo",
  });
  expect(findPostById(posts, 2)).toEqual({
    id: 2,
    title: "Ancora qui",
    slug: "ancora-qui",
  });
  expect(() => findPostById(posts, "blabla")).toThrow("blabla non è un id corretto");
});
