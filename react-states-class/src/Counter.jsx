
import { useState } from "react";

export default function Counter() {
    
    let[count, setCount] = useState(0); // initilinzation line
    console.log("componet was re-reander");

    let inCount = () =>{
        setCount ((currCount)=>{
          return  currCount+1;

        });

        setCount ((currCount)=>{
          return  currCount+1;

        }); 
       
        
    }   

    
    

    return (
        <div>
            <h3>count = {count}</h3>
            <button onClick={inCount}>increase the count</button>
        </div>

    );
}