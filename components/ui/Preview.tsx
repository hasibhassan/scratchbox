import { SandpackPreview } from '@codesandbox/sandpack-react'

export default function Preview() {
  return (
    <SandpackPreview
      customStyle={{ height: '95vh' }}
      showOpenInCodeSandbox={false}
      showRefreshButton
    />
  )
}
