import React from 'react'
import CircularButton from '../CircularButton'
import { Carrot } from '@/components/svgs'

const Pagination = ({
    totalPage,
    currPage,
    nextPageHandler,
    prevPageHandler,
}) => {
    return (
        <div className="flex items-center gap-x-4">
            <CircularButton
                backgroundColor="white"
                border={true}
                onClick={prevPageHandler}
            >
                <Carrot className="-rotate-90 text-xl" />
                <span className="absolute bottom-0 left-0 right-0 translate-y-[100%] pt-1 mx-auto text-xs font-medium">
                    back
                </span>
            </CircularButton>

            <div className="text-base font-medium font-manrope">
                {currPage} of {totalPage}
            </div>

            <CircularButton
                backgroundColor="white"
                border={true}
                onClick={nextPageHandler}
            >
                <Carrot className="rotate-90 text-xl" />
                <span className="absolute bottom-0 left-0 right-0 translate-y-[100%] pt-1 mx-auto text-xs font-medium">
                    next
                </span>
            </CircularButton>
        </div>
    )
}

export default Pagination
