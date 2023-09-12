// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {num: 0}

  getRandomNum = () => Math.ceil(Math.random() * 100)

  onIncrease = () => {
    const randomNumber = this.getRandomNum()
    this.setState(prevState => ({
      num: prevState.num + randomNumber,
    }))
  }

  render() {
    const {num} = this.state
    const displayText = num % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Count {num}</h1>
          <p className="para1">Count is {displayText} </p>

          <button className="button" type="button" onClick={this.onIncrease}>
            Increment
          </button>
          <p className="para2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
