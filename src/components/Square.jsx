import clsx from 'clsx'

//It's each individual square that has the game board (in total 16)
export function Square ({index, children, updateBoard, isTurn}) {

    const handleClick = ()=> {
        updateBoard(index);
    }

    
    const classTurns = clsx(
        'text-textColor size-12 m-2 p-3',
        'border border-textColor rounded-xl',
        'flex justify-center items-center',
        'sm:size-15 sm:text-xl', 
        isTurn && 'bg-actualTurnColor')

    return(
        <div className={classTurns} onClick={handleClick}>
            {children}
        </div>
    )
}