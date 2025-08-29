import { useState } from "react"
import { InstructorSidebar } from "@/admin/components/instructor-sidebar"
import { InstructorHeader } from "@/admin/components/instructor-header"
import { InstructorDashboard } from "@/admin/components/instructor-dashboard"

type InstructorPage =
  | "dashboard"
  | "courses"
  | "students"
  | "assignments"
  | "grading"
  | "attendance"
  | "analytics"
  | "profile"

export function InstructorPortal() {
  const [currentPage, setCurrentPage] = useState<InstructorPage>("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <InstructorDashboard />
      default:
        return <InstructorDashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <InstructorSidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <InstructorHeader currentPage={currentPage} setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-6">{renderPage()}</main>
      </div>
    </div>
  )
}
