"use client"
import { 
    Label
} from "./ui/label"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export default function SliderControl(
    {
        min   = 0, max = 10,
        value = 5,
        step = 1,
        onChange,
        label  = "",
        symbol = ""
    }
    :{
        min?:    number ,
        max?:    number ,
        value?:  number,
        step?:   number
        label?:  string,
        symbol?: string
        onChange?: Function,
    }
){

    const [currentValue, setCurrentValue] = useState<number>(value | 0);

    return (
        <div className="grid mx-auto py-2">
            <div className="flex items-center justify-between py-3">
                 <Label className="text-accent text-base">
                      {label}
                 </Label>
                 <Badge variant="outline" 
                    className="border border-gray-300 bg-transparent text-gray-500 px-4 py-3"
                  >
                    {currentValue}{symbol}
                 </Badge>
            </div>
             <div className="py-3">
                    <Slider className="
                    [&_[data-slot=slider-track]]:h-2
                    [&_[data-slot=slider-track]]:bg-border-subtle
                    [&_[data-slot=slider-range]]:bg-accent
                    [&_[data-slot=slider-thumb]]:h-5
                     [&_[data-slot=slider-thumb]]:w-3
                    [&_[data-slot=slider-thumb]]:rounded-sm
                    [&_[data-slot=slider-thumb]]:border-yellow-700
                    [&_[data-slot=slider-thumb]]:bg-yellow-700
                   "
                   onValueChange={( values ) => {
                       let val = typeof values === "number" ? values : values[0]
                       setCurrentValue(val)
                       if( onChange ) {
                          onChange(val)
                       }
                   }}

                   min={min}
                   max={max}
                   value={currentValue}
                   step={ step || 1}
                />
             </div>
             <div className="flex items-center justify-between py-2">
                 <div className="text-gray-600 text-sm">
                      {min} {symbol}
                </div>
                 <div className="text-gray-600">
                     {Math.floor(((max - min)/2))} {symbol}
                </div>
                 <div className="text-gray-600">
                      {max} {symbol}
                </div>
             </div>
        </div>
    )

}