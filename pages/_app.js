import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import Layout from '../Components/Layout'
import Dashboard from './dashboard';
import { Provider } from 'react-redux';
import { useState, useEffect } from 'react'
import { store } from '../redux/store'


function MyApp({ Component, pageProps }) {




  return (

    <Provider store={store} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  )



}

export default MyApp
