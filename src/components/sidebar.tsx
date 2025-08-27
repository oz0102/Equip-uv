import { BookOpen, Calendar, ClipboardList, GraduationCap, Home, User, X, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/auth-context"

interface SidebarProps {
  currentPage: string
  setCurrentPage: (page: any) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const navigation = [
  { name: "Dashboard", icon: Home, key: "dashboard" },
  { name: "Courses", icon: BookOpen, key: "courses" },
  { name: "Tasks", icon: ClipboardList, key: "tasks" },
  { name: "Grades", icon: GraduationCap, key: "grades" },
  { name: "Attendance", icon: Calendar, key: "attendance" },
  { name: "Tracker", icon: Calendar, key: "tracker" },
  { name: "Calendar", icon: Calendar, key: "calendar" },
  { name: "Profile", icon: User, key: "profile" },
]

export function Sidebar({ currentPage, setCurrentPage, isOpen, setIsOpen }: SidebarProps) {
  const { logout, user } = useAuth()

  const handleLogout = () => {
    logout()
    setIsOpen(false) // Close sidebar on mobile after logout
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-black text-white transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0 flex flex-col
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EA</span>
            </div>
            <h1 className="font-serif text-xl font-bold">Equip Academy</h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex-1 mt-8 px-4">
          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.key

              return (
                <button
                  key={item.key}
                  onClick={() => {
                    setCurrentPage(item.key)
                    setIsOpen(false)
                  }}
                  className={`
                    w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                    ${isActive ? "bg-red-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}
                  `}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </button>
              )
            })}
          </div>
        </nav>

        {/* User Profile Section */}
        <div className="border-t border-gray-800">
          <div className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-semibold text-sm">
                  {user?.name?.split(' ').map(n => n[0]).join('') || 'OSF'}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{user?.name || 'Osazee Samson'}</p>
                <p className="text-xs text-gray-400">Student ID: EQ2025001</p>
              </div>
            </div>
          </div>
          
          {/* Logout Button */}
          <div className="px-4 pb-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors text-gray-300 hover:bg-red-600 hover:text-white"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}