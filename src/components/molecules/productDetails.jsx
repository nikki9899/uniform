'use client'
import React, { useState } from 'react'
import Button from '../atoms/button'
import { productDetailsLabels } from '@/utils/labels/productdetailsLabels'
export const Product = () => {
    // const [color, setColor] = useState('#80CED7')
    const { buttonone, buttontwo } = productDetailsLabels
    return (
        <div>
            <div>
                <h1 className=" text-5xl font-semibold leading-20">
                    Full Body Suit in Black
                </h1>
                <h2 className=" text-2xl font-semibold leading-10">
                    Rs. 5000 / piece
                </h2>
                <h3 className="my-5 text-base leading-4 ">Colors available</h3>
                <button
                    className="w-12 h-12 px-6 py-4  mr-4  bg-black w-15 h-15 rounded-full "
                    onClick={() => setColor('#80CED7')}
                ></button>
                <button
                    className=" w-12 h-12 px-6 py-4  mr-4  bg-yellow w-15 h-15 rounded-full "
                    onClick={() => setColor('#80CED7')}
                ></button>
                <button
                    className=" w-12 h-12 px-6 py-4  mr-4  bg-green-800 w-15 h-15 rounded-full "
                    onClick={() => setColor('#80CED7')}
                ></button>
                <button
                    className=" w-12 h-12 px-6 py-4  mr-4  bg-gray-800 w-15 h-15 rounded-full leading-6 gap-2"
                    onClick={() => setColor('#80CED7')}
                ></button>
            </div>
            <div className="my-10">
                <button className=" px-6 py-4  mr-4 text-white text-2xl bg-brown rounded-2xl leading-6 gap-2">
                    {buttonone}
                    <span className=""></span>
                </button>
                <button className=" px-6 py-4 border-black text-black text-2xl font-normal border-2 rounded-2xl leading-6">
                    {buttontwo}
                    <span className=""></span>
                </button>
            </div>
        </div>
    )
}
