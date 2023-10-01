import axios from 'axios';
import { useState,useEffect} from 'react';
function Ausbildung({Headerkey}) {

    const [ausbildung,setAusbildung]=useState([]);
    useEffect( () => { 
                       const  fetchResult =async ()  =>{
                                         // get tata using axios
                                       await axios.get("https://api.jsonbin.io/v3/b/5f9698e5076e516c36fb8149",
                                                             { headers:{'X-Access-Key':Headerkey},
                                                             Accept: 'application/json',
                                                               method:"GET"}).then(async (Result)=>{
                                                                setAusbildung(Result.data.record.Ausbildung);
                                                               }).catch(async (err)=>{  console.error(err);});
                                                   
                                     
                           
                                   }
                                   fetchResult();       
      
                     },[]);
 
 
         return( <div  className="bg-slate-200 "> 

         <div className="text-slate-700 text-sky-800 text-2xl ">Ausbildung:</div> 

         {ausbildung.map((prakti,index)=>{return(<div className=" text-stone-800	 md:p-1 text-base font-medium right-1/2 "   key={index}>
          <li>
             {prakti.Datum_Von} -- {prakti.Datum_Bis} {' '} {prakti.Was}   {','}  {prakti.In}
         </li>
         </div>)})}
        
        </div> );
         




}
export default Ausbildung