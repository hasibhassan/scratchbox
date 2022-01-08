import '../styles/globals.css'
import type { AppProps } from 'next/app'
import config from '../src/aws-exports'
import Amplify from 'aws-amplify'
import { useState, useEffect } from 'react'

Amplify.configure({ ...config })

function MyApp({ Component, pageProps }: AppProps) {
  // const [isAuth, setIsAuth] = useState()

  // useEffect(() => {
  //   const checkIsAuth = async () => {
  //     try {
  //       await Auth.currentAuthenticatedUser()
  //       setIsAuth(true)
  //     } catch (err) {
  //       setIsAuth(false)
  //     }
  //   }

  //   checkIsAuth()
  // }, [])
  return <Component {...pageProps} />
}

export default MyApp
