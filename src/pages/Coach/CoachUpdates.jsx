import React from 'react'
import AllNews from './AllNews'
import Notices from './Notices'
import { Navigate,Route,Routes,Outlet,Link } from 'react-router-dom'

const Updates = () => {
  return (
    <div>
      <Link to="allnews">AllNews</Link> |
      <Link to="notices">Notices</Link>
      {/* Nested route*/}
      <Routes>
        
        <Route path="/" element= {<Navigate replace to="allnews"/>}/>
        <Route path="allnews" element={<AllNews/>} />
        <Route path="notices" element={<Notices/>} />
      </Routes>

      {/* Outlet for rendering nested components if needed */}
      <Outlet />
    </div>
  )
}

export default Updates