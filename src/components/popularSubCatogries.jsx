import React from 'react'
import popSubCatImg from '@/mockData/popSubCatImage'
import Button from './atoms/button'

function PopularSubCatogires() {
    const reverseImg = [...popSubCatImg].reverse()
    const buttonTexts = ['reflective clothing', 'safety suits', 'rubber suits']
    return (
        <div>
            <h2 className="text-gray-900 font-manrope font-medium text-4xl lowercase ">
                popular sub-categories
            </h2>
            <div className="flex gap-3 pt-8 w-full">
                {popSubCatImg.map((item, index) => (
                    <div
                        key={item.id}
                        className={`w-${
                            index >= 1 ? '4/12' : '6/12'
                        } h-96 relative`}
                    >
                        <img
                            src={item.ImgSrc}
                            className="w-full h-full  rounded"
                        />
                        <Button
                            rounded="full"
                            variant="primary"
                            addStyle={
                                item.id === 2
                                    ? 'text-black border-2 border-black absolute top-7 left-7'
                                    : 'text-white border-2 border-white absolute top-7 left-7'
                            }
                        >
                            <p style={{ fontSize: '16px' }}>
                                {buttonTexts[index]}
                            </p>
                        </Button>
                    </div>
                ))}
            </div>
            <div className="flex gap-3 pt-3 ">
                {reverseImg.map((item, index) => (
                    <div
                        key={item.id}
                        className={`w-${
                            index <= 1 ? '4/12' : '6/12'
                        } h-96 relative`}
                    >
                        <img
                            src={item.ImgSrc}
                            className="w-full h-full object-cover rounded "
                        />
                        <Button
                            rounded="full"
                            variant="primary"
                            addStyle={
                                item.id === 2
                                    ? 'text-black border-2 border-black absolute top-7 left-7'
                                    : 'text-white border-2 border-white absolute top-7 left-7'
                            }
                        >
                            <p style={{ fontSize: '16px' }}>
                                {buttonTexts[index]}
                            </p>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularSubCatogires
