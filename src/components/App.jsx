import { useState} from 'react';

import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification'

export const App = () => {
  const [stats, setStats] = useState({ good: 0, neutral: 0, bad: 0 });
  // stats to aktualny stan, a setStats to funkcja, którą mona wywołać, eby stan zaktualizować

  const feedbackNames = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    const { good, neutral, bad } = stats;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = stats;
    return Math.round((good / countTotalFeedback()) * 100);
    // pozytywne odpowiedzi dzielone na wszystkie x 100, zeby wyszedl procent
  }

const handleLeaveFeedback = (option) => {
  setStats((prevStats) => ({
    ...prevStats,
    [option]: prevStats[option] + 1,
  }));
};

    // nie uzywa sie kolejny raz renderowania przy hookach wiec wyrzucamy render()
return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackNames}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={stats.good}
            neutral={stats.neutral}
            bad={stats.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};


