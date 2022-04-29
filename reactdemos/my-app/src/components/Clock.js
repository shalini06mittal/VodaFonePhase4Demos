import React, { Component } from 'react'

export default class Clock extends Component {
// state are like variable inside a function
// props are like parameters in a function
    constructor(props) {
      super(props)
      this.state = {
        date:new Date(),
        days :['Mon','Tue','Wed',"thurs"],
      }
    }
    
    update(){
        //alert('update clicked');
        console.log(this);
        this.setState({date:new Date()});
        //this.state.date = new Date();
        console.log(this.state.date);
    }
    addDays = ()=>{
      let days = [...this.state.days]
      days.push('Friday');
      this.setState({days:days},()=>{
        console.log('days state updated')
        console.log(this.state.days);
      })
      //this.setState({days:[...this.state.days,'Fri']})
      console.log(this.state.days);
    }

  render() {
      let {date, days} = this.state
      let dayslist = days.map( (day, index)=><li key={index}>{day}</li>);
    return (
      <div>
          <h1>Current Date : {date.toLocaleString()}</h1>
          <button onClick={()=>this.update()}>Update Time</button>
          <button onClick={this.addDays}>Update Days</button>
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
