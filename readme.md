#Project One: Castle Tea-Party

##Overview

Castle Tea-Party is windows' minesweeper based game. Try to logically discover where the hot cups of tea are, and to avoid them, used some delicious biscuits.
This is my first project as part of the Software Engineer Immersive course.
I hope you will enjoy play the [game](https://mathsteacher7.github.io/Project1/).

https://github.com/Mathsteacher7/Project1/issues/1#issue-470215977


##Brief
* Castle Tea-Party is a grid-based game in the browser
* The game built with separate HTML/CSS/JavaScript files
* Use DOM manipulation
* Deploy your game online, using Github Pages, where the rest of the world can access it
* Use semantic markup for HTML and CSS (adhere to best practices)




##Technologies Used

* HTML5
* SCSS
* CSS3
* JavaScript (ES6)
* Git
* GitHub
* Google Fonts

##Approach taken
###Creating the grid
The game is static, which changes by the user clicks. For that I created  grids made of divs that were wrapping up with another div. While attaching in the beginning the same class to the divs, I was able to make a game board that was revealed step by step by the user. In every click the user removed the originally class (hidden) and discover what is under the grid.


###Randomised the hot cups of tea and creating the numbers in each cell
Every game the board is randomise again, with Math.random, making sure that ten different grids will be chosen.

```js
while(chosenNumbers.length < 10){
  let randomNumber = Math.floor((Math.random() * (grids.length)))
  while(chosenNumbers.includes(randomNumber)){
    randomNumber = Math.floor((Math.random() * (grids.length)))

  }
  chosenNumbers.push(randomNumber)
}
```


The next step was to calculate how many hot cups of tea there around any grid. According to that a class with the relevant number of hot cups of tea is attached to the grid.


###Functionality
The player has two option of clicks - he can just click a grid and reveal what is behind the door, or if he thinks there is a hot cup of tea behind it, he can click it while he hold the shift key pressed, and put a biscuit on it. When a biscuit has been putting on a grid, the player cannot reveal this grid:

```js
function openCells(){
  if (!flagCell) {
    grid.classList.remove('hidden')
  }
}
```

###Opening an empty grid
When a player open an empty grid he knows that all the grids around it are not attached with hot cup of tea. For that reason when the player click on an empty cell he does not just reveal that grid, but also all the grids around it. More about it in the challenges.


##Challenges
The whole board can be divided to nine parts - the grids in the corners, the grids in the rows and columns on the edge (not including the corners) and the rest of the grids. Every time I needed a grid to check the grids around it, I needed to take it into consideration. If I asked a grid to look on a grid that is not exist, it created a bug.
For both times I used a switch statement to distinguish between the options, for example, when I wanted to open the cells around a white cell:
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


##screenshots of the game in different stages




The game begins with automatic timer when the page is loaded
