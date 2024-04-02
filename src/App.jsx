import { Routes, Route, Link } from 'react-router-dom';
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';
import Yellow from './components/Yellow';
import Green from './components/Green';
import './App.css'

function App() {
  

  return (
    <>
       <div id="container">

        <div id="navbar">
           <Link to={'/blue'} >Blue</Link>
           <Link to={'/green'}>Green</Link>
           <Link to={'/home'}> Home</Link>
           <Link to={'/red'}>Red</Link>
           <Link to={'/yellow'}>Yellow</Link>
        </div>

        <div id="main-section">
          <Routes>
            <Route path='/blue' element={<Blue/>}/>
            <Route path='/green' element={<Green/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/red' element={<Red/>}/>
            <Route path='/yellow' element={<Yellow/>}/>
          </Routes>
          </div>
      </div>
    </>
  )
}

export default App
