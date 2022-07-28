//parent array that have 3 arrays with O or X 
const parentArray = [['X',null,'X'],
                     ['O','O','O'],
                     ['X',null,'O']];

let turn = 'X';

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
    };

    return {displayBoard};
  })();

gameBoard.displayBoard();



