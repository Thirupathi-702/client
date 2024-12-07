import { useDispatch, useSelector } from "react-redux"
import { logout } from "../utils/authSlice"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const user=useSelector((state)=>state.auth.user)
    console.log("fdsfs---->",user)

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(logout())
        navigate("/signin")

    }

  return (
    <div>
        {user?
        <div className="flex justify-center items-center flex-col px-8 py-8" >  
        <h1>hlo user <span className="underline font-bold">{user.email} </span></h1>
        <button className="bg-red-500 px-3 rounded-md mt-5" onClick={handleSubmit}>logout</button>      
        
        
        </div>
        
        
        
        :""}

    </div>
  )
}

export default Home