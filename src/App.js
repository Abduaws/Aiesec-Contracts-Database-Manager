import React from 'react'
import './App.css'
import 'react-clock/dist/Clock.css'
import 'react-circular-progressbar/dist/styles.css'
import SideBar from './components/SideBar'
import Navigation from './components/Navigation'
import Contracts from './components/Contracts'
import Login from './components/Login'
import Leaderboard from './components/Leaderboard'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Offcanvas } from 'react-bootstrap' 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const [sidebarshow, setSidebarshow] = useState(false);
  const [showlogin, setShowlogin] = useState(true);
  const toggleShow = () => setSidebarshow((s) => !s);
  return (
    <BrowserRouter>
    <Login showlogin={showlogin} setShowlogin={setShowlogin}></Login>
    <div className="App" style={{overflow:"scroll", background:"#F3F3F9"}}>
      <Navigation toggleShow={toggleShow}></Navigation> 
      <Offcanvas id="myanim" backdrop={false} scroll={true} show={sidebarshow}style={{margin:"0", padding:"0", width:"250px", overflow:"hidden", border:"1px solid #2A3042"}}>
        <Offcanvas.Body style={{margin:"0", padding:"0", overflow:"hidden"}}>
          <SideBar setShowlogin={setShowlogin}/>
        </Offcanvas.Body>
      </Offcanvas>
      <div style={{marginTop:"3.3rem", width:"100vw"}}>
        <Routes>
                <Route exact path="/" element={true ? <Navigate to="/Dashboard" /> : <Navigate to="/Profile" />}/>
                <Route path="/Dashboard" element={<Dashboard/>}/>
                <Route path="/Contracts" element={<Contracts/>}/>
                <Route path="/Leaderboard" element={<Leaderboard/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App