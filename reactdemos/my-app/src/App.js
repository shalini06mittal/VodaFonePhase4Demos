import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';
import Clock from './components/Clock';
import ClockFunc from './components/ClockFunc';
import Conditional from './components/Conditional';
import GroceryList from './components/GroceryList';
import ClockLifeCycle from './components/ClockLifeCycle';
import { useState } from 'react';
import ClockLifeCycleFunctional from './components/ClockLifeCycleFunctional';
import Register from './components/Register';
import { Routes ,Route, Link } from 'react-router-dom';
import Messages from './components/Messages';
import Message from './Message';
// functional component

/**
 * GroceryListComponent => arrays of grocery objects 
 * groceryitems = [{id, name, price, description}] 5 items
 * 
 * GroceryComponent => pass everu grocery item to the grcosery component
 * via props and display the details in grocery component
 * 
 * will be child of GroceryList
 * GroceryList will be child of App
 */
function App() {
  const [isChecked, setCheched] = useState(true);
  
  let name = 'shalini';
  let user ={
    name:'Priyanka',
    city:'Hyderabad',
    country:'India'
  }
  return (
    <div className='menu'>

    <ul className='link'>
      <li className='litem'>
        <Link  className='a' to='/'>Register</Link>
      </li>
      <li className='litem'>
        <Link className='a' to='/clock'>Clock</Link>
      </li>
      <li className='litem'>
        <Link  className='a' to='/groceries'>GroceryList</Link>
      </li>
      <li className='litem'>
        <Link  className='a' to='/messages'>Messages</Link>
      </li>
    </ul>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/clock' element={<Clock/>}></Route>
        <Route path='/groceries' element={<GroceryList/>}></Route>
        <Route path='/messages' element={<Messages/>}>
          <Route path=":mid" element={<Message />} />
        </Route>
      </Routes>
      
      {/* <input type='checkbox' 
       checked={isChecked}
      onChange={()=>setCheched(isChecked ? false: true)}/>
      {isChecked && <ClockLifeCycleFunctional/>} */}
      {/* <Register/> */}
      {/* pass data to child component is called as props in react */}
      {/* <Greeting username={name} city='Mumbai'/>
      <Welcome name={name} city='Delhi' user ={user}/>
      <Clock/>
      <ClockFunc/>
      <Conditional/>
      <GroceryList/> */}
    </div>
  );
}

export default App;
