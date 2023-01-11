
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { render } from "react-dom";

import Lector from './Lector'
import Route from "./Route"
import './index.css'


const root = document.getElementById("root");
render(<Route />, root);