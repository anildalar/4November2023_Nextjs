"use client"
import Nav from "@/components/Nav";
//1. Import area

import { useState } from "react";


//This is a RFC (React Functional Componen) Component
//2. Defination area
function Home() {
  //2.1
  const [title,setTitle] = useState('Register Page');
  const [payload,setPayload] = useState({
                                          //P:V
                                          fname:"systemadmin1@gmail.com",
                                          email:"systemadmin1@gmail.com",
                                          password:"systemadmin1@gmail.com",
                                          cpassword:"systemadmin1@gmail.com",
                                        })

  //2.2 function Defination area
  let handleChange = (e)=>{
    console.log('Hi',e.target.value);
    setPayload({
      ...payload,
      [e.target.name]:e.target.value
    })
  } 
  let submitData = async (e)=>{ //async is a parent
    console.log('Hello');
    console.log(payload);
    //Call the NextJs API
    try {
        let reponse = await fetch(`/api/login`,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }); // await is a child

        const data = await reponse.json();
        
    } catch (error) {
      
    }


  } //ES6 Fat arrow (new Style)
  //function submitData2(){} //ES6 Fat arrow (Old Style)


  //2.3 Return Statement Returning JSX 
  return (
    <>
        <div className="container">
            <Nav />
            <h1 className="text-center mt-5">{title}</h1>
            <form className="col-6 offset-3 mt-5">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input name="name" type="email" className="form-control" id="name" aria-describedby="emailHelp" value={payload.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" value={payload.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input name="password" type="password" className="form-control" id="password" value={payload.password} onChange={handleChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input name="cpassword" type="password" className="form-control" id="cpassword" value={payload.password} onChange={handleChange}  />
                </div>
                <button type="button" className="btn btn-primary" onClick={submitData}>Register</button>
                </form>

        </div>
    </>
  )
}


//3. Export Area
//3.1 Default Export
export default Home;
//3.2