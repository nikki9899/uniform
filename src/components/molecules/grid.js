const Grid = ({ cardsPerRow, cardsPerRowMd, children }) => {
    return (
        <div className={`grid grid-cols-${cardsPerRow} md:grid-cols-${cardsPerRowMd} gap-4`}>
            {children}
        </div>
    )
}

export default Grid

