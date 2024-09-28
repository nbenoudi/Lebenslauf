import axios from 'axios';
import { useState,useEffect} from 'react';
import Error from './Error';
function About({Headerkey}){
   const [sprachen,setSprachen]=useState([]);
   const [sonstigues,setSonstigues]=useState([]);
   const [error,setError]=useState();
   useEffect( () => { 
                      const  fetchResult =async ()  =>{
                        
                                        // get tata using axios
                                       
                                      await axios.get("https://api.jsonbin.io/v3/b/5f99459330aaa01ce619fa72/1",
                                                            { headers:{'X-Access-Key':Headerkey},
                                                            Accept: 'application/json',
                                                              method:"GET"}).then(async (Result)=>{
                                                                setSprachen(Result.data.record.Sprachen.Sprache);
                                                                setSonstigues(Result.data.record.Sprachen.Sonstiges);
                                                              }).catch(async (err)=>{ setError(err.response.data.message); console.error(err);});
                                                  
                                    
                          
                                  }
                                  fetchResult();       
     
                    },[]);
                   
                    if (error) {
                      return(<div className=" bg-red-100 px-20 right-1/2 rounded-xl text-2xl w-full" > <Error error={error}></Error> </div>);
                      }
        return (<>
                  <div className="text-slate-700 text-sky-800 text-2xl ">Sprachen:</div>
                   <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
            
                          {sprachen.map((sprache,index)=>{
                          return(<tbody key={index}>
                            <tr className="bg-blue-600 border-b border-blue-400">
                               <td className="px-6 py-4">
                                 {sprache}
                              </td>
                            
                            </tr>
                          </tbody>)})}
                
                    </table>

   
        <div  className="bg-slate-200 text-black-300"> <div className="text-slate-700 text-sky-800 text-2xl ">Sonstiges:</div>
        <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                {sonstigues.map((etwas,index)=>
                                              {
                                                    return(
                                                            <tbody key={index}>
                                                                <tr className="bg-blue-600 border-b border-blue-400">
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
export default About