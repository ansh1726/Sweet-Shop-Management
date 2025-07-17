const { Sweet, SweetShop } = require('./Sweets');

describe("SweetShop", () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();
  });
// test for adding sweets
  test("adds a sweet", () => {
    const sweet = new Sweet(1, "Ladoo", "Traditional", 10, 20);
    shop.addSweet(sweet);
    expect(shop.viewSweets()).toContain(sweet);
  });

  //test for duplication
  test("does not allow duplicate IDs", () => {
    const sweet1 = new Sweet(1, "Ladoo", "Traditional", 10, 20);
    const sweet2 = new Sweet(1, "Barfi", "Milk", 15, 10);
    shop.addSweet(sweet1);
    expect(() => shop.addSweet(sweet2)).toThrow("Sweet with this ID already exists");
  });

  //test for deleting sweet
 test("deletes a sweet", () => {
    const sweet = new Sweet(1, "Ladoo", "Traditional", 10, 20);
    shop.addSweet(sweet);
    shop.deleteSweet(1);
    expect(shop.viewSweets()).not.toContain(sweet);
  });

  //searching sweet test
  test("searches sweets by name", () => {
    shop.addSweet(new Sweet(1, "Ladoo", "Traditional", 10, 20));
    shop.addSweet(new Sweet(2, "Barfi", "Milk", 15, 10));
    const result = shop.searchSweet("lad");
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Ladoo");
  });
  
  //sorting the sweets test
   test("sorts sweets by price", () => {
    shop.addSweet(new Sweet(1, "Ladoo", "Traditional", 10, 20));
    shop.addSweet(new Sweet(2, "Barfi", "Milk", 5, 10));
    const sorted = shop.sortSweets("price");
    expect(sorted[0].name).toBe("Barfi");
  });

  //test for checking inventory
    test("checks low inventory", () => {
    shop.addSweet(new Sweet(1, "Ladoo", "Traditional", 10, 2));
    shop.addSweet(new Sweet(2, "Barfi", "Milk", 15, 10));
    const lowStock = shop.checkLowInventory();
    expect(lowStock.length).toBe(1);
    expect(lowStock[0].name).toBe("Ladoo");
  });

  test("updates quantity", () => {
    shop.addSweet(new Sweet(1, "Ladoo", "Traditional", 10, 2));
    shop.updateQuantity(1, 15);
    expect(shop.viewSweets()[0].quantity).toBe(15);
  });
})