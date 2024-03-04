import Link from 'next/link'
import { memo } from 'react'

const FooterList = ({ contents }) => {
    const { title, listItems } = contents

    return (
        <div>
            <h4 className="md:text-lg text-[10px] font-semibold mb-2">
                {title}
            </h4>
            <ul>
                {listItems.map((item) => (
                    <li key={item.id} className="mb-2">
                        {title === 'Shop' ? (
                            <a
                                href={`/clp/${item.slug}`}
                                className={`text-gray-800 hover:text-blue-500`}
                                onClick={(e) =>
                                    item.disabled && e.preventDefault()
                                }
                            >
                                {item.item}
                            </a>
                        ) : (
                            <a
                                href={item.link}
                                className={`text-gray-800  ${
                                    item.disabled
                                        ? 'text-gray-400 opacity-50 '
                                        : 'text-gray-500 hover:text-blue-500'
                                }`}
                                onClick={(e) =>
                                    item.disabled && e.preventDefault()
                                }
                            >
                                {item.item}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterList
