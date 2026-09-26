import {winnerValues} from './constants.js'

//Check if it's draw (to be used in the next constant "checkWinner")
export const checkDraw = (boardToCheck)=>{
    return boardToCheck.every((square) => square !== null)
}

//Check if there is a winner, draw or anything yet
export const checkWinner = (boardToCheck)=>{
    for (const value of winnerValues) {
        const [a, b, c, d] = value;
        if (boardToCheck[a] &&
            boardToCheck[a]===boardToCheck[b] &&
            boardToCheck[a]===boardToCheck[c] &&
            boardToCheck[a]===boardToCheck[d]
        ) {
            return boardToCheck[a];
        }
    }

    if (checkDraw(boardToCheck)) {
        return false;
    }

    return null;
}

