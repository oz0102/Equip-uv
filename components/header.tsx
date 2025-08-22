"use client"

import { Bell, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  currentPage: string
  setSidebarOpen: (open: boolean) => void
}

const pageNames = {
  dashboard: "Dashboard",
  courses: "My Courses",
  assignments: "Assignments",
  grades: "Grades",
  attendance: "Attendance",
  calendar: "Calendar",
  profile: "Profile",
}

export function Header({ currentPage, setSidebarOpen }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <h2 className="font-serif text-2xl font-bold text-black">
            {pageNames[currentPage as keyof typeof pageNames]}
          </h2>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-600 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}
