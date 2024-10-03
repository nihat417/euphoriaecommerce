"use client"
import { useState } from "react";
import Login from "./auth/Login/page";
import Register from "./auth/Register/page";
import HomePage from './main/home/page'


export default function Home() {
  const auth = useState(true)

  return (
  <div>
    {auth ? <HomePage/> :  <Login/> }
  </div>
  );
}
