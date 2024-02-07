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
      <div className="qAndA-container  flex pt-8">
        <div className="description">
          {qAndA.map((qa, index) => (
            <div key={index}>
              <p>
                <span className="font-semibold">Question:</span> {qa.Question}
              </p>

              <p>
                <span className="font-semibold">Answer:</span> {qa.Answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionAndAnswers;
