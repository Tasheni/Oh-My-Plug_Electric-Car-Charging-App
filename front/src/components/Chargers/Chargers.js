
import wallBox from './imagesChargers/wallBox.png'
import './Chargers.css'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Chargers() {

    const navigate = useNavigate()
    let [watts, setWatts] = useState("");
    let [type, setType] = useState("");
    let [chargers, setChargers] = useState(null)
    let [time, setTime] = useState(0)

    useEffect(() => {
        firstAPICall()
    }, [])

    function firstAPICall() {
        fetch('http://localhost:8000/chargers')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setChargers(res)
            })
    }

    function bookCharger(charger) {
        let body = {
            status: false
        }

        fetch(`http://localhost:8000/status/${charger._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                navigate(`/charging`)
                firstAPICall()
            })
    }

    // function searchByWatts() {
    //     fetch('http://localhost:8000/chargers/watts/' + watts)
    //         /*  method: 'GET',
    //          headers: {
    //              'content-Type': 'application/json',
    //          },
    //          body: JSON.stringify(body)
    //      }) */
    //         .then(res => res.json())
    //         .then(res => console.log(res))
    // }

    return (
        <><div className='chargers'>
            {/* <div className="search">
                <input value={watts} onChange={(e) => setWatts(e.target.value)} type="text" className="searchTerm" placeholder="Search for charger by watts or charger type" />
                <button onClick={searchByWatts} type="submit" className="searchButton">search</button>
            </div> */}
            {chargers != null ?
                chargers.map(charger => {
                    return (

                        <div className="row1">
                            <div className="containerCharger1">
                                <div>
                                    <img src={wallBox} alt="charger1" />
                                </div>
                                <div>
                                    <h1><b>Charging Unit</b></h1>
                                    <p>Location: {charger.location}</p>
                                    <p>Status: {charger.status}</p>
                                    <p>Charger Type: {charger.ChargerType}</p>
                                    <p>Watts: {charger.watts}</p>
                                    <label htmlFor="time">Time:</label>
                                    <select id="time" onChange={(e) => setTime(e.target.value)}>
                                        <option value={10}>10'</option>
                                        <option value={20}>20'</option>
                                        <option value={30}>30'</option>
                                        <option value={60}>1 Hour</option>
                                    </select>
                                    <button disabled={charger.status === "booked" ? true : false} onClick={() => bookCharger(charger)}>{ }Start Charging</button>
                                </div>
                            </div>
                        </div>
                    )
                })
                : <></>}

            {/* <div className="containerCharger2">
                <div>
                    <img src={wallBox} alt="charger2" />
                </div>
                <div>
                    <h1><b>Unit 2</b></h1>
                    <p>Location:</p>
                    <p>Status:</p>
                    <p>Charger Type:</p>
                    <p>Watts:</p>
                    <label htmlFor="time">Time:</label><select id="time">
                        <option value="10mins">10'</option>
                        <option value="20mins">20'</option>
                        <option value="30mins">30'</option>
                        <option value="1hour">1 Hour</option>
                    </select>
                    <button>Select</button>
                </div>
            </div>
        </div>

            <div className="row2">
                <div className="containerCharger3">
                    <div>
                        <img src={wallBox} alt="charger3" />
                    </div>
                    <div>
                        <h1><b>Unit 3</b></h1>
                        <p>Location:</p>
                        <p>Status:</p>
                        <p>Charger Type:</p>
                        <p>Watts:</p>
                        <label htmlFor="time">Time:</label><select id="time">
                            <option value="10mins">10'</option>
                            <option value="20mins">20'</option>
                            <option value="30mins">30'</option>
                            <option value="1hour">1 Hour</option>
                        </select>
                        <button>Select</button>
                    </div>
                </div>

                <div className="containerCharger4">
                    <div>
                        <img src={wallBox} alt="charger4" />
                    </div>
                    <div>
                        <h1><b>Unit 4</b></h1>
                        <p>Location:</p>
                        <p>Status</p>
                        <p>Charger Type</p>
                        <p>Watts</p>
                        <label htmlFor="time">Time:</label><select id="time">
                            <option value="10mins">10'</option>
                            <option value="20mins">20'</option>
                            <option value="30mins">30'</option>
                            <option value="1hour">1 Hour</option>
                        </select>
                        <button>Select</button>
                    </div>
                </div>
            </div> */}
        </div>

        </>
    )

}

export default Chargers