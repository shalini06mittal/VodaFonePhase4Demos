import logo from './logo.svg';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Navigate to='/login'/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
