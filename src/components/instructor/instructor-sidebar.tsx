"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/auth-context"
import {
  LayoutDashboard,
  BookOpen,
  Users,
  FileText,
  GraduationCap,
  Calendar,
  BarChart3,
  User,
  LogOut,
  X,
} from "lucide-react"

type InstructorPage =
  | "dashboard"
  | "courses"
  | "students"
  | "assignments"
  | "grading"
  | "attendance"
  | "analytics"
  | "profile"

interface InstructorSidebarProps {
  currentPage: InstructorPage
  setCurrentPage: (page: InstructorPage) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const navigation = [
  { name: "Dashboard", href: "dashboard", icon: LayoutDashboard },
  { name: "My Courses", href: "courses", icon: BookOpen },
  { name: "Students", href: "students", icon: Users },
  { name: "Assignments", href: "assignments", icon: FileText },
  { name: "Grading", href: "grading", icon: GraduationCap },
  { name: "Attendance", href: "attendance", icon: Calendar },
  { name: "Analytics", href: "analytics", icon: BarChart3 },
  { name: "Profile", href: "profile", icon: User },
]

export function InstructorSidebar({ currentPage, setCurrentPage, isOpen, setIsOpen }: InstructorSidebarProps) {
  const { user, logout } = useAuth()

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="bg-red-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-serif font-bold text-gray-900">Equip Academy</h1>
                <p className="text-xs text-red-600 font-medium">Instructor Portal</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* User Info */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 p-2 rounded-full">
                <User className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">Biblical Studies</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.href
              return (
                <Button
                  key={item.name}
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isActive
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  )}
                  onClick={() => {
                    setCurrentPage(item.href as InstructorPage)
                    setIsOpen(false)
                  }}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Button>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100" onClick={logout}>
              <LogOut className="mr-3 h-5 w-5" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
