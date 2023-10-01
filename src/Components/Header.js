import axios from 'axios';
import { useState,useEffect} from 'react';
import Error from './Error';


function Header({Headerkey}) {

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
        return <div  className="bg-green-900 text-blue-500"> 
                    Sprachen: 
                    {sprachen.map((sprache,index)=>{return(<div className="bg-green-900 text-blue-500"   key={index}><li>{sprache}</li></div>)})}
                    Sonstiges: 
                    {sonstigues.map((etwas,index)=>{return(<div className="bg-green-900 text-blue-500"   key={index}><li>{etwas}</li></div>)})}

            </div> ;

}
export default Header