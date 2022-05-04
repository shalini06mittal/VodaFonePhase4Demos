import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import BookKeeper from './components/bookkeeping/BookKeeper';
import Invoices from './components/bookkeeping/Invoices';
import Expenses from './components/bookkeeping/Expenses';
function App() {
  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/books' element={<BookKeeper/>}>
          <Route path='invoices' element={<Invoices/>}></Route>
          <Route path='expenses' element={<Expenses/>}></Route>
        </Route>
        <Route path='/expenses' element={<Expenses/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
