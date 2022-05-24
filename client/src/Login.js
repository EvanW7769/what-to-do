import React, {useState} from "react";
import Navbar from "./Navbar";
import {useNavigate, Route, NavLink, BrowserRouter as Router} from 'react-router-dom'


function Login({currentUser, setCurrentUser}){


    const [authUser, setAuthUser] = useState(null)
    // console.log(currentUser)
    const [errors, setErrors] = useState("")

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/Homepage')
    }

    const goToSignup = () => {
        navigate('/Signup')
    }
    

    const [userTLogin, updateUserToLoginInfo] = useState({

        username: "",
        password: ""
    })
    

    console.log(userTLogin)

    const handleChangeForUserToLogin=(e)=>{

        updateUserToLoginInfo({...userTLogin, [e.target.name]: e.target.value})
    }



    const handleSubmit = (e) => {
        e.preventDefault()


  console.log(currentUser)


        fetch("/login", {

            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify( userTLogin )
          } 
        )
        .then(res => {
            if (res.ok) {
              res.json().then(user => {
                setCurrentUser(user)
                setAuthUser(true)
              })
            } else {
              setCurrentUser({ username: "NA" })
              setAuthUser(false)
            //   history.push('/groups')
              res.json().then(err => {
                setErrors(err)
                alert(`${errors}`)
              })
            }
          })
      }


        /////////////////////////////////////////////////////////
        //   .then( res => {
        //       if (res.ok) {
        //           res.json()
        //           setAuthUser(true)
        //           .then(hopefullyAuser => {
        //             setCurrentUser(hopefullyAuser)  
        //           })
        //       }
        //       else{
              
        //       res.json().then(errors => {
        //           console.error(errors)
        //       })
        //       setAuthUser(false)}}
        //   )
        /////////////////////////////////////////////////////////////

        


    return(
        <div className='login-background'>
        <h1>What to Do</h1>
            {
                authUser ?

                <div className="login">
                    <h1>Welcome {currentUser.name}!</h1> 
                    <button className="continue-button" onClick={goToHome}>Continue</button>
                </div>  
                : 
                <div className="login">
                     <h1>Hi there! Please Log In to Continue</h1>

                     <form onSubmit={handleSubmit} className="login">
                <input type='username' onChange={handleChangeForUserToLogin}
                    name="username" placeholder="username"
                />
                <input type="password" onChange={handleChangeForUserToLogin}
                    name="password" placeholder="password"
                />
                <input type="submit" />
            </form>

            <h3>Not a member yet? Signup here!</h3>
            <button className="continue-button" onClick={goToSignup}>Signup!</button>
                </div>
            }

            
        </div>
    )
}

export default Login