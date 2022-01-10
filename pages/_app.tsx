// @ts-nocheck
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import config from '../src/aws-exports'
import Amplify from 'aws-amplify'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { SandpackProvider } from '@codesandbox/sandpack-react'
import reactTSCustomSetup from '@utils/reactTSCustomSetup'

Amplify.configure({ ...config })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AmplifyProvider>
      <SandpackProvider template="react-ts" customSetup={reactTSCustomSetup}>
        <Component {...pageProps} />
      </SandpackProvider>
    </AmplifyProvider>
  )
}

export default MyApp
