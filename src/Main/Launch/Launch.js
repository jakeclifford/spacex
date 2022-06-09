import React, { useEffect, useState } from "react"
import { countdown } from "../../utils/countdown"
import "./launch.css"
import placeholder from "./X.svg"

export default function Launch(props){
    const {launch} = props

    const [countdownTime, setCountdownTime] = useState(countdown(launch.date_utc))

    useEffect(() => {
        setTimeout(() => {
            setCountdownTime(countdown(launch.date_utc))
        }, 1000)
    },[countdownTime])

    const launchimage = launch.links.patch.small ?
        launch.links.patch.small : placeholder

    return (
        <div className="launch">
            <div>
                <h1>{launch.name}</h1>
                <h3>{countdownTime}</h3>
            </div>
            <img className="launch-image" src={launchimage}></img>
        </div>
    )
}