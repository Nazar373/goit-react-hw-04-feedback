import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';

export function App() {
  const [goodFb, addGoodFb] = useState(0);
  const [neutralFb, addNeutralFb] = useState(0);
  const [badFb, addBadFb] = useState(0);

  const onLeaveFeedback = (e) => {
    switch (e) {
      case 'goodFb':
        addGoodFb(goodFb => goodFb + 1);
        break;

      case 'neutralFb':
        addNeutralFb(neutralFb => neutralFb + 1);
        break;

      case 'badFb':
        addBadFb(badFb => badFb + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const values = Object.values({goodFb, neutralFb, badFb});
    return values.reduce((acc, values) => acc + values, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((goodFb / countTotalFeedback()) * 100);
  };

  return (
    <ThemeProvider theme={theme}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({goodFb, neutralFb, badFb})}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={goodFb}
            neutral={neutralFb}
            bad={badFb}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </ThemeProvider>
  );
}