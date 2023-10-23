import React from 'react'
import Button from './button'
import Carrot from '@/components/atoms/Icons/Carrot'

const PrevButton = ({ onClick }) => {
    return (
        <Button caption={'back'} onClick={onClick}>
            <Carrot className="-rotate-90 text-xl" />
        </Button>
    )
}

const NextButton = ({ onClick }) => {
    return (
        <Button caption={'next'} onClick={onClick}>
            <Carrot className="rotate-90 text-xl" />
        </Button>
    )
}

const Pagination = ({
    totalPage,
    currPage,
    nextPageHandler,
    prevPageHandler,
    CustomPrevButton = null,
    CustomNextButton = null,
}) => {
    return (
        <div className="flex items-center gap-x-4">
            {CustomPrevButton === null ? (
                <PrevButton onClick={prevPageHandler} />
            ) : (
                <CustomPrevButton onClick={prevPageHandler} />
            )}

            <div className="text-base font-medium font-manrope">
                {currPage} of {totalPage}
            </div>

            {CustomNextButton === null ? (
                <NextButton onClick={nextPageHandler} />
            ) : (
                <CustomNextButton onClick={nextPageHandler} />
            )}
        </div>
    )
}

export default Pagination
