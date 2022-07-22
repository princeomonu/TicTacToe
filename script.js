/**
 *  FEATURES
 * 
 *  1. turns (x and o)
 *  2. play
 *         track boxes (9 boxes and what they contain ("x","o",""))
 *         print box
 *  3. check for winning (includes winning array)
 */


/**
 *  ALGORITHM
 *  - make turn be x
 *  - make boxex empty
 *  - on box click:
 *       - identify the box 
 *       - set the box value to current turn value
 *       - change turn
 */


let turn = "x"
let boxes = ["","","","","","","","",""]
let gameOver = false

function printBoxes(){
    boxes.forEach((value,index)=>{
        $("#"+(index+1)).text(value)
    })
}

function play(box) {
    // update boxes
    console.log('box before',boxes)
    boxes[box-1] = turn
    console.log('box after',boxes)
    // print boxes
    printBoxes()
}

function changeTurn(){
    if(turn=="x") turn = "o"
    else turn = "x"
}

function checkForWin() {
    const winningArray = ["123","456","789","147","258","369","159","357"]
    let won = false
    winningArray.forEach(winning=>{
        const win = winning.split("")
        // console.log(winning)
        const winFound =  win.every(check=> boxes[check-1]==turn)
       if(winFound) won = winFound
    //    console.log('winfound',winFound)
    })

    return won
}

function endGame(){
    gameOver = true
    $("#result").text(turn+" won the Game!")
}

$(".box").click(e=>{
    if(gameOver) return alert('game ended!')
    const selectedBox = e.target.id
    play(selectedBox)
    const won = checkForWin()
    console.log({won})
    if(won) endGame()
    else  changeTurn()
})  
