import React from "react"
import { Routes, Route } from 'react-router-dom'
import Topnav from "./Topnav"
import Home from "./Home"
import Build from "./Build"

function App() {
    return (
        <div className="app">
            <Topnav/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/build" element={<Build/>}></Route>
                <Route path="/reviews"></Route>
                <Route path="/FAQ"></Route>
            </Routes>
        </div>
    )
}

export default App