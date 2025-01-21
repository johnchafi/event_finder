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
import { ArrowLeft, Hash, Share2 } from "lucide-react"

export default function DanceClass() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Banner Image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/try2-uR1EOOZX6rGbGoErdnmbCWTBG6M0Vp.png`}
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
                <span className="text-sm">Arts & Culture</span>
              </div>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Hash className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold">Afro Fusion Dance Class</h1>

            {/* Organizer */}
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-full bg-zinc-700" />
              </div>
              <div>
                <p className="text-sm text-zinc-400">By</p>
                <p className="text-orange-500">@manzimbaya</p>
              </div>
            </div>

            {/* Date & Time */}
            <div className="flex items-start space-x-4">
              <div className="rounded-lg bg-zinc-800 p-3 text-center">
                <div className="text-sm text-zinc-400">JAN</div>
                <div className="text-2xl font-bold">21</div>
              </div>
              <div>
                <p className="font-semibold">Tuesday, 21st</p>
                <p className="text-zinc-400">11:30 AM - 13:00 PM</p>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-lg bg-zinc-800 p-4">
              <h3 className="font-semibold">The Pink House Kigali</h3>
              <p className="text-sm text-zinc-400">View</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Tickets Section */}
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-semibold">Tickets</h2>

                {/* Class Fee */}
                <div className="mb-4 rounded-lg bg-zinc-700/50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-orange-500">🎟️</span>
                      <div>
                        <p className="font-semibold">Class fee</p>
                        <p className="text-sm text-zinc-400">12,000 RWF</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monthly Subscription */}
                <div className="mb-6 rounded-lg bg-zinc-700/50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-orange-500">🎟️</span>
                      <div>
                        <p className="font-semibold">Monthly subscription</p>
                        <p className="text-sm text-zinc-400">40,000 RWF</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mb-4 text-sm text-zinc-400">Questions about ticket? Contact the organizer.</p>

                <Button className="w-full bg-orange-500 hover:bg-orange-600">Continue</Button>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-semibold">About</h2>
                <p className="text-zinc-400">
                  Afro Fusion Dance Class with Manzi Mbaya Every Tuesday | 6:30 PM – 8:00 PM Join Rwandan dance
                  sensation and choreographer Manzi for an exhilarating Afro Fusion dance class every Tuesday. Fusing
                  traditional African rhythms with contemporary urban moves, this class is designed for dancers of all
                  levels seeking to expand their artistic expression and deepen their connection to African culture.
                </p>
              </CardContent>
            </Card>

            {/* Location Section */}
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-semibold">Location</h2>
                <div className="h-40 rounded-lg bg-zinc-700"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}