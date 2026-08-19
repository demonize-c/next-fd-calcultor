import FDCalcultor from "@/components/FDCalcultor"
import FDBarGraph from "@/components/FDBarGraph"

export default function Page() {
  return (
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
  )
}
