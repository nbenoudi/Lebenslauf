import { useState} from "react";
import "./index.css"
import About from "./Components/About";
import AR_About from "./Components/AR/Ar_About";
import Contact from "./Components/Contact";

import Ausbildung from "./Components/Ausbildung";
import Ar_Ausbildung from "./Components/AR/Ar_Ausbildung";
import Berufstaetigkeit from "./Components/Berufstaetigkeit";
import Ar_Berufstaetigkeit from "./Components/AR/AR_Berufstaetigkeit";
import Kenntnisse from "./Components/Kenntnisse";
import AR_Kenntnisse from "./Components/AR/AR_Kenntnisse";
import Praktikum from "./Components/Praktikum";
import AR_Praktikum from "./Components/AR/Ar_Praktikum";
import Footer from "./Components/Footer";
import Image from "./Components/Image";
import AR_Image from "./Components/AR/Ar_Image.js";

import Getkey from "./Components/Getkey";
import Translate from "./Components/Translate";


function  App() {
 
const [keyheader,setKeyheader]=useState("");
const [isValid,setIsValid]=useState(false);
const [lang,setLang]=useState({label:"Deutsch",value:"de"});
 const creatKey=(key)=>{
  
     setKeyheader(key);
     setIsValid(true);
   
}
const SelectedLang =(lang)=>{setLang(lang);};
switch(lang.value){
  case "ar": {
    if (isValid) {

      return(<div>
       <AR_Image />
      <Contact Headerkey={keyheader}  />
        <Ar_Ausbildung Headerkey={keyheader} />
        <Ar_Berufstaetigkeit Headerkey={keyheader} />
        <AR_Kenntnisse Headerkey={keyheader} /> 
        <AR_Praktikum Headerkey={keyheader}  /> 
        <AR_About  Headerkey={keyheader}  />
        <Footer />
       
        
    </div>)
     }
     else{
       return(<div> <Translate onSelected={SelectedLang}> </Translate> <AR_Image></AR_Image>	 <Getkey onSubmit={creatKey}  /></div>)
     }
  }
  
  case "ta":return(<div className="text-4xl"> ⵙⴰⵎⵃⴰⵜⴰⵙ ⵓⵔⵜⴰ ⵊⴰⵔⵓⵖ CV ⵙ ⵜⵎⴰⵣⵉⵖⵜ

   <Translate onSelected={SelectedLang}> </Translate> <Image > </Image> <Getkey onSubmit={creatKey}  /></div>
  )
    case "en":return(<div className="text-4xl"> sorry, my CV isn't ready in English yet.
    <Translate onSelected={SelectedLang}> </Translate> <Image > </Image> <Getkey onSubmit={creatKey} ></Getkey></div>)
      case "fr":return(<div className="text-4xl"> désolé, mon CV n'est pas encore prêt en français <Translate onSelected={SelectedLang}> </Translate> <Image > </Image> <Getkey onSubmit={creatKey}  /></div>)
        default: {
          if (isValid) {

            return(<div>
            
            <Image></Image>
                <Contact Headerkey={keyheader} land={lang} />
              <Ausbildung Headerkey={keyheader} lang={lang}/>
              <Berufstaetigkeit Headerkey={keyheader} lang={lang} />    
              <Kenntnisse Headerkey={keyheader} lang={lang} /> 
              <Praktikum Headerkey={keyheader} lang={lang} /> 
              <About  Headerkey={keyheader} lang={lang} />
              <Footer lang={lang}/> 
              
          </div>)
           }
           else{
             return(<div> <Translate onSelected={SelectedLang}> </Translate> <Image > </Image> <Getkey onSubmit={creatKey}  /></div>)
           }
          
        }
          
  
}





    
}
export default App;