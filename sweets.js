 class Sweet {
  constructor(id, name, category, price, quantity) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
  }
}

class SweetShop {
  constructor() {
    this.sweets = [];
  }

  addSweet(sweet) {
    if (this.sweets.find(s => s.id === sweet.id)) {
      throw new Error("Sweet with this ID already exists");
    }
    this.sweets.push(sweet);
  }

  deleteSweet(id) {
    this.sweets = this.sweets.filter(s => s.id !== id);
  }
viewSweets() {
    return this.sweets;
  }

  searchSweet(name) {
    return this.sweets.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
  }

  sortSweets(byField) {
    return [...this.sweets].sort((a, b) => {
      if (typeof a[byField] === 'number') {
        return a[byField] - b[byField];
      }
      return a[byField].localeCompare(b[byField]);
    });
  }

  checkLowInventory(threshold = 5) {
    return this.sweets.filter(s => s.quantity < threshold);
  }

  updateQuantity(id, amount) {
    const sweet = this.sweets.find(s => s.id === id);
    if (!sweet) throw new Error("Sweet not found");
    sweet.quantity = amount;
  }
}

module.exports = { Sweet, SweetShop };