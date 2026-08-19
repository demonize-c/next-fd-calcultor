"use client"

import {Slider} from '@/components/ui/slider';
import {Badge} from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader,CardTitle ,CardDescription ,CardContent } from '@/components/ui/card';
import SliderControl from '@/components/SliderControl';
import { useEffect, useState } from 'react';
import { useFDCalcultorContext } from '@/context/FDContext';


export default function( ) {

   const {
     setPrincipalAmount,
     setInterestRate,
     setTenureYears,
     setCompoundingPeriods,
     principalAmount,
     tenureYears,
     interestRate,
     compoundingPeriods,
     calculate

   } = useFDCalcultorContext();

    return(

        <Card className="bg-white px-4">
                <CardHeader className="py-4">
                   {/* <CardTitle className="text-accent text-xl">
                        FD Calcultor
                   </CardTitle>
                    <CardDescription className="">
                          Lorem Ipsum has been the industry's standard dummy text ever since 1966
                   </CardDescription> */}
                   <h2 className="text-accent text-xl">FD Calculator</h2>
                   <p className="text-text-primary mt-3">Lorem Ipsum has been the industry's standard dummy text ever since 1966</p>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1">
                      <div>
                         <SliderControl 
                            label={"Deposite Amount (₹)"}
                            min={10000}
                            max={5000000}
                            value={principalAmount}
                            step={10000}
                            symbol=" ₹"
                            onChange={(val: number) => setPrincipalAmount(val)}
                         />
                      </div>
                      <div className="py-4">
                        <div className="flex items-center justify-between">
                            <div>
                               <span className="text-gray-900 text-xl">Interest Payout</span>
                            </div>
                             <div className="flex items-center justify-between gap-2">
                              
                                 <Badge  className={`border border-accent py-4 px-3 text-accent hover:text-white hover:bg-accent ${compoundingPeriods === 12?"text-white bg-accent":""} cursor-pointer`} onClick={()=> setCompoundingPeriods(12)}>Monthly</Badge>
                                 <Badge  className={`border border-accent py-4 px-3 text-accent hover:text-white hover:bg-accent ${compoundingPeriods === 1? "text-white bg-accent":""} cursor-pointer`} onClick={()=> setCompoundingPeriods(1)} >Quarterly</Badge>
                                 <Badge  className={`border border-accent py-4 px-3 text-accent hover:text-white hover:bg-accent ${compoundingPeriods === 2? "text-white bg-accent":""} cursor-pointer`} onClick={()=> setCompoundingPeriods(2)}>Half-Yearly</Badge>
                                 <Badge  className={`border border-accent py-4 px-3 text-accent hover:text-white hover:bg-accent ${compoundingPeriods === 4? "text-white bg-accent":""} cursor-pointer`} onClick={()=> setCompoundingPeriods(4)}>Yearly</Badge>
                             </div>
                        </div>
                      </div>
                       <div>
                         <SliderControl 
                            label={"Rate of Returns (%)"}
                            min={4}
                            max={30}
                            value={ interestRate }
                            step={.5}
                            symbol="%"
                            onChange={(val: number) => setInterestRate(val)}
                         />
                      </div>
                       <div>
                         <SliderControl 
                            label={"Time Period"}
                            min={5}
                            max={30}
                            value={tenureYears}
                            step={1}
                            symbol=""
                            onChange={(val: number) => setTenureYears(val)}
                         />
                      </div>
                      <div className="py-3">
                         <Button
                            type="submit"
                            title=""
                            aria-label="Calculate FD"
                            className="h-12 text-white bg-accent rounded-3xl px-4
                            hover:bg-accent-hover
                            cursor-pointer
                            "
                            onClick={() => calculate() }
                         >Calculate</Button>
                      </div>
                       

                    </div>
                </CardContent>
           </Card>
    )
}