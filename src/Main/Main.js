import React, { useEffect, useState } from "react";
import Launch from "./Launch/Launch"
import FocusLaunch from "./FocusLaunch/FocusLaunch";
import { countdown } from "../utils/countdown";
import "./main.css"

export default function Main() {

    const [launches, setLaunches] = useState([])
    const [focusLaunch, setFocusLaunch] = useState({})

    useEffect( () => {
        fetch("https://api.spacexdata.com/v5/launches/upcoming")
            .then(res => res.json())
            .then(data => {
                let launchData = data
                launchData.sort((a, b) =>{
                    return a.date_unix - b.date_unix
                })
                const filtered = launchData.filter((item) => {
                    console.log(countdown(item.date_utc))
                    return countdown(item.date_utc) != null
                })
                console.log(filtered)
                setFocusLaunch(filtered[0])
                setLaunches(filtered.map((launch) => (
                    <Launch key={launch.id} launch={launch} />
                )))
            })
    }
    ,[])

    console.log(launches)

    return (
        <div id="main">
            <div id="next-launch">
                <h1 className="launch-tag">NEXT LAUNCH</h1>
                {launches.length >= 1 && <FocusLaunch launch={focusLaunch}/>}
            </div>
            <div id="upcoming-launches">
                <h1 className="launch-tag">UPCOMING LAUNCHES</h1>
                <div id="launches">
                    {launches.slice(1, -1)}
                </div>
            </div>
        </div>
    )
}