// import * as React from "react"
 
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import Image from "next/image"
 
// export function CarouselHero() {
//   return (
//     <Carousel className="w-full">
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               {/* <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-4xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card> */}
//             <Image 
//                 src="/assets/images/audience.jpg" alt="hero" width={1000} height={1000} className="max-h[70vh] object-contain object-center 2xl:max-h-[50vh]"
//             />
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }

"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import MagicButton from "./magicButton";
import { NavigationIcon } from "lucide-react";

export const InfiniteCarousel = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string,
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller flex-col items-center justify-center relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      {/* <div className="w-full text-center font-bold">HOTTEST 🔥 🔥 🔥</div> */}
      <ul
        ref={scrollerRef}
        className={cn(
          " flex justify-center items-center py-4 gap-16 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused] hover:cursor-pointer"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
          >
            
               <div className="relative w-96 h-72 flex justify-center items-center group">
                    <Image
                        src={item.image}
                        alt="pic of dog"
                        fill={true}
                      />
                      {/* <button className="absolute z-50 hidden group-hover:block">Buy Ticket </button> */}
                      
                      {/* <div className="absolute z-50 hidden group-hover:block">
                        <MagicButton
                          title="Buy Ticket"
                          icon={<NavigationIcon className='w-4'/>}
                          position="right"
                        />
                      </div> */}
                            
                </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
