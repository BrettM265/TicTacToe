let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');

let p1Score = document.getElementById("p1-score");
let p2Score = document.getElementById("p2-score");

p1 = 0;
p2 = 0;

let aboveBoard = document.getElementById('board-head');

let box = document.getElementsByClassName("box");

let playerTurn = 0;

let restart = document.getElementById("board-footer");

    // Player Turn

    for(let i = 0; i <= 8; i++){
        box[i].onclick = function flip(){
        playerTurn++
        if(aboveBoard.innerHTML === "Player X Go!" && this.innerHTML === ""){
            this.innerHTML = "X";
            aboveBoard.innerHTML = "Player O Go!";
            winnerCheck()
        }
        else if(aboveBoard.innerHTML === "Player O Go!" && this.innerHTML === ""){
            this.innerHTML = "O";
            aboveBoard.innerHTML = "Player X Go!";
            winnerCheck()
        }
    }
    }
    
    // Check if there's a winner

function winnerCheck(){
    if (box1.innerHTML !== "" && box1.innerHTML == box2.innerHTML && box1.innerHTML == box3.innerHTML){
        winnerChanges(box1,box2,box3)
    }
    if(box1.innerHTML !== "" && box1.innerHTML == box4.innerHTML && box1.innerHTML == box7.innerHTML){
        winnerChanges(box1,box4,box7)
    }
    if(box1.innerHTML !== "" && box1.innerHTML == box5.innerHTML && box1.innerHTML == box9.innerHTML){
        winnerChanges(box1,box5,box9)
    }
    if(box4.innerHTML !== "" && box4.innerHTML == box5.innerHTML && box4.innerHTML == box6.innerHTML){
        winnerChanges(box4,box5,box6)
    }
    if(box7.innerHTML !== "" && box7.innerHTML == box8.innerHTML && box7.innerHTML == box9.innerHTML){
        winnerChanges(box7,box8,box9)
    }
    if(box2.innerHTML !== "" && box2.innerHTML == box5.innerHTML && box2.innerHTML == box8.innerHTML){
        winnerChanges(box2,box5,box8)
    }
    if(box3.innerHTML !== "" && box3.innerHTML == box6.innerHTML && box3.innerHTML == box9.innerHTML){
        winnerChanges(box3,box6,box9)
    }
    if(box7.innerHTML !== "" && box7.innerHTML == box5.innerHTML && box7.innerHTML == box3.innerHTML){
        winnerChanges(box7,box5,box3)
    }
}

    // if there's a winner do this

    function winnerChanges(W1,W2,W3){
        W1.classList.add("winner");
        W2.classList.add("winner");
        W3.classList.add("winner");
        if(W1.innerHTML == "X"){
            aboveBoard.innerHTML = "Player X Wins!";
            p1++
            p1Score.innerHTML = p1
        }
        if(W1.innerHTML == "O"){
            aboveBoard.innerHTML = "Player O Wins!";
            p2++
            p2Score.innerHTML = p2
        } 
    }
    

// restart function
restart.addEventListener('click', replay)
function replay(){
    for(i = 0; i<=8; i++){
        box[i].innerHTML = ""
        box[i].classList.remove("winner");
    }
    if(p1 <= p2){
        aboveBoard.innerHTML = "Player X Go!";
    }else{
        aboveBoard.innerHTML = "Player O Go!";
    }
}
