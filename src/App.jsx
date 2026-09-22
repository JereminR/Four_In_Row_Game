import { useState } from 'react'
import './App.css'
import {Board} from './components/Board.jsx'
import {turns} from './logic/constants.js'
import {checkWinner} from './logic/boardResults.js'
import {checkDraw} from './logic/boardResults.js'
import {WinnerScreen} from './components/WinnerScreen.jsx'
import {RestartGameButton} from './components/RestartGameButton.jsx'
import {saveLocalStorageGame, deleteLocalStorageGame} from './logic/localStorage/index.js'

function App() {

  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('boardStorage')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(16).fill(null);
  })
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turnStorage')
    return turnFromStorage ? JSON.parse(turnFromStorage) : turns.X;
  })
  const [winner, setWinner] = useState(()=>{
    const winnerFromStorage = window.localStorage.getItem('winnerStorage')
    return winnerFromStorage ? JSON.parse(winnerFromStorage) : null;
  })

  //Updates the game board when you place a token
  const updateBoard = (index)=>{
    if (board[index] || winner) return

    //Update board
    const newBoard = [...board]
    newBoard[index] = turn;
    setBoard(newBoard);
   
    //Change turn
    const newTurn = (turn === turns.X ? turns.O : turns.X)
    setTurn(newTurn);

    //Set winner or draw
    const newWinner = checkWinner(newBoard)
    if (newWinner) setWinner(newWinner)
    else if (checkDraw(newBoard)) setWinner(false)

    //Save board, turn and winner of the game
    saveLocalStorageGame(newBoard, newTurn, newWinner);
  }

  //Reset the game to its original value (in blank), erasing the local storage data
  const resetGame = ()=>{
    setBoard(Array(16).fill(null))
    setTurn(turns.X)
    setWinner(null)

    deleteLocalStorageGame();
  }

  return (
    <>
      <main className = 'main'>
        <h1 className='mainHeader'> 4 in Row </h1>
        <span className='gameInstruction'> The first player filling 4 lines wins </span>
        <RestartGameButton resetGame={resetGame}></RestartGameButton>
        <Board board={board} turn={turn} turns={turns} updateBoard={updateBoard}></Board>
        <WinnerScreen winner={winner} resetGame = {resetGame}></WinnerScreen>
      </main>
      
    </>
  )
}

export default App
