var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]


var condition = 0
var boxes = document.getElementsByClassName("box")

function addText(clickedBox) {
    var boxes = document.getElementById(clickedBox)
    
    var currentChar

    if (condition % 2 === 0 ) {
        currentChar = document.createTextNode('X')

        if (boxes.innerHTML !== 'X' && boxes.innerHTML !== 'O') {
            boxes.appendChild(currentChar)
        } else {}
        
    } else {
        currentChar = document.createTextNode('O')

        if (boxes.innerHTML !== 'X' && boxes.innerHTML !== 'O') {
            boxes.appendChild(currentChar)
        } else {}
        
    }
    condition++
    checkBoard()
}



 function checkBoard() {
        checkHorizontalX()
        checkVerticalX()
        checkDiagonalX()

        checkHorizontalO()
        checkVerticalO()
        checkDiagonalO()
    }
    
    function checkHorizontalX () {
        if (boxes[0].innerHTML === 'X' && boxes[1].innerHTML=== 'X' && boxes[2].innerHTML === 'X') {
            return redirect()
        } else if (boxes[3].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[5].innerHTML === 'X') {
            return redirect()
        } else if (boxes[6].innerHTML === 'X' && boxes[7].innerHTML === 'X' && boxes[8].innerHTML === 'X') {
            return redirect()
        } else {}
    } 
    
    function checkVerticalX () {
        if (boxes[0].innerHTML === 'X' && boxes[3].innerHTML === 'X' && boxes[6].innerHTML === 'X') {
            return redirect()
        } else if (boxes[1].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[7].innerHTML === 'X') {
            return redirect()
        } else if (boxes[2].innerHTML === 'X' && boxes[5].innerHTML === 'X' && boxes[8].innerHTML === 'X') {
            return redirect()
        } else {}
    }
    
    function checkDiagonalX () {
        if (boxes[0].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[8].innerHTML === 'X') {
            return redirect()
        } else if (boxes[2].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[6].innerHTML === 'X') {
            return redirect()
        } else {}
    }
    

    function checkHorizontalO () {
        if (boxes[0].innerHTML === 'O' && boxes[1].innerHTML=== 'O' && boxes[2].innerHTML === 'O') {
            return redirect()
        } else if (boxes[3].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[5].innerHTML === 'O') {
            return redirect()
        } else if (boxes[6].innerHTML === 'O' && boxes[7].innerHTML === 'O' && boxes[8].innerHTML === 'O') {
            return redirect()
        } else {}
    } 
    
    function checkVerticalO () {
        if (boxes[0].innerHTML === 'O' && boxes[3].innerHTML === 'O' && boxes[6].innerHTML === 'O') {
            return redirect()
        } else if (boxes[1].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[7].innerHTML === 'O') {
            return redirect()
        } else if (boxes[2].innerHTML === 'O' && boxes[5].innerHTML === 'O' && boxes[8].innerHTML === 'O') {
            return redirect()
        } else {}
    }
    
    function checkDiagonalO () {
        if (boxes[0].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[8].innerHTML === 'O') {
            return redirect()
        } else if (boxes[2].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[6].innerHTML === 'O') {
            return redirect()
        } else {}
    }


function redirect() {
    window.location.assign("file:///Users/berniceflavia/Documents/Hactiv8/Game-FinalProject/Game_Tic%20Tac%20Toe/end.html")
}

document.getElementById("myButton").onclick = function () {
    location.href = "index.html";
}
    