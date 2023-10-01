import axios from 'axios';
import { useState,useEffect} from 'react';
import Error from './Error';
function Praktikum({Headerkey}) {
    const [praktikum,setPraktikum]=useState([]);
    const [error,setError]=useState();
    useEffect( () => { 
                       const  fetchResult =async ()  =>{
                                         // get tata using axios
                                       await axios.get("https://api.jsonbin.io/v3/b/5f96a9de076e516c36fb8b5e",
                                                             { headers:{'X-Access-Key':Headerkey},
                                                             Accept: 'application/json',
                                                               method:"GET"}).then(async (Result)=>{
                                                                setPraktikum(Result.data.record.Praktikum);
                                                               }).catch(async (err)=>{ setError(err.response.data.message); console.error(err);});
                                                   
                                     
                           
                                   }
                                   fetchResult();       
      
                     },[]);
 
                     if (error) {
                      return(<div className=" bg-red-100 px-20 right-1/2 rounded-xl text-2xl w-full" > <Error error={error}></Error> </div>);
                      }
              
         return( <div  className="text-gray-300 bg-slate-100 rounded-xl">  <div className="text-slate-700 text-sky-800 text-2xl ">Praktikum:</div> 
         
         {praktikum.map((prakti,index)=>{return(<div className="text-stone-800	 md:p-1 text-base font-medium"   key={index}>
              <li>
              {prakti.Datum_Von} -- {prakti.Datum_Bis} {' '} {prakti.Als} {' '} {prakti.Was} {' '} in {prakti.In}
             </li>
         </div>)})}
        
        </div> );
         
 
         
        



}
export default Praktikum