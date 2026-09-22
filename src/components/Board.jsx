import {Square} from './Square.jsx'
import {SquareTurns} from './SquareTurns.jsx'

//Contains the game board where you can play
export function Board ({board, turn, turns, updateBoard}) {
    //const classTurns = `square ${isTurn ? 'isTurn':''}`

    return(
    <section className='game'>
        <div className='gameBoard'>
            {
                board.map((indiBoard, index)=>{
                return(
                <Square key={index} index={index} updateBoard={updateBoard}>
                    {indiBoard}
                </Square>
                )
                })
            }
        </div>
    
        <div className='gameTurns'> 
            <SquareTurns isTurn={turn === turns.X}> {turns.X}</SquareTurns>
            <SquareTurns isTurn={turn === turns.O}> {turns.O}</SquareTurns>
        </div>
    </section>
    )
    
}