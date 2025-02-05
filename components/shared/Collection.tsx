import { IEvent } from '@/lib/database/models/event.model'
import React from 'react'
import Card from './Card'
import Pagination from './Pagination'
import CardNew from './CardNew'
import { Ticket } from 'lucide-react'

type CollectionProps = {
  data: IEvent[],
  emptyTitle: string,
  emptyStateSubtext: string,
  limit: number,
  page: number | string,
  totalPages?: number,
  urlParamName?: string,
  collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events'
}

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((event, index) => {
              const hasOrderLink = collectionType === 'Events_Organized'; 
              const hidePrice = collectionType === 'My_Tickets';

              return (
                <li key={index + event._id} className="flex justify-center hover:shadow-lg  border border-gray-700 rounded-xl hover:cursor-pointer bg-[#35383F] hover:bg-[#66696F]">
                  <Card event={event} hasOrderLink={hasOrderLink} hidePrice={hidePrice} />
                  {/* <CardNew event={event} hasOrderLink={hasOrderLink} hidePrice={hidePrice} /> */}
                </li>
              )
            })}
          </ul>

          {totalPages > 1 && (
            <Pagination urlParamName={urlParamName} page={page} totalPages={totalPages} />
          )}
        </div>
      ): (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px]  py-28 text-center border border-neutral-800 shadow-sm shadow-primary-800 ">
           <Ticket className="w-24
            h-24 text-gray-400 mx-auto mb-4 shadow-2xl shadow-red-400 " />
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )} 
    </>
  )
}

export default Collection