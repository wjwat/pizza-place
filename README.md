# Blue Monday Pizza Parlor

#### By [Will W.](https://wjwat.com/)

#### _Epicodus Independent Project Week 4_ -- Creating a pizza order form with objects!

## :computer: Technologies Used

* HTML & CSS
* JavaScript
  - JS Objects
  - [YACCK](https://sphars.github.io/yacck/)
  - [JQuery](https://jquery.com/)
* My cat _Risky Business_-ing his way across the keyboard.

## :memo: Description

This is a simple page that mocks an order form for a pizza place. You are currently able to select as many different pizzas as you'd like for a single order and watch as your total updates. You can also remove any pizzas added to your order and watch your total go down! I've written it to be as flexible as possible (or as possible as I can currently make it) to add items and adjust prices at will in the source file for the JS.

## :gear: Setup/Installation & Usage Instructions

- Go to https://wjwat.github.io/pizza-place/ in any modern browser.

*or*

- [Clone this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your device
- Using the [file manager](https://www.lifewire.com/what-is-a-file-manager-4589189) on your system browse to where you've cloned the repo
- Open `index.html` using your file manager and a browser of your choice

*then*

- Type in your name & phone number in the provided boxes
- Click `Start Order`
- Make your selections for your preferred pizza
  * Add as many pizzas as you'd like with the `Add to Order` button
- Click `Finish Order` when you're done!

## :clipboard: Specifications

### Pizza()

| Test | Code | Expected Output |
| ---- | ---- | --------------- |
| The constructor should return a Pizza object with the properties for size, sauce, cheese, and toppings assigned to itself. | ```let myPizza = new Pizza('medium', 'tomato', 'blend', ['pepperoni'])``` | ```Pizza {size: 'medium', sauce: 'tomato', cheese: 'blend', toppings: ['pepperoni']}``` |
| Constructor should return an empty object when no values are passed into it's constructor. | ```let myPizza = new Pizza()``` | ```Pizza {size: undefined, sauce: undefined, cheese: undefined, toppings: undefined}``` |
| Constructor should set sane defaults for an object (medium, tomato, blend, []) instantiated with no arguments | ```let myPizza = new Pizza()``` | ```Pizza {size: 'medium', sauce: 'tomato', cheese: 'blend', toppings: []}``` |
| Constructor should set a base price for a default Pizza object | ```let myPizza = new Pizza()``` | ```myPizza.basePrice === 7; // true``` |

#### Pizza.getPrice()

| Test | Code | Expected Output |
| ---- | ---- | --------------- |
| A pizza object created with default selections should return a total price of 7 | ```myPizza.getPrice()``` | ```myPizza.getPrice() === 7 // true``` |
| A pizza object created with a size of `large` should, and all other options default, should return a total price of 8.75 | ```let p2 = new Pizza('large')``` | ```p2.getPrice() === 8.75 // true``` |

### Order()

| Test | Code | Expected Output |
| ---- | ---- | --------------- |
| Order constructor should return an Order object with items = [], and _totalPrice = 0 when called with no arguments | ```let o = new Order()``` | ```o._totalPrice === 0 && o.items.length === 0 // true``` |
| Order constructor should return an Order object with items equal to the passed in items array, and a _totalPrice of 0 when called with no arguments | ```let o = new Order([pizza1, pizza2, pizza3])``` | ```o.items === [pizza1, pizza2, pizza3] && o._totalPrice === 0 // true``` |
| Constructor should return an object with name, and telephone number included in it's properties when constructed | ```let o = new Order('john doe', '555-555-5555')``` | ```o.name === 'john doe' && o.tel === '555-555-5555' // true``` |

#### Order.addItems()

| Test | Code | Expected Output |
| ---- | ---- | --------------- |
| Method accepts an array of items to add to current Order object | ```let p = new Pizza(); let o = new Order(); o.addItems([p]);``` | ```o.items[0] === n // true``` |

#### Order.removeItem()

| Test | Code | Expected Output |
| ---- | ---- | --------------- |
| Method accepts an index which it will use to delete the item in that spot in the object's items array | ```newOrder.addItems([item1, item2]); newOrder.removeItem(0);``` | ```newOrder.items.length === 0 // true``` |

#### Order.getTotalPrice()

| Test | Code | Expected Output |
| ---- | ---- | --------------- |
| Method should return a total price for all items currently contained in Object instance | ```let myPizza = new Pizza(); let o = new Order(name, tel, [myPizza])``` | ```o.getTotalPrice() === 7 // true``` |
| Method should return a total price for all items currently contained in Object instance | ```let m1 = new Pizza(); let m2 = new Pizza(); let o = new Order(name, tel [m1, m2]);``` | ```o.getTotalPrice() === 14 // true``` |

### itemSpan()

| Test | Code | Expected Output |
| ---- | ---- | --------------- |
| Accepts a string, and returns that string wrapped in a span element with a class of 'items' | ```let x = itemSpan('pizza')``` | ```x === '<span class='items'>pizza</span>'``` |

## :world_map: Roadmap

* Differentiate items in receipt by color (cheese = yellow, sauce = red, etc)
* Extend ability to include sides/drinks
* Building strings to put them in HTML isn't the cleanest thing to do. It would
  be better to move all that stuff somewhere else, or tap into a library that
  has the ability to.

## :lady_beetle: Known Bugs

* If any others are found please feel free to open an issue or email me at wjwat
  at onionslice dot org
* Tax is currently not added to total.
* Clicking `Finish Order` currently takes you nowhere.
* User can go to the finished order mode without having added a pizza.
* We're abusing 'submit' to make the browser check to make sure required fields
  are filled in, but we should do our own checking.
* The code is a bit all over the place. Refactoring and putting things in
  libraries would be fantastic.

## :warning: License

MIT License

Copyright (c) 2022 William Watkins  ♨o(>_<)o♨
