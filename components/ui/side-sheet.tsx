
"use client"
import React, { useState } from 'react'
import { Button } from './button';
import { Menu } from 'lucide-react';
import { Input } from './input';
import DatePicker from './date-picker';
import CategoryFilter from './category-filter';
import { Search } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
function Sidesheet() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-800">
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
  </div>
  )
}

export default Sidesheet