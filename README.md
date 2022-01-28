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

## :lady_beetle: Known Bugs

* If any others are found please feel free to open an issue or email me at wjwat at onionslice dot org

## :warning: License

MIT License

Copyright (c) 2022 William Watkins  ♨o(>_<)o♨
