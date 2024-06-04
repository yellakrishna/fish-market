
import './App.css';
import Navbar from './components/navbar';
import {Route,Routes} from "react-router-dom";
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import Login from './components/login';
import Items from './components/items/Items';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
         <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/items' element={<Items/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/login' element={<Login/>}/>
         </Routes>
    </div>
  );
}

export default App;
