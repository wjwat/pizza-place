const BasePrice = 7;
const Sizes = {
  small: BasePrice * 0.75,
  medium: BasePrice,
  large: BasePrice * 1.25
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
  ham: 1,
  'bell pepper': 0.5,
  'red onion': 0.5,
  'black olives': 0.5,
  'spicy peppers': 0.5,
  'baked beans': 0.25,
  mushrooms: 0.25,
  pickles: 10,
  pineapple: 15,
  catnip: 0
};

function Pizza(size, sauce, cheese, toppings) {
  this.size = size || 'medium';
  this.sauce = sauce || 'tomato';
  this.cheese = cheese || 'blend';
  this.toppings = toppings || [];
  this.basePrice = BasePrice[this.size];
}

Pizza.prototype.getPrice = function () {
  let tempTotal = this.basePrice;

  tempTotal += Sauces[this.sauce];
  tempTotal += Cheeses[this.cheese];

  this.toppings.forEach(top => {
    tempTotal += Toppings[top];
  });

  tempTotal *= Sizes[this.size];

  return tempTotal;
};

function Order(name, tel, items) {
  this.name = name;
  this.tel = tel;
  this.items = items || [];
  this._totalPrice = 0;
}

Order.prototype.getTotalPrice = function() {
  let tempTotal = 0;

  this.items.forEach(i => {
    tempTotal += i.getPrice();
  });

  return tempTotal;
};

function createSelectTag(id, name, options) {
  let retString = `<label for='${id}'>${name}</label><select id='${id}' name='${name}'>`;

  console.log(options);
  Object.entries(options).forEach(([k, v]) => {
    console.log(k, v);
  });
  // optsArray.forEach(o => {
  //   retString += `<option value='${o}'>${o.toUpperCase()}</option>`;
  // });
  retString += `</select>`;

  return retString;
}

function createCheckBoxes(optsArray) {
  let retString = '';

  optsArray.forEach(o => {
    retString += `<label><input type='checkbox' id='${o}'>${o.toUpperCase()}</label>`;
  });

  return retString;
}

// UI
function startPizzaOrdering() {
  $('#pizza-order, #start-order').toggle();
  $('#customer-name, #customer-tel').prop('disabled', true);
  createPizzaSelection();
}

function createPizzaSelection() {
  $('#pizza-sizes').html(createSelectTag('sizes', 'Pizza Sizes', Sizes));
  $('#pizza-sauces').html(createSelectTag('sauces', 'Pizza Sauces', Sauces));
  $('#pizza-cheeses').html(createSelectTag('cheeses', 'Pizza Cheeses', Cheeses));
  $('#pizza-toppings').html(createCheckBoxes(Object.keys(Toppings)));
}

function attachListeners() {
  $('form').on('submit', e => {
    e.preventDefault();
    startPizzaOrdering();
  });
  // $('#add-to-order').on('click');
}

$(document).ready(function() {
  attachListeners();
});
