import React, {useState} from "react";


function Filter(){

const [filter, setFilter] = useState("all")
const [allPlaces, setAllPlaces] = useState([])

const updateFilter = (e.target.value) =>{

    setFilter(e.target.value)
}

    return(
            <div>
                <label>
                    <strong>Filter:</strong>
                    <select onChange={(e) => updateFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="museum">Museums</option>
                        <option value="monument"></option>
                        <option value="park"></option>
                        <option value="battlefield"></option>
                        <option value="restaurant"></option>
                        <option value="bar"></option>
                    </select>
                </label>
            </div>

    )
}

export default Filter