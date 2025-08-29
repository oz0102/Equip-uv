import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { Progress } from "@/shared/ui/progress"
import {
  Users,
  GraduationCap,
  BookOpen,
  UserCheck,
  TrendingUp,
  AlertTriangle,
  Calendar,
  FileText,
  BarChart3,
  Clock,
} from "lucide-react"

// Demo data
const stats = [
  {
    title: "Total Students",
    value: "247",
    change: "+12%",
    changeType: "positive" as const,
    icon: GraduationCap,
  },
  {
    title: "Active Instructors",
    value: "18",
    change: "+2",
    changeType: "positive" as const,
    icon: UserCheck,
  },
  {
    title: "Active Courses",
    value: "32",
    change: "+5",
    changeType: "positive" as const,
    icon: BookOpen,
  },
  {
    title: "System Users",
    value: "265",
    change: "+14%",
    changeType: "positive" as const,
    icon: Users,
  },
]

const recentActivities = [
  {
    id: 1,
    type: "enrollment",
    message: "Sarah Johnson enrolled in Biblical Foundations",
    time: "2 minutes ago",
    icon: GraduationCap,
  },
  {
    id: 2,
    type: "assignment",
    message: "Prof. Wilson created new assignment for Theology 101",
    time: "15 minutes ago",
    icon: FileText,
  },
  {
    id: 3,
    type: "user",
    message: "New instructor account created for Dr. Martinez",
    time: "1 hour ago",
    icon: UserCheck,
  },
  {
    id: 4,
    type: "system",
    message: "System backup completed successfully",
    time: "2 hours ago",
    icon: AlertTriangle,
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Spring Semester Registration Opens",
    date: "March 1, 2024",
    type: "registration",
  },
  {
    id: 2,
    title: "Faculty Meeting",
    date: "February 28, 2024",
    type: "meeting",
  },
  {
    id: 3,
    title: "Foundations Program Graduation",
    date: "March 15, 2024",
    type: "graduation",
  },
]

const cohortProgress = [
  {
    name: "Foundations 2024 Spring",
    students: 45,
    progress: 75,
    status: "active",
  },
  {
    name: "Equip 2024 Spring",
    students: 32,
    progress: 68,
    status: "active",
  },
  {
    name: "Foundations 2023 Fall",
    students: 38,
    progress: 95,
    status: "completing",
  },
]

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="flex items-center space-x-1 text-xs">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-green-600 font-medium">{stat.change}</span>
                  <span className="text-gray-500">from last month</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Recent Activities</span>
            </CardTitle>
            <CardDescription>Latest system activities and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => {
                const Icon = activity.icon
                return (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <Icon className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              View All Activities
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Upcoming Events</span>
            </CardTitle>
            <CardDescription>Important dates and deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border-l-4 border-red-600 pl-3">
                  <p className="text-sm font-medium text-gray-900">{event.title}</p>
                  <p className="text-xs text-gray-500">{event.date}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              View Calendar
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Cohort Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>Cohort Progress</span>
          </CardTitle>
          <CardDescription>Current cohort status and completion rates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {cohortProgress.map((cohort) => (
              <div key={cohort.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{cohort.name}</p>
                    <p className="text-xs text-gray-500">{cohort.students} students</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={cohort.status === "active" ? "default" : "secondary"}>
                      {cohort.status === "active" ? "Active" : "Completing"}
                    </Badge>
                    <span className="text-sm font-medium">{cohort.progress}%</span>
                  </div>
                </div>
                <Progress value={cohort.progress} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent">
          <Users className="h-6 w-6" />
          <span className="text-sm">Manage Users</span>
        </Button>
        <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent">
          <BookOpen className="h-6 w-6" />
          <span className="text-sm">Create Course</span>
        </Button>
        <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent">
          <FileText className="h-6 w-6" />
          <span className="text-sm">Generate Report</span>
        </Button>
        <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent">
          <BarChart3 className="h-6 w-6" />
          <span className="text-sm">View Analytics</span>
        </Button>
      </div>
    </div>
  )
}
