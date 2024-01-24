const Grid = ({cardsPerRow, cardsPerRowMd, children})=>{
    return (
        <div className={`w-full grid grid-cols-${cardsPerRow} md:grid-cols-${cardsPerRowMd} gap-${cardsPerRow}`}>
            {children}
        </div>
    );
}

export default Grid;