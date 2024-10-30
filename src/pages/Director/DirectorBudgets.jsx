import React from 'react'
import { Link,Route,Routes, Navigate,  } from 'react-router-dom'
import Dashboard from './Dashboard'
import Fund from './Fund'

const Budgets = () => {
  return (
    <div>
      <Link to="dashboard">Dashboard</Link> |
      <Link to="fund">Fund</Link>
      {/* Nested route*/}
      <Routes>
        
        <Route path="/" element= {<Navigate replace to="dashbord"/>}/>
        <Route path="dashbord" element={<Dashboard/>} />
        <Route path="fund" element={<Fund/>} />
      </Routes>
    </div>
  )
}

export default Budgets