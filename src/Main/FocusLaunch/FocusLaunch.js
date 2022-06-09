import React, {useEffect, useState} from "react";
import { countdown } from "../../utils/countdown";
import Placeholder from "./X.svg"
import "./FocusLaunch.css"

export default function FocusEvent(props){
    const { launch } = props
    console.log(launch)

    const [countdownTime, setCountdownTime] = useState(countdown(launch.date_utc))

    useEffect(() => {
        setTimeout(() => {
            setCountdownTime(countdown(launch.date_utc))
        }, 1000)
    },[countdownTime])

    return (
        <div className="focus-launch">
            <div>
                <h1>{launch.name}</h1>
                <h3>{countdownTime}</h3>
            </div>
            <img className="launch-image" src={Placeholder}></img>
        </div>
    )
}