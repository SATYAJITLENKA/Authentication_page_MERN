"use client"
import React, { useState,useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import {toast} from "react-toastify"


import {baseURL} from '../utils/constant'
import { BsFacebook, BsInstagram, BsGoogle } from "react-icons/Bs";
import { useRouter } from "next/navigation";
import { isLogin } from "@/utils/auth";

const SignUp = () => {
  const [name, setName] = useState('');
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
      name,
      email,
      password,
    }
    axios.post(`${baseURL}/signup`,payload)
    .then((res)=>{
    toast.success(
    <div>
      Account Created Successfully <br />
      Please Login
    </div>
   );
   router.push("/login")
    }).catch((err)=>console.log(err))
  }

  return (
    <div className="grid grid-cols-[30%,1fr]">
      <div className="bg-accent h-screen grid place-items-center">
        <div className="text-center w-full text-white space-y-8">
          <h2 className="font-bold text-4xl ">Welcome Back!</h2>
          <div className="text-[#eeeeee] w-fit mx-auto">
            <p>To keep connected with us please</p>
            <p>Please login with your personal info</p>

            <Link href="/login">
              <button className="uppercase px-4 py-2 w-[100%] rounded-full border-2 mt-8">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-screen grid place-items-center">
        <div className="text-center">
          <h1 className="text-accent font-bold text-4xl">Create Account</h1>
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
            Or use your email account for registration
          </p>

          <form onSubmit={handleSubmit} className="flex w-[300px] mx-auto flex-col pt-2 gap-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              
              type="text"
              placeholder="Name" 
              className="input_style"
            />
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
            type="current-password"
              placeholder="password" 
              className="input_style"
            />

            <button className="uppercase bg-accent hover:bg-accentDark px-4 py-2 text-white mt-4">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
