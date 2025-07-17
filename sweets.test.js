const { Sweet, SweetShop } = require('./Sweets');

describe("SweetShop", () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();
  });

  test("adds a sweet", () => {
    const sweet = new Sweet(1, "Ladoo", "Traditional", 10, 20);
    shop.addSweet(sweet);
    expect(shop.viewSweets()).toContain(sweet);
  });
  test("does not allow duplicate IDs", () => {
    const sweet1 = new Sweet(1, "Ladoo", "Traditional", 10, 20);
    const sweet2 = new Sweet(1, "Barfi", "Milk", 15, 10);
    shop.addSweet(sweet1);
    expect(() => shop.addSweet(sweet2)).toThrow("Sweet with this ID already exists");
  });

})