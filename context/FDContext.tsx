"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { ReactNode } from "react";

type FDCalcultorContextType = {
    principalAmount: number,
    interestRate: number,
    tenureYears: number
    compoundingPeriods: number,
    totalInterest: number,
    yearWiseInterestAmounts: number[],
    loading: boolean,
    setPrincipalAmount: (principalAmount: number) => void,
    setInterestRate: (interestRate: number) => void
    setTenureYears: (tenureYears: number) => void
    setCompoundingPeriods: (compoundingYears: number) => void
    calculate: () => void
}

const FDCalculatorContext = createContext<FDCalcultorContextType | undefined>(undefined);

export function FDCalculatorProvider({ children   }: {children: ReactNode}) {

    const [principalAmount, setPrincipalAmount] = useState<number>(10000);
    const [interestRate, setInterestRate ] = useState<number>(4);
    const [tenureYears, setTenureYears] = useState<number>(5);
    const [compoundingPeriods, setCompoundingPeriods] = useState<number>(1)
    const [totalInterest, setTotalInterest ] = useState<number>(0);
    const [yearWiseInterestAmounts, setYearWiseInteresetAmount ] = useState<number[]>([]);
    const [loading, setLoading] = useState(false)

    const calculateCompoundInterest = ( { principal, rateOfIntereset, periodInYears , compoundingPeriods}
    :{
         principal: number, 
         rateOfIntereset: number,
         periodInYears: number , 
         compoundingPeriods: number

    }): number => {
     
       return  parseFloat((principalAmount * Math.pow(1 + rateOfIntereset/(100 * compoundingPeriods) , (compoundingPeriods * periodInYears))).toFixed(2));
    }

    // useEffect(()=> {

      

    // },[ principalAmount, interestRate, tenureYears, compoundingPeriods]);

    const handleCalculate = () => {
        setLoading(true)
        let tempYearWiseInterestAmounts: number[] = 
        Array
        .from({length: tenureYears},(_, i) => i + 1)
        .map(( y ) => calculateCompoundInterest({
            principal:          principalAmount,
            rateOfIntereset:    interestRate,
            compoundingPeriods: compoundingPeriods,
            periodInYears: y
        }));


        setYearWiseInteresetAmount( tempYearWiseInterestAmounts );
        setTotalInterest( 
            calculateCompoundInterest({
                principal: principalAmount,
                rateOfIntereset: interestRate,
                compoundingPeriods: compoundingPeriods,
                periodInYears: tenureYears
            }) - principalAmount
        );
        setTimeout(()=> setLoading(false), 800);
    }

   

    return(

        <FDCalculatorContext.Provider value={
            {    loading,
                 principalAmount,
                 interestRate, 
                 tenureYears, 
                 compoundingPeriods,
                 totalInterest,
                 yearWiseInterestAmounts,
                 setPrincipalAmount,
                 setTenureYears,
                 setCompoundingPeriods,
                 setInterestRate,
                 calculate: handleCalculate
            }} 
        >
               { children }
        </FDCalculatorContext.Provider>
    );

}


export function useFDCalcultorContext() {
  const context = useContext( FDCalculatorContext );

  if (!context) {
    throw new Error("useFD must be used inside FDCalcultorProvider");
  }

  return context;
}