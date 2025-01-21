import { Gamepad2, Heart, Library, Music, PartyPopper, Pizza, PresentationIcon, Users, Video } from "lucide-react"

export default function CategoryFilter() {
  const categories = [
    { name: "Conferences", icon: PresentationIcon },
    { name: "Adventures", icon: Gamepad2 },
    { name: "Fundraising", icon: Heart },
    { name: "Sports", icon: Users },
    { name: "Technology", icon: Library },
    { name: "Music", icon: Music },
    { name: "Food & Drinks", icon: Pizza },
    { name: "Family", icon: PartyPopper },
    { name: "Cinema", icon: Video },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Category</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex items-center gap-3 w-full p-2 rounded hover:bg-gray-800 transition-colors"
          >
            <category.icon className="w-5 h-5 text-gray-400" />
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}