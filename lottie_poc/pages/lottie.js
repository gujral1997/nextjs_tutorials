import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../animations/loading-spinner-black.json'

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isStopped: false, isPaused: false }
  }

  render() {
    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    }

    console.log(animationData)

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: true })}
        >
          stop
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: false, isPaused: false })}
        >
          play
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isPaused: !this.state.isPaused })}
        >
          pause
        </button>
      </div>
    )
  }
}
