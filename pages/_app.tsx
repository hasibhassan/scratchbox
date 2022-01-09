import '../styles/globals.css'
import type { AppProps } from 'next/app'
import config from '../src/aws-exports'
import Amplify from 'aws-amplify'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure({ ...config })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AmplifyProvider>
      <Component {...pageProps} />
    </AmplifyProvider>
  )
}

export default MyApp
