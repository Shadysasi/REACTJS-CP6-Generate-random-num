// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGenerateButton = () => {
    const getRandom = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: getRandom})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="title">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="btn-style"
            onClick={this.onGenerateButton}
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
