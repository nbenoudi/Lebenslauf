import axios from 'axios';
import { useState,useEffect} from 'react';
import Error from '../Error';
function AR_Praktikum({Headerkey}) {
    const [praktikum,setPraktikum]=useState([]);
    const [error,setError]=useState();
    useEffect( () => { 
                       const  fetchResult =async ()  =>{
                                         // get tata using axios
                                       
                                       await axios.get("https://api.jsonbin.io/v3/b/6707c131e41b4d34e440529a",
                                                             { headers:{'X-Access-Key':Headerkey},
                                                               Accept: 'application/json',
                                                               AccessControlAllowOrigin:"*",
                                                               method:"GET"}).then(async (Result)=>{
                                                                setPraktikum(Result.data.record.Praktikum);
                                                               }).catch(async (err)=>{ setError(err); console.error(err);});
                                                   
                                     
                           
                                   };

                                   if(praktikum.length===0) {const timeoutID=setTimeout(()=>{fetchResult();},2000); 
                                       return()=>{clearTimeout(timeoutID)};
                                    } 
                                      
      
                     },[]);
 
                     if (error) {
                      return(<div className=" bg-red-100 px-20 right-1/2 rounded-xl text-2xl w-full" > <Error error={error}></Error> </div>);
                      }
              
         return(<div className="text-slate-700 text-sky-800 text-2xl rtl:ml-2 text-right "> التدريب:
           <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-300 border-b border-blue-400 dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                المكان
                </th>
                <th scope="col" className="px-6 py-3">
                
                المهنة
                </th>
                <th scope="col" className="px-6 py-3">
                المهمة
                </th>
                <th scope="col" className="px-6 py-3">
                   إلى 
                </th>
                <th scope="col" className="px-6 py-3">
                  من  
                </th>
            </tr>
        </thead>

        {praktikum.map((prakti,index)=>{
          return(<tbody key={index}>
           <tr className="bg-blue-600 border-b border-blue-400">
             <th scope="row" className="px-6 py-4 font-medium bg-slate-600 text-slate-300 dark:text-slate-50  whitespace-nowrap ">
             {prakti.In}
             </th>
             <td className="px-6 py-4 font-medium bg-slate-100 whitespace-nowrap text-slate-600 dark:text-slate-30 ">
             {prakti.Als}
             </td>
             <td className="px-6 py-4  text-sm bg-slate-600 text-slate-300 dark:text-slate-50"> 
             {prakti.Was}
             </td>
             <td className="px-6 py-4 text-sm  bg-slate-100 text-slate-600 dark:text-slate-30">
             {prakti.Datum_Bis||"--"}  
             </td>
             <td className="px-6 py-4 text-sm  bg-slate-600 text-slate-300 dark:text-slate-50">
             
               {prakti.Datum_Von}
             </td>
            </tr>
          </tbody>)})}

    </table> 
    </div> 
     );
         
 
         
        



}
export default AR_Praktikum