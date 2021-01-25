const cells = Array.from(document.getElementsByClassName('cell'));
const p1_score = document.getElementById("p_score");
const p2_score = document.getElementById("c_score");
const turn_count = document.getElementById("turn_count");
const result =  document.getElementById("result");
const reset = document.getElementById("reset");
const gameplay  = parseInt(prompt("Would you like to play 1: against a friend, or 2: Against an AI"));
const gamestate = parseInt(prompt("Would you like to play 1: a single round, or 2: A game of 5 rounds:"));
let turn = 0; 
let rounds = 0;
let player_score = 0;
let pc_score = 0;
let emptyCells = []

function decide_vs(){
    console.log(gameplay)
    if(gameplay == 1){
        playerVSplayer()
    } else if(gameplay == 2){
        playerVSpc()
    }
}

function update_turn(){
    turn ++;
    turn_count.innerHTML = turn_count.innerHTML - (-1);
}

function playerVSplayer(){
cells.forEach((cell) => {
    cell.addEventListener('click', function(){
        if(turn%2 == 0){
            if(check_cell_availability(cell.innerHTML) == true){
            cell.innerHTML = "X"
            update_turn()
            check_for_winner()
            } else {
                console.log("cell taken");
            }
        } else if(turn%2 != 0){
            if(check_cell_availability(cell.innerHTML) == true){
                cell.innerHTML = "O"
                update_turn()
                check_for_winner()
            } else {
                console.log("cell taken");
            } 
        }
    })
  })
}

function check_cell_availability(cell){
    if(cell == ""){
        return true
    } else {
        return false
    }
}

function check_for_cells(){
    let available_cells = []   
    cells.forEach((cell) => {
        if(cell.innerHTML == ""){
            available_cells.push(cell)
        } else {
            console.log("cell unavailable")
        }
    })

    console.log(available_cells)

    if(available_cells.length > 0){
        return true;
    } else {
        return false;
    }
}

function update_scores(){
    if(turn%2 == 0){
        p2_score.innerHTML = p2_score.innerHTML - (-1);
    } else if (turn %2 != 0){
        p1_score.innerHTML = p1_score.innerHTML - (-1)
    }
}

function check_for_winner(){
    if(cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[0].innerHTML != ""){
        console.log(`${cells[0].innerHTML} wins`)
        update_scores()
        if(gamestate == 1){
            reset_state()
        } else {
            reset_board()
        }
    } else if(cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[3].innerHTML != ""){
        console.log(`${cells[3].innerHTML} wins`)
        update_scores()
        if(gamestate == 1){
            reset_state()
        } else {
            reset_board()
        }
    } else if(cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML && cells[6].innerHTML != ""){
        console.log(`${cells[6].innerHTML} wins`)
        update_scores()
        if(gamestate == 1){
            reset_state()
        } else {
            reset_board()
        }
    } else if(cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[6].innerHTML != ""){
        console.log(`${cells[6].innerHTML} wins`)
        update_scores()
        if(gamestate == 1){
            reset_state()
        } else {
            reset_board()
        }
    } else if(cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[1].innerHTML != ""){
        console.log(`${cells[1].innerHTML} wins`)
        update_scores()
        if(gamestate == 1){
            reset_state()
        } else {
            reset_board()
        }
    } else if(cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[8].innerHTML != ""){
        console.log(`${cells[8].innerHTML} wins`)
        update_scores()
        if(gamestate == 1){
            reset_state()
        } else {
            reset_board()
        }
    } else if(cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[0].innerHTML != ""){
        console.log(`${cells[0].innerHTML} wins`)
        update_scores()
        if(gamestate == 1){
            reset_state()
        } else {
            reset_board()
        }
    } else if(cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[6].innerHTML != ""){
        console.log(`${cells[6].innerHTML} wins`)
        update_scores()
        if(gamestate == 1){
            reset_state()
        } else {
            reset_board()
        }
    } else {
        console.log("winner has not been founds")
    }
}







function computer_play(){
    console.log("hi")
    play = Math.floor(Math.random() * cells.length)
    if(check_cell_availability(cells[play].innerHTML) == true){
        cells[play].innerHTML = "O"
        update_turn()
    } else if(check_cell_availability(cells[play].innerHTML) == false && turn < 9){
        computer_play();
    }
}

decide_vs()


function playerVSpc(){
    console.log("working")
    for(turn = 0; turn < 9; turn++){
        activate_cells();
    }
}


function activate_cells(){
    cells.forEach((cell) => {
        cell.addEventListener('click', function(){
            if(turn %2 == 0){
                cell.innerHTML = "X"
                update_turn();
            } else {
                computer_play();
            }
        })
    })
}

function reset_state(){
    cells.forEach((cell) =>{
        cell.innerHTML = "";
    })

    turn = 0
    turn_count.innerHTML = 0;
    p1_score.innerHTML = 0;
    p2_score.innerHTML = 0;
}

function reset_board(){
    cells.forEach((cell) => {
        cell.innerHTML = "";
    })
    turn = 0
    turn_count.innerHTML = 0;
}

reset.addEventListener('click', reset_state())