'use client'
import React, { useReducer } from 'react'
import Dropdown from '@/components/atoms/Dropdown'
import { Carrot } from '@/components/svgs'

const initialState = {
    price: undefined,
    review: undefined,
    material: undefined,
    color: undefined,
    'all filters': undefined,
    'sort by': undefined,
}

const reducer = (state, action) => {
    switch (action.type.toLowerCase()) {
        case 'price':
            return { ...state, price: action.value }
        case 'review':
            return { ...state, review: action.value }
        case 'material':
            return { ...state, material: action.value }
        case 'color':
            return { ...state, color: action.value }
        case 'all filters':
            return { ...state, 'all filters': action.value }
        case 'sort by':
            return { ...state, 'sort by': action.value }
        default:
            return state
    }
}

const Filter = ({filterData}) => {
    const [selected, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="flex gap-x-4">
            {filterData.map(({ id, title, options }, index) => (
                <Dropdown
                    selected={selected[title.toLowerCase()]}
                    setSelected={dispatch}
                    key={id}
                    options={options}
                    title={title}
                    last={index === filterData - 1}
                    icon={<Carrot className="inline rotate-180 ml-3" />}
                />
            ))}
        </div>
    )
}

export default Filter
