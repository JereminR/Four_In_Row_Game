import {RestartGameButton} from './RestartGameButton.jsx'
import {useState, useEffect} from 'react'

//Shows a mini board where it's the winner game
export function WinnerScreen({winner, resetGame}) {
    const [showModal,setShowModal] = useState(true)

    //When "winner" changes (restarting the game), the WinnerModal will be able to be shown
    useEffect(()=>{
        setShowModal(true)
    }, [winner])

    //If "showModal" is false (caused by the "setShowModal" in the winnerCloserButton), the WinnerModal will be closed (won't be able to be shown)
    if (!showModal) return null;

    if (winner !== null && winner !== false) {
        return(
        <section className='winnerBoardModal'>
            <div className='winnerBoard'>
                <span> Winner: </span>
                <div className='square'>
                    {
                        winner
                    }
                </div>
                <RestartGameButton resetGame={resetGame}></RestartGameButton>
                <button className='winnerCloserButton' onClick={()=>setShowModal(false)} title='Close'> X </button>
            </div>
        </section>
        )
    }

    else if (winner === false) {
        return(
        <section className='winnerBoardModal'>
            <div className='winnerBoard'>
                <span> Draw </span>
                <RestartGameButton resetGame={resetGame}></RestartGameButton>
                <button className='winnerCloserButton' onClick={()=>setShowModal(false)} title='Close'> X</button>
            </div>
            
        </section>
        )
    }
    
}