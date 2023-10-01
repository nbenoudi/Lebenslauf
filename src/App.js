import { useState} from "react";
import "./index.css"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Ausbildung from "./Components/Ausbildung";
import Berufstaetigkeit from "./Components/Berufstaetigkeit"
import Kenntnisse from "./Components/Kenntnisse"
import Praktikum from "./Components/Praktikum"
import Footer from "./Components/Footer"
import Image from "./Components/Image";
import Getkey from "./Components/Getkey"
function  App() {
 
const [keyheader,setKeyheader]=useState("");
const [isValid,setIsValid]=useState(false);

 const creatKey=(key)=>{
  
     setKeyheader(key);
     setIsValid(true);
   
}

 if (isValid) {

  return(<div>
  
  <Image></Image>
     <Contact Headerkey={keyheader}  />
    <Ausbildung Headerkey={keyheader} />
    <Berufstaetigkeit Headerkey={keyheader} />    
    <Kenntnisse Headerkey={keyheader} /> 
    <Praktikum Headerkey={keyheader} /> 
    <About  Headerkey={keyheader} />
    <Footer /> 
    
</div>)
 }
 else{
   return(<div> <Image ></Image> <Getkey onSubmit={creatKey}  /></div>)
 }




    
}
export default App;