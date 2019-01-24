import React from 'react'

export default class Error extends React.Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    return (
      <p>
        {this.props.statusCode
          ? `这个错误码 ${this.props.statusCode} 你熟悉吗`
          : '这个是咋了'}
      </p>
    )
  }
}
