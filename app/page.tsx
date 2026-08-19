import FDCalcultor from "@/components/FDCalcultor"
import FDBarGraph from "@/components/FDBarGraph"
import { FDCalculatorProvider } from "@/context/FDContext"

export default function Page() {
  return (
    <FDCalculatorProvider>
    <div className="min-h-svh bg-gray-100 w-full">

      <div className="grid grid-cols-2 p-4">
        <div className="bg-white">
           <FDCalcultor></FDCalcultor>
        </div>
        <div className="">
          <FDBarGraph></FDBarGraph>
        </div>
      </div>
    </div>
    </FDCalculatorProvider>
  )
}
