const board = document.querySelector("#main-board");
const header = document.querySelector("#header")
const player1 = 'X';
const player2 = 'O';
const cells = Array.from(document.querySelectorAll("#cell"));
const winCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let currentPlayer = player1;

 
function checkWinner(arr, current) { 
    //Loops through each array in the multidimensional array  
    arr.forEach(function (subArr) { 
        var counter = 0;
        // Loops through each element inside the individual array
        subArr.forEach(function(i) { 
            if(cells[i].innerHTML == current){
                counter++
            }if (counter == 3){
                header.textContent = currentPlayer + ' Wins!!';
                board.style.background = 'red';
                setTimeout(() => window.location.reload(), 3000)  
            }
         })
     })    
    }

function move(e){
    if (e.target.innerText == ''){
        e.target.textContent = currentPlayer;
        // ? and : is like an if statement called a "ternary operator"
         checkWinner(winCombos, currentPlayer);
        currentPlayer = (currentPlayer === player1)?player2:player1;
    }
}
board.addEventListener('click', move);




