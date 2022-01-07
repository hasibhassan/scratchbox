import { SandpackSetup } from '@codesandbox/sandpack-react'

const mainFile = `export const App = () => {
  return (
    <div>
      <h2>Click me</h2>
      <button onClick={() => alert('Hello World!')}>Alert</button>
    </div>
  )
}`

const styleSheet = `h2 {
  color: blue;
}`

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
  import './App.css';
  const rootElement = document.getElementById("root");
  render(<App/>, rootElement);
          `,
      hidden: true,
    },
    '/src/App.tsx': {
      code: mainFile,
    },
    '/src/App.css': {
      code: styleSheet,
    },
  },
}

export default reactTSCustomSetup
