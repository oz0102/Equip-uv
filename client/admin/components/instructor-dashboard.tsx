"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { Progress } from "@/shared/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { BookOpen, Users, FileText, Clock, TrendingUp, Calendar, GraduationCap, AlertCircle, Star } from "lucide-react"

// Demo data
const stats = [
  {
    title: "Active Courses",
    value: "4",
    change: "+1",
    changeType: "positive" as const,
    icon: BookOpen,
  },
  {
    title: "Total Students",
    value: "127",
    change: "+8",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Pending Grades",
    value: "23",
    change: "-5",
    changeType: "positive" as const,
    icon: FileText,
  },
  {
    title: "This Week's Classes",
    value: "12",
    change: "0",
    changeType: "neutral" as const,
    icon: Calendar,
  },
]

const myCourses = [
  {
    id: 1,
    code: "THEO101",
    title: "Introduction to Theology",
    students: 32,
    progress: 75,
    nextClass: "Today, 2:00 PM",
    status: "active",
  },
  {
    id: 2,
    code: "BIBL201",
    title: "Biblical Interpretation",
    students: 28,
    progress: 68,
    nextClass: "Tomorrow, 10:00 AM",
    status: "active",
  },
  {
    id: 3,
    code: "HIST301",
    title: "Church History",
    students: 35,
    progress: 82,
    nextClass: "Wed, 1:00 PM",
    status: "active",
  },
  {
    id: 4,
    code: "PRAC401",
    title: "Practical Ministry",
    students: 32,
    progress: 45,
    nextClass: "Thu, 3:00 PM",
    status: "active",
  },
]

const recentSubmissions = [
  {
    id: 1,
    student: "Sarah Johnson",
    assignment: "Theology Essay #2",
    course: "THEO101",
    submittedAt: "2 hours ago",
    status: "pending",
  },
  {
    id: 2,
    student: "Michael Chen",
    assignment: "Biblical Analysis",
    course: "BIBL201",
    submittedAt: "4 hours ago",
    status: "pending",
  },
  {
    id: 3,
    student: "Emily Davis",
    assignment: "Church History Timeline",
    course: "HIST301",
    submittedAt: "1 day ago",
    status: "graded",
  },
  {
    id: 4,
    student: "David Wilson",
    assignment: "Ministry Reflection",
    course: "PRAC401",
    submittedAt: "1 day ago",
    status: "pending",
  },
]

const upcomingDeadlines = [
  {
    id: 1,
    title: "Grade Theology Essays",
    course: "THEO101",
    dueDate: "Today",
    priority: "high",
  },
  {
    id: 2,
    title: "Prepare Biblical Interpretation Lecture",
    course: "BIBL201",
    dueDate: "Tomorrow",
    priority: "medium",
  },
  {
    id: 3,
    title: "Review Ministry Presentations",
    course: "PRAC401",
    dueDate: "March 2",
    priority: "low",
  },
]

const topStudents = [
  {
    id: 1,
    name: "Sarah Johnson",
    course: "THEO101",
    grade: "A",
    avatar: "/diverse-student-studying.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    course: "BIBL201",
    grade: "A-",
    avatar: "/diverse-students-studying.png",
  },
  {
    id: 3,
    name: "Emily Davis",
    course: "HIST301",
    grade: "A",
    avatar: "/diverse-students-studying.png",
  },
]

export function InstructorDashboard() {
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
                  <span className="text-gray-500">from last week</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My Courses */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>My Courses</span>
            </CardTitle>
            <CardDescription>Current semester courses and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myCourses.map((course) => (
                <div key={course.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {course.code}: {course.title}
                      </h3>
                      <p className="text-sm text-gray-500">{course.students} students enrolled</p>
                    </div>
                    <Badge variant="secondary">{course.status}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Course Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Next Class:</span>
                      <span className="font-medium text-red-600">{course.nextClass}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Upcoming Deadlines</span>
            </CardTitle>
            <CardDescription>Tasks and deadlines to track</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline) => (
                <div key={deadline.id} className="flex items-start space-x-3">
                  <div
                    className={`p-1 rounded-full ${
                      deadline.priority === "high"
                        ? "bg-red-100"
                        : deadline.priority === "medium"
                          ? "bg-yellow-100"
                          : "bg-green-100"
                    }`}
                  >
                    <AlertCircle
                      className={`h-3 w-3 ${
                        deadline.priority === "high"
                          ? "text-red-600"
                          : deadline.priority === "medium"
                            ? "text-yellow-600"
                            : "text-green-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{deadline.title}</p>
                    <p className="text-xs text-gray-500">{deadline.course}</p>
                    <p className="text-xs text-gray-500">Due: {deadline.dueDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Submissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Recent Submissions</span>
            </CardTitle>
            <CardDescription>Latest student assignment submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSubmissions.map((submission) => (
                <div key={submission.id} className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{submission.student}</p>
                    <p className="text-xs text-gray-500">{submission.assignment}</p>
                    <p className="text-xs text-gray-500">
                      {submission.course} • {submission.submittedAt}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {submission.status === "pending" ? (
                      <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                        Pending
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Graded
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              View All Submissions
            </Button>
          </CardContent>
        </Card>

        {/* Top Students */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5" />
              <span>Top Performing Students</span>
            </CardTitle>
            <CardDescription>Students with highest grades this semester</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topStudents.map((student, index) => (
                <div key={student.id} className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full text-xs font-bold">
                    {index + 1}
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                    <AvatarFallback>
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{student.name}</p>
                    <p className="text-xs text-gray-500">{student.course}</p>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {student.grade}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              View All Students
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent">
          <FileText className="h-6 w-6" />
          <span className="text-sm">Create Assignment</span>
        </Button>
        <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent">
          <GraduationCap className="h-6 w-6" />
          <span className="text-sm">Grade Submissions</span>
        </Button>
        <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent">
          <Calendar className="h-6 w-6" />
          <span className="text-sm">Mark Attendance</span>
        </Button>
        <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent">
          <Users className="h-6 w-6" />
          <span className="text-sm">View Students</span>
        </Button>
      </div>
    </div>
  )
}
