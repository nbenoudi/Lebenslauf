import axios from 'axios';
import {FaHandsHelping}  from "react-icons/fa";
import { useState,useEffect} from 'react';
import Error from "./Error"
function Contact({Headerkey}) {
   
    const [contact,setContact]=useState({});
    const [ism,setIsm]=useState({});
    const [error,setError]=useState();
    
    useEffect( () => { 
                       const  fetchResult =async ()  =>{
                                         // get tata using axios
                                        
                                       await axios.get("https://api.jsonbin.io/v3/b/5f7efefb302a837e9576e10c/4",
                                                             { headers:{'X-Access-Key':Headerkey, 'Access-Control-Allow-Origin':"http://localhost:3000"},
                                                             Accept: 'application/json',
                                                            
                                                               method:"GET"}).then(async (Result)=>{
                                                                if (Result) {
                                                                   setIsm(Result.data.record.Ighf.Ism);
                                                                  setContact(Result.data.record.Ighf.Contact);
                                                                }
                                                               
                                                               
                                                               }).catch( (error)=>{  setError(error.response.data.message)});
                                                   
                                     
                           
                                   }
                                   fetchResult();  
                                       
                     },[]);
 
        
        if (error) {
        return(<div className=" bg-red-100 bg-blue-600 px-20 right-1/2 rounded-xl text-2xl w-full" > <Error error={error}>{console.log(error)}</Error> </div>);
        }

          return( <div  className=" bg-blue-300  px-20 right-1/2 rounded-xl  w-full">
        <FaHandsHelping className='text-lg'>  </FaHandsHelping>        

        {  JSON.stringify({ism}).slice(8,JSON.stringify({ism}).length-2).replace(/['"]+/g, '').split(",").map((item,index)=>{return(<div className="px-10 text-lg p-8 md:p-0   font-medium  " key={index}>{item}</div>)})}
           
         {JSON.stringify({contact}).slice(12,JSON.stringify({contact}).length-2).replace(/['"]+/g, '').split(",").map((item,index)=>{return(<div className="px-10 text-lg p-8 md:p-0 font-medium " key={index}>{item}</div>)})}
         
        </div> );
        
        
     
       
          
       
         
         



}
export default Contact