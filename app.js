//easy game 10 mines grid 9 x 9
//intermediate game 40 mines grid 16 x 16
//expert 99 mines grid 16 x 30


let timeTimer = 0
let mineCounter = 10
const cellsWithMiner = []
const chosenNumbers=[]
let counterOpenCells = 0


document.addEventListener('DOMContentLoaded', () => {

  const grids = document.querySelectorAll('.grid div')
  // console.log(grids)
  const counter = document.querySelector('.counter')
  const timer = document.querySelector('.timer')

  // creating a list of 10 not reapted numbers

  const arrOfNumbers = []
  for (let i = 0; i < grids.length; i++){
    arrOfNumbers.push(i)
  }

  //This is where I decide how many mines I will have - the number I attached to n


  function startingTimer () {
    timeTimer ++
    timer.textContent = timeTimer
  }
  let timerId
  timerId = setInterval(startingTimer, 1000)

  while(chosenNumbers.length < 10){
    let randomNumber = Math.floor((Math.random() * (grids.length)))
    while(chosenNumbers.includes(randomNumber)){
      randomNumber = Math.floor((Math.random() * (grids.length)))

    }
    chosenNumbers.push(randomNumber)
  }

  // console.log(chosenNumbers)

  for (let j = 0; j < chosenNumbers.length; j++){
    cellsWithMiner.push(grids[chosenNumbers[j]])
  }
  cellsWithMiner.map(cell => cell.classList.add('withBomb'))
  // console.log(cellsWithMiner)




  for (let i = 0; i < grids.length; i++) {
    let bombCounter = 0
    if (!grids[i].classList.contains('withBomb')){
      if ((i > 8) && (i + 1) % 9 !== 0 && (grids[i-8].classList.contains('withBomb'))) {
        bombCounter++
      }
      if ((i > 8) && (i % 9 !== 0) && (grids[i-10].classList.contains('withBomb'))) {
        bombCounter++
        // console.log(bombCounter)
      }
      if (i > 8 && grids[i-9].classList.contains('withBomb')) {
        bombCounter++
        // console.log(bombCounter)
        // grids[i].textContent = bombCounter
      }
      if ((i + 1) % 9 !== 0 && grids[i+1].classList.contains('withBomb')) {
        bombCounter++

        // console.log(bombCounter)
      }
      if (i % 9 !== 0 && grids[i-1].classList.contains('withBomb')) {
        bombCounter++
      }
      if (i< 72 && i % 9 !== 0 && grids[i + 8].classList.contains('withBomb')){
        bombCounter++
      }
      if (i < 72 && grids[i + 9].classList.contains('withBomb')){
        bombCounter++
      }
      if (i < 72 && (i + 1) % 9 !== 0 && grids[i + 10].classList.contains('withBomb')){
        bombCounter++
      }



    }
    // console.log(bombCounter)
    switch (bombCounter) {
      // grids[i].textContent = bombCounter
      case 0:
        grids[i].classList.add('emptyCellHide')
        break
      case 1:
        grids[i].classList.add('oneBombHide')
        break
      case 2:
        grids[i].classList.add('twoBombsHide')
        break
      case 3:
        grids[i].classList.add('threeBombsHide')
        break
      case 4:
        grids[i].classList.add('fourBombsHide')
        break
      case 5:
        grids[i].classList.add('fiveBombsHide')
        break
      case 6:
        grids[i].classList.add('sixBombsHide')
        break
      case 7:
        grids[i].classList.add('sevenBombsHide')
        break
      case 8:
        grids[i].classList.add('eightBombsHide')
    }
  }






  grids.forEach((grid) => {
    grid.addEventListener('auxclick', (e) => {

      if (e.target.classList.contains('flag')){
        grid.classList.remove('flag')
        mineCounter++
        counter.textContent = mineCounter
      } else {
        if(mineCounter > 0) {
          grid.classList.add('flag')
          mineCounter--
          counter.textContent = mineCounter
        }
      }
    })
  })
  grids.forEach((grid) => {
    grid.addEventListener('click', (e) => {
      const numberOfIndex = [].indexOf.call(grids, e.target)
      // const emptyCellEvent = e.target.classList.contains('emptyCell')
      if ((e.target.classList.contains('emptyCellHide') || e.target.classList.contains('oneBombHide') || e.target.classList.contains('twoBombsHide') || e.target.classList.contains('threeBombsHide') || e.target.classList.contains('fourBombsHide') || e.target.classList.contains('fiveBombsHide') || e.target.classList.contains('sixBombsHide') || e.target.classList.contains('sevenBombsHide') || e.target.classList.contains('eightBombsHide'))) {
        counterOpenCells++
      }
      console.log(counterOpenCells)
      // console.log(grids[numberOfIndex + 1])

      // console.log(numberOfIndex + 1)
      if (e.target.classList.contains('withBomb') && !e.target.classList.contains('flag')){
        grid.classList.add('boom')
      }
      if (e.target.classList.contains('oneBombHide') && !e.target.classList.contains('flag')){
        grid.classList.add('oneBomb')
        grid.classList.remove('oneBombHide')
      }
      if (e.target.classList.contains('twoBombsHide') && !e.target.classList.contains('flag')){
        grid.classList.add('twoBombs')
        grid.classList.remove('twoBombsHide')
      }
      if (e.target.classList.contains('threeBombsHide') && !e.target.classList.contains('flag')){
        grid.classList.add('threeBombs')
        grid.classList.remove('threeBombsHide')
      }
      if (e.target.classList.contains('fourBombsHide') && !e.target.classList.contains('flag')){
        grid.classList.add('fourBombs')
        grid.classList.remove('fourBombsHide')
      }
      if (e.target.classList.contains('fiveBombsHide') && !e.target.classList.contains('flag')){
        grid.classList.add('fiveBombs')
        grid.classList.remove('fiveBombsHide')
      }
      if (e.target.classList.contains('sixBombsHide') && !e.target.classList.contains('flag')){
        grid.classList.add('sixBombs')
        grid.classList.remove('sixBombsHide')
      }
      if (e.target.classList.contains('sevenBombsHide') && !e.target.classList.contains('flag')){
        grid.classList.add('sevenBombs')
        grid.classList.remove('sevenBombsHide')
      }
      if (e.target.classList.contains('eightBombsHide') && !e.target.classList.contains('flag')){
        grid.classList.add('eightBombs')
        grid.classList.remove('eightBombsHide')
      }
      if (e.target.classList.contains('emptyCellHide') && !e.target.classList.contains('flag') && !e.target.classList.contains('withBomb') ){
        grid.classList.add('emptyCell')
        grid.classList.remove('emptyCellHide')
      }


      // winning the game and losing the game
      // function winningCondition () {
      //   return (e.target.classList.contains('cell'))
      // }
      // console.log(grids.every(classList.contains('cell')))

      // function winningCondition() {
      //   return ((!grid.classList.contains('emptyCellHide') && !grid.classList.contains('oneBombHide') &&  !grid.classList.contains('twoBombsHide') && !grid.classList.contains('threeBombsHide') &&  !grid.classList.contains('fourBombsHide') &&  !grid.classList.contains('fiveBombsHide') &&  !grid.classList.contains('sixBombsHide') &&  !grid.classList.contains('sevenBombsHide') &&  !grid.classList.contains('eightBombsHide')))
      // }
      // const test1 = grids.every(winningCondition)
      // for (let n = 0; n < grids.length; n++){
      //
      // }
      // console.log(winningCondition())
      if (counterOpenCells === 71) {
        for (let n = 0; n < grids.length; n++){
          // console.log(grids[n])


          if (grids[n].classList.contains('withBomb') && !grids[n].classList.contains('flag')){
            grid.classList.add('flag')
          }
          if (grids[n].classList.contains('oneBombHide') && !grids[n].classList.contains('flag')){
            grid.classList.add('oneBomb')
            grid.classList.remove('oneBombHide')
          }
          if (grids[n].classList.contains('twoBombsHide') && !grids[n].classList.contains('flag')){
            grid.classList.add('twoBombs')
            grid.classList.remove('twoBombsHide')
          }
          if (grids[n].classList.contains('threeBombsHide') && !grids[n].classList.contains('flag')){
            grid.classList.add('threeBombs')
            grid.classList.remove('threeBombsHide')
          }
          if (grids[n].classList.contains('fourBombsHide') && !grids[n].classList.contains('flag')){
            grid.classList.add('fourBombs')
            grid.classList.remove('fourBombsHide')
          }
          if (grids[n].classList.contains('fiveBombsHide') && !grids[n].classList.contains('flag')){
            grid.classList.add('fiveBombs')
            grid.classList.remove('fiveBombsHide')
          }
          if (grids[n].classList.contains('sixBombsHide') && !grids[n].classList.contains('flag')){
            grid.classList.add('sixBombs')
            grid.classList.remove('sixBombsHide')
          }
          if (grids[n].classList.contains('sevenBombsHide') && !grids[n].classList.contains('flag')){
            grid.classList.add('sevenBombs')
            grid.classList.remove('sevenBombsHide')
          }
          if (grids[n].classList.contains('eightBombsHide') && !grids[n].classList.contains('flag')){
            grid.classList.add('eightBombs')
            grid.classList.remove('eightBombsHide')
          }
          if (grids[n].classList.contains('emptyCellHide') && !grids[n].classList.contains('flag') && !grids[n].classList.contains('withBomb') ){
            grid.classList.add('emptyCell')
            grid.classList.remove('emptyCellHide')
          }
        }
        clearInterval(timerId)
        alert(`You won! and you did it in ${timeTimer} seconds!`)

      }
      if (e.target.classList.contains('boom')){
        clearInterval(timerId)
        if (confirm('Oops, you hit a bomb! you lost! Do you want to play again?')){
          location.reload()
        }
      }





      //
      // let i = 1
      // while (grids[numberOfIndex + i].classList.contains('emptyCellHide') && e.target.classList.contains('emptyCell'))  {
      //   grids[numberOfIndex + i].classList.add('emptyCell')
      //   grids[numberOfIndex + i].classList.remove('emptyCellHide')
      //   i++
      // }
      // i = -1
      //
      // while (grids[numberOfIndex + i].classList.contains('emptyCellHide') && e.target.classList.contains('emptyCell'))  {
      //   grids[numberOfIndex + i].classList.add('emptyCell')
      //   grids[numberOfIndex + i].classList.remove('emptyCellHide')
      //   i--
      // }
      //
      // i = -8
      // while (grids[numberOfIndex + i].classList.contains('emptyCellHide') && e.target.classList.contains('emptyCell'))  {
      //   grids[numberOfIndex + i].classList.add('emptyCell')
      //   grids[numberOfIndex + i].classList.remove('emptyCellHide')
      //   i -= 8
      // }
      // i = -9
      // while (grids[numberOfIndex + i].classList.contains('emptyCellHide') && e.target.classList.contains('emptyCell'))  {
      //   grids[numberOfIndex + i].classList.add('emptyCell')
      //   grids[numberOfIndex + i].classList.remove('emptyCellHide')
      //   i -= 9
      // }
      // i = -10
      // while (grids[numberOfIndex + i].classList.contains('emptyCellHide') && e.target.classList.contains('emptyCell'))  {
      //   grids[numberOfIndex + i].classList.add('emptyCell')
      //   grids[numberOfIndex + i].classList.remove('emptyCellHide')
      //   i -= 10
      // }
      // i = 8
      // while (grids[numberOfIndex + i].classList.contains('emptyCellHide') && e.target.classList.contains('emptyCell'))  {
      //   grids[numberOfIndex + i].classList.add('emptyCell')
      //   grids[numberOfIndex + i].classList.remove('emptyCellHide')
      //   i += 8
      // }
      // i = 9
      // while (grids[numberOfIndex + i].classList.contains('emptyCellHide') && e.target.classList.contains('emptyCell'))  {
      //   grids[numberOfIndex + i].classList.add('emptyCell')
      //   grids[numberOfIndex + i].classList.remove('emptyCellHide')
      //   i += 9
      // }
      // i = 10
      // while (grids[numberOfIndex + i].classList.contains('emptyCellHide') && e.target.classList.contains('emptyCell'))  {
      //   grids[numberOfIndex + i].classList.add('emptyCell')
      //   grids[numberOfIndex + i].classList.remove('emptyCellHide')
      //   i += 10
      // }


    })
  })


})
