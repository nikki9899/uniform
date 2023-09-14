import { memo } from 'react'
import { ChatIcon } from '@svgs/index'
import { Star } from '@svgs/index'

const Rating = (props) => {
    let { rating = 0, review = 0 } = props?.productRating
    let ratingStar = []

    for (let i = 0; i < 5; i++) {
        let color = i < rating ? '#E9DB15' : '#4b5563'
        ratingStar.push({ color })
    }

    return (
        <div className="flex content-center items-center">
            <div className="flex flex-row w-35 mx-2">
                {ratingStar.map(({ color }, index) => {
                    return <Star key={index} fill={color} />
                })}
            </div>
            <div className="flex-initial text-sm font-semibold">{rating}</div>
            <div className="flex-initial  ms-5">
                <ChatIcon />
            </div>
            <div className="flex-initial mx-2 font-medium text-xs">
                {review} reviews
            </div>
        </div>
    )
}

export default memo(Rating)
