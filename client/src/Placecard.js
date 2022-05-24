import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function Placecard ({match}){

    console.log(match)

    function handleDelete(){
   
        fetch(`/deleteMatch/${match.id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data=>{
              
              console.log(data)
              window.location.reload(false)
            })
    }

    function handleReccomend(){
      fetch(`placeLikes/${match.place.id}`, {
        method: "PATCH"})
        .then(res => res.json())
        .then(data=>{
          console.log(data)
        })


    }
    return(
<Card className="Mcard" border="primary" style={{ width: '28rem', height:'36rem'}}>
  <Card.Img className="Mcard" variant="fluid" src={match.place.url}  />
  <Card.Body>
    <h2>{match.place.name}</h2>
    <Card.Text>
   {match.place.description}
   <p></p>
   <p></p>
   <span className="address"> {match.place.address}</span>
    </Card.Text>
    <Button onClick={handleDelete} type='submit' variant="primary">Remove Match</Button>
    <Button onClick={handleReccomend} type='submit' variant="primary">Recommend this place</Button>


                  {/* <h4>Reccomendations: {item.reccomendation}</h4> */}
              {/* <button className="Slidercard-button" onClick={handleLikeClick}>Click to recommend this place!</button> */}
  </Card.Body>
</Card>
    )
}

export default Placecard