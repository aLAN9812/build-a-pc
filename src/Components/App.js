import React, { useState } from "react"
import { Routes, Route } from 'react-router-dom'
import Topnav from "./Topnav"
import Home from "./Home"
import Build from "./Build"
import Faq from "./Faq"

function App() {
    const [where, setWhere] = useState('home')

    return (
        <div className="app">
            <Topnav where={where} setWhere={setWhere}/>
            <Routes>
                <Route path="/" element={<Home setWhere={setWhere}/>}></Route>
                <Route path="/build" element={<Build/>}></Route>
                <Route path="/reviews"></Route>
                <Route path="/FAQ" element={<Faq/>}></Route>
            </Routes>
        </div>
    )
}

export default App