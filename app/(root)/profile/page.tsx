import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Collection from '@/components/shared/Collection'
import CollectionTickets from '@/components/shared/CollectionTickets'
import { auth } from '@clerk/nextjs/server'
import { getEventsByUser } from '@/lib/actions/event.actions'
import { SearchParamProps } from '@/types'
import { getOrdersByUser } from '@/lib/actions/order.actions'
import { IOrder } from '@/lib/database/models/order.model'
import { IEvent } from '@/lib/database/models/event.model'
import EventCard from '@/components/ui/event-card'
import MagicButton from '@/components/ui/magicButton'
import { NavigationIcon, CalendarPlus } from "lucide-react"

// const ProfilePage = async ({ searchParams }: SearchParamProps) => {

//     const { sessionClaims } = auth();
//     const userIdObject = sessionClaims?.userId as any; 
//     const userId = userIdObject?.userId as string;

//     const organizedEvents = await getEventsByUser({
//         userId, page:1
//     })

//   return (
//     <>
//         <section className='bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
//             <div className='wrapper flex items-center justify-center sm:justify-between'>
//                 <h3 className='h3-bold text-center sm:text-left'>My Tickets</h3>
//                 <Button asChild size="lg" className='button hidden sm:flex'>
//                     <Link href="/#events">
//                         Explore more Events
//                     </Link>

//                 </Button>

//             </div>

//         </section>
//         <section className='wrapper my-8'>
//         {/* <Collection 
//           data={organizedEvents?.data}
//           emptyTitle="No Events tickets purchased yet"
//           emptyStateSubtext="No worries - plenty of exciting events to explore"
//           collectionType="My_Tickets"
//           limit={3}
//           page={1}
//           urlParamName='ordersPage'
//           totalPages={2}
//         /> */}

//         </section>
//         <section className='bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
//             <div className='wrapper flex items-center justify-center sm:justify-between'>
//                 <h3 className='h3-bold text-center sm:text-left'>Events organized</h3>
//                 <Button asChild size="lg" className='button hidden sm:flex'>
//                     <Link href="/events/create">
//                         Create New Events
//                     </Link>
//                 </Button>

//             </div>

//         </section>
//         <section className='wrapper my-8'>
//         <Collection 
//           data={organizedEvents?.data}
//           emptyTitle="No Events have been created yet"
//           emptyStateSubtext="Go create some now"
//           collectionType="Events_Organized"
//           limit={6}
//           page={1}
//           urlParamName='EventsPage'
//           totalPages={2}
//         />

//         </section>

//     </>
//   )
// }

// export default ProfilePage
const ProfilePage = async ({ searchParams }: SearchParamProps) => {
    const { sessionClaims } = auth();
    const userIdObject = sessionClaims?.userId as any; 
    const userId = userIdObject?.userId as string;
  
    const ordersPage = Number(searchParams?.ordersPage) || 1;
    const eventsPage = Number(searchParams?.eventsPage) || 1;
    const orders = await getOrdersByUser({ userId, page: ordersPage})
    const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
    const organizedEvents = await getEventsByUser({ userId, page: eventsPage })
    //console.log(organizedEvents);
    return (
      <div className="min-h-screen wrapper w-full bg-black text-white py-8">
        {/* My Tickets */}
        <section className="py-5 md:py-10">
          <div className="md:flex items-center justify-center sm:justify-between">
            <h3 className='text-2xl text-gray-400 leading-relaxed font-bold text-center sm:text-left'>My Tickets</h3>
            {/* <Button asChild size="lg" className="button hidden sm:flex bg-primary-800">
              <Link href="/#events">
                Explore More Events
              </Link>
            </Button> */}
            <div className='md:pt-0 pt-3'>
              <Link className="button" href="/explore">
                <MagicButton
                  title=" Explorer Now"
                  icon={<NavigationIcon className='w-4'/>}
                  position="right"
                />
              </Link>

            </div>
            
          </div>
        </section>
  
        <section className="wrapper my-2">
          <CollectionTickets 
            data={orderedEvents}
            emptyTitle="No event tickets purchased yet"
            emptyStateSubtext="No worries - plenty of exciting events to explore!"
            collectionType="My_Tickets"
            limit={3}
            page={ordersPage}
            urlParamName="ordersPage"
            totalPages={orders?.totalPages}
          />
        </section>
  
        {/* Events Organized */}
        <section className="py-5 md:py-10">
          <div className="md:flex items-center justify-center sm:justify-between">
            <h3 className='text-2xl text-gray-400 font-bold leading-relaxed text-center sm:text-left'>Events Organized</h3>
            <div className='md:pt-0 pt-3'>
              <Link className="button" href="/events/create">
                <MagicButton
                  title="Create New Event"
                  icon={<CalendarPlus className='w-4'/>}
                  position="right"
                />
              </Link>
            </div>
          </div>
        </section>
  
        <section className=" my-8 flex flex-col lg:flex-row ">
          {/* <Collection 
            data={organizedEvents?.data}
            emptyTitle="No events have been created yet"
            emptyStateSubtext="Go create some now"
            collectionType="Events_Organized"
            limit={3}
            page={eventsPage}
            urlParamName="eventsPage"
            totalPages={organizedEvents?.totalPages}
          /> */}
          <div className='flex-1 p-4'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"> 
             {
                organizedEvents?.data?.map((orgEV: IEvent, i:any)=> (
                  <EventCard
                  key={"orgEV" + i}
                  event={orgEV}
                  limit={6}
                  page={1}
                  totalPages={2}
                />

                ))
            } 

          </div>  

          </div>

            
        </section>
      </div>   
    )
  }
  
  export default ProfilePage