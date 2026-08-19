"use client"

import { useFDCalcultorContext } from "@/context/FDContext";
import { BarChart, Bar, XAxis } from "recharts";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import { Loader } from '@/components/CustomSpinner'
import { useMemo } from "react";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function FDBarGraph(

){

    const { loading, principalAmount, totalInterest, yearWiseInterestAmounts } = useFDCalcultorContext();

    let dataRecords = useMemo(() => {
       return yearWiseInterestAmounts.map((val, i ) => ({ totalReturn: val, year: i + 1}) );
    },[ yearWiseInterestAmounts ]);

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
        <div className="w-full py-5 px-5 relative">
            <div className="min-h-[200px] h-[300px] w-full bg-white rounded-md shadow-xs p-3">
                 {  (loading) ?
                    (<div className="w-full h-full flex items-center justify-center right-0 top-0 absolute">
                        <Loader/>
                    </div>):
                    (<ChartContainer config={chartConfig} className="w-full h-full">
                      <BarChart data={dataRecords}>
                            <XAxis 
                                dataKey="year"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={( val: number) =>
                                    {  let lastChar = val.toString().at(-1) 
                                    if(lastChar === '1'){
                                        return `${val.toString()}st Year`;
                                    }
                                    if(lastChar === '2'){
                                        return `${val.toString()}nd Year`;
                                    }
                                    return `${val.toString()}th Year`;
                                    }}
                            ></XAxis>
                        <Bar dataKey="totalReturn" fill="var(--color-desktop)" radius={4} />
                    </BarChart>
                </ChartContainer>
                )}
            </div>

        </div>
    
     </div>
    );
}