// import { nanoid } from 'nanoid'    

const Feedback = ({options, totalFeedback, positiveFeedback}) => {
  return (
    <div>
      <p>Good: {options.good}</p>
      <p>Neutral: {options.neutral}</p>
      <p>Bad: {options.bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  )
}

export default Feedback
