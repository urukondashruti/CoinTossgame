// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    Total: 0,
    Heads: 0,
    Tails: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onAdd = () => {
    const value = Math.floor(Math.random() * 2)
    this.setState(prevState => ({Total: prevState.Total + 1}))
    if (value === 0) {
      this.setState(prevState => ({Heads: prevState.Heads + 1}))
      this.setState({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({Tails: prevState.Tails + 1}))
      this.setState({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {Total, Heads, Tails, imgUrl} = this.state

    return (
      <div className="back">
        <div className="con">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="size" />
          <button type="button" onClick={this.onAdd} className="but">
            Toss Coin
          </button>
          <div className="con1">
            <p className="para">Total:{Total}</p>
            <p className="para">Heads:{Heads}</p>
            <p className="para">Tails:{Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
