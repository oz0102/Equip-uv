"use client"

import { useAuth } from "@/components/auth/auth-context"
import { Login } from "@/components/auth/login"
import { StudentPortal } from "@/components/portals/student-portal"
import { AdminPortal } from "@/components/portals/admin-portal"
import { InstructorPortal } from "@/components/portals/instructor-portal"

export default function Home() {
  const { user, login, isAuthenticated } = useAuth()

  if (!isAuthenticated || !user) {
    return <Login onLogin={login} />
  }

  // Route to appropriate portal based on user role
  switch (user.role) {
    case "student":
      return <StudentPortal />
    case "admin":
      return <AdminPortal />
    case "instructor":
      return <InstructorPortal />
    default:
      return <Login onLogin={login} />
  }
}
