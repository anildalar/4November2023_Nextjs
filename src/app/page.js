"use client"
import Nav from "@/components/Nav";
//1. Import area

import { useState } from "react";


//This is a RFC (React Functional Componen) Component
//2. Defination area
function Home() {
  //2.1
  const [title,setTitle] = useState('Home Page');
  


  //ES6 Fat arrow (new Style)
  //function submitData2(){} //ES6 Fat arrow (Old Style)


  //2.3 Return Statement Returning JSX 
  return (
    <>
      <div className="container">
          <Nav />
          <h1 className="text-center mt-5">{title}</h1>
      </div>
    </>
  )
}


//3. Export Area
//3.1 Default Export
export default Home;
//3.2