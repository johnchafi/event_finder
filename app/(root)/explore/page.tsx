// import Collection from "@/components/shared/Collection";
// import { getAllEvents } from "@/lib/actions/event.actions";
// import Search from "@/components/shared/Search";
// import { SearchParamProps } from "@/types";
// export default async function Home({searchParams} : SearchParamProps) {
//   const page = Number(searchParams?.page) || 1;
//   const searchText = (searchParams?.query as string || '');
//   const category = (searchParams?.category as string || '');


//   const events = await getAllEvents({
//     query: searchText,
//     category,
//     page: 1,
//     limit: 6

//   });
// const activeEvents = events?.data.filter((event:any) => Date.parse(event.startDateTime) > Date.now())
//     .sort((a:any, b:any) => a.startDateTime - b.startDateTime);

// const pastEvents = events?.data.filter((event:any) => Date.parse(event.startDateTime) <= Date.now())
//     .sort((a:any, b:any) => b.startDateTime - a.startDateTime);
  
// // console.log(activeEvents);
// // console.log(pastEvents);

//   return (
//     <>
//     <section className="bg-dotted-pattern pattern bg-contain py-5 md:py-10">
//       <section id="events" className="wrapper w-full my-8 flex flex-col gap-8 text-center">
//         <div className="flex w-full flex-col gap-5 md:flex-row">
//           <Search />
          
//         {/* CategoryFilter */}

//         </div>
//         <div className="flex w-full justify-center items-center py-4 rounded-lg bg-slate">
//           <h2 className="h2-bold">
//             ACTIVE <span className="text-primary-800">EVENTS</span>
//           </h2>
         
//         </div>
//         <Collection 
//           data={activeEvents}
//           emptyTitle="No Events Found"
//           emptyStateSubtext="Come back later"
//           collectionType="All_Events"
//           limit={6}
//           page={1}
//           totalPages={2}
//         />

//       <div className="flex w-full justify-center items-center py-4 rounded-lg bg-slate">
//           <h2 className="h2-bold">
//             PAST <span className="text-primary-800">EVENTS</span>
//           </h2>
//         </div>
//         <Collection 
//           data={pastEvents}
//           emptyTitle="No Events Found"
//           emptyStateSubtext="Come back later"
//           collectionType="All_Events"
//           limit={6}
//           page={1}
//           totalPages={2}
//         />
//       </section>
//     </section>
//     </>
    
//   );
// }


//"use client"

import { Menu, Search, X } from "lucide-react"
import Image from "next/image"
//import { useState } from "react"
import DatePicker from "@/components/ui/date-picker"
import CategoryFilter from "@/components/ui/category-filter"
import EventCard from "@/components/ui/event-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.actions";
//import Search from "@/components/shared/Search";
import { SearchParamProps } from "@/types";
import Sidesheet from "@/components/ui/side-sheet"

export default async function EventsPage({searchParams} : SearchParamProps) {
  // const page = Number(searchParams?.page) || 1;
  // const searchText = (searchParams?.query as string || '');
  // const category = (searchParams?.category as string || '');


  // const events = await getAllEvents({
  //   query: searchText,
  //   category,
  //   page: 1,
  //   limit: 6

  // });
  // const activeEvents = events?.data.filter((event:any) => Date.parse(event.startDateTime) > Date.now())
  //     .sort((a:any, b:any) => a.startDateTime - b.startDateTime);

  // const pastEvents = events?.data.filter((event:any) => Date.parse(event.startDateTime) <= Date.now())
  //     .sort((a:any, b:any) => b.startDateTime - a.startDateTime);
  //const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Mobile Header */}
      {/* <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-800">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open filters</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:w-80 p-0 bg-[#1C1C1E] border-gray-800">
            <div className="h-full overflow-auto p-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Search</h2>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search by title or venue"
                      className="w-full bg-gray-800 border-gray-700 pl-4 pr-10"
                    />
                    <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-400">Results depend on active filters</p>
                </div>
                <DatePicker />
                <CategoryFilter />
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <h1 className="text-xl font-bold">Events</h1>
        <Button variant="ghost" size="sm" className="text-sm">
          Reset Filters
        </Button>
      </div> */}
      <Sidesheet />

      <div className="flex flex-col lg:flex-row">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-80 p-6 border-r border-gray-800">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Search</h2>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search by title or venue"
                  className="w-full bg-gray-800 border-gray-700 pl-4 pr-10"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <p className="text-sm text-gray-400">Results depend on active filters</p>
            </div>
            <DatePicker />
            <CategoryFilter />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          {/* Navigation */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" className="bg-gray-800 hover:bg-gray-700">
                Active
              </Button>
              <Button variant="ghost">Happening</Button>
              <Button variant="ghost">Today</Button>
              <Button variant="ghost">Tomorrow</Button>
              <Button variant="ghost">Weekend</Button>
            </div>
            <Button variant="ghost" className="hidden lg:flex items-center gap-2">
              Reset Filters
            </Button>
          </div>

          {/* Events Grid */}
          <div>
            <h2 className="text-xl font-semibold mb-6">
              ACTIVE <span className="text-[#D4A853]">EVENTS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <EventCard
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/explore-silB8YhdN3UyOnuI2ukZvjzz8zYe6K.png"
                title="Afro Fusion Dance Class"
                date="Tomorrow, 11:30 AM"
                price="From 12K RWF"
                location="The Pink House Kigali"
                organizerImage="/placeholder.svg"
              />
              <EventCard
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/explore-silB8YhdN3UyOnuI2ukZvjzz8zYe6K.png"
                title="June Thursdays 23"
                date="23rd Jan 25"
                price="From 5K RWF"
                location="Cocobean"
                organizerImage="/placeholder.svg"
              />
              <EventCard
                image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/explore-silB8YhdN3UyOnuI2ukZvjzz8zYe6K.png"
                title="Twilight Picnic & Film"
                date="25th Jan 25"
                price="From 12.5K RWF"
                location="AMASHYO GROUNDS"
                organizerImage="/placeholder.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




