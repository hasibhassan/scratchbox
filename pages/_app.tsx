import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

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
