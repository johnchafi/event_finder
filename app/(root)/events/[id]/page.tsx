import CheckoutButton from '@/components/shared/CheckoutButton';
import Collection from '@/components/shared/Collection';
import { Editor } from '@/components/ui/editor';
import EditorTry from '@/components/ui/editorTry';
import { getEventById, getRelatedEventsByCategory } from '@/lib/actions/event.actions'
import { formatDateTime } from '@/lib/utils';
import { SearchParamProps } from '@/types'
import { Calendar, MapPinIcon, Share2Icon, ShareIcon } from 'lucide-react';
import Image from 'next/image';

const EventDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {
  const event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  })

  return (
    <section className='wrapper flex-col gap-3'>
      <div className='flex flex-col md:flex-row gap-3'>
        <div className='md:w-1/2'>
          <div className='rounded-xl flex-col relative h-64 md:h-96 md:w-full md:mt-20'>
            <Image className='md:pt-4 rounded-md'  src={event.imageUrl} alt="calendar" fill={true} />
          </div>
          <div className='flex justify-between mx-3 my-1'>
            <p className="p-regular-12">{event.category.name}</p>
            <Share2Icon className='text-gray-500'/>
          </div>
          <h2 className='h2-bold mx-3 truncate'>{event.title}</h2>
          <div className='flex gap-2 md:gap-3 mx-3 my-2'>
              <Calendar className='text-gray-500' size={16}/>
              <div className="p-regular-12 lg:p-regular-14 flex flex-wrap items-center gap-2">
                <p>
                  {formatDateTime(event.startDateTime).dateOnly} - {' '}
                  {formatDateTime(event.startDateTime).timeOnly}
                </p>
                <p>
                  {formatDateTime(event.endDateTime).dateOnly} -  {' '}
                  {formatDateTime(event.endDateTime).timeOnly}
                </p>
              </div>
          </div>
          <div className="p-regular-12 lg:p-regular-14 flex items-center gap-3 mx-3">
                <MapPinIcon size={16} className='text-gray-400' />
              <p className="p-regular-12 lg:p-regular-14">{event.location}</p>
          </div>
        </div>
      
        <div className='md:w-1/2'>
        <div className="flex flex-col gap-2 my-3">
            <CheckoutButton event={event} />
            <p className="p-bold-20 text-grey-400">About</p>
            {/* <p className="p-medium-16 lg:p-regular-18">{event.description}</p> */}
            <Editor editorContent={event.description} editable={false} hideToolBar={true}></Editor>

            {/* <EditorTry editorContent={event.description} editable={false}  hideToolbar={true}/> */}
            {/* <a className="p-medium-16 lg:p-regular-18 truncate text-blue-400 underline mt-2" href={event.url} target='_blank'>
               {event.url}

            </a> */}
         
          </div>
        </div>

      </div>
   
     

      <section className="my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold flex justify-center items-center">Related <span className='text-primary-800'>Events</span></h2>
        <Collection 
            data={relatedEvents?.data}
            emptyTitle="No Events Found"
            emptyStateSubtext="Come back later"
            collectionType="All_Events"
            limit={3}
            page={searchParams.page as string}
            totalPages={relatedEvents?.totalPages}
          />
    </section>

    {/* <div className='border border-green-400' >
           <div className='relative min-h-[280px] w-full max-w-[400px] md:min-h-[350px] overflow-hidden'>
            <Image  src={event.imageUrl} alt="calendar" fill={true}/>
            <p className=''>Yola</p>
          </div> */}
          {/*
          <div className='flex'>
             <p className="p-regular-12">{event.category.name}</p>
             <Share2Icon />
          </div> */}
        {/* </div>
       <div className=''>

       </div> */}


    {/* <section className="wrapper flex justify-center bg-dotted-pattern bg-contain">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
       <div>
          <Image 
            src={event.imageUrl}
            alt="hero image"
            width={1000}
            height={300}
            className="h-full min-h-[300px] object-cover object-center rounded-sm"
          />
          <div className='flex justify-between py-2'>
             <p className="p-regular-12">{event.category.name}</p>
             <Share2Icon />
          </div>
          <h2 className='h2-bold'>{event.title}</h2>
          <div className='flex gap-2 md:gap-3'>
              <Image src="/assets/icons/calendar.svg" alt="calendar" width={32} height={32} />
              <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                <p>
                  {formatDateTime(event.startDateTime).dateOnly} - {' '}
                  {formatDateTime(event.startDateTime).timeOnly}
                </p>
                <p>
                  {formatDateTime(event.endDateTime).dateOnly} -  {' '}
                  {formatDateTime(event.endDateTime).timeOnly}
                </p>
              </div>
          </div>
          <div className="p-regular-16 flex items-center gap-3">
              <Image src="/assets/icons/location.svg" alt="location" width={32} height={32} />
              <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
          </div>
         

        </div> */}
     

        {/* <div className="flex w-full flex-col gap-8 p-5 md:p-10">
          <div className="flex flex-col gap-6">
            <h2 className='h2-bold'>{event.title}</h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex gap-3">
                <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                  {event.isFree ? 'FREE' : `$${event.price}`}
                </p>
                <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                  {event.category.name}
                </p>
              </div>

              <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                by{' '}
                <span className="text-primary-800">{event.organizer.firstName} {event.organizer.lastName}</span>
              </p>
            </div>
          </div>

          <CheckoutButton event={event} />

          <div className="flex flex-col gap-5">
            <div className='flex gap-2 md:gap-3'>
              <Image src="/assets/icons/calendar.svg" alt="calendar" width={32} height={32} />
              <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                <p>
                  {formatDateTime(event.startDateTime).dateOnly} - {' '}
                  {formatDateTime(event.startDateTime).timeOnly}
                </p>
                <p>
                  {formatDateTime(event.endDateTime).dateOnly} -  {' '}
                  {formatDateTime(event.endDateTime).timeOnly}
                </p>
              </div>
            </div>

            <div className="p-regular-20 flex items-center gap-3">
              <Image src="/assets/icons/location.svg" alt="location" width={32} height={32} />
              <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="p-bold-20 text-grey-600">About</p>
            <p className="p-medium-16 lg:p-regular-18">{event.description}</p>
            <p className="p-medium-16 lg:p-regular-18 truncate text-primary-800 underline">{event.url}</p>
          </div>
        </div> */}
      {/* </div>
    </section> */}
{/* 
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold flex justify-center items-center">Related <span className='text-primary-800'>Events</span></h2>

      <Collection 
          data={relatedEvents?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
    </section> */}
    </section>
  )
}

export default EventDetails