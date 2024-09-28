import axios from 'axios';
import { useState,useEffect} from 'react';
import Error from './Error';
function Berufstaetigkeit({Headerkey}) {
    const [berufstaetigkeit,setBerufstaetigkeit]=useState([]);
    const [error,setError]=useState();
    useEffect( () => { 
                       const  fetchResult =async ()  =>{
                                         // get tata using axios
                                         
                                       await axios.get("https://api.jsonbin.io/v3/b/5f96951fbd69750f00c3b098/2",
                                                             { headers:{'X-Access-Key':Headerkey},
                                                             Accept: 'application/json',
                                                               method:"GET"}).then(async (Result)=>{
                                                                if (Result) {
                                                                  setBerufstaetigkeit(Result.data.record.Berufstaetigkeit);
                                                                }
                                                                
                                                               }).catch(async (err)=>{ setError(err.response.data.message); console.error(err);});
                                                   
                                     
                           
                                   }
                            fetchResult();
                                   

      
                     },[]);
 
                     if (error) {
                      return(<div className=" bg-red-100 px-20 right-1/2 rounded-xl text-2xl w-full" > <Error error={error}></Error> </div>);
                      }
         return( 
         
          <div className="text-slate-700 text-sky-800 text-2xl "> Berufstaetigkeit:
          <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
       <thead className="text-xs text-white uppercase bg-blue-300 border-b border-blue-400 dark:text-white">
           <tr>
               <th scope="col" className="px-6 py-3">
                  Von
               </th>
               <th scope="col" className="px-6 py-3">
                   Bis
               </th>
               <th scope="col" className="px-6 py-3">
                   Als
               </th>
               <th scope="col" className="px-6 py-3">
                   Was
               </th>
               <th scope="col" className="px-6 py-3">
                   In
               </th>
           </tr>
       </thead>

       {berufstaetigkeit.map((prakti,index)=>{
         return(<tbody key={index}>
            <tr className="bg-blue-600 border-b border-blue-400">
             <th scope="row" className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100">
               {prakti.Datum_Von}
             </th>
             <td className="px-6 py-4">
               {prakti.Datum_Bis}
             </td>
             <td className="px-6 py-4 bg-blue-400">
               {prakti.Als}
             </td>
             <td className="px-6 py-4"> 
               {prakti.Was}
             </td>
             <td className="px-6 py-4 bg-blue-400">
               {prakti.In}
             </td>
            </tr>
         </tbody>)})}

   </table>
   </div>)
           

}
export default Berufstaetigkeit