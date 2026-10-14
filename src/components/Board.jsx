import {Square} from './Square.jsx'

//Contains the game board where you can play
export function Board ({board, turn, turns, updateBoard}) {
    //const classTurns = `square ${isTurn ? 'isTurn':''}`

    return(
    <section className>
        <div className='grid grid-cols-4'>
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
    
        <div className='flex mt-3 justify-center'> 
            <Square isTurn={turn === turns.X}> {turns.X}</Square>
            <Square isTurn={turn === turns.O}> {turns.O}</Square>
        </div>
    </section>
    )
    
}