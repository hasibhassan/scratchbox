import Split from 'react-split'
import { SandpackThemeProvider } from '@codesandbox/sandpack-react'
import '@codesandbox/sandpack-react/dist/index.css'
import Editor from '@ui/Editor'
import Preview from '@ui/Preview'
import Prettier from '@ui/Prettier'

export default function IDE() {
  return (
    <SandpackThemeProvider theme={'github-light'}>
      <Prettier />
      <Split className="split" minSize={200}>
        <Editor />
        <Preview />
      </Split>
    </SandpackThemeProvider>
  )
}
