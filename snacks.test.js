const { getInitials, createSlug, average, isPalindrome } = require("./snacks");

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
test("La funzione isPalindrome verifica se una stringa è un palindromo.",()=>{
  expect(isPalindrome("osso")).toBeTruthy()
  expect(isPalindrome("ossatura")).toBeFalsy()
})
