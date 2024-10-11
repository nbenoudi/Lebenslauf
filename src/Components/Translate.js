import React,{useState} from "react";
import Dropdown from "./Dropdown";
const options=[{label:"ⵜⴰⵎⴰⵣⵉⵖⵜ",value:"ta"},{label:"English",value:"en"},{label:"Français",value:"fr"},{label:"العربية",value:"ar"},{label:"Deutsch",value:"de"}]
const Translate = ({onSelected})=>{
    const [lang,setLang]=useState(options[4]);
   

    return(<div> <Dropdown 
                    label="Select a Language"
                    selected={lang}  
                    onSelectedChange ={setLang} 
                    options={options}>
                </Dropdown>  {onSelected(lang)}

               
            </div>);
};
export default Translate;