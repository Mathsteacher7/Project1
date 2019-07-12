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

  console.log(chosenNumbers)

  for (let j = 0; j < chosenNumbers.length; j++){
    cellsWithMiner.push(grids[chosenNumbers[j]])
  }
  cellsWithMiner.map(cell => cell.classList.add('boom'))
  console.log(cellsWithMiner)

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
    if ((i > 8) && (i + 1) % 9 !== 0 && (grids[i-8].classList.contains('boom'))){
      bombCounter++
    }
    if ((i > 8) && (i % 9 !== 0) && (grids[i-10].classList.contains('boom'))) {
      bombCounter++
      // console.log(bombCounter)
    }
    if (i > 8 && grids[i-9].classList.contains('boom')) {
      bombCounter++
      // console.log(bombCounter)
      // grids[i].textContent = bombCounter
    }
    if ((i + 1) % 9 !== 0 && grids[i+1].classList.contains('boom')) {
      bombCounter++

      // console.log(bombCounter)
    }
    if (i % 9 !== 0 && grids[i-1].classList.contains('boom')) {
      bombCounter++
    }
    if (i< 72 && i % 9 !== 0 && grids[i + 8].classList.contains('boom')){
      bombCounter++
    }
    if (i < 72 && grids[i + 9].classList.contains('boom')){
      bombCounter++
    }
    if (i < 72 && (i + 1) % 9 !== 0 && grids[i + 10].classList.contains('boom')){
      bombCounter++
    }
    console.log(bombCounter)

    grids[i].textContent = bombCounter



  }
    //
    //
    //
    //
    // grids.forEach(grid => grid.textContent = bombCounter)
    // }
    // if (!grids[0]){
    //   if (grids[i-1].classList.contains('boom')) {
    //     bombCounter++
    //     console.log(bombCounter)
    //   }
    // }
  // }



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
      if(e.target.classList.contains('withBomb') && !e.target.classList.contains('flag')){
        grid.classList.add('boom')
      }

    })
  })




})
