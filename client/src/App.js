import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import './App.css';
import Homepage from './Homepage';
import Matches from './Matches';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
             <Route path="/matches" element={<Matches/>}/> 
            
        </Routes>  
    </BrowserRouter>
  )
}

export default App;
