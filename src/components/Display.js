import { useState } from "react"
import Detail from "./Detail"

function Display({name, specialty, greased, weight, image}){

    const [detail, setDetail] = useState(false)

    function handleClick(){
        {detail ? setDetail(false) : setDetail(true)} 
    }

    return (
        <div className="card" onClick={handleClick}>
            <div className="image" >
                <img src={image} alt="pig"/>
            </div>
            <div>{name}</div>
            {detail ? <Detail specialty={specialty} greased={greased} weight={weight}/> : <></> }
        </div>
    )
}

export default Display