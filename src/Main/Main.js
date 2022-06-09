import React, { useEffect, useState } from "react";
import Launch from "./Launch/Launch"
import FocusLaunch from "./FocusLaunch/FocusLaunch";
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
                setFocusLaunch(launchData[0])
                setLaunches(launchData.map((launch) => (
                    <Launch key={launch.id} launch={launch} />
                )))
            })
    }
    ,[])

    console.log(launches)

    return (
        <div id="main">
            {launches.length >= 1 && <FocusLaunch launch={focusLaunch}/>}
            <div id="launches">
                {launches.slice(1, -1)}
            </div>
        </div>
    )
}