import { createContext } from "react";
const Keycontext = createContext(5);

function Provider({children}) {
  /* const [key,setKey]=useState("ABCD");
    const value={key:key,keychanged:()=>{
        setKey(key+"AB");
    }}*/

    return(<Keycontext.Provider value= {66}>
        {children}
    </Keycontext.Provider>)
}
export {Provider}
export default Keycontext;
