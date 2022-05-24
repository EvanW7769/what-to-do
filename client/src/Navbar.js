import { useState } from "react";
import "./navbar.css";
import {useNavigate, Route, NavLink, BrowserRouter as Router} from 'react-router-dom'
import { Button} from 'react-bootstrap';


export default function Navbar({setCurrentUser, currentUser}) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const navigate = useNavigate();

  const goToMatches = () => {
      navigate('/matches')
  }

  const goToHome = () => {
    navigate('/Homepage')
}

const goToAddPlace =() =>{
  navigate('/addPlace')
}

const goToLogin = ()=>{
  navigate('/')
}

const handleLogout =()=>{

  fetch("/logout", {method: "DELETE"})
  .then(r => r.json())
  .then( deleteResponse => {setCurrentUser(null)})

 goToLogin()

}

  return (
    <nav className="navigation">
      <a href="/Homepage" className="brand-name">
        What to Do
      </a>
      {/* <a>Hey there {currentUser.name}, swipe through the locations and pick the ones you're interested in</a> */}
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Button className='navbuttons' onClick={goToHome}>Home</Button>
          </li>
          <li>
            <Button className='navbuttons' onClick={goToMatches}>Matches</Button>
          </li>
          <li>
          <Button className='navbuttons' onClick={goToAddPlace}>Add Location</Button>

          </li>
          <li>
          <Button className='navbuttons' onClick={handleLogout}>Log Out</Button>

          </li>
        </ul>
      </div>
    </nav>
  );
}