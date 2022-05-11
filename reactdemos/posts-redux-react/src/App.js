import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './app/NavBar';
import PostLists from './components/PostLists';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
function App() {
  return (
    <Router>
      <NavBar/>
      <div className='App'>
        <Routes>
          <Route path='/' element={<PostLists/>}></Route>
          <Route path='/add' element={<AddPost/>}></Route>
          <Route path='/edit/:id' element={<EditPost/>}></Route>
        </Routes>
      </div>
    </Router> 
   
  );
}

export default App;

