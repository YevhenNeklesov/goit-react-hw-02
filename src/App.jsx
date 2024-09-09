import { useEffect, useState } from 'react'
import './App.css'
import Descriptions from './components/Description/Description'
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
  

  useEffect(() => {
    localStorage.setItem('feedbackOptions', JSON.stringify(options))
  }, [options])

  const updateFeedback = feedbackType => {
    setOptions(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 })
    );
  }
  
  const resetOptions = () => {
    setOptions({
      	good: 0,
	      neutral: 0,
	      bad: 0
    })
  }


  

  const totalFeedback = options.good + options.neutral + options.bad
  
  const positiveFeedback = Math.round((options.good / totalFeedback) * 100)
    
  return (
    <div>
      <Descriptions />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetOptions={resetOptions}/>
      {totalFeedback > 0 ? <Feedback options={options} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}
      />: <Notification/>}
    </div>
  )
}

export default App





