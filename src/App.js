import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navv from './pages/Navv';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Read from './pages/Read';
import Update from './pages/Update';
import Page from './pages/Page';
import Toggle from './pages/Toggle';
function App() {
  return (
    <Router>
      <Routes>
             <Route exact path='/' element={<Home/>}/>
             <Route path='/navv' element={<Navv/>}/>
             <Route path='/read' element={<Read/>}/>
             <Route path='/update' element={<Update/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/signup' element={<Signup/>}/>
             <Route path='/page' element={<Page/>}/>
             <Route path='/toggle' element={<Toggle/>}/>
      </Routes> 
    </Router>
  );
}

export default App;
