import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";



function Login() {
  //const blah blah
    const navigate=useNavigate();
    const[logindetails,setLogindetails]=useState( {
        username:"",
        password:""
    });
    {/* 
        Logindetails -> username,password
        registered value in -> (... name & password)    
        */}
    const location=useLocation();
    const registeredcreds=location.state

    const handlesubmit=(event)=> {
        event.preventDefault();
        console.log("Login Page")
        console.log("login data",logindetails)
        console.log("register data",registeredcreds)

        if(registeredcreds.name===logindetails.username && registeredcreds.password===logindetails.password ){
            console.log("Successfully Logged in")
            navigate("/Dashboard",{
              state: logindata
            })
        }else{
          console.log("This email is not registered")
        }
        
    }
    function handlechange(e) {
    setLogindetails({
        ...logindetails,
        [e.target.name]:e.target.value
    });
    }
    

  return (

<form action="">
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-2 border-purple-500 flex flex-col justify-center items-center gap-3">
         <label className="font-bold">Name</label>
         <input type="text" required placeholder="username" name="username"  onChange={handlechange}></input>
         <label className="font-bold">Password</label>
         <input type="password" required placeholder="Enter your password" name="password"  onChange={handlechange}></input>
         <button type="submit" className="font-bold text-white" onClick={handlesubmit}>Submit</button>
      </div>
    </div>
</form>
  );
}
export default Login;