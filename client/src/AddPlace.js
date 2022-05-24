import React, {useState} from "react";
import Navbar from "./Navbar";

function AddPlace({setPlaces, places}){

  console.log(places)

  const [newName, setNewName] = useState("")
  const [newUrl, setNewUrl] = useState("")
  const [newAddress, setNewAddress] = useState("")
  const [newDescription, setNewDescription] = useState("")

  const [newPlace, setNewPlace] = useState({name:"", address: "", description: "", url: "", likes: 0})

  const handleNameChange = (e) => {
    console.log(e.target.value)
      setNewPlace({...newPlace, name: e.target.value});
  }

  const handleUrlChange = (e) => {
      setNewPlace({...newPlace, url: e.target.value});
  }
  const handleAddressChange = (e) => {
    setNewPlace({...newPlace, address: e.target.value});
}
const handleDescriptionChange = (e) => {
  setNewPlace({...newPlace, description: e.target.value});
}

  const handleSubmit = (e) => {
      //  const data = {name: newName, url: newUrl, address: newAddress, description: newDescription}
      //  console.log(data)
    
      // fetch("/places", {
      //     method: 'POST',
      //     headers: {
      //       'Content_Type': "application/json",
      //       body: JSON.stringify(newPlace)
      //   }
      // })
      fetch("/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlace),
    })
   .then(res=>res.json())
   .then(newPlace=>{
     setPlaces([...places, newPlace])

   }) }
  
    return (
        <>
        <Navbar/>
      <form className='form' onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" required value={newPlace.name} onChange={handleNameChange} name="name" placeholder="Enter location name here"/>
                <label>Picture Url:</label>
                <input type="url" required value={newPlace.url} onChange={handleUrlChange} name="url" placeholder="Enter a full picture url here"/>
                <label>Address:</label>
                <input type="address" required value={newPlace.address} onChange={handleAddressChange} name="address" placeholder="Enter location address here"/>
                <label>Description:</label>
                <input type="description" required value={newPlace.description} onChange={handleDescriptionChange} name="description" placeholder="Enter a brief description here"/>
                <input className='navbuttons' type="submit" value="Add Location"/>
            </form>
      </>
    )
  }

export default AddPlace