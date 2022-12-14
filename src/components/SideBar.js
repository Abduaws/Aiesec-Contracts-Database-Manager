import React from 'react'
import { ProSidebarProvider, Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { BsFillBarChartFill, BsFillPersonFill } from 'react-icons/bs'
import { AiFillDashboard, AiOutlinePoweroff } from 'react-icons/ai'
import { FaFileContract } from 'react-icons/fa'
import { GiFactory } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'

function SideBar({ setShowlogin, setLoggedin }) {
  const navigate = useNavigate();
  return (
    <ProSidebarProvider id="myanim">
      <img id='myanim' src=" https://i.imgur.com/AQEo4RY.png" alt="..." width="80%"/>
      <Sidebar backgroundColor={"#2A3042"} style={{height:"100%"}}>
        <Menu>
          <MenuItem as={Link} to="/Dashboard" id='myanim' icon={<AiFillDashboard/>}>
            Dashboard
          </MenuItem>
          <MenuItem as={Link} to="/LeaderBoard" id='myanim' icon={<BsFillBarChartFill/>}>
            Leaderboard
          </MenuItem>
          <MenuItem as={Link} to="/Contracts" id='myanim' icon={<FaFileContract/>}>
            Contracts
          </MenuItem>
          <MenuItem as={Link} to="/Companies" id='myanim' icon={<GiFactory/>}>
            Companies
          </MenuItem>
          <MenuItem as={Link} to="/Profile" id='myanim' icon={<BsFillPersonFill/>}>
            Profile
          </MenuItem>
          <MenuItem onClick={()=>{setShowlogin(true);setLoggedin(false);navigate("/")}} id='myanim' icon={<AiOutlinePoweroff/>}>
            Sign Out
          </MenuItem>
        </Menu>
        
      </Sidebar>
    </ProSidebarProvider>
  )
}

export default SideBar