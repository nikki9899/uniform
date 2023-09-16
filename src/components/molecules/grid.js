const Grid = ({cardsPerRow,children})=>{
    return (
        <div className={`w-full h-full grid grid-cols-${cardsPerRow} gap-${cardsPerRow}`}>
            {children}
        </div>
    );
}

export default Grid;