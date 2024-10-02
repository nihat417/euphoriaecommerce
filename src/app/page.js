"use client"
import { useState } from "react";
import Login from "./common/Login/page";


export default function Home() {
  const auth = useState(false)

  return (
  <div>
    {auth ? <Login/> :  <Login/> }
  </div>
  );
}
