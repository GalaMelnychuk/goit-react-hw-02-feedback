import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ feedbackOptions }) => {
  return (
    <>
      <button onClick={feedbackOptions} name="good" type="button">
        Good
      </button>
      <button onClick={feedbackOptions} name="neutral" type="button">
        Neutral
      </button>
      <button onClick={feedbackOptions} name="bad" type="button">
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  feedbackOptions: PropTypes.func
};

export default FeedbackOptions;
