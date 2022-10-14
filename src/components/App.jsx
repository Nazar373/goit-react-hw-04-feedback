import React, {Component} from "react";
import { ThemeProvider } from 'styled-components';
import { theme } from "./theme";

import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";

export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // static propTypes = {
    
  // }
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  onLeaveFeedback = arg => {
    this.setState(prevState => { return { [arg]: prevState[arg] + 1 } });
  };
  
  countTotalFeedback = () => {
    const values = (Object.values(this.state))
    return values.reduce((acc, values) => acc + values, 0)
  }
  
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        { this.countTotalFeedback() 
          ? <Statistics 
              good={this.state.good} 
              neutral={this.state.neutral} 
              bad={this.state.bad} 
              total={this.countTotalFeedback()} 
              positivePercentage={this.countPositiveFeedbackPercentage()} />
          : <span style={{marginLeft: 30, fontWeight: 500}}>No feedback given</span> }
      </Section>
      </ThemeProvider>
    )
  }

};




// goodFeedBack = () => {
//   // const {value} = this.arg
//   this.setState(prevState => ({
//     good: prevState.good + 1,
//   }
//   ))
// }

// neutralFeedBack = () => {
//   this.setState(prevState => ({
//     neutral: prevState.neutral + 1
//   }))
// }

// badFeedBack = () => {
//   this.setState(prevState => ({
//     bad: prevState.bad + 1
//   }))
// }