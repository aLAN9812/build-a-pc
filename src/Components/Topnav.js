import { Link } from 'react-router-dom'

function Topnav() {
    return (
        <nav className="nav">
            <div className="container">
                <h1 className="logo"><Link to='/'>Build-A-PC</Link></h1>
                <ul>
                    <li><Link to='/' className="current">Home</Link></li>
                    <li><Link to='/build'>Build</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>
                    <li><Link to='/FAQ'>FAQ</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Topnav