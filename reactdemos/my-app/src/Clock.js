import React, { Component } from 'react'

export default class Clock extends Component {
// state are like variable inside a function
// props are like parameters in a function
    constructor(props) {
      super(props)
      this.state = {
        date:new Date(),
        days :['Mon','Tue','Wed',"thurs"]
      }
    }

    update(){
        alert('update clicked');
        console.log(this);
        this.setState({date:new Date()});
    }
  render() {
      let {date, days} = this.state
      let dayslist = days.map(day=><li>{day}</li>);
    return (
      <div>
          <h1>Current Date : {date.toLocaleString()}</h1>
          <button onClick={()=>this.update()}>Update Time</button>
          <ul>
          {/* {
            days.map(day=><li>{day}</li>)
          }         */}
          {dayslist}
          </ul>
        </div>
    )
  }
}
