import {RestartGameButton} from './RestartGameButton.jsx'

//Shows a mini board where it's the winner game
export function WinnerScreen({winner, resetGame}) {
    if (winner !== null && winner !== false) {
        return(
        <section className='winnerBoard'>
            <span> Winner: </span>
            <div className='square'>
                {
                    winner
                }
            </div>
            <RestartGameButton resetGame={resetGame}></RestartGameButton>
        </section>
        )
    }
    else if (winner === false) {
        return(
        <section className='winnerBoard'>
            <span> Draw </span>
            <RestartGameButton resetGame={resetGame}></RestartGameButton>
        </section>
        )
    }
    
}