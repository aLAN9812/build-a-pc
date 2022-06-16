import React from "react"
import { Routes, Route } from 'react-router-dom'
import Topnav from "./Components/Topnav"
import Home from "./Pages/Home"
import Build from "./Pages/Build"
import Faq from "./Pages/Faq"
import Reviews from "./Pages/Reviews"

function App() {
    
    return (
        <div className="app">
            <Topnav/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/build" element={<Build/>}></Route>
                <Route path="/reviews" element={<Reviews/>}></Route>
                <Route path="/faq" element={<Faq/>}></Route>
            </Routes>
        </div>
    )
}

export default App