import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,224L30,218.7C60,213,120,203,180,165.3C240,128,300,64,360,85.3C420,107,480,213,540,218.7C600,224,660,128,720,117.3C780,107,840,181,900,181.3C960,181,1020,107,1080,74.7C1140,43,1200,53,1260,58.7C1320,64,1380,64,1410,64L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg><div className="header">
            <div className="header-right">
                <Link to="/">Home</Link>
                <Link to="/Chargers">Chargers</Link>
                <Link to="/login">Login</Link>
            </div>
        </div></>
    )
}

export default Header