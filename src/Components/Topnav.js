import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

function Topnav() {
    const[current, setCurrent] = useState('')
    const setHome = () => {
        setCurrent('/')
    }
    const setBuild = () => {
        setCurrent('/build')
    }
    const setReviews = () => {
        setCurrent('/reviews')
    }
    const setFaq = () => {
        setCurrent('FAQ')
    }
    useEffect(() => {
        setCurrent(window.location.pathname)
    }, [])

    return (
        <nav className="nav">
            <div className="container">
                <h1 className="logo"><Link to='/' onClick={setHome}>Build-A-PC</Link></h1>
                <ul>
                    <li><Link to='/' className={current === '/' ? "current" : null} onClick={setHome}>Home</Link></li>
                    <li><Link to='/build' className={/^\/build\/?$/.test(current) ? "current" : null} onClick={setBuild}>Build</Link></li>
                    <li><Link to='/reviews' className={/^\/reviews\/?$/.test(current) ? "current" : null} onClick={setReviews}>Reviews</Link></li>
                    <li><Link to='/FAQ' className={/^\/faq\/?$/.test(current) ? "current" : null} onClick={setFaq}>FAQ</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Topnav