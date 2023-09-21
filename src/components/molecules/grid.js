const Grid = ({cardsPerRow,children})=>{
    return (
        <div className={`w-full grid grid-cols-${cardsPerRow} gap-${cardsPerRow}`}>
            {children}
        </div>
    );
}

export default Grid;