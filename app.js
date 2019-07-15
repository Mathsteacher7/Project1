//easy game 10 mines grid 9 x 9
//intermediate game 40 mines grid 16 x 16
//expert 99 mines grid 16 x 30


let timeTimer = 0
let mineCounter = 10
const cellsWithMiner = []
const chosenNumbers=[]


document.addEventListener('DOMContentLoaded', () => {

  const grids = document.querySelectorAll('.grid div')
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
      const numberOfIndex = [].indexOf.call(grids, e.target)


      if (!e.target.classList.contains('flag')) {
        grid.classList.remove('hidden')

        //starting to create the borders which I need to check. I did not finish yet so I commet it. Finish first thing in the morning or to check first the loop in loop


        const listOfOpening = [1, -1, 9, -9]
        if (numberOfIndex > 8 && numberOfIndex < 72 && numberOfIndex % 9 !==  0 && (numberOfIndex + 1) % 9 !== 0){
          for (let i = 0; i < listOfOpening.length; i++){
            const w = listOfOpening[i]

            if (e.target.hasAttribute('data-no-bombs')){
              // while (grids[numberOfIndex + w].hasAttribute('data-no-bombs')){
              grids[numberOfIndex + w].classList.remove('hidden')
            }
          }
        }
        // else if (0 < numberOfIndex < 8){
        //
        //     for (let i = 0; i < listOfOpening.length; i++){
        //       const w = listOfOpening[i]
        //     if (e.target.hasAttribute('data-no-bombs')){
        //       grids[numberOfIndex + w].classList.remove('hidden')
        //     }
        //
        //   }
        // }




        // winning the game and losing the game
        const hidden = Array.from(document.querySelectorAll('.hidden'))
        // console.log(hidden.length)
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
      }

    })

  })
})
