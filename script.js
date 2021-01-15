const cells = Array.from(document.getElementsByClassName('cell'));
const p1_score = document.getElementById("p_score");
const p2_score = document.getElementById("c_score");
const turn_count = document.getElementById("turn_count");
const result =  document.getElementById("result");
const reset = document.getElementById("reset");
const gameplay  = prompt("This is a simple game of Tic- Tac- Toe, would you like to play against a player or the PC? 1 for player, 2 for PC (ANY OTHER INPUTS WILL BE CONSIDERED A 1): ")
let turn = 0; 
let player_score = 0;
let pc_score = 0;
let emptyCells = []

function updatePlayerScore(){
    p1_score.innerHTML = player_score;
}
function updatePCscore(){
    p2_score.innerHTML = pc_score;
}
function updateTurn(){
    turn_count.innerHTML = turn;
}

function playerVSplayer(){
    cells.forEach((cell) =>{
        cell.addEventListener("click", function(){
            if(turn%2 == 0){
                if(check_availability(cell.innerHTML) == true){
                    cell.innerHTML = "x";
                    checkWinner()
                    updateTurn()
                } else {
                    return 
                }
            } else if(turn%2 != 0) {
            
                if(check_availability(cell.innerHTML) == true){
                    cell.innerHTML = "o";
                    checkWinner()
                    updateTurn()
                } else {
                    return
                }
            }
            turn++;
        })
    })
}

function check_availability(x){
    if(x != ""){
        return false
    } else if (x == "") {
        return true
    }
}

function checkWinner(){
    if(cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[0].innerHTML != "" && cells[1].innerHTML != "" && cells[2].innerHTML != ""){
        if(cells[0].innerHTML == "o"){
            player_score++;
            result.innerHTML = "Player won this last game!";
            updatePlayerScore();
            clearBoard();
            turn = 9;
        } else if(cells[0].innerHTML == "x"){
            pc_score++;
            result.innerHTML = "PC won this last game!"
            updatePCscore();
            clearBoard();
            turn = 9;
        }
    } else if(cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[0].innerHTML != "" && cells[3].innerHTML != "" && cells[6].innerHTML != ""){
        if(cells[0].innerHTML == "o"){
            player_score++;
            result.innerHTML = "Player won this last game!";
            updatePlayerScore();
            clearBoard();
            turn = 9;
        } else if(cells[0].innerHTML == "x"){
            pc_score++;
            result.innerHTML = "PC won this last game!"
            updatePCscore();
            clearBoard();
            turn = 9;
        }
    } else if(cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[0].innerHTML != "" && cells[4].innerHTML != "" && cells[8].innerHTML != ""){
        if(cells[0].innerHTML == "o"){
            player_score++;
            result.innerHTML = "Player won this last game!";
            updatePlayerScore();
            clearBoard();
            turn = 9;
        } else if(cells[0].innerHTML == "x"){
            pc_score++;
            result.innerHTML = "PC won this last game!"
            updatePCscore();
            clearBoard();
            turn = 9;
        }
    } else if(cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[2].innerHTML != "" && cells[4].innerHTML != "" && cells[6].innerHTML != ""){
        if(cells[2].innerHTML == "o"){
            player_score++;
            result.innerHTML = "Player won this last game!";
            updatePlayerScore();
            clearBoard();
            turn = 9;
        } else if(cells[2].innerHTML == "x"){
            pc_score++;
            result.innerHTML = "PC won this last game!"
            updatePCscore();
            clearBoard();
            turn = 9;
        }
    } else if(cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[2].innerHTML != "" && cells[5].innerHTML != "" && cells[8].innerHTML != ""){
        if(cells[2].innerHTML == "o"){
            player_score++;
            result.innerHTML = "Player won this last game!";
            updatePlayerScore();
            clearBoard();
            turn = 9;
        } else if(cells[2].innerHTML == "x"){
            pc_score++;
            result.innerHTML = "PC won this last game!"
            updatePCscore();
            clearBoard();
            turn = 9;
        }
    } else if(cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML && cells[6].innerHTML != "" && cells[7].innerHTML != "" && cells[8].innerHTML != ""){
        if(cells[6].innerHTML == "o"){
            player_score++;
            result.innerHTML = "Player won this last game!";
            updatePlayerScore();
            clearBoard();
            turn = 9;
        } else if(cells[6].innerHTML == "x"){
            pc_score++;
            result.innerHTML = "PC won this last game!"
            updatePCscore();
            clearBoard();
            turn = 9;
        }
    } else if(cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[3].innerHTML != "" && cells[4].innerHTML != "" && cells[5].innerHTML != ""){
        if(cells[3].innerHTML == "o"){
            player_score++;
            result.innerHTML = "Player won this last game!";
            updatePlayerScore();
            clearBoard();
            turn = 9;
        } else if(cells[3].innerHTML == "x"){
            pc_score++;
            result.innerHTML = "PC won this last game!"
            updatePCscore();
            clearBoard();
            turn = 9;
        }
    } else if(cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[1].innerHTML != "" && cells[4].innerHTML != "" && cells[7].innerHTML != ""){
        if(cells[1].innerHTML == "o"){
            player_score++;
            result.innerHTML = "Player won this last game!";
            updatePlayerScore();
            clearBoard();
            turn = 9;
        } else if(cells[1].innerHTML == "x"){
            pc_score++;
            result.innerHTML = "PC won this last game!"
            updatePCscore();
            clearBoard();
            turn = 9;
        }
    } else {
        console.log("next turn!")
    }
}

function resetBoard(){
    reset.addEventListener("click", function(){
        cells.forEach((cell) => {
            cell.innerHTML = "";
        })
        turn = 1;
        player_score = 0;
        pc_score = 0;
        updatePCscore()
        updatePlayerScore()
        updateTurn()
    })
}

function clearBoard(){
    cells.forEach((cell) => {
        cell.innerHTML = "";
    })
}


function playerVSpc(){
    cells.forEach((cell) =>{
        cell.addEventListener("click", function(){
            while(turn <= 9){
            if(turn%2 == 0){
                if(check_availability(cell.innerHTML) == true){
                    cell.innerHTML = "o";
                    console.log(cell.innerHTML)
                    turn++;
                    checkWinner()
                    updateTurn()
                } else {
                    return 
                }
            } else if(turn%2 != 0) {
                pcTurn();
                turn++;
                checkWinner()
            }
            }
        })
    })
}

function checkForEmptyCell(){
    cells.forEach((cell) =>{
        if(cell.innerHTML == "")
        emptyCells.push(cell) 
    })
}

function pcTurn(){
    console.log("hi")
    let pcChoice = Math.floor(Math.random()*9)
    available = check_availability(cells[pcChoice].innerHTML)
    if(available == true){
        cells[pcChoice].innerHTML = "x"
    } else {
        checkForEmptyCell();
        emptyCells[0].innerHTML = "x";
        console.log(emptyCells)
        emptyCells.shift()
    }
}

function decidePlayer(){
    if(gameplay == 1){
        updateTurn()
        playerVSplayer();
    } else if(gameplay == 2){
        updateTurn()
        playerVSpc()
    }
}

decidePlayer();

resetBoard()
