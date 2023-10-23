import React from 'react';

const QuestionAndAnswers = () => {

    const qAndA = [{
        description : "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem"
    },]

    const qAndAfeatures = [{
        id: 1,
        feature: "1. lorem ipsum lorem ipsum lorem ipsum lorem"
    },
    {
        id: 2,
        feature: "2. lorem ipsum lorem ipsum lorem ipsum lorem"
    },
    {
        id: 3,
        feature: "3. lorem ipsum lorem ipsum lorem ipsum lorem"
    },
    {
        id: 4,
        feature: "4. lorem ipsum lorem ipsum lorem ipsum lorem"
    }]

    return (
        <div>
            <div className="qAndA-container pt-8">
                <div className="description">
                    {qAndA.map((item) => (
                        <p>{item.description}</p>
                    ))}
                </div>
                <div className="features flex list-none pt-3.5">
                    <div className="heading w-1/6 text-lg font-semibold">
                        <h3>Features :</h3>
                    </div>
                    <div className="qAndA-features">
                        {qAndAfeatures.map((item) => (
                            <li key={item.id}>{item.feature}</li>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionAndAnswers
