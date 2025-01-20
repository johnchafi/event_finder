import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { getAllEvents } from "@/lib/actions/event.actions";
import Image from "next/image";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/ui/magicButton";
import { NavigationIcon } from "lucide-react";
import {InfiniteCarousel } from "@/components/ui/hero";
import Search from "@/components/shared/Search";
import { SearchParamProps } from "@/types";
export default async function Home({searchParams} : SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string || '');
  const category = (searchParams?.category as string || '');


  const events = await getAllEvents({
    query: searchText,
    category,
    page: 1,
    limit: 6

  });
const activeEvents = events?.data.filter((event:any) => Date.parse(event.startDateTime) > Date.now())
    .sort((a:any, b:any) => a.startDateTime - b.startDateTime);

const pastEvents = events?.data.filter((event:any) => Date.parse(event.startDateTime) <= Date.now())
    .sort((a:any, b:any) => b.startDateTime - a.startDateTime);
  
// console.log(activeEvents);
// console.log(pastEvents);

  return (
    <>
    <section className="bg-dotted-pattern pattern bg-contain py-5 md:py-10">
      {/* <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold"><span className="h1-bold text-primary-800"> Host, connect , </span>  celebrate: Your <span className="h1-bold text-primary-800"> events , </span> our platform!</h1>
          <p className="p-regular-12 md:p-regular-16">Eventhub simplifies event planning by allowing you to manage guests, sell tickets, coordinate details, and connect seamlessly. It’s the ultimate solution for hassle-free event enjoyment!</p>
          <Link className="button w-full" href="#events">
            <MagicButton
              title=" Explorer Now"
              icon={<NavigationIcon className='w-4'/>}
              position="right"
            />
          </Link>
        </div>
        
        <InfiniteCarousel items={heroImages} />

      </div> */}
   
      <section id="events" className="wrapper w-full my-8 flex flex-col gap-8 text-center">
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          
        {/* CategoryFilter */}

        </div>
        <div className="flex w-full justify-center items-center py-4 rounded-lg bg-slate">
          <h2 className="h2-bold">
            ACTIVE <span className="text-primary-800">EVENTS</span>
          </h2>
         
        </div>
        <Collection 
          data={activeEvents}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={2}
        />

      <div className="flex w-full justify-center items-center py-4 rounded-lg bg-slate">
          <h2 className="h2-bold">
            PAST <span className="text-primary-800">EVENTS</span>
          </h2>
        </div>
        <Collection 
          data={pastEvents}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={2}
        />

      {/* <h2 className="h2-bold">Trusted by many <span className="text-primary-800">organizers</span></h2>
        <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="fast"
        /> */}
      </section>
      

    </section>
    </>
    
  );
}
