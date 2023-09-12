const Grid = (cardPerRow,children)=>{
    return (
        <div className={`grid grid-cols-${cardPerRow} gap-${cardPerRow}`}>
            {children}
        </div>
    )
}
export default Grid;
