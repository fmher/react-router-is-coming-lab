import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import components, allow other files to have access to data
import House from "./components/House"
import Houses from "./components/Houses"
import Member from "./components/Member"
// import data from gameofthornes.js
import gameOfThrones from './gameOfThrones'

export default function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Houses gotData={gameOfThrones}/>} 
          />
          <Route 
            path="/houses/:id" 
            element={<House gotData={gameOfThrones}/>} 
          />
          <Route 
            path="/houses/:id/members/:memberId" 
            element={<Member gotData={gameOfThrones}/>} 
          />
        </Routes>
      </Router>
    </div>
  )
}