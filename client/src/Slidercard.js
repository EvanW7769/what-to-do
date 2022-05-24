import React, {useState} from "react";


function Slidercard({setCurrentPlace, item, setMatches, matches, currentUser}){

  const [isClicked, setIsClicked] = useState(false)

  function handleLikeClick(){


  }

  console.log(currentUser)

function handleClick(){

  setIsClicked(true)

  fetch(`placeLikes/${item.id}`, {
    method: "PATCH"})
    .then(res => res.json())
    .then(data=>{
      console.log(data)
    })

     setCurrentPlace(item)
     console.log(item)
             const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: currentUser.id, place_id: item.id})
      };
      fetch('/matches', requestOptions)
          // .then(response => response.json())
          // .then(match => setMatches([...matches, match]));
    
 }


console.log(item.likes)

    return(

        <div key={item.id} className='Slidercard'>
              <img  src={item.url}  alt={item.name} />
              <h3 className="Slidercard-name">{item.name}</h3>
              <h5>Recommendations from other Users:{item.likes}</h5>
               {isClicked ? <button className="Slidercard-button">This place has been added your matches!</button> : <button className="Slidercard-button" onClick={handleClick}>Click to add this place!</button>}
            </div>
    )
}

export default Slidercard