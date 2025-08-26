import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, CheckCircle, Clock, GraduationCap, TrendingUp } from "lucide-react"

export function Dashboard() {
  const upcomingAssignments = [
    { id: 1, title: "Biblical Hermeneutics Essay", course: "BIBL201", dueDate: "2024-01-15", status: "pending" },
    { id: 2, title: "Theology Quiz #3", course: "THEO101", dueDate: "2024-01-18", status: "pending" },
    { id: 3, title: "Ministry Reflection Paper", course: "PRAC301", dueDate: "2024-01-22", status: "pending" },
  ]

  const recentGrades = [
    { id: 1, assignment: "Church History Timeline", course: "HIST201", grade: "A-", points: "92/100" },
    { id: 2, assignment: "Systematic Theology Exam", course: "THEO201", grade: "B+", points: "87/100" },
    { id: 3, assignment: "Pastoral Care Case Study", course: "PRAC201", grade: "A", points: "95/100" },
  ]

  const todaySchedule = [
    { time: "9:00 AM", course: "Biblical Hermeneutics", location: "Room 101", instructor: "Dr. Johnson" },
    { time: "11:00 AM", course: "Systematic Theology", location: "Room 203", instructor: "Prof. Williams" },
    { time: "2:00 PM", course: "Pastoral Care", location: "Room 105", instructor: "Rev. Davis" },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white">
        <h1 className="font-serif text-3xl font-bold mb-2">Welcome back, Gracee!</h1>
        <p className="text-red-100 text-lg">Ready to continue your journey in Foundations?</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Current GPA</p>
                <p className="text-2xl font-bold text-black">3.85</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed Credits</p>
                <p className="text-2xl font-bold text-black">24/60</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Courses</p>
                <p className="text-2xl font-bold text-black">5</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
                <p className="text-2xl font-bold text-black">96%</p>
              </div>
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Assignments */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif flex items-center">
              <Clock className="mr-2 h-5 w-5 text-red-600" />
              Upcoming Assignments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAssignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-black">{assignment.title}</h4>
                    <p className="text-sm text-gray-600">{assignment.course}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-red-600">{assignment.dueDate}</p>
                    <Badge variant="outline" className="text-xs">
                      {assignment.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">View All Assignments</Button>
          </CardContent>
        </Card>

        {/* Recent Grades */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif flex items-center">
              <GraduationCap className="mr-2 h-5 w-5 text-red-600" />
              Recent Grades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentGrades.map((grade) => (
                <div key={grade.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-black">{grade.assignment}</h4>
                    <p className="text-sm text-gray-600">{grade.course}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">{grade.grade}</p>
                    <p className="text-sm text-gray-600">{grade.points}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              View All Grades
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-red-600" />
            Today's Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {todaySchedule.map((item, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-red-600">{item.time}</span>
                  <span className="text-xs text-gray-500">{item.location}</span>
                </div>
                <h4 className="font-medium text-black mb-1">{item.course}</h4>
                <p className="text-sm text-gray-600">{item.instructor}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
