import { useState } from "react"
import Display from "./Display"



function HogContainer({hogs}){

	const displayHogs = hogs.map((hogs, index)=>{
		return <Display key={index} name={hogs.name} specialty={hogs.specialty} greased={hogs.greased} weight={hogs.weight} image={hogs.image}/>	 
	})

	const [greased, setGreased] = useState(false)
    const [sortBy, setSortBy]= useState("name")

    hogs.sort((a,b)=>{
        const nameA = a[sortBy]; 
        const nameB = b[sortBy]; 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
    });
    console.log(hogs)
        
	const filteredHogs = hogs.filter((hogs)=> hogs.greased === true)

	const Hogs = filteredHogs.map((filteredHogs, index) =>{
		return <Display key={index} name={filteredHogs.name} specialty={filteredHogs.specialty} greased={filteredHogs.greased} weight={filteredHogs.weight} image={filteredHogs.image}/>
	})

	function handleClick(){
		{greased ? setGreased(false) : setGreased(true) }
	}

    return(
        <div>
            <button onClick={handleClick}>{greased ? "Show All" : "Show Greased"}</button>
            <div></div>
            <label>Sort By: </label>
            <button onClick={()=>setSortBy("name")}>Name</button>
            <button onClick={()=>setSortBy("weight")}>Weight</button>
            <div></div>
            <div className="ui link cards">
                {greased ? Hogs : displayHogs}
            </div>
        </div>
    )
}

export default HogContainer