import React from 'react'
import { Link,Route,Routes,Outlet, Navigate,  } from 'react-router-dom'
import Calender from './Calender'
import Allevents from "./Allevents";
const Training = () => {
  return (
    <div>
      <Link to="calender">Calender</Link> |
      <Link to="allevents">Allevents</Link>
      {/* Nested route*/}
      <Routes>
        
        <Route path="/" element= {<Navigate replace to="calender"/>}/>
        <Route path="calender" element={<Calender />} />
        <Route path="allevents" element={<Allevents />} />
      </Routes>

      {/* Outlet for rendering nested components if needed */}
      <Outlet />
    </div>
  )
}

export default Training