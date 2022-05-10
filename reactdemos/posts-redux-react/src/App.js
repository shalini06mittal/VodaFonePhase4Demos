import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './app/NavBar';
import PostLists from './components/PostLists';
import AddPost from './components/AddPost';
function App() {
  return (
    <Router>
      <NavBar/>
      <div className='App'>
        <Routes>
          <Route path='/' element={<PostLists/>}></Route>
          <Route path='/add' element={<AddPost/>}></Route>
        </Routes>
      </div>
    </Router> 
   
  );
}

export default App;

