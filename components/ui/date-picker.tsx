//import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function DatePicker() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Date</h2>
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label>Starting</Label>
          <Input type="date" className="bg-gray-800 border-gray-700" />
        </div>
        <div className="space-y-2">
          <Label>Ending</Label>
          <Input type="date" className="bg-gray-800 border-gray-700" />
        </div>
      </div>
      <p className="text-sm text-gray-400">Pick a selection of date ranges to filter by</p>
    </div>
  )
}



