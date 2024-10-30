import React from 'react'
import { Link,Route,Routes, Navigate, Outlet,  } from 'react-router-dom'
import Calender from './Calender'
import Allevents from "./Allevents";
const Events = () => {
  return (
    <div>
      <Link to="calender">Calender</Link>   |   
      <Link to="allevents">Allevents</Link>
      {/* Nested route*/}
      <div>
      <Routes>
        
        <Route path="/" element= {<Navigate replace to="calender"/>}/>
        <Route path="calender" element={<Calender />} />
        <Route path="allevents" element={<Allevents />} />
      </Routes>
</div>
    </div>
  )
}

export default Events