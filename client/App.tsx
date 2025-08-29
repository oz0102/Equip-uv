import { AuthProvider, useAuth } from "@/shared/context/auth-context"
import { Login } from "@/shared/components/login"
import { StudentPortal } from "@/students/components/student-portal"
import { AdminPortal } from "@/admin/components/admin-portal"
import { InstructorPortal } from "@/admin/components/instructor-portal"

function AppContent() {
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

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}
