import {RestartGameButton} from './RestartGameButton.jsx'
import {useState, useEffect} from 'react'
import {Square} from './Square.jsx'

//Shows a mini board where it's the winner game
export function WinnerScreen({winner, resetGame}) {
    const [showModal,setShowModal] = useState(true)

    //When "winner" changes (restarting the game), the WinnerModal will be able to be shown
    useEffect(()=>{
        setShowModal(true)
    }, [winner])

    //If "showModal" is false (caused by the "setShowModal" in the winnerCloserButton), the WinnerModal will be closed (won't be able to be shown)
    if (!showModal) return null;

    //When "winner" is null, there isn't nor winner nor draw (the game must continue and the "WinnerScreen" must not appear)
    //When "winner" is false, it's draw (the "WinnerScreen" must appear showing it's draw)
    //When "winner" is different of "null" or "false", there's a winner: "X" or "O" (the "WinnerScreen" must appear showing there's a winner and who)
    
    const isDraw = winner === false;

    if (winner !== null) {
        return(
            <section className='fixed top-0 left-0 w-full h-full
             backdrop-blur-xs bg-winnerScreenColor z-100
             flex justify-center items-center' >
                <div className='text-textColor w-fit h-fit m-12 p-12 border border-textColor rounded-xl justify-items-center relative'>
                    <span>
                        {isDraw ? 'Draw:' : 'Winner:'}
                    </span>
                    
                    {!isDraw && <Square> {winner} </Square>}
                    
                    <RestartGameButton resetGame={resetGame}></RestartGameButton>
                    
                    <button className='text-xs text-textColor bg-primary border border-textColor w-6 h-6 rounded-full
                    cursor-pointer absolute -top-2.5 -right-2.5 hover:text-primary hover:bg-textColor hover:border-primary transition-transform' 
                    onClick={()=>setShowModal(false)} title='Close'> X </button>
                </div>
            </section>
        )
    }
}