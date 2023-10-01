import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
function Accordion({items}) {
const [expandedIndex,setExpandedIndex]=useState(-1);
const renderItems=items.map((item,index)=>{
    const isExpanded= index === expandedIndex;
    const icon =<span className="text-2xl">{isExpanded ? <GoChevronDown></GoChevronDown>:<GoChevronUp></GoChevronUp>}</span>

        return (<div key={index}>
            <div 
             className="flex justify-between p-3 bg-green-100 border-b items-center cursor-pointer"
             onClick={()=>{     
                                               
                            setExpandedIndex((currentExpandedIndex)=>{
                               
                                if (currentExpandedIndex===index) {
                                    return -1;
                                } else {
                                    return index;
                                }
                                 
                            }) 
            
            }}> 
                        {icon} {item.label} </div>
                         <div>{isExpanded && <div> {item.content}  </div>} </div> </div>)
    });

return <div>{renderItems}</div>
}
export default Accordion;
