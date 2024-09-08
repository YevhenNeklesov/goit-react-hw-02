// import { nanoid } from 'nanoid'    

const Feedback = ({options, totalFeedback}) => {
  return (
    <div>
      <p>Good: {options.good}</p>
      <p>Neutral: {options.neutral}</p>
      <p>Bad: {options.bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive: {Math.round((options.good / totalFeedback) * 100)}%</p>
    </div>
  )
}

export default Feedback
