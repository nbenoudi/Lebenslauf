import axios from 'axios';
import { useState,useEffect} from 'react';
function AR_Kenntnisse({Headerkey}) {

    const [kenntnisse,setKenntnisse]=useState([]);
    useEffect( () => { 
                       const  fetchResult =async ()  =>{
                                         // get tata using axios
                                         
                                       await axios.get("https://api.jsonbin.io/v3/b/6707b858ad19ca34f8b60dbb",
                                                             { headers:{'X-Access-Key':Headerkey},
                                                             Accept: 'application/json',
                                                               method:"GET"}).then(async (Result)=>{

                                                               await setKenntnisse(Result.data.record.Kenntnisse);

                                                               }).catch(async (err)=>{  console.error(err);});
                                                   
                                     
                           
                                   }
                                   if(kenntnisse.length===0) {const timeoutID=setTimeout(()=>{fetchResult();},3000); 
                                       return()=>{clearTimeout(timeoutID)};
                                    }    
                                  
      
                     },[]);
 
 
         return  (
         <div className="text-slate-700 text-sky-800 text-2xl ">المعارف والخبرات:
                {kenntnisse.map((key,index)=>{
                  return(
                    <div className=" border-b border-blue-300 dark:text-white bg-slate-600 text-slate-300 dark:text-slate-50" key={index} >
                  
                      {JSON.stringify({key}).slice(8,JSON.stringify({key}).length-2).replace(/['"]+/g, '')}
                      </div>)})}  
            </div> 
         )

}
export default AR_Kenntnisse