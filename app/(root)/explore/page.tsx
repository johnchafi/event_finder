import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.actions";
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
      </section>
    </section>
    </>
    
  );
}
