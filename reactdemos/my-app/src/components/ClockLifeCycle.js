import React, { Component } from 'react'

export default class ClockLifeCycle extends Component {

    timerId;
    constructor(props) {
      super(props)
    
      this.state = {
         date:new Date(),
         counter:0
      }
    }
    tick() {
        this.setState({
        date: new Date(), 
        });
    }
    componentDidMount(){
        console.log('component mounted')
        this.timerId = setInterval(
            ()=>{
                console.log(this.state.date.toLocaleTimeString())
                this.tick();
                this.setState({counter:this.state.counter+1})
            },
            1000);
    }
    shouldComponentUpdate(nextProps, nextState)
    {
      if(nextState.counter % 5 ==0)
      return true;
      return false;
         // console.log(nextState.date.toLocaleTimeString(), 
      // this.state.date.toLocaleTimeString())
      // console.log('counter ',this.state.counter)
      // console.log('counter ',nextState.counter)
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
