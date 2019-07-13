//easy game 10 mines grid 9 x 9
//intermediate game 40 mines grid 16 x 16
//expert 99 mines grid 16 x 30







let mineCounter = 10
const cellsWithMiner = []
const chosenNumbers=[]

document.addEventListener('DOMContentLoaded', () => {

  const grids = document.querySelectorAll('.grid div')
  // console.log(grids)
  const counter = document.querySelector('.counter')

  // grids[0].classList.add('oneBomb')


  //*****

  // for (let i = 0; i < grids.length; i++){
  //   arrOfNumbers.push(i)
  //
  // }
  // console.log(arrOfNumbers)
  // const arrOfNumbers = []
  // for (let i = 0; i < 10; i++){
  //   const n = Math.floor(Math.random() * grids.length)
  //   }
  // }
  //
  //
  // // const chosenCells = randomBombs()
  // cellsWithMiner.push(grids[chosenCells])
  // console.log(cellsWithMiner)

  // creating a list of 10 not reapted numbers

  const arrOfNumbers = []
  for (let i = 0; i < grids.length; i++){
    arrOfNumbers.push(i)
  }

  //This is where I decide how many mines I will have - the number I attached to n


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

  // above and below here is where I need to change to withBomb after attaching the numbers


  // for (let n = 0; n < grids.length; n++) {
  //   if (grids[n].classList.contains('boom')){
  //     const amount = grids[n].getAttribute('data-bombcount')
  //     grids[n+1].setAttribute('data-bombcount', amount+1)
  //     grids[n-1].setAttribute('data-bombcount', amount+1)
  // const amount = grids[n+1].getAttribute('data-bombcount')
  // grids[n+1].setAttribute('data-bombcount', amount+1)
  // grids[n-1].setAttribute('data-bombcount', amount+1)
  // grids[n-8].setAttribute('data-bombcount', 1)
  // grids[n-9].setAttribute('data-bombcount', 1)
  // grids[n-10].setAttribute('data-bombcount', 1)
  // grids[n+8].setAttribute('data-bombcount', 1)
  // grids[n+9].setAttribute('data-bombcount', 1)
  // grids[n+10].setAttribute('data-bombcount', 1)


  //   }
  // }


  // const numberOneTest = document.querySelectorAll('.numberOne')
  // console.log(numberOneTest)
  //
  //   grids.forEach((grid) => {
  //     if (grid.classList.contains(boom)){
  //
  //     }
  //   })

  for (let i = 0; i < grids.length; i++) {
    let bombCounter = 0
    if (!grids[i].classList.contains('withBomb')){
      if ((i > 8) && (i + 1) % 9 !== 0 && (grids[i-8].classList.contains('withBomb'))){
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
      const numberOfIndex = [].indexOf.call(grids, e.target)
      console.log(numberOfIndex)


      // winning the game and losing the game
      // if ((!e.target.classList.contains('emptyCellHide') && !e.target.classList.contains('oneBombHide') &&  !e.target.classList.contains('twoBombsHide') && !e.target.classList.contains('threeBombsHide') &&  !e.target.classList.contains('fourBombsHide') &&  !e.target.classList.contains('fiveBombsHide') &&  !e.target.classList.contains('sixBombsHide') &&  !e.target.classList.contains('sevenBombsHide') &&  !e.target.classList.contains('eightBombsHide'))) {
      //   alert('Congratulations! You won the game!')
      // }
      if (e.target.classList.contains('boom')){
        if (confirm('Oops, you hit a bomb! you lost! Do you want to play again?')){
          location.reload()
        }

      }






      // From here to create a switch/if statement for every emptycell I open


      // if (e.target.classList.contains('emptyCellHide') && !e.target.classList.contains('flag') && !e.target.classList.contains('withBomb') ){
      //   grid.classList.add('emptyCell')
      //   switch(whatInTheGrid){
      //     case:
      //   }
      // }
    })
  })




})
