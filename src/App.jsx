import SignIn from './components/SignIn'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import './index.css'
//import { useSelector } from 'react-redux'
import Home from './components/Home'
function App() {
 // const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated)
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/home" element={< Home/>} />
    <Route path="/signup" element={< Signup/>} />
      <Route path="*" element={< SignIn/>} />
    </Routes>
  
  </BrowserRouter>
  )
}

export default App
