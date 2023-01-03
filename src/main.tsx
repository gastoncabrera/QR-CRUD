
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { render } from "react-dom";

import Lector from './Lector'
import Route from "./Route"
import './index.css'


// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <Lector /> */}
//     <Route/>
//   </React.StrictMode>,
// )


const root = document.getElementById("root");
render(<Route />, root);