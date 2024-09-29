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
                                                               method:"GET"}).then(async (Result)=>{ if (Result) {
                                                                 setAusbildung(Result.data.record.Ausbildung);
                                                               }

                                                               
                                                               }).catch(async (err)=>{ return <div className="Error">{err}</div>});
                                                   
                                     
                           
                                   }
                                   if(ausbildung.length===0) { const timeoutID=setTimeout(()=>{fetchResult();},3000); 
                                       return()=>{clearTimeout(timeoutID)};
                                    } 
                                      
      
                     },[]);
 
 
         return( <div className="text-slate-700 text-sky-800 text-2xl "> Ausbildung:
          <table className="w-full text-sm text-left rtl:text-right text-slate-300 dark:text-slate-50 ">
       <thead className="text-xs text-white uppercase bg-blue-300 border-b border-blue-400 dark:text-white ">
           <tr>
               <th scope="col" className="px-6 py-3 ">
                  Von
               </th>
               <th scope="col" className="px-6 py-3">
                   Bis
               </th>
               <th scope="col" className="px-6 py-3">
                   Was
               </th>
               <th scope="col" className="px-6 py-3">
                   In
               </th>
           </tr>
       </thead>

       {ausbildung.map((prakti,index)=>{
         return(<tbody key={index}>
            <tr className="bg-blue-600 border-b border-blue-400">
             <th scope="row" className="px-6 py-4 font-medium bg-slate-600 text-slate-300 dark:text-slate-50  whitespace-nowrap ">
               {prakti.Datum_Von}
             </th>
             <td className="px-6 py-4 font-medium bg-slate-100 whitespace-nowrap text-slate-600 dark:text-slate-30 ">
               {prakti.Datum_Bis||"--"}  
             </td>
             <td className="px-6 py-4  text-sm bg-slate-600 text-slate-300 dark:text-slate-50"> 
               {prakti.Was}
             </td>
             <td className="px-6 py-4 text-sm  bg-slate-100 text-slate-600 dark:text-slate-30">
               {prakti.In}
             </td>
            </tr>
         </tbody>)})}

   </table>
   </div> )
        }
export default Ausbildung