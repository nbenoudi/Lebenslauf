import { useContext } from "react";
import Getkeycontex from "../Contexts/Keycontext";
function getKey() {
    const {key} = useContext(Getkeycontex);

    return(<About />)
}
