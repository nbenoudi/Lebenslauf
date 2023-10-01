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
                                                                setKenntnisse(Result.data.record.Kenntnisse);
                                                               }).catch(async (err)=>{  console.error(err);});
                                                   
                                     
                           
                                   }
                                   fetchResult();       
      
                     },[]);
 
 
         return <div  className="bg-slate-200 text-black-300">  <div className="text-slate-700 text-sky-800 text-2xl ">Kenntnisse:</div> 
                   
                                       {kenntnisse.map((key,index)=>{   return (<div className="text-stone-800	 md:p-1 text-base font-medium" key={index}>
                                                                          {<li>
                                                                        {JSON.stringify({key}).slice(8,JSON.stringify({key}).length-2).replace(/['"]+/g, '')}
                                                                        </li>
                                                                        
                                                                        } 
                                                              </div>);
                                                  }
                                      )
                      }
                      
                    
             </div> ;

}
export default Kenntnisse