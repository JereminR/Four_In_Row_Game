import {winnerValues} from './constants.js'

//Check if there is a winner
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
    return null;
}

//Check if it's draw
export const checkDraw = (boardToCheck)=>{
    return boardToCheck.every((square) => square !== null)
}