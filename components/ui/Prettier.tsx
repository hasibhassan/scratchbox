import { useCallback, useEffect, useState } from 'react'
import { useActiveCode, useSandpack } from '@codesandbox/sandpack-react'
import prettier from 'prettier'
import parserBabel from 'prettier/parser-babel'

export default function Prettier() {
  const [prettierCode, setPrettierCode] = useState('')
  const { sandpack } = useSandpack()
  const activeCode = useActiveCode()

  const runPrettier = useCallback(() => {
    if (activeCode.code) {
      try {
        /**
         * I would recomend to run this process in a Worker
         */
        const formattedCode = prettier.format(activeCode.code, {
          parser: 'babel',
          plugins: [parserBabel],
        })

        setPrettierCode(formattedCode)
      } catch {}
    }
  }, [activeCode.code])

  useEffect(() => {
    const debounce = setTimeout(runPrettier, 1000)
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
