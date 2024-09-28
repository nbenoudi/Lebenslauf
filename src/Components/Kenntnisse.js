import axios from 'axios';
import { useState,useEffect} from 'react';

function Kenntnisse({Headerkey}) {

    const [kenntnisse,setKenntnisse]=useState([]);
    useEffect( () => { 
                       const  fetchResult =async ()  =>{
                                         // get tata using axios
                                       await axios.get("https://api.jsonbin.io/v3/b/5f98089d076e516c36fc029c/1",
                                                             { headers:{'X-Access-Key':Headerkey},
                                                             Accept: 'application/json',
                                                               method:"GET"}).then(async (Result)=>{

                                                               await setKenntnisse(Result.data.record.Kenntnisse);

                                                               }).catch(async (err)=>{  console.error(err);});
                                                   
                                     
                           
                                   }
                                   fetchResult();     
                                  
      
                     },[]);
 
 
         return  (
         <div className="text-slate-700 text-sky-800 text-2xl ">Kenntnisse:
                {kenntnisse.map((key,index)=>{
                  return(
                    <div className="bg-blue-200 border-b border-blue-300 dark:text-white" key={index} >
                  
                      {JSON.stringify({key}).slice(8,JSON.stringify({key}).length-2).replace(/['"]+/g, '')}
                      </div>)})}  

            </div> 
         )

}
export default Kenntnisse