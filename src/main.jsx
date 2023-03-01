import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/AuthContext";

const rootContainer = document.getElementById('root')
const root = ReactDOM.createRoot(rootContainer)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserContextProvider>
                <App />
            </UserContextProvider>
        </BrowserRouter>
    </React.StrictMode>
)