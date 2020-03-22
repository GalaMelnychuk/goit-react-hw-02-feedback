import React, { Component } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Statistics from "./statistic/Statistic";
import Section from "./section/Section";
import Notification from "./notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  getTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  getPercentage = () => {
    return Math.round((this.state.good / this.getTotal()) * 100);
  };

  handlerFeedbackCount = event => {
    const buttonName = event.target.name;
    this.setState({
      [buttonName]: this.state[buttonName] + 1
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please, leave feedback">
          <FeedbackOptions feedbackOptions={this.handlerFeedbackCount} />
        </Section>
        <Section title="Stаtistics">
          {this.getTotal() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.getTotal()}
              positivePercentage={this.getPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
