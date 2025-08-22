"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Menu, Search, Plus } from "lucide-react"
import { useAuth } from "@/components/auth/auth-context"

type AdminPage =
  | "dashboard"
  | "users"
  | "students"
  | "instructors"
  | "courses"
  | "cohorts"
  | "analytics"
  | "reports"
  | "settings"

interface AdminHeaderProps {
  currentPage: AdminPage
  setSidebarOpen: (open: boolean) => void
}

const pageNames = {
  dashboard: "Dashboard",
  users: "User Management",
  students: "Students",
  instructors: "Instructors",
  courses: "Courses",
  cohorts: "Cohorts",
  analytics: "Analytics",
  reports: "Reports",
  settings: "Settings",
}

export function AdminHeader({ currentPage, setSidebarOpen }: AdminHeaderProps) {
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
            <Input placeholder="Search..." className="pl-10 w-64" />
          </div>

          {/* Quick Actions */}
          {(currentPage === "users" ||
            currentPage === "students" ||
            currentPage === "instructors" ||
            currentPage === "courses") && (
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              <Plus className="h-4 w-4 mr-2" />
              Add New
            </Button>
          )}

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}
