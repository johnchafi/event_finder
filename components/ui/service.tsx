import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import MagicButton from "./magicButton"

export function CtaSection() {
  return (
    <div className="wrapper mx-auto px-4 py-12">
      <div className="bg-zinc-900/50 rounded-3xl p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold  mb-6">
          Ready to take <span className="text-primary-800">your event</span>
          <br />
          <span className="ext-primary-800">to the next level?</span>
        </h2>
        <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
          Join organizers who trust EventHub to organize and manage their events seamlessly.
        </p>
        {/* <Button className="bg-[#F5A524] hover:bg-[#F5A524]/90 text-white px-8 py-6 h-auto text-lg">
          <Phone className="mr-2 h-5 w-5" /> Contact Us
        </Button> */}
        <MagicButton
              title=" Contact Us"
              icon={<Phone className='w-4'/>}
              position="right"
            />
      </div>
    </div>
  )
}
