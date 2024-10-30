import React from 'react'
import { Link,Route,Routes,Outlet, Navigate,  } from 'react-router-dom'
import Dashbord from './Dashbord'
import Awards from './Awards'

const Performance = () => {
  return (
    <div>
    <Link to="dashboard">Dashboard</Link> 
    <Link to="awards">Awards</Link>
    {/* Nested route*/}
    <Routes>
      
      <Route path="/" element= {<Navigate replace to="dashbord"/>}/>
      <Route path="dashboard" element={<Dashbord/>} />
      <Route path="awards" element={<Awards/>} />
    </Routes>

    {/* Outlet for rendering nested components if needed */}
    <Outlet />
  </div>
  )
}

export default Performance