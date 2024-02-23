import React, { useState, useEffect } from 'react';

const QuestionAndAnswers = ({ data }) => {
    const [qAndA, setQAndA] = useState([]);

    useEffect(() => {
        if (data && data.QnA) {
            setQAndA(data.QnA);
        }
    }, [data]);

    return (
        <div>
            <div className="qAndA-container flex pt-8">
                <div className="description">
                    {qAndA.map((qa) => (
                        <div key={qa.id}>
                            <p>
                                <span className="lg:text-lg lg:leading-6 sm:text-sm xs:text-xs text-[10px] leading-3 sm:leading-5 font-semibold">
                                    Question:
                                </span>
                                {qa.Question}
                            </p>

                            <p>
                                <span className="lg:text-lg lg:leading-6 sm:text-sm xs:text-xs text-[10px] leading-3 sm:leading-5 font-semibold">
                                    Answer:
                                </span>{' '}
                                {qa.Answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuestionAndAnswers;
