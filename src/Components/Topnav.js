import React from "react"
import { Link } from 'react-router-dom'

function Topnav(props) {
    const setHome = () => {
        props.setWhere('home')
    }
    const setBuild = () => {
        props.setWhere('build')
    }
    const setReviews = () => {
        props.setWhere('reviews')
    }
    const setFaq = () => {
        props.setWhere('FAQ')
    }

    return (
        <nav className="nav">
            <div className="container">
                <h1 className="logo"><Link to='/' onClick={setHome}>Build-A-PC</Link></h1>
                <ul>
                    <li><Link to='/' className={props.where === 'home' ? "current" : null} onClick={setHome}>Home</Link></li>
                    <li><Link to='/build' className={props.where === 'build' ? "current" : null} onClick={setBuild}>Build</Link></li>
                    <li><Link to='/reviews' className={props.where === 'reviews' ? "current" : null} onClick={setReviews}>Reviews</Link></li>
                    <li><Link to='/FAQ' className={props.where === 'FAQ' ? "current" : null} onClick={setFaq}>FAQ</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Topnav