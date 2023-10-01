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
        return <div  className="bg-slate-200 text-black-300"> <div className="text-slate-700 text-sky-800 text-2xl ">Sprachen:</div> 
                   
                    {sprachen.map((sprache,index)=>{return(<div className="text-stone-800	 md:p-1 text-base font-medium"   key={index}><li>{sprache}</li></div>)})}
                    <div className="text-slate-700 text-sky-800 text-2xl ">Sonstiges:</div> 
                    {sonstigues.map((etwas,index)=>{return(<div className="text-stone-800	 md:p-1 text-base font-medium"   key={index}><li>{etwas}</li></div>)})}

            </div> ;

}
export default About