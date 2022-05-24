import Navbar from "./Navbar";
import "./styles.css";
import {useNavigate, Route, NavLink, BrowserRouter as Router} from 'react-router-dom'
import React, { useState, useMemo, useRef } from 'react'
import "./Homepage-css.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slidercard from './Slidercard.js'


function Homepage({places, setCurrentPlace, currentPlace, setCurrentIndex, currentIndex, lastDirection, setLastDirection,
   setMatches, matches, setCurrentUser, currentUser}) {


  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
  autoplaySpeed: 2000,
   
  };
  return (
  
  <div className="homepage-background">
    <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
    <>
    <div className="tag">
          <h1>Places near you!</h1>
    </div>
      <div className="imgslider">
        <Slider {...settings}>
          {places.map((item) => {
            return(<Slidercard currentUser={currentUser} setCurrentPlace={setCurrentPlace} item={item} setMatches={setMatches} matches={matches} key={item.id}/>)})}
            
        </Slider>
      </div>
          </>
  
    </div>
  )
  }
  
  export default Homepage;
  

//   mport React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import { Frame, useMotionValue, useTransform, useAnimation } from "framer";
  
// // Some styling for the card
// const style = {
//   backgroundImage: "URL(
// https://img.icons8.com/color/452/GeeksforGeeks.png)",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "contain",
//   backgroundColor: "#55ccff",
//   boxShadow: "5px 10px 18px #888888",
//   borderRadius: 10,
//   height: 300,
// };
  
// const App = () => {
//   // To move the card as the user drags the cursor
//   const motionValue = useMotionValue(0);
  
//   // To rotate the card as the card moves on drag
//   const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
  
//   // To decrease opacity of the card when swiped
//   // on dragging card to left(-200) or right(200)
//   // opacity gradually changes to 0
//   // and when the card is in center opacity = 1
//   const opacityValue = useTransform(
//     motionValue,
//     [-200, -150, 0, 150, 200],
//     [0, 1, 1, 1, 0]
//   );
  
//   // Framer animation hook
//   const animControls = useAnimation();
  
//   return (
//     <div className="App">
//       <Frame
//         center
//         // Card can be drag only on x-axis
//         drag="x"
//         x={motionValue}
//         rotate={rotateValue}
//         opacity={opacityValue}
//         dragConstraints={{ left: -1000, right: 1000 }}
//         style={style}
//         onDragEnd={(event, info) => {
//           // If the card is dragged only upto 150 on x-axis
//           // bring it back to initial position
//           if (Math.abs(info.point.x) <= 150) {
//             animControls.start({ x: 0 });
//           } else {
//             // If card is dragged beyond 150
//             // make it disappear
//             // making use of ternary operator
//             animControls.start({ x: info.point.x < 0 ? -200 : 200 });
//           }
//         }}
//       />
//     </div>
//   );
// };
  
// ReactDOM.render(<App />, document.getElementById("root"));





//////////////////////////////// Tinder Homepage below ///////////////

// setCurrentPlace(places[currentIndex])

//   // used for outOfFrame closure
//   const currentIndexRef = useRef(currentIndex)
//   const currentPlaceRef = useRef(currentIndex)

//   // setCurrentPlace(places[currentIndex])
  
//   const childRefs = useMemo(
//     () =>
//       Array(places.length)
//         .fill(0)
//         .map((i) => React.createRef()),
//     []
//   )

//   const updateCurrentIndex = (val) => {
//     setCurrentIndex(val)
//     currentIndexRef.current = val
//   }
//   // const updateCurrentPlace = (val) => {
//   //   setCurrentPlace(val)
//   //   currentPlaceRef.current = val
//   // }

//   const canGoBack = currentIndex < places.length - 1

//   const canSwipe = currentIndex >= 0

//   // set last direction and decrease current index
//   const swiped = (direction, nameToDelete, index) => {
//     setLastDirection(direction)
//     updateCurrentIndex(index - 1)
//     // updateCurrentPlace(index - 1)
//   }

//   const outOfFrame = (name, idx) => {
//     console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
//     // handle the case in which go back is pressed before card goes outOfFrame
//     currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
//     // TODO: when quickly swipe and restore multiple times the same card,
//     // it happens multiple outOfFrame events are queued and the card disappear
//     // during latest swipes. Only the last outOfFrame event should be considered valid
//   }

//   const swipe = async (dir) => {
    
//     if (canSwipe && currentIndex < places.length) {
//       await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
//     }
//   }

//   // increase current index and show card
//   // const goBack = async () => {
//   //   if (!canGoBack) return
//   //   const newIndex = currentIndex + 1
//   //   updateCurrentIndex(newIndex)
//   //   await childRefs[newIndex].current.restoreCard()
//   // }


//   const handleSwipeLeft = () => swipe('left')

//   const handleSwipeRight =() => {
//       swipe('right')
  
//     //   const requestOptions = {
//     //     method: 'POST',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body: JSON.stringify({ user_id: 1, place_id: 1})
//     // };
//     // fetch('/matches', requestOptions)
//     //     .then(response => response.json())
//     //     .then(match => setMatches([...matches, match]));
    
// }



//   console.log(currentPlace)



//     return (
//       <body className="Homepage">
//       <div id="Homepage">
//         <Navbar />
//         <div>
//       <link
//         href='https://fonts.googleapis.com/css?family=Damion&display=swap'
//         rel='stylesheet'
//       />
//       <link
//         href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
//         rel='stylesheet'
//       />
//       <h1>Places near you!</h1>
//       <div className='cardContainer'>
//         {places.map((place, index) => (
//           <TinderCard
//             ref={childRefs[index]}
//             className='swipe'
//             key={place.name}
//             onSwipe={(dir) => swiped(dir, place.name, index)}
//             onCardLeftScreen={() => outOfFrame(place.name, index)}
//             // {setCurrentPlace(place)}
//           >
//             <div
//               style={{ backgroundImage: 'url(' + place.url + ')', width:'500px' }}
//               className='card'
//             >
//               <h3>{place.name}</h3>
//             </div>
//           </TinderCard>
//         ))}
//       </div>
//       <div className='buttons'>
//         <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={handleSwipeLeft}>Swipe left!</button>
//         {/* <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button> */}
//         <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={handleSwipeRight}>Swipe right!</button>
//       </div>
//       {lastDirection ? (
//         <h2 key={lastDirection} className='infoText'>
//           You swiped {lastDirection}
//         </h2>
//       ) : (
//         <h2 className='infoText'>
//           Swipe a card or press a button to get Restore Card button visible!
//         </h2>
//       )}
//     </div>
//         <div className="container">
//           <article>
//             <h1>Places near you! </h1>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text ever
//             since the 1500s, when an unknown printer took a galley of type and
//             scrambled it to make a type specimen book. It has survived not only
//             five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s with
//             the release of Letraset sheets containing Lorem Ipsum passages, and
//             more recently with desktop publishing software like Aldus PageMaker
//             including versions of Lorem Ipsum.
//           </article>
//         </div>
//       </div>
//       </body>
//     );