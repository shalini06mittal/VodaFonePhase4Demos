import React, { Component } from 'react'

export default class Conditional extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
    // if(this.state.isLoggedIn)
    // return (
    //   <div>
          
    //       <h1>Welcome Vodafone</h1>
    //   </div>
    // )
    // else
    // return (
    //     <div>Welcome Guest</div>
    //   )

    // return(
    //     <div>
    //     {this.state.isLoggedIn ? <h1>Welcome Vodafone</h1> :
    //     <div>Welcome Guest</div> }
    //     <p>other contents go here</p>
    //     </div>
    // )

    return(
        <div>
        {this.state.isLoggedIn && <h1>Welcome Vodafone</h1> }
        <p>other contents go here</p>
        </div>
    )
  }
}
