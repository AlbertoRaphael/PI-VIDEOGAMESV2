import './App.css';
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/loader/LandingPage'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import CreateVideogame from './components/Create/CreateVideogame';
//import Page404 from './components/Page404';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
         <Route path='/videogame/:id' element={<Detail/>} />
        <Route path='/videogame' element={<CreateVideogame/>} />
       {/**/}
      </Routes>
    </div>
  );
}

export default App;
