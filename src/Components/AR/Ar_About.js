import axios from 'axios';
import { useState,useEffect} from 'react';
import Error from '../Error';
function AR_About({Headerkey}){
   const [sprachen,setSprachen]=useState([]);
   const [sonstigues,setSonstigues]=useState([]);
   const [error,setError]=useState();
   useEffect( () => { 
                      const  fetchResult =async ()  =>{
                        
                                        // get tata using axios
                                       
                                      await axios.get("https://api.jsonbin.io/v3/b/6707bbf9acd3cb34a894855a",
                                                            { headers:{'X-Access-Key':Headerkey},
                                                            Accept: 'application/json',
                                                              method:"GET"}).then(async (Result)=>{
                                                                setSprachen(Result.data.record.Sprache);
                                                                setSonstigues(Result.data.record.Sonstiges);
                                                              }).catch(async (err)=>{ setError(err.response.data.message); console.error(err);});
                                                  
                                    
                          
                                  }
                                  if(sprachen.length===0 || sprachen.length===undefined || sonstigues.length===0 || sonstigues.length===undefined ) {const timeoutID=setTimeout(()=>{fetchResult();},3000); 
                                       return()=>{clearTimeout(timeoutID)};
                                    }      
     
                    },[]);
                   
                    if (error) {
                      return(<div className=" bg-red-100 px-20 right-1/2 rounded-xl text-2xl w-full" > <Error error={error}></Error> </div>);
                      }
        return (<>
                  <div className="text-slate-700 text-sky-800 text-2xl ">اللغات:</div>
                   <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
            
                          {sprachen.map((sprache,index)=>{
                          return(<tbody key={index}>
                            <tr className=" border-b border-blue-300 bg-slate-600 text-slate-300 dark:text-slate-50">
                               <td className="px-6 py-4">
                                 {sprache}
                              </td>
                            
                            </tr>
                          </tbody>)})}
                
                    </table>

   
        <div  className="bg-slate-200 text-black-300"> <div className="text-slate-700 text-sky-800  rtl:ml-2 text-2xl ">مهمات أخرى:</div>
        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                {sonstigues.map((etwas,index)=>
                                              {
                                                    return(
                                                            <tbody key={index}>
                                                                <tr className="border-b border-blue-300 bg-slate-600 text-slate-300 dark:text-slate-50">
                                                                  <td className="px-6 py-4">
                                                                  {etwas}
                                                                  </td>
                                                                
                                                                </tr>
                                                            </tbody>
                                                          )
                                              }
                                  )
                  }

           </table>
   </div> 
   
   
   
   </>) ;

}
export default AR_About