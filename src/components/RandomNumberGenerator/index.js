// Write your code here
import {Component} from 'react'
import './index.css'
class RandomNumberGenerator extends Component {
  state = {num: 0}

  onGenerate = () => {
    this.setState(() => ({
      num: Math.random() * 100,
    }))
  }

  render() {
    const {num} = this.state
    return (
      <div className="container">
        <div className="main">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.onGenerate}
            className="generate-btn"
          >
            {' '}
            Generate{' '}
          </button>
          <p className="value">{num}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
