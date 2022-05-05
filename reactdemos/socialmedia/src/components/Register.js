import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const handleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        switch(name){
            case 'username': setUsername(value);
            break;
            case 'password': setPassword(value);
            break;
            case 'cpassword': setCpassword(value);
            break;
        }
       
    }
  return (
    <div><h1 className='title'>Connectz</h1>
            <div className="wrapper fadeInDown">
            <div id="formContent">
              <div className="fadeIn first">
                <h2 className='sign'>Please Register</h2>
              </div>
              <form>
                <input type="text" id="login" className="fadeIn second" name="username" 
                value={username} placeholder="Email" onChange={handleChange}/>
                <input type="password" id="password" className="fadeIn third" name="password"
                value={password} placeholder="Password" onChange={handleChange}/>
                <input type="password" id="password" className="fadeIn third" name="password"
                value={password} placeholder="Confirm Password" onChange={handleChange}/>
                <input type="submit" className="fadeIn fourth" value="Register"/>
              </form>
              <div>
                <Link to='/login' className="underlineHover">Login [if registered user]</Link>
            </div>
            </div>
          </div>
          </div>
  )
}
