import { useState } from "react";
import {GoPasskeyFill} from "react-icons/go";
function Getkey({onSubmit}) {

const [key,setKey]=useState("");
  const handelChange=(event)=>{

            setKey(event.target.value);

       }
    
    const handelSubmit=(event)=>{
      
             event.preventDefault();
        setKey(event.target.value);
        onSubmit(key); 
      
      
        };
    return (<div className="rounded-md bg-green-50 text-center">

       <form onSubmit={event=>handelSubmit(event)}>

        <GoPasskeyFill className="text-4xl place-content-center"></GoPasskeyFill> <input className=" border-green-700 rounded-md border-4 text-2xl w-1/4 h-min  " value={key} onChange={event=>handelChange(event)} placeholder="Please Enter the key to get my CV " ></input>
        {key.startsWith("$2") && <button className="btn-primary place-content-center h-12 w-1/4" > Get my CV here  </button>} 
        
    </form>
    
    </div> )
    
       
}
export default Getkey