import React from 'react'

const Description = ({ data }) => {
    return (
        <div>
            <div className="description-container pt-8">
                <div className=" features flex list-none pt-3.5">
                    <div className="heading md:w-1/6 lg:text-lg lg:leading-6 sm:text-sm text-xs leading-3 sm:leading-5 font-bold">
                        <h3>Features:</h3>
                    </div>
                    <div className="feature ml-6 xs:text-xs text-[10px] font-normal lg:text-base lg:leading-6 leading-3 sm:text-sm sm:leading-5 md:ml-6">
                        {data.features
                            .replace(/@/g, '\n')
                            .split('\n')
                            .filter((feature) => feature.trim() !== '')
                            .map((feature, index) => (
                                <p key={index} className="mb-2">{`${
                                    index + 1
                                }. ${feature.trim()}`}</p>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description
