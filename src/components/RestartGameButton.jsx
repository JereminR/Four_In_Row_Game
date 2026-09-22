
//Button that restart the game
export function RestartGameButton({resetGame}) {
    return(
        <div className='restartGameButton' onClick={resetGame}>
            Restart game
        </div>
    )
}