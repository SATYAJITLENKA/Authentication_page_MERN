
"use client"
import React, { useState,useEffect } from "react";

import { BsFacebook, BsInstagram, BsGoogle } from "react-icons/Bs";
import Link from "next/link";
import axios from "axios";
import {isLogin,setAuthentication} from "../utils/auth"
import {toast} from "react-toastify"
import { useRouter } from "next/navigation";
import {baseURL} from '../utils/constant'

const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router =useRouter()

  useEffect(()=>{
    const authenticate=async()=>{
      

    if(await isLogin()){
      router.push("/")
    }
    }
    authenticate()
  },[])
  

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();


    const payload={
    
      email,
      password,
    }
    axios.post(`${baseURL}/login`,payload)
    .then((res)=>{
      console.log(res.data);

      setAuthentication(res.data.token)
    toast.success("Login Successful");
   router.push("/")
    }).catch((err)=>console.log(err))
  }

  return (
    <div className="grid grid-cols-[1fr,30%]">
      
      <div className="h-screen grid place-items-center">
        <div className="text-center">
          <h1 className="text-accent font-bold text-4xl">Login to your Account</h1>
          <div className="flex items-center gap-4 pt-8 w-fit mx-auto">
            <div className="icon_wrapper">
              <BsFacebook />
            </div>
            <div className="icon_wrapper">
              <BsInstagram />
            </div>
            <div className="icon_wrapper">
              <BsGoogle />
            </div>
          </div>

          <p className="pt-8 text-[13px] text-gray-400">
            Or use your email account for Login
          </p>

          <form onSubmit={handleSubmit} className="flex w-[300px] mx-auto flex-col pt-2 gap-2">
            
             <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email" 
              className="input_style"
            />
             <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            type="password"
              placeholder="password" 
              className="input_style"
            />
            <p>Forget your password?</p>
            <button className="uppercase bg-accent hover:bg-accentDark px-4 py-2 text-white mt-4"> LOGIN</button>
          </form>
        </div>
      </div>
      <div className="bg-accent h-screen grid place-items-center">
        <div className="text-center w-full text-white space-y-8">
          <h2 className="font-bold text-4xl ">Hello Friend!</h2>
          <div className="text-[#eeeeee] w-fit mx-auto">
            <p>To keep connected with us please</p>
            <p>Please Sign Up with your personal info</p>

            <Link href="/signup">
              <button className="uppercase px-4 py-2 w-[100%] rounded-full border-2 mt-8">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login