// Write your code here
import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {randomNumber: 0}

  onIncrement = () => {
    const r = Math.floor(Math.random() * 100)
    this.setState(prevState => ({randomNumber: prevState.randomNumber + r}))
  }

  evenOrOddAuth = () => {
    const {randomNumber} = this.state
    if (randomNumber % 2 === 0) {
      return 'Count is Even'
    }
    return 'Count is Odd'
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg">
        <div className="bgCard">
          <h1>Count {randomNumber}</h1>
          <div className="innerCard">
            <p className="pEvenOrOdd">{this.evenOrOddAuth()}</p>
            <button type="button" className="btn1" onClick={this.onIncrement}>
              Increment
            </button>
            <p className="para">*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
