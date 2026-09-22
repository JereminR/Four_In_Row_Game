
//It's each individual square that has the game board (in total 16)
export function Square ({index, children, updateBoard}) {

    const handleClick = ()=> {
        updateBoard(index);
    }

    return(
        <div className='square' onClick={handleClick}>
            {children}
        </div>
    )
}