'use client'
import Dropdown from '@/components/atoms/Dropdown'
import { useState } from 'react'
import { Carrot } from '@/components/svgs'

export default function Home() {
    const options = [
        { id: '121', data: '300-500' },
        { id: '123', data: '500-1500' },
        { id: '124', data: '1500-3000' },
    ]

    const [selected, setSelected] = useState(undefined)

    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Dropdown
                    options={options}
                    selected={selected}
                    setSelected={setSelected}
                    title={'Price'}
                    icon = {<Carrot className="inline rotate-180 ml-3" />}
                />
            </main>
        </div>
    )
}
