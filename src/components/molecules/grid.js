const Grid = ({cardsPerRow, cardsPerRowLg, children})=>{
    return (
        <div className={`w-full grid grid-cols-${cardsPerRow} md:grid-cols-${cardsPerRowLg} gap-${cardsPerRow}`}>
            {children}
        </div>
    );
}

export default Grid;