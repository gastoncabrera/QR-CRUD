
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import Lector from './Lector'
import Route from "./Route"
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Lector /> */}
    <Route/>
  </React.StrictMode>,
)
