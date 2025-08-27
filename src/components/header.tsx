import { Bell, Menu, LogOut, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useAuth } from "@/components/auth/auth-context"

interface HeaderProps {
  currentPage: string
  setSidebarOpen: (open: boolean) => void
}

const pageNames = {
  dashboard: "Dashboard",
  courses: "My Courses",
  assignments: "Assignments",
  grades: "Grades",
  attendance: "Attendance",
  calendar: "Calendar",
  profile: "Profile",
}

// Sample notifications data - replace with actual data from your API
const notifications = [
  {
    id: 1,
    type: "feedback",
    title: "Task Graded",
    message: "Your task on Baptisms has been graded by Osazee Samson",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "admin",
    title: "Missed class",
    message: "We noticed you missed the last class. Please reach the admin team to resolve this.",
    time: "1 day ago",
    read: false,
  },
  {
    id: 3,
    type: "feedback",
    title: "Tutor Feedback",
    message: "Great improvement on your essay structure! Keep up the good work.",
    time: "3 days ago",
    read: true,
  },
]

export function Header({ currentPage, setSidebarOpen }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false)
  const { logout } = useAuth()
  
  const unreadCount = notifications.filter(n => !n.read).length

  const handleLogout = () => {
    logout()
    // Additional cleanup if needed
  }

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <h2 className="font-serif text-2xl font-bold text-black">
            {pageNames[currentPage as keyof typeof pageNames]}
          </h2>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notifications Dropdown */}
          <div className="relative">
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-600 rounded-full text-xs text-white flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Button>

            {/* Notifications Dropdown Menu */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowNotifications(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                          !notification.read ? "bg-blue-50" : ""
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h4 className="text-sm font-medium text-gray-900">
                                {notification.title}
                              </h4>
                              {!notification.read && (
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      <Bell className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                      <p>No notifications</p>
                    </div>
                  )}
                </div>
                
                {notifications.length > 0 && (
                  <div className="p-4 border-t border-gray-200">
                    <Button variant="ghost" size="sm" className="w-full text-blue-600 hover:text-blue-700">
                      Mark all as read
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Logout Button - only shown if UI friendly (you can remove this if not needed) */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleLogout}
            className="text-gray-600 hover:text-red-600"
            title="Logout"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {showNotifications && (
        <div 
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setShowNotifications(false)}
        />
      )}
    </header>
  )
}