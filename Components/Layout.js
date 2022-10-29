import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Layout = ({ children }) => {
  const [showLayout, setShowLayout] = useState(true)
  const router = useRouter()
  console.log(router.pathname);
  const path = router?.pathname.split('/')
  console.log(path);

  useEffect(() => {
    if ((path.some((path) => path === 'dashboard'))||(path.some((path) => path === 'user-dashboard'))) {
      setShowLayout(false)
    }
    else {
      setShowLayout(true)
    }
  }, [path])


  return (
    <>

      {
        showLayout &&
        <Header />
      }
      {children}

      {
        showLayout &&
        <Footer />
      }
    </>
  )
}

export default Layout