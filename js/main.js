const Sizes = {
  small: .75,
  medium: 1,
  large: 1.25
};
const Sauces = {
  tomato: 0,
  pesto: 1.25,
  bbq: 1,
  'olive oil': 1.25
};
const Cheeses = {
  blend: 0,
  double: 2,
  vegan: 1
};
const Toppings = {
  pepperoni: 1,
  sausage: 1,
  'bell pepper': .5,
  'red onion': .5,
  'black olives': .5,
  'spicy peppers': .5,
  pickles: 10,
  pineapple: 15
};

function Pizza(size, sauce, cheese, toppings) {
  this.size = size || 'medium';
  this.sauce = sauce || 'tomato';
  this.cheese = cheese || 'blend';
  this.toppings = toppings || [];
  this.basePrice = 7;
};

Pizza.prototype.getPrice = function () {
  let tempTotal = this.basePrice;

  tempTotal += Sauces[this.sauce];
  tempTotal += Cheeses[this.cheese];

  this.toppings.forEach(top => {
    tempTotal += Toppings[top];
  })

  tempTotal *= Sizes[this.size];

  return tempTotal;
}

// UI
function createPizzaSelection() {
  // create them bad boys!
};

function attachListeners() {
  // attack them bad boys
};

$(document).ready(function() {
  createPizzaSelection();
  attachListeners();
});

let n = new Pizza();
console.log(n);
console.log(n.getPrice());
