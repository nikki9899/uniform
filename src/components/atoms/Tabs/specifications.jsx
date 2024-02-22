import React from 'react'

const Specifications = ({ data }) => {
    return (
        <div>
            <table className="table-auto">
                <tbody>
                    {[
                        { key: 'Style', value: data.Style },
                        { key: 'Industry', value: data.Industry },
                        { key: 'Material', value: data.Material },
                        { key: 'MPN', value: data.MPN },
                        { key: 'SKU', value: data.SKU },
                        { key: 'Department', value: data.Department },
                    ].map(({ key, value }) => (
                        <tr key={key}>
                            <td className="pr-4 lg:text-lg lg:leading-6 sm:text-sm xs:text-xs text-[10px] leading-3 sm:leading-5 font-bold">
                                {key}
                            </td>
                            <td>
                                {typeof value === 'object'
                                    ? JSON.stringify(value)
                                    : String(value)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Specifications
