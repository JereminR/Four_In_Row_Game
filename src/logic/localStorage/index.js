//Save the board, turn and winner from the game
export const saveLocalStorageGame = (newBoard, newTurn, newWinner)=>  {
    window.localStorage.setItem('boardStorage', JSON.stringify(newBoard));
    window.localStorage.setItem('turnStorage', JSON.stringify(newTurn));
    window.localStorage.setItem('winnerStorage', JSON.stringify(newWinner));
}

//Delete board, turn and winner from the game
export const deleteLocalStorageGame = ()=>{
    window.localStorage.removeItem('boardStorage');
    window.localStorage.removeItem('turnStorage');
    window.localStorage.removeItem('winnerStorage');
}