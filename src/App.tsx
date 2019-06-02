import React, { FunctionComponent } from 'react'
import './App.scss'
import MaterialTextField from '@material-ui/core/TextField'

const SurveyQuestion: FunctionComponent<{}> = () => (
  <div className="question-container">
    <div className="question-title">Why like this?</div>
    <div className="answer-container">
      <MaterialTextField placeholder="Please answer" />
    </div>
  </div>
)

const questionsArray: number[] = new Array(50).fill(1)

function App() {
  return (
    <div className="App">
      <h2 className="title">Bugs recreation page</h2>
      <div className="shiulon">
        <div className="questions-container">
          {questionsArray.map((val, index) => (
            <SurveyQuestion key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
