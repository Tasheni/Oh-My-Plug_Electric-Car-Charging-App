import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './Charging.css'
import { Link } from 'react-router-dom'
import charging from './images/charging.jpg'

function Charging() {
return(
    
    <div className='charging'>
        <div className='textBox'>
            <h1>Your car is charging and will stop in</h1>
            <h2>10 Minutes</h2>
            <Link to="/stop-charging">Stop Charging</Link>
        </div>
        <div className='imageBox'>
            <img src={charging} alt="car" />
        </div>
    </div>
    
)
}

export default Charging