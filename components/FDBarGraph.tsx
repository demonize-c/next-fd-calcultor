"use client"

import { useFDCalcultorContext } from "@/context/FDContext";

export default function FDBarGraph(

){

    const { principalAmount, totalInterest } = useFDCalcultorContext();

    return(
     <div className="w-full h-full bg-surface-tan">
        <div className="grid grid-cols-2 px-7 py-7">
            <div className="">
                 <span className=""> Maturity Amount (₹)</span>
                 <h2 className="text-3xl mt-3">₹ {principalAmount} </h2>

            </div>
            <div>
                 <span className=""> Maturity Amount (₹)</span>
                 <h2 className="text-3xl  mt-3">₹ {(totalInterest + principalAmount).toFixed(2)}</h2>
            </div>
                         
        </div>
    
     </div>
    );
}