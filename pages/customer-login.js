import React from 'react'
import Styles from '../styles/Auth/Auth.module.css'
import AuthForm from '../Components/Auth/AuthForm'

const CustomerRegister = () => {
  return (
    <div className={Styles.auth_container}>
      <AuthForm form='vendorLogin' loginPagename= 'customer' />
    </div>
  )
}

export default CustomerRegister