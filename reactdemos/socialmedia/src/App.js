import logo from './logo.svg';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
function App() {
  return (
    <div className="App">
     <Routes>
       {/* <Route path='/' element={<Navigate to='/login'/>}></Route> */}
       <Route path='/' element={<Dashboard/>}>
         <Route index element={<Navigate to='/home'/>}></Route>
         <Route path='/home' element={<Home/>}></Route>
         <Route path='/profile' element={<Profile/>}></Route>
         <Route path='/settings' element={<Settings/>}></Route>
       </Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
     </Routes>
    </div>  
  );
}

export default App;
