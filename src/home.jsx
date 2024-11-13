import React from "react";
const sum=(a,b)=>a+b
const mul=(a,b)=>a*b
const Calculate=(type)=>{
    if(type==='sum'){
        return sum;
    }
    else if(type==='mul'){
        return mul;
    }
}
const result=Calculate('sum')(1,2);
function Compete(){
    return(
        <div>
            <h1>Hello Welcome my Boi!!!!</h1>
            <p>{result}</p>
        </div>
    )
}
export default Compete;