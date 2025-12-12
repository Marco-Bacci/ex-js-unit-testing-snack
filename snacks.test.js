const { getInitials } = require("./snacks");

// snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  expect(getInitials("Marco Bacci")).toBe("MB");
});
