import React, { memo, useState } from "react";

const Item = ({ question, answer }) => {
  const [isShow, setIsShow] = useState(false);

  const showAnswer = () => {
    setIsShow(!isShow);
  };

  return (
    question &&
    answer && (
      <div className="col-12 col-lg-6">
        <div className="faq_container">
          <div className="faq_question" onClick={() => showAnswer()}>
            <p className="mb-0 d-flex align-items-center">
              <span className="faq_question-icon">{isShow ? "-" : "+"}</span>
              {question}
            </p>
          </div>
          {isShow ? (
            <div className="faq_answer">
              <hr></hr>
              <p className="mb-0">{answer}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    )
  );
};

export default memo(Item);
