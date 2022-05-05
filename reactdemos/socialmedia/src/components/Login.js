import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        switch(name){
            case 'username': setUsername(value);
            break;
            case 'password': setPassword(value);
            break;
        }
       
    }
  return (
    <div><h1 className='title'>Connectz</h1>
            <div className="wrapper fadeInDown">
            <div id="formContent">
              <div className="fadeIn first">
                <h2 className='sign'>Please Log In</h2>
              </div>
              <form>
                <input type="text" id="login" className="fadeIn second" name="username" 
                value={username} placeholder="Email" onChange={handleChange}/>
                <input type="password" id="password" className="fadeIn third" name="password"
                value={password} placeholder="Password" onChange={handleChange}/>
                <input type="submit" className="fadeIn fourth" value="Log In"/>
              </form>
              <div>
                <Link to='/register' className="underlineHover">Create Account</Link>
            </div>
            </div>
            
          </div>
          </div>
  )
}
