import { useState } from "react";
import Header from "./Components/Header"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Ausbildung from "./Components/Ausbildung";
import Berufstaetigkeit from "./Components/Berufstaetigkeit"
import Kenntnisse from "./Components/Kenntnisse"
import Praktikum from "./Components/Praktikum"
import Sonstiges from "./Components/Sonstiges"
import Footer from "./Components/Footer"
import Error from "./Components/Error"

function Result({Headerkey,isValid}) {
    const [keyheader,setKeyheader]=useState("");
    setKeyheader(Headerkey);

    if (isValid) {
        return <div>About{Headerkey}
        
   <Header  Headerkey={keyheader} />
    <About Headerkey={keyheader} />
    <Contact Headerkey={keyheader} />
    <Ausbildung Headerkey={keyheader} />
    <Berufstaetigkeit Headerkey={keyheader} />    
    <Kenntnisse Headerkey={keyheader} /> 
    <Praktikum Headerkey={keyheader} /> 
    <Sonstiges Headerkey={keyheader} /> 
    <Footer Headerkey={keyheader} /> 
   
        
        
        </div>
    } else {
        return <Error></Error>
    }

}
export default Result