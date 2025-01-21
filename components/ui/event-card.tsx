import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

interface EventCardProps {
  image: string
  title: string
  date: string
  price: string
  location: string
  organizerImage: string
}

export default function EventCard({ image, title, date, price, location, organizerImage }: EventCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="space-y-1">
            <p className="text-sm">{date}</p>
            <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm">{price}</div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-300 truncate">{location}</span>
          </div>
          <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={organizerImage || "/placeholder.svg"}
              alt="Organizer"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

