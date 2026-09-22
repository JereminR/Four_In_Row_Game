export function SquareTurns ({children, isTurn}) {
    const classTurns = `square ${isTurn ? 'isTurn':''}`;
    return(
        <div className = {classTurns}> {children} </div>   
    )
}