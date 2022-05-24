import React, { useState,useEffect} from "react";
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import './App.css';
import Homepage from './Homepage';
import Matches from './Matches';
import AddPlace from "./AddPlace";
import Login from "./Login";
import Signup from "./Signup";



function App() {

  const [places,setPlaces]=useState([])
  const [currentPlace, setCurrentPlace] = useState([])
  const [currentIndex, setCurrentIndex] = useState(places.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const [currentUser, setCurrentUser] = useState(null)
  const [matchExist, setMatchExist] = useState(false)



  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json',
  //     'X-RapidAPI-Host': 'travel-places.p.rapidapi.com',
  //     'X-RapidAPI-Key': '3002b8baffmsh9c3019a8f496776p1d398cjsnac06bc5b6eba'
  //   },
  //   body: '{"query":"{ getPlaces(categories:[\"NATURE\"],lat:37,lng:-122,maxDistMeters:50000) { name,lat,lng,abstract,distance,categories } }"}'
  // };
  
  // fetch('https://travel-places.p.rapidapi.com/', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));


  // useEffect(
  //   ()=>{
  //     fetch("/userInSession")
  //     .then(r => r.json())
  //     .then(console.log)

  //   }, []
  // )

  useEffect(() => {
    fetch(`/places`)
        .then(res => res.json())
        .then(Places => setPlaces(Places))

    // fetch(`/matches`)
    //     .then(res => res.json())
    //     .then(matches => {
    //       setMatches(matches)
    //       setMatchExist(true)})   
        
    fetch('/userInSession')
        .then(r => r.json())
        .then( userAlreadyLoggedIn =>{
          setCurrentUser(userAlreadyLoggedIn)
        } )
  
      
    }, []);

    console.log(places)


  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
            <Route path="/Signup" element={<Signup />}/>
            <Route path='/Homepage' element={<Homepage places={places} setCurrentPlace={setCurrentPlace} currentPlace={currentPlace} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} 
             lastDirection={lastDirection} setLastDirection={setLastDirection} setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
             <Route path="/matches" element={<Matches currentPlace={currentPlace}/>}/> 
             <Route path="/addPlace" element={<AddPlace setPlaces={setPlaces} places={places}/>}/> 
             
        </Routes>  
    </BrowserRouter>
  )
}

export default App;
