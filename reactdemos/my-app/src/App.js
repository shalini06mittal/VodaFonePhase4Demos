import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Welcome from './Welcome';
import Clock from './Clock';
import ClockFunc from './ClockFunc';
// functional component
function App() {
  let name = 'shalini';
  let user ={
    name:'Priyanka',
    city:'Hyderabad',
    country:'India'
  }
  return (
    <div className='container'>
      <h1>Welcome {name}</h1>
      <p>this is a paragraph</p>
      {/* pass data to child component is called as props in react */}
      <Greeting username={name} city='Mumbai'/>
      <Welcome name={name} city='Delhi' user ={user}/>
      <Clock/>
      <ClockFunc/>
    </div>
  );
}

export default App;
