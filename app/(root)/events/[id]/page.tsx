// import CheckoutButton from '@/components/shared/CheckoutButton';
// import Collection from '@/components/shared/Collection';
// import { Editor } from '@/components/ui/editor';
// //import EditorTry from '@/components/ui/editorTry';
// import { getEventById, getRelatedEventsByCategory } from '@/lib/actions/event.actions'
// import { formatDateTime } from '@/lib/utils';
// import { SearchParamProps } from '@/types'
// import { Calendar, MapPinIcon, Share2Icon, ShareIcon } from 'lucide-react';
// import Image from 'next/image';

// const EventDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {
//   const event = await getEventById(id);

//   const relatedEvents = await getRelatedEventsByCategory({
//     categoryId: event.category._id,
//     eventId: event._id,
//     page: searchParams.page as string,
//   })

//   return (
//     <section className='wrapper flex-col gap-3'>
//       <div className='flex flex-col md:flex-row gap-3'>
//         <div className='md:w-1/2'>
//           <div className='rounded-xl flex-col relative h-64 md:h-96 md:w-full md:mt-20'>
//             <Image className='md:pt-4 rounded-md'  src={event.imageUrl} alt="calendar" fill={true} />
//           </div>
//           <div className='flex justify-between mx-3 my-1'>
//             <p className="p-regular-12">{event.category.name}</p>
//             <Share2Icon className='text-gray-500'/>
//           </div>
//           <h2 className='h2-bold mx-3 truncate'>{event.title}</h2>
//           <div className='flex gap-2 md:gap-3 mx-3 my-2'>
//               <Calendar className='text-gray-500' size={16}/>
//               <div className="p-regular-12 lg:p-regular-14 flex flex-wrap items-center gap-2">
//                 <p>
//                   {formatDateTime(event.startDateTime).dateOnly} - {' '}
//                   {formatDateTime(event.startDateTime).timeOnly}
//                 </p>
//                 <p>
//                   {formatDateTime(event.endDateTime).dateOnly} -  {' '}
//                   {formatDateTime(event.endDateTime).timeOnly}
//                 </p>
//               </div>
//           </div>
//           <div className="p-regular-12 lg:p-regular-14 flex items-center gap-3 mx-3">
//                 <MapPinIcon size={16} className='text-gray-400' />
//               <p className="p-regular-12 lg:p-regular-14">{event.location}</p>
//           </div>
//         </div>
      
//         <div className='md:w-1/2'>
//         <div className="flex flex-col gap-2 my-3">
//             <CheckoutButton event={event} />
//             <p className="p-bold-20 text-grey-400">About</p>
//             {/* <p className="p-medium-16 lg:p-regular-18">{event.description}</p> */}
//             <Editor editorContent={event.description} editable={false} hideToolBar={true}></Editor>

//             {/* <EditorTry editorContent={event.description} editable={false}  hideToolbar={true}/> */}
//             {/* <a className="p-medium-16 lg:p-regular-18 truncate text-blue-400 underline mt-2" href={event.url} target='_blank'>
//                {event.url}

//             </a> */}
         
//           </div>
//         </div>

//       </div>
   
     

//       <section className="my-8 flex flex-col gap-8 md:gap-12">
//         <h2 className="h2-bold flex justify-center items-center">Related <span className='text-primary-800'>Events</span></h2>
//         <Collection 
//             data={relatedEvents?.data}
//             emptyTitle="No Events Found"
//             emptyStateSubtext="Come back later"
//             collectionType="All_Events"
//             limit={3}
//             page={searchParams.page as string}
//             totalPages={relatedEvents?.totalPages}
//           />
//     </section>
//     </section>
//   )
// }

// export default EventDetails



import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Hash, Share2, Calendar, Ticket, NavigationIcon } from "lucide-react"
import { SearchParamProps } from '@/types'
import { getEventById } from "@/lib/actions/event.actions"
import { formatDateTime } from "@/lib/utils"
import Link from "@/node_modules/next/link"
import MagicButton from "@/components/ui/magicButton"
import CheckoutButton from "@/components/shared/CheckoutButton"
import { Editor } from '@/components/ui/editor';
import ShareButtons from "@/components/ui/shareButtons"

export default async function EventDetails({ params: { id }, searchParams }: SearchParamProps) {
  const event = await getEventById(id);
  const {organizer} = event;

  return (
    <section className="wrapper min-h-screen w-full bg-black text-white">
        {/* Back Button */}
        <Link href="/explore">
          <Button variant="ghost" className="mb-6 bg-[#A78BFA]/30">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
      {/* <div className="flex flex-col items-center justify-center max-w-7xl py-6"> */}
      
        

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6 w-full">
            {/* Banner Image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={event.imageUrl}
                alt="Afro Fusion Dance Class"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Category */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="rounded-full bg-purple-900 p-2">🎭</span>
                <span className="text-sm">{event.category.name}</span>
              </div>
              <div className="flex space-x-4">
                {/* <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                  
                </Button> */}

                <ShareButtons />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold">{event.title}</h1>

            {/* Organizer */}
            <div className="flex items-center space-x-3">
              <div className=" flex items-center h-10 w-10 overflow-hidden rounded-full bg-zinc-800">
              <span className="rounded-full bg-purple-900 p-2">🎭</span>
              </div>
              <p >By <span className="text-primary-800">{organizer.lastName}</span></p>
            </div>

            {/* Date & Time */}
            <div className="flex items-start space-x-4">
              <div className="rounded-lg bg-[#A78BFA]/30 p-3 text-center">
                <Calendar />
              </div>
              <div>
              <p className="text-sm">{formatDateTime(event.startDateTime).dateTime}</p>
              <p className="text-sm text-center text-gray-400">To</p>
              <p className="text-sm">{formatDateTime(event.endDateTime).dateTime}</p>
                
              </div>
            </div>

            {/* Location */}
            <div className="rounded-lg bg-zinc-800 p-4">
              <h3 className="font-semibold pb-4">{event.location}</h3>
              <p className="text-sm text-zinc-400">View</p>
            </div>
          </div>
          {/* <Card className="bg-zinc-800 border-zinc-700"> */}
              {/* <Editor /> */}
              {/* <h2 className="mb-4 text-xl font-semibold">Yola</h2> */}
          {/* </Card> */}
          {/* Right Column */}
          <div className="space-y-6">
            {/* Tickets Section */}
            
             <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-semibold">Tickets</h2>
                <div className="mb-4 rounded-lg bg-zinc-700/50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 bg-[#A78BFA]/40 flex items-center justify-center rounded-xl">
                      <Ticket className="h-8 w-8"/>
                      </div>
                      <div>
                        <p className="font-semibold">Price</p>
                        <p className="text-sm text-zinc-100">{event.price} $</p>
                      </div>
                    </div>
                  </div>
                </div>
                <CheckoutButton event={event} />
              </CardContent>
            </Card> 

            {/* About Section */}
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <Editor editorContent={event.description} editable={false} hideToolBar={true}></Editor> 
              </CardContent>  
            </Card>
            
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-semibold">Location</h2>
                <div className="h-40 rounded-lg bg-zinc-700"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}