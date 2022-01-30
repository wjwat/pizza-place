const BasePrice = 10;
const TaxRate = 0.0825;
const PizzaParlor = {
  Sizes: {
    small: BasePrice * 0.75,
    medium: BasePrice,
    large: BasePrice * 1.25,
  },
  Sauces: {
    tomato: 0,
    pesto: 1.25,
    bbq: 1,
    'olive oil': 1.25,
  },
  Cheeses: {
    blend: 0,
    double: 2,
    vegan: 1,
    no: -1,
  },
  Toppings: {
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
    catnip: 0,
  }
};

function Pizza(size, sauce, cheese, toppings) {
  this.size = size || 'medium';
  this.sauce = sauce || 'tomato';
  this.cheese = cheese || 'blend';
  this.toppings = toppings || [];
  this.basePrice = PizzaParlor.Sizes[this.size];
}

Pizza.prototype.getPrice = function () {
  let tempTotal = this.basePrice;

  tempTotal += PizzaParlor.Sauces[this.sauce];
  tempTotal += PizzaParlor.Cheeses[this.cheese];

  this.toppings.forEach((top) => {
    tempTotal += PizzaParlor.Toppings[top];
  });

  return tempTotal;
};

function Order(name, tel, items) {
  this.name = name;
  this.tel = tel;
  this.items = items || [];
  this._totalPrice = this.getTotalPrice();
}

Order.prototype.addItems = function(newItems) {
  if(newItems) {
    newItems.forEach((i) => {
      this.items.push(i);
    });
  }

  this._totalPrice = this.getTotalPrice();
};

Order.prototype.removeItem = function(index) {
  if (index < this.items.length) {
    delete this.items[index];
    this.items = this.items.filter(Boolean);
    this._totalPrice = this.getTotalPrice();
  }
};

Order.prototype.getTotalPrice = function() {
  let tempTotal = 0;

  this.items.forEach(i => {
    tempTotal += i.getPrice();
  });

  return tempTotal;
};

function createSelectTag(name, options) {
  let id = name.toLowerCase();
  let retString = `<label for='${id}'>${name}</label><select id='${id}' name='${name}'>`;

  Object.entries(options).forEach(([k, v]) => {
    retString += `<option name='${name}' value='${k}'>${k.toUpperCase()} ($${v})</option>`;
  });
  retString += `</select>`;

  return retString;
}

function createCheckBoxes(options) {
  let retString = '';

  Object.entries(options).forEach(([k, v]) => {
    retString += `<label><input type='checkbox' name='${k}'>${k.toUpperCase()} ($${v})</label>`;
  });

  return retString;
}

function itemSpan(str) {
  return `<span class='items'>${str.toUpperCase()}</span>`;
}

function startPizzaOrdering() {
  $('#pizza-order, #start-order').toggle();
  $('#customer-name, #customer-tel').prop('disabled', true);

  newOrder.name = $('#customer-name').val();
  newOrder.tel = $('#customer-tel').val();

  createPizzaSelection();
}

function createPizzaSelection() {
  $('#pizza-sizes').html(createSelectTag('Sizes', PizzaParlor.Sizes));
  $('#pizza-sauces').html(createSelectTag('Sauces', PizzaParlor.Sauces));
  $('#pizza-cheeses').html(createSelectTag('Cheeses', PizzaParlor.Cheeses));
  $('#pizza-toppings').html(createCheckBoxes(PizzaParlor.Toppings));
}

function addPizzaToOrder() {
  let size = $('#pizza-sizes select option[name=Sizes]:selected').val();
  let sauce = $('#pizza-sauces select option[name=Sauces]:selected').val();
  let cheese = $('#pizza-cheeses select option[name=Cheeses]:selected').val();
  let tops = [];
  
  $('#pizza-toppings input:checkbox:checked').each((i, e) => {
    tops.push($(e).attr('name'));
  });

  let newPizza = new Pizza(size, sauce, cheese, tops);

  newOrder.addItems([newPizza]);

  updateRunningTotal();
}

function removePizzaFromOrder(sel) {
  newOrder.removeItem(sel.currentTarget.value);
  updateRunningTotal();
}

function updateRunningTotal() {
  let pizzaList = '';
  let total = newOrder.getTotalPrice();
  let tax = (total * TaxRate);
  $('#receipt').show();
  $('#tax-total').text('$' + tax.toFixed(2));
  $('#running-total').text('$' + (total + tax).toFixed(2));

  newOrder.items.forEach((e, i) => {
    pizzaList +=`<li value='${i}'>`;
    pizzaList += `${itemSpan(e.size)} pizza, ${itemSpan(e.sauce)} base, ${itemSpan(e.cheese)} cheese`;

    if (e.toppings != 0) {
      pizzaList += ', and ';
      pizzaList += e.toppings.map(upper => itemSpan(upper)).join(', ');
    }
    pizzaList += '.</li>';
  });

  $('#list-of-pizzas').html(pizzaList);
}

function finishOrder() {
  if (newOrder.items.length === 0) {
    return;
  }

  let [driver, cook] = getTwo();

  pizzaList = $('#list-of-pizzas');
  $('form').hide();
  pizzaList.off('click', 'li');
  pizzaList.removeClass('removable-items');
  $('#friendly-greeting').text('TOOK YOU LONG ENOUGH');
  $('#driver').text(driver);
  $('#cook').text(cook);
  $('#order-time').text(Math.ceil(Math.random() * 50) + 15);
  $('#finish').show();
}

function attachListeners() {
  $('form').on('submit', e => {
    e.preventDefault();
    startPizzaOrdering();
  });
  $('#add-to-order').on('click', addPizzaToOrder);
  $('#list-of-pizzas').on('click', 'li', removePizzaFromOrder);
  $('#finish-order').on('click', finishOrder);
}

// Something smells a little eggy right here.
function shuffle(array){var m=array.length,t,i;while(m){i=Math.floor(Math.random()*m--);t=array[m];array[m]=array[i];array[i]=t}return array}function getTwo(){let names=shuffle(['BEN','BROOKE','CAMERON','CATHY','CHAR','ELENA','ERIK','JAMES','JASMINE','JIAQI','LOUIE','MICHAEL','MIKE','NINA','PATRICK','RACHEL','RYAN','VERONICA']);return[names[0],names[1]]}

let newOrder = new Order();

$(document).ready(function() {
  attachListeners();
});
