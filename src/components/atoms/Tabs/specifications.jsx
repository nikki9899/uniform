import React from 'react'

const Specifications = () => {

    const specifications = [{
        specification : "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem"
    },]

    const specFeatures = [{
        id: 1,
        specFeature: "1. lorem ipsum lorem ipsum lorem ipsum lorem"
    },
    {
        id: 2,
        specFeature: "2. lorem ipsum lorem ipsum lorem ipsum lorem"
    },
    {
        id: 3,
        specFeature: "3. lorem ipsum lorem ipsum lorem ipsum lorem"
    },
    {
        id: 4,
        specFeature: "4. lorem ipsum lorem ipsum lorem ipsum lorem"
    }]

    return (
        <div>
            <div className="specification-container pt-8">
                <div className="description">
                    {specifications.map((item) => (
                        <p key={item.id}>{item.specification}</p>
                    ))}
                </div>
                <div className="specFeatures flex list-none pt-3.5">
                    <div className="heading w-1/6 text-lg font-semibold">
                        <h3>Features :</h3>
                    </div>
                    <div className="feature">
                        {specFeatures.map((item) => (
                            <li key={item.id}>{item.specFeature}</li>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specifications
