"use client"

import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Bell, Menu, Search, Plus, Calendar } from "lucide-react"
import { useAuth } from "@/shared/context/auth-context"

type InstructorPage =
  | "dashboard"
  | "courses"
  | "students"
  | "assignments"
  | "grading"
  | "attendance"
  | "analytics"
  | "profile"

interface InstructorHeaderProps {
  currentPage: InstructorPage
  setSidebarOpen: (open: boolean) => void
}

const pageNames = {
  dashboard: "Dashboard",
  courses: "My Courses",
  students: "Students",
  assignments: "Assignments",
  grading: "Grading",
  attendance: "Attendance",
  analytics: "Analytics",
  profile: "Profile",
}

export function InstructorHeader({ currentPage, setSidebarOpen }: InstructorHeaderProps) {
  const { user } = useAuth()

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-serif font-bold text-gray-900">{pageNames[currentPage]}</h1>
            <p className="text-sm text-gray-500">Welcome back, {user?.name}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search students, assignments..." className="pl-10 w-64" />
          </div>

          {/* Quick Actions */}
          {currentPage === "assignments" && (
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              <Plus className="h-4 w-4 mr-2" />
              New Assignment
            </Button>
          )}

          {currentPage === "attendance" && (
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              <Calendar className="h-4 w-4 mr-2" />
              Mark Attendance
            </Button>
          )}

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              5
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}
