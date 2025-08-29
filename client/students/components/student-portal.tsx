import { useState } from "react"
import { Sidebar } from "@/students/components/sidebar"
import { Header } from "@/students/components/header"
import { Dashboard } from "@/students/components/dashboard"
import  Courses  from "@/students/components/courses"
import Assignments from "@/students/components/tasks"
import { Grades } from "@/students/components/grades"
import { Attendance } from "@/students/components/attendance"
import { Tracker } from "@/students/components/tracker"
import { Notifications } from "@/students/components/Events"
import { Profile } from "@/students/components/profile"
import TasksCenter from "@/students/components/tasks"

type Page = "dashboard" | "courses" | "tasks" | "grades" | "attendance" | "tracker" | "events" | "profile"

export function StudentPortal() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />
      case "courses":
        return <Courses />
      case "tasks":
        return <TasksCenter />
      case "grades":
        return <Grades />
      case "attendance":
        return <Attendance />
      case "tracker":
        return <Tracker />
      case "events":
        return <Notifications />
      case "profile":
        return <Profile />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentPage={currentPage} setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-6">{renderPage()}</main>
      </div>
    </div>
  )
}
