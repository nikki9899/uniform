import Image from 'next/image'
import { memo } from 'react'
import { Star } from '../svgs'

const Rating = ({ productRating }) => {
    // const { rating, review } = productRating || {};
    const rating = productRating
    const review = 6

    const ratingStar = [1, 2, 3, 4, 5]

    return (
        <div className="flex content-center items-center">
            <div className="flex flex-row w-35">
                {/* Iterate over the ratingStar array and render stars based on the rating */}
                {ratingStar.map((item, index) => (
                    <Star
                        key={item}
                        fill={index < rating ? '#E9DB15' : '#4b5563'}
                    />
                ))}
            </div>
            {/* Display the rating and review count */}
            <div className="flex-initial text-sm font-semibold ml-1">
                {rating}.0
            </div>
            <div className="flex-initial ms-5">
                <Image
                    width={24}
                    height={24}
                    src="/svgs/chatIcon.svg"
                    alt="RightArrow"
                />
            </div>
            <div className="mx-2 font-medium text-sm">{review} reviews</div>
        </div>
    )
}

export default memo(Rating)
