import React from "react"
import { Link } from 'react-router-dom'

function Home(props) {
    const setBuild = () => {
        props.setWhere('build')
    }

    return (
        <main className="home">
            <div className="intro">
                <h1>Let's Build.</h1>
                <h2>Custom PC Builds for all budgets & needs.</h2>
                <p>Build-A-PC has been building custom computers since 1996. From Gaming and Streaming to editing and entertainment, you can trust our team to deliver you the perfect PC based on your needs</p>
            </div>
            <Link to='/build' className="start" onClick={setBuild}>Start Building</Link>
        </main>
    )
}

export default Home