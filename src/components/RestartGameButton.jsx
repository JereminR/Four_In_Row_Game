
//Button that restart the game
export function RestartGameButton({resetGame}) {
    return(
        <div className='text-textColor bg-primary p-3 mt-9 mb-7 border border-textColor rounded-xl cursor-pointer
        hover:text-primary hover:bg-buttonHoverColor hover:border-black'
        onClick={resetGame}>
            Restart game
        </div>
    )
}