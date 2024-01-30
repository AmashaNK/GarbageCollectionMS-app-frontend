import React from 'react'
import { Box } from '@mui/material'
import SideBar from '../../Sidebar'
import Header from '../../Header'
import Footer from '../../Footer'
import SideNavbar from '../../SideNavbar'

const Dashboard = () => {
  return (
    <Box sx={{}}>
      <Header />
      {/* <SideNavbar /> */}
      <div className="PageContent" style={{ width: '100%' }}>

      </div>
      <Footer />
    </Box>
  )
}

export default Dashboard
