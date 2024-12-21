import { IEvent } from '@/lib/database/models/event.model'
import { formatDateTime } from '@/lib/utils'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DeleteConfirmation } from './DeleteConfirmation'
import QRCode from "react-qr-code";
import {
    CalendarDays,
    IdCard,
    MapPin,
    Ticket as TicketIcon,
    User,
  } from "lucide-react";

type CardProps = {
  event: IEvent,
  hasOrderLink?: boolean,
  hidePrice?: boolean
}

const CardNew = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userIdObj = sessionClaims?.userId as any;
  const userId = userIdObj?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();
  

  return (

    <div
      className="group relative flex min-h-[280px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg md:min-h-[280px] border border-gray-800"
    >
      {/* Event Header with Image */}
      <div className="relative">
          <div className="relative w-full aspect-[21/9] ">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90" />
          </div>
        <div
          className={`px-6 py-4 ${event.imageUrl ? "absolute bottom-0 left-0 right-0" : "bg-blue-600"} `}
        >
          <h2
            className={`text-xl font-bold ${event.imageUrl || !event.imageUrl ? "text-white" : "text-black"}`}
          >
            {event.title}
          </h2>
        </div>
      </div>

      {/* Ticket Content */}
      <div className="p-3">
        <div className="grid grid-cols-2">
          {/* Left Column - Event Details */}
          <div className="">
            <div className="flex items-center text-gray-600">
              <CalendarDays
                className="w-4 h-4 mr-3 text-blue-600"
              />
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="text-sm">
                  {new Date(event.startDateTime).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <MapPin
                className="w-4 h-4 mr-3
                text-blue-600"
              />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-sm">{event.location}</p>
              </div>
            </div>


          </div>

          {/* Right Column - QR Code */}
          <div className="flex flex-col items-center justify-center">
            <div
              className="bg-gray-100 p-4 rounded-lg"
            >
              <QRCode value={event._id} className="w-24 h-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default CardNew