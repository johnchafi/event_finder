import { IEvent } from '@/lib/database/models/event.model'
import { formatDateTime } from '@/lib/utils'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DeleteConfirmation } from './DeleteConfirmation'
import { MapPinIcon, TagIcon } from 'lucide-react'

type CardProps = {
  event: IEvent,
  hasOrderLink?: boolean,
  hidePrice?: boolean
}

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userIdObj = sessionClaims?.userId as any;
  const userId = userIdObj?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div className="group relative flex min-h-[280px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg md:min-h-[350px]">
      <Link 
        href={`/events/${event._id}`}
        style={{backgroundImage: `url(${event.imageUrl})`}}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />
      {/* IS EVENT CREATOR ... */}

      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`}>
            <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div
        className="flex flex-between gap-3 py-3 md:gap-4"
      > 
          <p className="p-regular-12 p-regular-14 ">
              {formatDateTime(event.startDateTime).dateTime}
          </p>
          {!hidePrice && <div className="flex gap-2 items-center justify-center text-gray-400">
              <TagIcon className='text-gray-400'  size={16} />
              <span className="p-semibold-14 w-min pr-2">
                {event.isFree ? 'FREE' : `$${event.price}`}
              </span>
              {/* <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
                {event.category.name}
              </p> */}
            </div>}
      </div>
      <p className="p-regular-12 md:p-regular-14 text-start truncate">{event.title}</p>
      <div className='flex gap-1 py-2 items-center'>
        <MapPinIcon size={16} className='text-gray-400' />
        <p className="p-regular-12 md:p-regular-14 text-start text-gray-400">{event.location}</p>
      </div>
     
       
{/* 
        <Link href={`/events/${event._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{event.title}</p>
        </Link>
 */}
    {/* <p className="p-medium-14 md:p-medium-1">
            {event.organizer.firstName} {event.organizer.lastName}
          </p> */}
        <div className="flex-between absolute bottom-0 right-0">
          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
              <p className="text-primary-800 p-regular-12">Order Details</p>
              <Image src="/assets/icons/arrow.svg" alt="search" width={10} height={10} />
            </Link>
          )}
        </div> 
   
    </div>
  )
}

export default Card