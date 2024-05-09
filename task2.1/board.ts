const createChessBoard = (size: number): HTMLDivElement => {
  const boardContainer: HTMLDivElement = document.createElement('div');
  boardContainer.classList.add('chess-board-container');

  for(let i: number = 0; i < size; i++){
      const rowContainer: HTMLDivElement = document.createElement('div');
      rowContainer.classList.add('board-row');

      for(let j: number = 0; j < size; j++){
          const square: HTMLDivElement = document.createElement('div');
          square.classList.add('square');

          if((i+j) % 2 === 0){
              square.classList.add('white');
          } else{
              square.classList.add('black');
          }

          rowContainer.appendChild(square);
      }
      boardContainer.appendChild(rowContainer);
  }
  return boardContainer;
}

const chessBoardSize: number = 8; 
const chessBoard: HTMLDivElement = createChessBoard(chessBoardSize);
document.body.appendChild(chessBoard);