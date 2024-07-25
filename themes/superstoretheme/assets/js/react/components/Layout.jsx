import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Overview from './Overview.jsx'

function Layout() {
  return (
    <div className="container mb-5 mt-5">
      <Overview />
      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  )
}

export default Layout
