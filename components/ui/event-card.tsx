import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { formatDateTime } from '@/lib/utils'
import { TagIcon} from "lucide-react"
import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'
import { IEvent } from "@/lib/database/models/event.model"
import { DeleteConfirmation } from "../shared/DeleteConfirmation"

interface EventCardProps {
  event:IEvent
  limit:number,
  page:number,
  totalPages:number,
}


// key={"activeEV" + i}
// image={activeEv.imageUrl}
// title={activeEv.title}
// date={activeEv.startDateTime}
// price={activeEv.price}
// location={activeEv.location}
// organizerImage="/placeholder.svg"
// eventId={activeEv._id}

export default function EventCard({  event, limit, page, totalPages=0 }: EventCardProps) {
  const { sessionClaims } = auth();
  const userIdObj = sessionClaims?.userId as any;
  const userId = userIdObj?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();
  return (
    
    <Card className="bg-zinc-700 border-gray-700 overflow-hidden rounded-2xl hover:bg-gray-700 hover:cursor-pointer">
     
      <div className="relative aspect-[4/3] ">
      <Link href={`/events/${event._id}`} >
          <Image src={event.imageUrl || "/placeholder.svg"} alt={event.title} fill className="object-cover p-4" />
       </Link>
      
        {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="space-y-1">
            <p className="text-sm">{date}</p>
            <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          </div>
        </div>
        */}
        {
          isEventCreator && <div className="absolute right-0 top-0 flex flex-col gap-4 rounded-xl bg-[#35383F] p-3 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`}>
            <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
        }
        
       
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between">
        <p className="text-sm">{formatDateTime(event.startDateTime).dateTime}</p>
        <div className="flex gap-1 justify-center items-center">
          <TagIcon className='text-gray-200'  size={16} />
          <p className="flex items-center justify-center h-8 w-12 rounded-full bg-primary-800 ">
            <span className="text-sm">{event.price} $</span>
          </p>
          
        </div>
     


        </div>
       
        <h3 className="font-semibold text-lg line-clamp-2 truncate">{event.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-200" />
            <span className="text-sm text-gray-300 truncate">{event.location}</span>
          </div>
          
          {/* <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={organizerImage || "/placeholder.svg"}
              alt="Organizer"
              width={32}
              height={32}
              className="object-cover"
            />
          </div> */}
        </div>
      </CardContent>
      
     
      
    
    </Card>
  )
}

