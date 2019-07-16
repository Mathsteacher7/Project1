//easy game 10 mines grid 9 x 9
//intermediate game 40 mines grid 16 x 16
//expert 99 mines grid 16 x 30


let timeTimer = 0
let mineCounter = 10
const cellsWithMiner = []
const chosenNumbers=[]


document.addEventListener('DOMContentLoaded', () => {

  const grids = Array.from(document.querySelectorAll('.grid div'))
  // const hidden = Array.from(document.querySelectorAll('.hidden'))
  // console.log(hidden.length)
  const counter = document.querySelector('.counter')
  const timer = document.querySelector('.timer')

  // creating a timer

  function startingTimer () {
    timeTimer ++
    timer.textContent = timeTimer
  }
  const timerId = setInterval(startingTimer, 1000)

  // creating a list of 10 not reapted numbers

  while(chosenNumbers.length < 10){
    let randomNumber = Math.floor((Math.random() * (grids.length)))
    while(chosenNumbers.includes(randomNumber)){
      randomNumber = Math.floor((Math.random() * (grids.length)))

    }
    chosenNumbers.push(randomNumber)
  }
  // attching to the chosen cells the bomb
  for (let j = 0; j < chosenNumbers.length; j++){
    cellsWithMiner.push(grids[chosenNumbers[j]])
  }
  cellsWithMiner.map(cell => cell.classList.add('boom'))




  for (let i = 0; i < grids.length; i++) {
    let bombCounter = 0
    if (!grids[i].classList.contains('boom')){
      if ((i > 8) && (i + 1) % 9 !== 0 && (grids[i-8].classList.contains('boom'))) {
        bombCounter++
      }
      if ((i > 8) && (i % 9 !== 0) && (grids[i-10].classList.contains('boom'))) {
        bombCounter++
      }
      if (i > 8 && grids[i-9].classList.contains('boom')) {
        bombCounter++
      }
      if ((i + 1) % 9 !== 0 && grids[i+1].classList.contains('boom')) {
        bombCounter++
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
    }
    if (!grids[i].classList.contains('boom')){
      switch (bombCounter) {
        case (0) :
          grids[i].setAttribute('data-no-bombs', '0')
          break
        case 1:
          grids[i].setAttribute('data-bomb-counting', '1')
          break
        case 2:
          grids[i].setAttribute('data-bomb-counting', '2')
          break
        case 3:
          grids[i].setAttribute('data-bomb-counting', '3')
          break
        case 4:
          grids[i].setAttribute('data-bomb-counting', '4')
          break
        case 5:
          grids[i].setAttribute('data-bomb-counting', '5')
          break
        case 6:
          grids[i].setAttribute('data-bomb-counting', '6')
          break
        case 7:
          grids[i].setAttribute('data-bomb-counting', '7')
          break
        case 8:
          grids[i].setAttribute('data-bomb-counting', '8')
      }
    }
  }
  // putting flags
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




  // openning cells
  grids.forEach((grid) => {
    grid.addEventListener('click', (e) => {
      const numberOfIndex = grids.indexOf(e.target)
      // console.log(numberOfIndex)
      // console.log(e.target)
      const flagCell = e.target.classList.contains('flag')
      let listOfOpening = [1, -1, 9, -9, 8, -8, 10, -10]
      const hidden = Array.from(document.querySelectorAll('.hidden'))


      function openCells(){
        if (!flagCell) {
          grid.classList.remove('hidden')
        }
      }
      openCells()

      // cell 0 i === 0       [1, 10, 9]
      // cell 8 i === 8       [-1, 8, 9]
      // cell 72 i === 72     [-9, -8, 1]
      // cell 80 i === 80     [-1, -10, -9]
      // cells in the first row i < 8     [1, -1, 8, 9, 10]
      // cells in last column ((i + 1) % 9 === 0  [-10, -9, -1, 8, 9]
      // cells in the first column i % 9 === 0    [-9, -8, 1, 9, 10]
      // cells in the last raw i > 72             [1, -1, -10, -9, -8]


      console.log(e.target.id)





      // function clearCells() {
      //   if (grids[numberOfIndex].hasAttribute('data-no-bombs')){
      //     for (let i = 0; i < listOfOpening.length; i++){
      //       const w = listOfOpening[i]
      //       if (grids[0]){
      //         if ((grids[index + w].hasAttribute('data-no-bombs')) || (grids[index + w].hasAttribute('data-bomb-counting'))) {
      //           grids[index + w].classList.remove('hidden')
      //       }


      //       grids[numberOfIndex + w].classList.remove('hidden')
      //     }
      //   }
      // }
      // clearCells()



      // console.log(grids[])




      function clearCells(numberOfIndex){
        if (grids[numberOfIndex].hasAttribute('data-no-bombs')){
          if (e.target === grids[0]){
            for (let i = 0; i < listOfOpening.length; i++){
              listOfOpening = [1, 9, 10]
              const w = listOfOpening[i]
              if ((grids[numberOfIndex + w].hasAttribute('data-no-bombs')) || (grids[numberOfIndex + w].hasAttribute('data-bomb-counting'))){
                grids[numberOfIndex + w].classList.remove('hidden')
              }
            }
          } else if (e.target === grids[8]) {
            for (let i = 0; i < listOfOpening.length; i++){
              listOfOpening = [-1, 8, 9]
              const w = listOfOpening[i]
              if ((grids[numberOfIndex + w].hasAttribute('data-no-bombs')) || (grids[numberOfIndex + w].hasAttribute('data-bomb-counting'))){
                grids[numberOfIndex + w].classList.remove('hidden')
              }
            }
          } else if (e.target === grids[72]) {
            for (let i = 0; i < listOfOpening.length; i++){
              listOfOpening = [-8, -9, 1]
              const w = listOfOpening[i]
              if ((grids[numberOfIndex + w].hasAttribute('data-no-bombs')) || (grids[numberOfIndex + w].hasAttribute('data-bomb-counting'))){
                grids[numberOfIndex + w].classList.remove('hidden')
              }
            }
          } else if (e.target === grids[80]) {
            for (let i = 0; i < listOfOpening.length; i++){
              listOfOpening = [-10, -9, -1]
              const w = listOfOpening[i]
              if ((grids[numberOfIndex + w].hasAttribute('data-no-bombs')) || (grids[numberOfIndex + w].hasAttribute('data-bomb-counting'))){
                grids[numberOfIndex + w].classList.remove('hidden')
              }
            }
          } else if (e.target.id < 8) {
            for (let i = 0; i < listOfOpening.length; i++){
              listOfOpening = [1, -1, 8, 9, 10]
              const w = listOfOpening[i]
              if ((grids[numberOfIndex + w].hasAttribute('data-no-bombs')) || (grids[numberOfIndex + w].hasAttribute('data-bomb-counting'))){
                grids[numberOfIndex + w].classList.remove('hidden')
              }
            }
          } else if (e.target.id > 72) {
            for (let i = 0; i < listOfOpening.length; i++){
              listOfOpening = [1, -1, -10, -9, -8]
              const w = listOfOpening[i]
              if ((grids[numberOfIndex + w].hasAttribute('data-no-bombs')) || (grids[numberOfIndex + w].hasAttribute('data-bomb-counting'))){
                grids[numberOfIndex + w].classList.remove('hidden')
              }
            }
          } else if ((e.target.id + 1) % 9 === 0) {
            for (let i = 0; i < listOfOpening.length; i++){
              listOfOpening = [-10, -9, -1, 8, 9]
              const w = listOfOpening[i]
              if ((grids[numberOfIndex + w].hasAttribute('data-no-bombs')) || (grids[numberOfIndex + w].hasAttribute('data-bomb-counting'))){
                grids[numberOfIndex + w].classList.remove('hidden')
              }
            }
          } else if (e.target.id % 9 === 0) {
            for (let i = 0; i < listOfOpening.length; i++){
              listOfOpening = [10, -9, 1, -8, 9]
              const w = listOfOpening[i]
              if ((grids[numberOfIndex + w].hasAttribute('data-no-bombs')) || (grids[numberOfIndex + w].hasAttribute('data-bomb-counting'))){
                grids[numberOfIndex + w].classList.remove('hidden')
              }
            }
          } else {
            for (let i = 0; i < listOfOpening.length; i++){
              listOfOpening = [1, -1, 9, -9, 8, -8, 10, -10]
              const w = listOfOpening[i]
              if ((grids[numberOfIndex + w].hasAttribute('data-no-bombs')) || (grids[numberOfIndex + w].hasAttribute('data-bomb-counting'))){
                grids[numberOfIndex + w].classList.remove('hidden')
              }
            }
          }
        }

      }    // if ((grids[numberOfIndex + w].hasAttribute('data-no-bombs')) || (grids[numberOfIndex + w].hasAttribute('data-bomb-counting'))) {
      //   grids[numberOfIndex + w].classList.remove('hidden')


      clearCells(numberOfIndex)


      // }


      //   listOfOpening.forEach(w => clearCells(index + w))

      // if (grids[numberOfIndex].hasAttribute('data-no-bombs')) {
      // // && ((numberOfIndex > 8 && numberOfIndex < 72 && numberOfIndex % 9 !==  0 && (numberOfIndex + 1) % 9 !== 0))) {
      //

      //
      // }
      //







      // winning the game and losing the game

      if (hidden.length === 10){
        clearInterval(timerId)
        alert(`You won! and you did it in ${timeTimer} seconds!`)

      }
      if (e.target.classList.contains('boom') && !e.target.classList.contains('flag')){
        clearInterval(timerId)
        if (confirm('Oops, you hit a bomb! you lost! Do you want to play again?')){
          location.reload()
        }
      }


    })

  })
})
