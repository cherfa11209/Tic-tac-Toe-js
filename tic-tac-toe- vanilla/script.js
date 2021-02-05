const cells = Array.from(document.getElementsByClassName('cell'));
const btn = document.getElementsByClassName('reset')[0];
const results = document.getElementsByClassName('results')[0];
const container = document.getElementsByClassName('container')[0];
const board = document.getElementsByClassName('board')[0];
let turn = 0;


cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if(available(cell.innerHTML) == true){
            if(turn%2 == 0){
                cell.innerHTML = "X";
                turn++;
                check_results()
                computerplay(check_available_cells());
                check_results()
            }
        }
    })
})

available = (cell) => {
    if (cell == ""){
        return true
    }
    else {
        return false
    }
}

check_available_cells = () => {
    let pc_choices = []
    cells.forEach((cell) => {
        if(cell.innerHTML == ""){
            pc_choices.push(cell)
        }
        else {
            console.log(`${cell} unavailable`)
        }
    })
    return pc_choices
}

computerplay = (array) => {
    let guess = Math.floor(Math.random() * array.length);
    
    if(cells[4].innerHTML == ""){
        cells[4].innerHTML = "O"
        turn++
    } 

    else if(computer_can_win() == true){
        console.log("conputer wins haha")
        turn++;
    }

    
    else if(computer_danger() == true){
        console.log("conputer danger working")
        computer_protect()
        turn++;
    }

    else {
        array[guess].innerHTML = "O"
        turn++;
    }
} 



check_results = () => {
    let winner = [];

    let winning_combinations = [
        [cells[0].innerHTML, cells[1].innerHTML, cells[2].innerHTML],
        [cells[3].innerHTML, cells[4].innerHTML, cells[5].innerHTML],
        [cells[6].innerHTML, cells[7].innerHTML, cells[8].innerHTML],
        [cells[0].innerHTML, cells[3].innerHTML, cells[6].innerHTML],
        [cells[2].innerHTML, cells[5].innerHTML, cells[8].innerHTML],
        [cells[1].innerHTML, cells[4].innerHTML, cells[7].innerHTML],
        [cells[0].innerHTML, cells[4].innerHTML, cells[8].innerHTML],
        [cells[2].innerHTML, cells[4].innerHTML, cells[6].innerHTML],
    ]

    winning_combinations.forEach((combination) => {
        if(combination[0] == combination[1] && combination[1] == combination[2] && combination[0] != ""){
            winner.push(combination[0])
        }
        else {
            console.log('....')
        }
    })

    if(winner.length > 0){
        console.log('winner found')
        container.classList.add('active')
        board.classList.remove('board')
        const announce = document.createElement('h1')
        announce.innerHTML = `player ${winner[0]} wins`
        announce.classList.add('announcement');
        const reset = document.createElement('button');
        reset.innerHTML = "Click to play again"
        reset.classList.add('reset_btn');
        results.append(announce);
        results.append(reset);
        reset.addEventListener('click', () => {
            location.reload()
        })
        reset_board()
    }
    else if(turn == 9){
        console.log('winner found')
        container.classList.add('active')
        board.classList.remove('board')
        const announce = document.createElement('h1')
        announce.innerHTML = `Oh no! it's a tie!`
        announce.classList.add('announcement');
        const reset = document.createElement('button');
        reset.innerHTML = "Click to play again"
        reset.classList.add('reset_btn');
        results.append(announce);
        results.append(reset);
        reset.addEventListener('click', () => {
            location.reload()
        })
    }

    else {
        console.log('no winner yet')
    }
}

reset_board = () => {
    cells.forEach((cell) => {
        cell.innerHTML = ""
    })
}

computer_danger = () => {
    if(cells[0].innerHTML == "X" && cells[2].innerHTML == "X" && cells[1].innerHTML == ""){
        return true
    }
    else if(cells[0].innerHTML == "X" && cells[6].innerHTML == "X" && cells[3].innerHTML == ""){
        return true
    }
    else if(cells[2].innerHTML == "X" && cells[8].innerHTML == "X" && cells[5].innerHTML == ""){
        return true
    }
    else if(cells[6].innerHTML == "X" && cells[8].innerHTML == "X" && cells[7].innerHTML == ""){
        return true
    }
    else{
        return false;
    }
}

computer_protect = () => {
    if(cells[0].innerHTML == "X" && cells[2].innerHTML == "X" && cells[1].innerHTML == ""){
        cells[1].innerHTML = "O"
    }
    else if(cells[0].innerHTML == "X" && cells[6].innerHTML == "X" && cells[3].innerHTML == ""){
        cells[3].innerHTML = "O"
    }
    else if(cells[2].innerHTML == "X" && cells[8].innerHTML == "X" && cells[5].innerHTML == ""){
        cells[5].innerHTML = "O"
    }
    else if(cells[6].innerHTML == "X" && cells[8].innerHTML == "X" && cells[7].innerHTML == ""){
        cells[7].innerHTML = "O"
    }
}

computer_can_win = () => {
    if(cells[0].innerHTML == "O" && cells[2].innerHTML == "O" && cells[1].innerHTML == ""){
        cells[1].innerHTML = "O"
        return true
    }
    else if(cells[0].innerHTML == "O" && cells[6].innerHTML == "O" && cells[3].innerHTML == ""){
        cells[3].innerHTML = "O"
        return true
    }
    else if(cells[2].innerHTML == "O" && cells[8].innerHTML == "O" && cells[5].innerHTML == ""){
        cells[5].innerHTML = "O"
        return true
    }
    else if(cells[6].innerHTML == "O" && cells[8].innerHTML == "O" && cells[7].innerHTML == ""){
        cells[7].innerHTML = "O"
        return true
    }

    //
    else if(cells[0].innerHTML == "O" && cells[1].innerHTML == "O" && cells[2].innerHTML == ""){
        cells[2].innerHTML = "O"
        return true
    }
    else if(cells[3].innerHTML == "O" && cells[4].innerHTML == "O" && cells[5].innerHTML == ""){
        cells[5].innerHTML = "O"
        return true
    }
    else if(cells[6].innerHTML == "O" && cells[7].innerHTML == "O" && cells[8].innerHTML == ""){
        cells[8].innerHTML = "O"
        return true
    }
    else if(cells[6].innerHTML == "O" && cells[3].innerHTML == "O" && cells[0].innerHTML == ""){
        cells[0].innerHTML = "O"
        return true
    }
    else if(cells[7].innerHTML == "O" && cells[4].innerHTML == "O" && cells[1].innerHTML == ""){
        cells[1].innerHTML = "O"
        return true
    }
    else if(cells[8].innerHTML == "O" && cells[5].innerHTML == "O" && cells[2].innerHTML == ""){
        cells[2].innerHTML = "O"
        return true
    }
    else if(cells[2].innerHTML == "O" && cells[5].innerHTML == "O" && cells[8].innerHTML == ""){
        cells[8].innerHTML = "O"
        return true
    }
    else if(cells[0].innerHTML == "O" && cells[3].innerHTML == "O" && cells[6].innerHTML == ""){
        cells[6].innerHTML = "O"
        return true
    }
    else if(cells[1].innerHTML == "O" && cells[4].innerHTML == "O" && cells[7].innerHTML == ""){
        cells[7].innerHTML = "O"
        return true
    }

    //

    else if(cells[1].innerHTML == "O" && cells[2].innerHTML == "O" && cells[0].innerHTML == ""){
        cells[0].innerHTML = "O"
        return true
    }
    else if(cells[4].innerHTML == "O" && cells[5].innerHTML == "O" && cells[3].innerHTML == ""){
        cells[3].innerHTML = "O"
        return true
    }
    else if(cells[7].innerHTML == "O" && cells[8].innerHTML == "O" && cells[6].innerHTML == ""){
        cells[6].innerHTML = "O"
        return true
    }
    else if(cells[3].innerHTML == "O" && cells[6].innerHTML == "O" && cells[0].innerHTML == ""){
        cells[0].innerHTML = "O"
        return true
    }
    else if(cells[4].innerHTML == "O" && cells[2].innerHTML == "O" && cells[6].innerHTML == ""){
        cells[6].innerHTML = "O"
        return true
    }
    else if(cells[0].innerHTML == "O" && cells[4].innerHTML == "O" && cells[8].innerHTML == ""){
        cells[8].innerHTML = "O"
        return true
    }
    else if(cells[4].innerHTML == "O" && cells[8].innerHTML == "O" && cells[0].innerHTML == ""){
        cells[0].innerHTML = "O"
        return true
    }
    else if(cells[6].innerHTML == "O" && cells[4].innerHTML == "O" && cells[2].innerHTML == ""){
        cells[2].innerHTML = "O"
        return true
    }
    //
    else{
        return false;
    }
}