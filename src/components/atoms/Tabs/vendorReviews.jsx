import React from 'react';

const VendorReviews = () => {

    const vendorReviews = [{
        vendorReview : "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem"
    },]

    const vendorReviewFeatures = [{
        id: 1,
        venderAndReviewFeature: "1. lorem ipsum lorem ipsum lorem ipsum lorem"
    },
    {
        id: 2,
        venderAndReviewFeature: "2. lorem ipsum lorem ipsum lorem ipsum lorem"
    },
    {
        id: 3,
        venderAndReviewFeature: "3. lorem ipsum lorem ipsum lorem ipsum lorem"
    },
    {
        id: 4,
        venderAndReviewFeature: "4. lorem ipsum lorem ipsum lorem ipsum lorem"
    }]

    return (
        <div>
            <div className="vendorReviews-container pt-8">
                <div className="description">
                    {vendorReviews.map((item) => (
                        <p key={item.id}>{item.vendorReview}</p>
                    ))}
                </div>
                <div className="vendorReviewsFeatures flex list-none pt-3.5">
                    <div className="heading w-1/6 text-lg font-semibold">
                        <h3>Features :</h3>
                    </div>
                    <div className="feature">
                        {vendorReviewFeatures.map((item) => (
                            <li key={item.id}>{item.venderAndReviewFeature}</li>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VendorReviews
