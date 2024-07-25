import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Overview from './Overview.jsx'

function Layout() {
  return (
    <div className="container mb-5 mt-5">
      <Overview />
    </div>
  )
}

export default Layout
