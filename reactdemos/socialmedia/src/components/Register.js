import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [error, setError ] = useState('');
    const navigate = useNavigate();

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
    const handleSubmit = (event)=>{
      console.log('submit')
      event.preventDefault();
      if(password ==='' || password !== cpassword)
      {
         setError('Password do not match')
      }
      else{
        let user = {username, password};
        fetch('http://localhost:3000/users',{
          method:'POST',
          body:JSON.stringify(user),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          alert('Account created successfully...Please sign in ');
          navigate('/login');
        });
      }
    }
  return (
    <div><h1 className='title'>Connectz</h1>
            <div className="wrapper fadeInDown">
            <div id="formContent">
              <div className="fadeIn first">
                <h2 className='sign'>Please Register</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <input type="text" id="login" className="fadeIn second" name="username" 
                value={username} placeholder="Email" onChange={handleChange}/>
                <input type="password" id="password" className="fadeIn third" name="password"
                value={password} placeholder="Password" onChange={handleChange}/>
                <input type="password" id="password" className="fadeIn third" name="cpassword"
                value={cpassword} placeholder="Confirm Password" onChange={handleChange}/>
                 <span className='error'>{error}</span>
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
