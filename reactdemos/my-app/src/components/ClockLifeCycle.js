import React, { Component } from 'react'

export default class ClockLifeCycle extends Component {

    timerId;
    constructor(props) {
      super(props)
    
      this.state = {
         date:new Date()
      }
    }

    tick() {
        this.setState({
        date: new Date()
        });
    }
        
    componentDidMount(){
        console.log('component mounted')
        this.timerId = setInterval(
            ()=>{
                console.log(this.state.date.toLocaleTimeString())
                this.tick();
            },
            1000);
    }
    componentWillUnmount()
    {
        console.log('component unmounted')
        clearInterval(this.timerId);
    }
    componentDidUpdate(){
        console.log('component did update')
    }
  render() {
    return (
      <div><p>{this.state.date.toLocaleTimeString()}</p></div>
    )
  }
}
