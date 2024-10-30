import React from 'react'
import { Link,Route,Routes,Outlet, Navigate,  } from 'react-router-dom'
import BasicInfo from './BasicInfo'
import Wearables from './Wearables'
import Injuries from './Injuries'
const Health = () => {
  return (
    <div>
      <Link to="info">BasicInfo</Link> 
      <Link to="wearable">Wearable</Link>
      <Link to="injures">Injures</Link>
      {/* Nested route*/}
      <Routes>
        
        <Route path="/" element= {<Navigate replace to="info"/>}/>
        <Route path="info" element={<BasicInfo />} />
        <Route path="wearable" element={<Wearables />} />
        <Route path="injures" element={<Injuries />} />
      </Routes>

      {/* Outlet for rendering nested components if needed */}
      <Outlet />
    </div>
  )
}

export default Health