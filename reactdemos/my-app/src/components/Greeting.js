import React, { Component } from 'react'

export default class Greeting extends Component {
  render() {
      console.log('greeting class ',this.props);
      let  {username, city} = this.props;
    return (
      <div>Greeting {username} : {city}</div>
    )
  }
}
