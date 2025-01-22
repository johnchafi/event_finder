import React from 'react'
import { Ticket } from 'lucide-react'
function NoEventCard() {
  return (
    <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px]  py-28 text-center border border-neutral-800 shadow-sm shadow-primary-800 ">
    <Ticket className="w-24
     h-24 text-gray-400 mx-auto mb-4 shadow-2xl shadow-red-400 " />
   <h3 className="p-bold-20 md:h5-bold">No Events Found</h3>
   <p className="p-regular-14">Come back later</p>
 </div>
  )
}

export default NoEventCard