import React, { useState } from 'react';
import {useNavigate, Route, NavLink, BrowserRouter as Router} from 'react-router-dom'

function Signup() {


  const navigate = useNavigate();

  const goToLogin = () => {
      navigate('/')
  }

  const [confPassword, setConfPassword] =useState('')
  const [newUser, setNewUser] = useState({

    name:     "",
    username: "",
    email:    "",
    password: ""

})


const handleNewUserInfo=(e)=>{

    setNewUser({...newUser, [e.target.name]: e.target.value})
}

const handleConfPassword=(e)=>{
  setConfPassword(e.target.value)
}

 
  // const handleChange = (e) => {
  //   setName(e.target.value);
  // }

  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // }

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // }
 
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // }

  // const handleConfPasswordChange = (e) => {
  //   setConfPassword(e.target.value);
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newUser.password)
    console.log(e)
    console.log(confPassword)

    if (newUser.password !== confPassword) {
      console.log("Password Not Match");
    } 
    
    else {
      fetch("/createNewUser", {

        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify( newUser )
      } 
      )
      .then( r => r.json())
      .then(newestUser=> console.log(newestUser)
      )
    e.preventDefault();
    alert("Thank you for signing up! You will now be redirected to the Sign In page.")
    goToLogin()}
  }
  
  return (
    <div className="Signup">
      <header className="Signup-header">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h2> What to Do</h2>
          <h4> Sign-up Form </h4>
          <label >
            Name:
          </label><br />
          <input type="text" name='name' onChange={ handleNewUserInfo } /><br />
          <label>
            Username:
          </label><br />
          <input type="username" name='username' onChange={handleNewUserInfo} /><br />
          <label>
            Email:
          </label><br />
          <input type="email" name='email' onChange={handleNewUserInfo} /><br />
          <label>
            Password:
          </label><br />
          <input type="password" name='password' onChange={handleNewUserInfo } /><br />
          <label>
            Confirm Password:
          </label><br />
          <input type="password" name='confPassword' onChange={handleConfPassword} /><br />
          <input type="submit"/>
        </form>
      </header>
    </div>
  );
}

export default Signup
