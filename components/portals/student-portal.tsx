"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Dashboard } from "@/components/dashboard"
import { Courses } from "@/components/courses"
import { Assignments } from "@/components/assignments"
import { Grades } from "@/components/grades"
import { Attendance } from "@/components/attendance"
import { Calendar } from "@/components/calendar"
import { Profile } from "@/components/profile"

type Page = "dashboard" | "courses" | "assignments" | "grades" | "attendance" | "calendar" | "profile"

export function StudentPortal() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />
      case "courses":
        return <Courses />
      case "assignments":
        return <Assignments />
      case "grades":
        return <Grades />
      case "attendance":
        return <Attendance />
      case "calendar":
        return <Calendar />
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
