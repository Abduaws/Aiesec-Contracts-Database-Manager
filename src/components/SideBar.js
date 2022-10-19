import React from 'react'
import { ProSidebarProvider, Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { BsFillBarChartFill, BsFillPersonFill } from 'react-icons/bs'
import { AiFillDashboard, AiOutlinePoweroff } from 'react-icons/ai'
import { FaFileContract, FaBars } from 'react-icons/fa'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SideBar({toggleShow, setShowlogin}) {
  return (
    <ProSidebarProvider id="myanim">
      <img id='myanim' src="companylogo2.png" alt="..." width="80%"/>
      {/* <Button style={{margin:"0", border:"1px solid #a6b0cf"}} id="myanim" variant='light' onClick={toggleShow}><FaBars/></Button> */}
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
          <MenuItem as={Link} to="/Profile" id='myanim' icon={<BsFillPersonFill/>}>
            Profile
          </MenuItem>
          <MenuItem onClick={()=>{setShowlogin(true)}} id='myanim' icon={<AiOutlinePoweroff/>}>
            Sign Out
          </MenuItem>
        </Menu>
        
      </Sidebar>
    </ProSidebarProvider>
  )
}

export default SideBar