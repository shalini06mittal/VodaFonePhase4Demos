import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import './Login.css';
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg,setErrorMsg] = useState('');

    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
      fetch('http://localhost:3000/users')
      .then(res=>res.json())
      .then(users=>{
        console.log(users);
        setUsers(users)
      });
    },[])
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
    const handleSubmit =(event)=>{
      let isLoginValid = false;
      event.preventDefault();
      for(let user of users){
        if(user.email === username && user.password === password)
         { 
           isLoginValid=true;
           localStorage.setItem('email',username );
           navigate('/')
           break;
         }
      }
      if(!isLoginValid) {
       setErrorMsg('Invalid Credentials')
        //alert('Invalid credentials')
      }
    }
  return (
    <div><h1 className='title'>Connectz</h1>
            <div className="wrapper fadeInDown">
            <div id="formContent">
              <div className="fadeIn first">
                <h2 className='sign'>Please Log In</h2>
              </div>
              <span className='error'>{errorMsg}</span>
              <form onSubmit={handleSubmit}>
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
