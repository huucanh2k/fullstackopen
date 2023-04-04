import { useState } from "react"

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

function Button(props) {
  return <button onClick={props.handleClick}>{props.text}</button>
}

function StatisticLine(props) {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

function Statistics(props) {
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine
            text="all"
            value={props.good + props.neutral + props.bad}
          />
          <StatisticLine
            text="average"
            value={
              (props.good - props.bad) /
              (props.good + props.neutral + props.bad)
            }
          />
          <StatisticLine
            text="positive"
            value={
              (props.good / (props.good + props.neutral + props.bad)) * 100 +
              " %"
            }
          />
        </tbody>
      </table>
    </div>
  )
}

export default App
