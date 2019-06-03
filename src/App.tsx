import React, { FunctionComponent } from 'react'
import './App.scss'
import MaterialTextField from '@material-ui/core/TextField'

const SurveyQuestion: FunctionComponent<{ onBlur: () => void }> = ({ onBlur }) => (
  <div className="question-container">
    <div className="question-title">Why like this?</div>
    <div className="answer-container">
      <MaterialTextField placeholder="Please answer" onBlur={onBlur} />
    </div>
  </div>
)

const questionsArray: number[] = new Array(50).fill(1)

const App: FunctionComponent<{}> = () => {
  const onInputBlur = () => null
  return (
    <div className="App">
      <h2 className="title">Bugs recreation page</h2>
      <div className="shiulon">
        <div className="questions-container">
          {questionsArray.map((val, index) => (
            <SurveyQuestion key={index} onBlur={onInputBlur} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
