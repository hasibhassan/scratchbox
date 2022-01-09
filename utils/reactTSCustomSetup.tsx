import { SandpackSetup } from '@codesandbox/sandpack-react'
import defaultCode from '@utils/defaultCode'

const reactTSCustomSetup: SandpackSetup = {
  entry: '/src/index.tsx',
  main: '/src/App.tsx',
  files: {
    './tsconfig.json': {
      code: `{
  "include": [
    "./src/**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [
      "dom",
      "es2015"
    ],
    "jsx": "react"
  }
  }`,
      hidden: true,
    },
    '/public/index.html': {
      code: `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  </head>
  <body>
  <div id="root"></div>
  </body>
  </html>`,
      hidden: true,
    },
    '/src/index.tsx': {
      code: `import * as React from "react";
  import { render } from "react-dom";
  import { App } from "./App";
  const rootElement = document.getElementById("root");
  render(<App/>, rootElement);
          `,
      hidden: true,
    },
    '/src/App.tsx': {
      code: defaultCode,
    },
  },
}

export default reactTSCustomSetup
