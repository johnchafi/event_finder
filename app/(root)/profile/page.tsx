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
    return (
      <>
        {/* My Tickets */}
        <section className="py-5 md:py-10">
          <div className="wrapper flex items-center justify-center sm:justify-between">
            <h3 className='h3-bold text-center sm:text-left'>My Tickets</h3>
            <Button asChild size="lg" className="button hidden sm:flex bg-primary-800">
              <Link href="/#events">
                Explore More Events
              </Link>
            </Button>
          </div>
        </section>
  
        <section className="wrapper my-8">
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
          <div className="wrapper flex items-center justify-center sm:justify-between">
            <h3 className='h3-bold text-center sm:text-left'>Events Organized</h3>
            <Button asChild size="lg" className="button hidden sm:flex bg-primary-800">
              <Link href="/events/create">
                Create New Event
              </Link>
            </Button>
          </div>
        </section>
  
        <section className="wrapper my-8">
          <Collection 
            data={organizedEvents?.data}
            emptyTitle="No events have been created yet"
            emptyStateSubtext="Go create some now"
            collectionType="Events_Organized"
            limit={3}
            page={eventsPage}
            urlParamName="eventsPage"
            totalPages={organizedEvents?.totalPages}
          />
        </section>
      </>
    )
  }
  
  export default ProfilePage