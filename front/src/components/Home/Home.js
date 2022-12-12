import './Home.css';
import { Link } from 'react-router-dom';
import hmm from './images/hmm.jpg'
import blue from './images/blue.jpg'
import yellow from './images/yellow.jpg'

function Home(){
return(
    <>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L30,181.3C60,171,120,149,180,165.3C240,181,300,235,360,218.7C420,203,480,117,540,90.7C600,64,660,96,720,122.7C780,149,840,171,900,192C960,213,1020,235,1080,256C1140,277,1200,299,1260,298.7C1320,299,1380,277,1410,266.7L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg> */}
    <div className='content'>
        <div className='textBox'>
            <h1>Oh My Plug!</h1>
            <h2>The Best Place To Get Plugged!</h2>
            <p>Have you ever wanted to charge your car, found the spot occupied and waited around hopping your chance would be next? Well, uncertainity over here, Our application specifies the actual time one decides to charge their car. That way, you know how long it will take to have your turn.</p>
            <Link to="/login">login</Link>
        </div>
        <div className='imageBox'>
            <img src={blue} alt="car" />
        </div>
    </div></>
    
)
}

export default Home