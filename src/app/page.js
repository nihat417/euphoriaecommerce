"use client"
import { useState } from "react";
import Login from "./common/Login/page";
import Register from "./common/Register/page";


export default function Home() {
  const auth = useState(false)

  return (
  <div>
    {auth ? <Register/> :  <Register/> }
  </div>
  );
}
