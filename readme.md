# Project One: Castle Tea-Party

## Overview

Castle Tea-Party is windows' minesweeper based game. Try to discover where the hot cups of tea are logically, and to avoid them, use some delicious biscuits.
This is my first project as part of the Software Engineer Immersive course.
I hope you will enjoy playing the [game](https://mathsteacher7.github.io/Project1/).

![The game grid in the beginning](https://user-images.githubusercontent.com/51882532/61523171-bc2def80-aa0b-11e9-81e8-8093cc000e07.png)


## Brief
* Build a grid-based game in the browser
* Use separate HTML/CSS/JavaScript files
* Use DOM manipulation
* Deploy your game online, using Github Pages, where the rest of the world can access it
* Use semantic markup for HTML and CSS (adhere to best practices)




## Technologies Used

* HTML5
* SCSS
* CSS3
* Flexbox
* JavaScript (ES6)
* Git
* GitHub
* Google Fonts

## Approach taken
### Creating the grid
The game is static, which updates when the user clicks. For that, I created cells made of divs that were wrapping up with in another div. While attaching, in the beginning, the same class to the divs, I was able to make a game board that was revealed step by step by the user. With every click, the original class (hidden) was removed. This revealed what is under the cell.


### Randomise the hot cups of tea and creation of the numbers in each cell
With every new game the board is randomised again, with Math.random, making sure that ten different cells are chosen.

```js
while(chosenNumbers.length < 10){
  let randomNumber = Math.floor((Math.random() * (grids.length)))
  while(chosenNumbers.includes(randomNumber)){
    randomNumber = Math.floor((Math.random() * (grids.length)))

  }
  chosenNumbers.push(randomNumber)
}
```


The next step was to calculate how many hot cups of tea there are around any cell. According to that number, a relevant class is attached to the cell.


### Functionality
The player has two options when he clicks. The player can click on a cell and reveal what is behind the door, or if the player thinks there is a hot cup of tea behind it, the player can click it while holding the shift key down, and put a biscuit on it. When a biscuit has been put on the cell, the player cannot reveal what is behind the door:

```js
function openCells(){
  if (!flagCell) {
    grid.classList.remove('hidden')
  }
}
```

### Opening an empty cell
When a player opens an empty cell, all the doors around it are not hiding a hot cup of tea. For that reason, when the player clicks on an empty cell, the player does not just reveal that cell, but also all the cells around it. See below in the challenges.


## Challenges
The whole board can be divided into nine parts - the cells in the corners, the cells in the rows and columns on the edges (not including the corners) and the rest of the grid. I had difficulty when ever clicking on a cell impacted the cells around it, Especially if the cell was at the edge of the grid.
I used a switch statement to distinguish between the options, for example, when I wanted to open the cells around a white cell:
```js
switch (true) {
  case (numberOfIndex === 0):
  // why filter does not work for me?
    listOfOpening = [1, 9, 10]
    break
  case (numberOfIndex === 8):
    listOfOpening = [-1, 9, 8]
    break
  case (numberOfIndex === 72):
    listOfOpening = [-8, -9, 1]
    break
  case (numberOfIndex === 80):
    listOfOpening = [-1, -9, -10]
    break
  case (numberOfIndex < 8):
    listOfOpening = [1, -1, 8, 9, 10]
    break
  case (numberOfIndex > 72):
    listOfOpening = [1, -1, -10, -9, -8]
    break
  case ((numberOfIndex + 1) % 9 === 0):
    listOfOpening = [-10, -9, -1, 8, 9]
    break
  case (numberOfIndex % 9 === 0):
    listOfOpening = [-9, -8, 1, 9, 10]
    break
  default:
    listOfOpening
}
```


## Screenshots of the game in different stages


![The game with the instructions in the beginning](https://user-images.githubusercontent.com/51882532/61528610-2304d600-aa17-11e9-818d-269ef3090a6d.png)

The game begins with an automatic timer when the page is loaded.


![The game after opening a bunch of empty cells](https://user-images.githubusercontent.com/51882532/61528689-56476500-aa17-11e9-9a31-f6629650d4c9.png)

The game after opening a bunch of empty cells

![You lost!](https://user-images.githubusercontent.com/51882532/61529594-a7585880-aa19-11e9-805a-92dd71af1b87.png)

The game after spilling a hot cup of tea and losing

![You won](https://user-images.githubusercontent.com/51882532/61529669-da9ae780-aa19-11e9-9c54-c2d376b1b015.png)

The game after winning

## Wins and Blockers

The project started with great win of learning a lot of new advanced concepts in JavaScript. I needed to create not just a random list of 10 numbers, but to ensure that no number is repeated. I also needed to create different conditions for nine kinds of cells. Learning how to ensure those conditions were met was a great win.
The main blocker was opening all the empty cells around an empty cell. The problem was the need to implement all the conditions also in the recursive function. For now, the player will need to open the other empty cells by clicking on them.
Another win was dealing with CSS and flexbox methods, making sure every item of the grid and instruction is in place. In addition, working with the DOM allowed me to manipulate my HTML and CSS files without changing them.

## Future features

The main future features I would like to add is creating more levels of difficulty, and even a custom one, where the player can choose how many hot cups of tea will be hidden behind the doors.
Another feature is opening all the adjacent empty cells in the first click on an empty cell.
