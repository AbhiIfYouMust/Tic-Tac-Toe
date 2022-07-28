// Parent array that have 3 arrays with O or X 
let parentArray = [[null,null,null],
                     [null,null,null],
                     [null,null,null]];

let turn = 'X';

// Toggle function
const toggle = () => turn = turn === 'X' ? 'O': 'X';

const gameBoard = (() => {
    function displayBoard() {
        // Tile array which begins from tile on grid 1x1 and goes 1x2, 1x3, 2x1 and so on
        const tiles = Array.from(document.querySelectorAll('.tile'));

        for (let i = 0; i < parentArray.length; i++) {
            for (let j = 0; j < parentArray[i].length; j++) {
                tiles[0].textContent = parentArray[i][j];

                // Removes populated tile from tiles array so the 0th element is the required tile
                tiles.shift();
            };
        };
        
        document.querySelector("#turn").textContent = `Turn: ${turn}`;
    };
    return {displayBoard};
  })();

// Checks if it's a draw or win
const gameStatus = () => {
    if (parentArray[0][0] === 'X' && parentArray[0][1] === 'X' && parentArray[0][2] === 'X') {
        return 'X wins';
    } else if (parentArray[1][0] === 'X' && parentArray[1][1] === 'X' && parentArray[1][2] === 'X') {
        return 'X wins';
    } else if (parentArray[2][0] === 'X' && parentArray[2][1] === 'X' && parentArray[2][2] === 'X') {
        return 'X wins';
    } else if (parentArray[0][0] === 'X' && parentArray[1][0] === 'X' && parentArray[2][0] === 'X') {
        return 'X wins';
    } else if (parentArray[0][1] === 'X' && parentArray[1][1] === 'X' && parentArray[2][1] === 'X') {
        return 'X wins'
    } else if (parentArray[0][2] === 'X' && parentArray[1][2] === 'X' && parentArray[2][2] === 'X') {
        return 'X wins'
    } else if (parentArray[0][0] === 'X' && parentArray[1][1] === 'X' && parentArray[2][2] === 'X') {
        return 'X wins'
    } else if (parentArray[0][2] === 'X' && parentArray[1][1] === 'X' && parentArray[2][0] === 'X') {
        return 'X wins'
    } else if (parentArray[0][0] === 'O' && parentArray[0][1] === 'O' && parentArray[0][2] === 'O') {
        return 'O wins';
    } else if (parentArray[1][0] === 'O' && parentArray[1][1] === 'O' && parentArray[1][2] === 'O') {
        return 'O wins';
    } else if (parentArray[2][0] === 'O' && parentArray[2][1] === 'O' && parentArray[2][2] === 'O') {
        return 'O wins';
    } else if (parentArray[0][0] === 'O' && parentArray[1][0] === 'O' && parentArray[2][0] === 'O') {
        return 'O wins';
    } else if (parentArray[0][1] === 'O' && parentArray[1][1] === 'O' && parentArray[2][1] === 'O') {
        return 'O wins';
    } else if (parentArray[0][2] === 'O' && parentArray[1][2] === 'O' && parentArray[2][2] === 'O') {
        return 'O wins';
    } else if (parentArray[0][0] === 'O' && parentArray[1][1] === 'O' && parentArray[2][2] === 'O') {
        return 'O wins';
    } else if (parentArray[0][2] === 'O' && parentArray[1][1] === 'O' && parentArray[2][0] === 'O') {
        return 'O wins';
    } else if (!parentArray[0].includes(null) && !parentArray[1].includes(null) && !parentArray[2].includes(null)) {
        return 'Tie';
    }
}

// Updates 'X' or 'Y' on DOM on clicking divs with class tile
document.addEventListener("click", function(event) {

    // Only proceeds if game is incomplete
    if (gameStatus() === undefined) {
        if ( event.target.className === 'tile') {
            let tileNumber = (event.target.id).slice(2);

            switch (tileNumber) {
                case "1":
                    if (parentArray[0][0] === null) { //Checks if the tile is empty or not
                        parentArray[0][0] = turn;
                        toggle(); // toggles on completing a turn
                    }
                    break;
                case "2":
                    if (parentArray[0][1] === null) {
                        parentArray[0][1] = turn;
                        toggle();
                    }
                    break;
                case "3":
                    if (parentArray[0][2] === null) {
                        parentArray[0][2] = turn;
                        toggle();
                    }
                    break;
                case "4":
                    if (parentArray[1][0] === null) {
                        parentArray[1][0] = turn;
                        toggle();
                    }
                    break;
                case "5":
                    if (parentArray[1][1] === null) {
                        parentArray[1][1] = turn;
                        toggle();
                    }
                    break;
                case "6":
                    if (parentArray[1][2] === null) {
                        parentArray[1][2] = turn;
                        toggle();
                    }
                    break;
                case "7":
                    if (parentArray[2][0] === null) {
                        parentArray[2][0] = turn;
                        toggle();
                    }
                    break;
                case "8":
                    if (parentArray[2][1] === null) {
                        parentArray[2][1] = turn;
                        toggle();
                    }
                    break;
                case "9":
                    if (parentArray[2][2] === null) {
                        parentArray[2][2] = turn;
                        toggle();
                    }
                    break;
            };
        
        gameBoard.displayBoard();
        document.querySelector("#declaration").textContent = gameStatus();
        };
    };
});

// Clears grid and winner text while setting turn to "X" on clicking restart button, the only button on index.html
document.querySelector("button").addEventListener("click", () => {
    parentArray.length = 0;

    parentArray = [[null,null,null],
    [null,null,null],
    [null,null,null]];

    document.querySelector("#declaration").textContent = '';

    turn = 'X';

    gameBoard.displayBoard();
});

