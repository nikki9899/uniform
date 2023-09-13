const Grid = (cardsPerRow,children)=>{
    return (
        <div className={`grid grid-cols-${cardsPerRow} gap-${cardPerRow}`}>
            {children}
        </div>
    )
}
export default Grid;
