import { useCallback, useEffect, useState } from 'react'
import { useActiveCode, useSandpack } from '@codesandbox/sandpack-react'
import prettier from 'prettier'
import parserBabel from 'prettier/parser-babel'
import { Auth } from 'aws-amplify'
import updateCode from '@utils/updateCode'
import defaultCode from '@utils/defaultCode'

export default function Prettier() {
  const [prettierCode, setPrettierCode] = useState('')
  const { sandpack } = useSandpack()
  const activeCode = useActiveCode()

  const runPrettier = useCallback(() => {
    if (activeCode.code) {
      if (Auth.currentAuthenticatedUser()) {
        console.log(
          'running prettier inside the Auth.currentAuthenticatedUser() guard'
        )
        const user = Auth.currentAuthenticatedUser()
        user.then((user) => {
          console.log('user is: ', user)

          // put graphql mutation here
          updateCode(user.username, activeCode.code)
        })

        try {
          // try refactoring this process to run in a Worker
          const formattedCode = prettier.format(activeCode.code, {
            parser: 'babel',
            plugins: [parserBabel],
          })

          setPrettierCode(formattedCode)
        } catch {}
      } else {
        try {
          // try refactoring this process to run in a Worker
          const formattedCode = prettier.format(activeCode.code, {
            parser: 'babel',
            plugins: [parserBabel],
          })

          setPrettierCode(formattedCode)
        } catch {}
      }
    }
  }, [activeCode.code])

  useEffect(() => {
    const debounce = setTimeout(runPrettier, 1500)
    return () => {
      clearInterval(debounce)
    }
  }, [runPrettier])

  useEffect(() => {
    if (prettierCode) {
      sandpack.updateFile(sandpack.activePath, prettierCode)
    }
  }, [prettierCode])

  return null
}
