import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import inject from "@stylexjs/dev-runtime";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
inject({
  classNamePrefix: 'x',
  dev: true,
  test: true
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
