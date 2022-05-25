import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Placecard from "./Placecard.js"
import "./index.css"

function Matches({currentPlace}){

    const [matches,setMatches]=useState([])

    useEffect(()=>{
        fetch(`/matches`)
        .then(res => res.json())
        .then(matches => {
          setMatches(matches)
          })   
        },[])

    function matchCheck(){
        console.log(matches.length)
     if (matches.length == 0) {
        return false
    }
    else {return true}}

console.log(matches)
    return(
        <div className="homepage-background">
        <Navbar/>
        {matchCheck() ? 
         (<ul className="Mcards">
            {matches.map((match) => {
                console.log(match)
                 return(
                    <Placecard match={match}/>)
                      })}
            </ul>)
            :
            (<h1 className="matchgreeting">You dont have any matches yet! Try going back to to the home page and adding locations that interest you to see them here.</h1>)}
        </div>
    )
}

export default Matches


