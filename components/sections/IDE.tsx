import Split from 'react-split'
import {
  SandpackProvider,
  SandpackThemeProvider,
} from '@codesandbox/sandpack-react'
import '@codesandbox/sandpack-react/dist/index.css'
import Editor from '@ui/Editor'
import Preview from '@ui/Preview'
import reactTSCustomSetup from '@utils/reactTSCustomSetup'

export default function IDE() {
  return (
    <SandpackProvider template="react-ts" customSetup={reactTSCustomSetup}>
      <SandpackThemeProvider theme={'github-light'}>
        <Split className="split" minSize={200}>
          <Editor />
          <Preview />
        </Split>
      </SandpackThemeProvider>
    </SandpackProvider>
  )
}
