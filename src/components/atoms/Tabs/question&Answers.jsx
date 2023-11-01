"use client"

import React, { useState, useEffect } from 'react';

const QuestionAndAnswers = ({ data }) => {
  const [qAndA, setQAndA] = useState([]);

  useEffect(() => {
    if (data && data.data && data.data[0] && data.data[0].QnA) {
      setQAndA(data.data[0].attributes.QnA);
      console.log(data.data[0].attributes.QnA)
    }
  }, [data]);

  return (
    <div>
      <div className="qAndA-container pt-8">
        <div className="description">
          {/* Step 4: Modify the component to render the Q&A data dynamically */}
          {qAndA.map((qa, index) => (
            <div key={index}>
              <h3>Question:</h3>
              <p>{qa.Question}</p>
              <h3>Answer:</h3>
              <p>{qa.Answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionAndAnswers;
