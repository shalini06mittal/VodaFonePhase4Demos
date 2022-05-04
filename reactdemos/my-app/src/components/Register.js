import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        email:'guest@test.com',
        password:'',
        nemail:true,
        nsms:false,
        ncall:false,
        country:'USA'
      }
    }

    handleChangeEmail =(event)=>{
        this.setState({email:event.target.value})
    }
    handleChangePassword =(event)=>{
        this.setState({password:event.target.value})
    }
    handleChange = (event)=>{
        let target = event.target;
        let value = target.type === 'checkbox'? target.checked : target.value
        let name = target.name;
        console.log(name)
        this.setState({[name]:value})
    }
  render() {
    console.log(this.props)
    return (
      <div>
          <h1>Register</h1>
          <p>{this.state.email}</p>
          <form>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="text" className="form-control" value={this.state.email}
                onChange={this.handleChange} name='email' 
                id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" 
                value={this.state.password} name='password'
                onChange={this.handleChange}
                className="form-control" id="exampleInputPassword1"/>
            </div>
            <div>Notify Me:</div>
            <div className="mb-3 form-check"> 
                <input type="checkbox" name='nemail' checked={this.state.nemail}
                 onChange={this.handleChange}
                className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" >Email</label>
            </div>
            <div className="mb-3 form-check"> 
                <input type="checkbox" name='nsms'   checked={this.state.nsms}
                onChange={this.handleChange}
                className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" >SMS</label>
            </div>
            <div className="mb-3 form-check"> 
                <input type="checkbox" name='ncall'   checked={this.state.ncall}
                onChange={this.handleChange}
                className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" >Call</label>
            </div>
            <div>Select A country</div>
            <select name='country' value={this.state.country} onChange={this.handleChange}
            className="form-select" aria-label="Default select example">
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Germany">Germany</option>
            </select>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>      
    </div>
    )
  }
}
