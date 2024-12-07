import { useState } from 'react'
import { Link, useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { login } from '../utils/authSlice';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
const SignIn = () => {
    const dispatch=useDispatch()
    const Navigate=useNavigate()
    const [formData,setformData]=useState({
        email:"",
        password:""
    });
const [error,setError]=useState("")
const handleChange=(e)=>{
    const {name,value}=e.target;
    setformData({ ...formData,[name]: value });
    
}
const handleSubmit=(e)=>{
    e.preventDefault();
    if (!formData.email || !formData.password){
        setError("*Both fields are required.")
        return;
    }
    setError("")    
   // console.log(formData)
    const userData=formData
    //alert(JSON.stringify(formData))
    dispatch(login(userData))
    Navigate("/home")
}


  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 flex-col'>
      <div className='w-full max-w-md bg-white shadow-md rounded px-8 py-6'>
        <form
        onSubmit={handleSubmit}>
            <h2 className='text-2xl font-bold mb-6 text-center'>Sign In</h2>
            {error&&<p className='text-red-500 text-sm mb-4'>{error}</p>}
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='email'>
                        Email
                </label>
                <input 
                 type='email' 
                name='email'
                 id='email'
                 value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
                />
                </div>
            <div className="mb-6">
              
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button type='submit'
        className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 '>
            Sign In
        </button>           
        </form>
        <div className="my-2 flex flex-shrink items-center justify-center gap-2 pt-3">
          <div className="grow basis-0 border-b border-gray-300"></div>
          <span className="text-xs font-normal uppercase leading-none text-gray-500">or</span>
          <div className="grow basis-0 border-b border-gray-300"></div>
        </div>
        <div className='pt-3'>
        <GoogleOAuthProvider >
        <GoogleLogin/>
        </GoogleOAuthProvider>
        </div>
        </div>
      <div className='pt-5'>
      <p >Don&#39;t have an account? <Link  className='font-bold text-decoration-line: underline text-blue-600' to="/signup"> Sign up</Link></p>    
      </div>
       
    </div>
  )
}

export default SignIn;