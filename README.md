# A Pizza Place

#### By [Will W.](https://wjwat.com/)

#### _Epicodus Independent Project Week 4_ -- 

## :computer: Technologies Used

* HTML & CSS
* Javascript
  - [YACCK](https://sphars.github.io/yacck/)
  - [JQuery](https://jquery.com/)
* 

## :memo: Description

## :gear: Setup/Installation & Usage Instructions

- Go to !!!URL!!! in any modern browser.

*or*

- [Clone this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your device
- Using the [file manager](https://www.lifewire.com/what-is-a-file-manager-4589189) on your system browse to where you've cloned the repo
- Open `index.html` using your file manager and a browser of your choice

*then*

- !!!WRITE SOME INSTRUCTIONS!!!

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

## :lady_beetle: Known Bugs

* If any others are found please feel free to open an issue or email me at wjwat at onionslice dot org

## :warning: License

MIT License

Copyright (c) 2022 William Watkins  ♨o(>_<)o♨
