import React, { useState } from "react"
import { Routes, Route } from 'react-router-dom'
import Topnav from "./Components/Topnav"
import Home from "./Pages/Home"
import Build from "./Pages/Build"
import Faq from "./Pages/Faq"
import Reviews from "./Pages/Reviews"

function App() {
    const [where, setWhere] = useState('home')

    return (
        <div className="app">
            <Topnav where={where} setWhere={setWhere}/>
            <Routes>
                <Route path="/" element={<Home setWhere={setWhere}/>}></Route>
                <Route path="/build" element={<Build/>}></Route>
                <Route path="/reviews" element={<Reviews/>}></Route>
                <Route path="/FAQ" element={<Faq/>}></Route>
            </Routes>
        </div>
    )
}

export default App