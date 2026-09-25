import {RestartGameButton} from './RestartGameButton.jsx'

//Shows a mini board where it's the winner game
export function WinnerScreen({winner, resetGame}) {
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
                <button className='winnerCloserButton'> X </button>
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
            </div>
            
        </section>
        )
    }
    
}