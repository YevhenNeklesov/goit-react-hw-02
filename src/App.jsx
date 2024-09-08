import { useState } from 'react'
import './App.css'
import Descriptions from './components/Descriptions/Descriptions'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Feedback/Notification/Notification'
import Options from './components/Options/Options'

const App = () => {
  const [options, setOptions] = useState(() => {
    const savedOptions = localStorage.getItem('feedbackOptions');
    return savedOptions ? JSON.parse(savedOptions) : {
      good: 0,
	    neutral: 0,
      bad: 0
    }
  })

  const updateFeedback = feedbackType => {
    setOptions((prev) => {const updateOptions = { ...prev, [feedbackType]: prev[feedbackType] + 1 };
      localStorage.setItem('feedbackOptions', JSON.stringify(updateOptions));
      return updateOptions
    });
  }
  
  const resetOptions = () => {
    setOptions({
      	good: 0,
	      neutral: 0,
	      bad: 0
    })
  }


  

  const totalFeedback = options.good + options.neutral + options.bad
    
  return (
    <div>
      <Descriptions />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetOptions={resetOptions}/>
      {totalFeedback > 0 ? <Feedback options={options} totalFeedback={totalFeedback}
      />: <Notification/>}
    </div>
  )
}

export default App





