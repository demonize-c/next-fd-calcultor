"use client"

import {Slider} from '@/components/ui/slider';
import {Badge} from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader,CardTitle ,CardDescription ,CardContent } from '@/components/ui/card';
import SliderControl from '@/components/SliderControl';


export default function(){
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
                            value={100000}
                            step={10000}
                            symbol=" ₹"
                         />
                      </div>
                      <div className="py-4">
                        <div className="flex items-center justify-between">
                            <div>
                               <span className="text-gray-900 text-xl">Interest Payout</span>
                            </div>
                             <div className="flex items-center justify-between gap-2">
                                 <Badge  className="border border-accent py-4 px-3 text-accent hover:text-white hover:bg-accent cursor-pointer">Quarterly</Badge>
                                 <Badge  className="border border-accent py-4 px-3 text-accent hover:text-white hover:bg-accent cursor-pointer">Half-Yearly</Badge>
                                 <Badge  className="border border-accent py-4 px-3 text-accent hover:text-white hover:bg-accent cursor-pointer">Yearly</Badge>
                                 <Badge  className="border border-accent py-4 px-3 text-accent hover:text-white hover:bg-accent cursor-pointer">Maturity</Badge>
                             </div>
                        </div>
                      </div>
                       <div>
                         <SliderControl 
                            label={"Rate of Returns (%)"}
                            min={3}
                            max={30}
                            value={5}
                            step={.5}
                            symbol="%"
                         />
                      </div>
                       <div>
                         <SliderControl 
                            label={"Time Period"}
                            min={5}
                            max={30}
                            value={10}
                            step={1}
                            symbol=""
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
                         >Calculate</Button>
                      </div>
                       

                    </div>
                </CardContent>
           </Card>
    )
}