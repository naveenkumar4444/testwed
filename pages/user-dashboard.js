import Header from '../Components/Dashboard/Header'
import Styles from '../styles/Dashboard/Dashboard.module.css'
import { useEffect, useState } from 'react'
import Sidebar from '../Components/Dashboard/Sidebar'
import MainDashboard from '../Components/Dashboard/MainDashboard'

const UserDashboard = () => {
  const [headerHeight, setHeaderHeight] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className={`${Styles.dashboard_container} bg-grey`} >
      <Header setHeaderHeight={setHeaderHeight} />
      <div className="main_dashboard position-relative" style={{ marginTop: `${headerHeight}px` }} >
        <Sidebar headerHeight={headerHeight} />
        <div className={`${Styles.main_content} ms-auto`} style={{ transition: 'all 450ms', width: isSidebarOpen ? '80%' : '100%' }} >
          <MainDashboard />
        </div>
      </div>
    </div>
  )
}

export default UserDashboard