import {Square} from './Square.jsx'

export function SquareTurns ({children, isTurn}) {
    const classTurns = `square ${isTurn ? 'isTurn':''}`;
    return(
        <Square> {children} </Square>
    )
    //<div className = {classTurns}> {children} </div>
}