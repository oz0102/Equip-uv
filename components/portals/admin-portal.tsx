"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

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

export function AdminPortal() {
  const [currentPage, setCurrentPage] = useState<AdminPage>("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <AdminDashboard />
      default:
        return <AdminDashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader currentPage={currentPage} setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-6">{renderPage()}</main>
      </div>
    </div>
  )
}
