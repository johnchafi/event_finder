import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { getAllEvents } from "@/lib/actions/event.actions";
import Image from "next/image";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export default async function Home() {


   const testimonials = [
    {
      quote:
        "Collaborating with Jean de Dieu was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Jean de Dieu's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Jean de Dieu is the ideal partner.",
      name: "Donna Sinclair",
      title: "Co-founder krispii.inc",
    },
  ];

  const events = await getAllEvents({
    query:'',
    category:'',
    page: 1,
    limit: 6

  });
  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
        {/* <TextGenerateEffect 
          className="Text-center h1-bold" 
          words="Host, connect , celebrate: Your events , our platform!"

        /> */}
          <h1 className="h1-bold">Host, connect , celebrate: <span className="h1-bold text-primary-500">Your events , our platform!</span></h1>
          
          <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from mentors in world-class companies with our gloabl community</p>
          <Button size='lg' asChild className="button w-full">
            <Link href="#events">
            Explorer Now
            </Link>
          </Button>


        </div>
        <Image 
        src="/assets/images/hero.png" alt="hero" width={1000} height={1000} className="max-h[70vh] object-contain object-center 2xl:max-h-[50vh]"
        />

      </div>
      {/* <div className="h-[20vh]  rounded-md  items-center ">
      <InfiniteMovingCards 
            items={testimonials}
            direction="right"
            speed="fast"
      />

      </div> */}
      <section id="events" className="wrapper my-8 flex flex-col gap-8">
        <h2 className="h2-bold">Trusted by <br/> Thousands of events</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          search
          CategoryFilter

        </div>
        <div className="flex w-full justify-center items-center py-4 rounded-lg bg-slate ">
          <h2 className="h1-bold">
          ACTIVE <span className="text-primary-500">EVENTS</span>
          </h2>
         
         

        </div>
        <Collection 
          data={events?.data}
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
