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
import Companies from './components/Companies'

function App() {
  const [user, setUser] = useState({username:"Noob", password:"", email:"", fname: "John", lname: "Doe", rank: 0, completedcontracts: 0, failedcontracts: 0, ongoingcontracts: 0, pn:"000000000"});
  const [loggedin, setLoggedin] = useState(false)
  const [sidebarshow, setSidebarshow] = useState(false);
  const [showlogin, setShowlogin] = useState(true);
  const toggleShow = () => setSidebarshow((s) => !s);
  return (
    <BrowserRouter>
    <div className="App newScroll" style={{overflowY:"scroll", overflowX:"hidden", background:"#F3F3F9"}}>
      <Navigation toggleShow={toggleShow}></Navigation> 
      <Offcanvas id="myanim" backdrop={false} scroll={true} show={sidebarshow}style={{margin:"0", padding:"0", width:"250px", overflow:"hidden", border:"1px solid #2A3042"}}>
        <Offcanvas.Body style={{margin:"0", padding:"0", overflow:"hidden"}}>
          <SideBar setLoggedin={setLoggedin} setShowlogin={setShowlogin}/>
        </Offcanvas.Body>
      </Offcanvas>
      <div style={{marginTop:"3.3rem", width:"100vw"}}>
        <Routes>
                <Route exact path="/" element={<Login setLoggedin={setLoggedin} setUser={setUser} showlogin={showlogin} setShowlogin={setShowlogin}/>}/>
                <Route path="/Dashboard" element={<Dashboard loggedin={loggedin} user={user}/>}/>
                <Route path="/Contracts" element={<Contracts loggedin={loggedin}/>}/>
                <Route path="/Companies" element={<Companies loggedin={loggedin}/>}/>
                <Route path="/Leaderboard" element={<Leaderboard loggedin={loggedin} user={user}/>}/>
                <Route path="/Profile" element={<Profile setUser={setUser} loggedin={loggedin} user={user}/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App