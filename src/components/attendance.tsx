import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react"
import { useState } from "react"

export function Attendance() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const attendanceRecords = [
    {
      id: 1,
      course: "BIBL201 - Biblical Hermeneutics",
      date: "2024-01-15",
      status: "present",
      arrivalTime: "09:00",
      notes: "",
    },
    {
      id: 2,
      course: "THEO101 - Introduction to Systematic Theology",
      date: "2024-01-15",
      status: "present",
      arrivalTime: "11:00",
      notes: "",
    },
    {
      id: 3,
      course: "HIST201 - Church History",
      date: "2024-01-15",
      status: "late",
      arrivalTime: "14:15",
      notes: "Traffic delay",
    },
    {
      id: 4,
      course: "BIBL201 - Biblical Hermeneutics",
      date: "2024-01-13",
      status: "present",
      arrivalTime: "09:00",
      notes: "",
    },
    {
      id: 5,
      course: "THEO101 - Introduction to Systematic Theology",
      date: "2024-01-13",
      status: "absent",
      arrivalTime: "",
      notes: "Sick leave - doctor's note provided",
    },
    {
      id: 6,
      course: "PRAC201 - Pastoral Care and Counseling",
      date: "2024-01-12",
      status: "present",
      arrivalTime: "14:00",
      notes: "",
    },
    {
      id: 7,
      course: "THEO201 - Advanced Systematic Theology",
      date: "2024-01-12",
      status: "present",
      arrivalTime: "10:00",
      notes: "",
    },
    {
      id: 8,
      course: "BIBL201 - Biblical Hermeneutics",
      date: "2024-01-10",
      status: "present",
      arrivalTime: "09:00",
      notes: "",
    },
  ]

  const courseStats = [
    {
      course: "BIBL201",
      title: "Biblical Hermeneutics",
      totalClasses: 15,
      attended: 14,
      late: 1,
      absent: 0,
      percentage: 93.3,
    },
    {
      course: "THEO101",
      title: "Introduction to Systematic Theology",
      totalClasses: 16,
      attended: 15,
      late: 0,
      absent: 1,
      percentage: 93.8,
    },
    {
      course: "HIST201",
      title: "Church History",
      totalClasses: 12,
      attended: 11,
      late: 1,
      absent: 0,
      percentage: 91.7,
    },
    {
      course: "PRAC201",
      title: "Pastoral Care and Counseling",
      totalClasses: 14,
      attended: 14,
      late: 0,
      absent: 0,
      percentage: 100,
    },
    {
      course: "THEO201",
      title: "Advanced Systematic Theology",
      totalClasses: 13,
      attended: 13,
      late: 0,
      absent: 0,
      percentage: 100,
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "absent":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "late":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "excused":
        return <AlertTriangle className="h-4 w-4 text-blue-600" />
      default:
        return <CheckCircle className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present":
        return "bg-green-100 text-green-800"
      case "absent":
        return "bg-red-100 text-red-800"
      case "late":
        return "bg-yellow-100 text-yellow-800"
      case "excused":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 95) return "text-green-600"
    if (percentage >= 90) return "text-blue-600"
    if (percentage >= 85) return "text-yellow-600"
    return "text-red-600"
  }

  const overallStats = {
    totalClasses: courseStats.reduce((sum, course) => sum + course.totalClasses, 0),
    attended: courseStats.reduce((sum, course) => sum + course.attended, 0),
    late: courseStats.reduce((sum, course) => sum + course.late, 0),
    absent: courseStats.reduce((sum, course) => sum + course.absent, 0),
  }

  const overallPercentage = Math.round((overallStats.attended / overallStats.totalClasses) * 100)

  return (
    <div className="space-y-6">
      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overall Rate</p>
                <p className={`text-2xl font-bold ${getPercentageColor(overallPercentage)}`}>{overallPercentage}%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Classes Attended</p>
                <p className="text-2xl font-bold text-green-600">{overallStats.attended}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Late Arrivals</p>
                <p className="text-2xl font-bold text-yellow-600">{overallStats.late}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Absences</p>
                <p className="text-2xl font-bold text-red-600">{overallStats.absent}</p>
              </div>
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Course Overview</TabsTrigger>
          <TabsTrigger value="records">Attendance Records</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {courseStats.map((course) => (
            <Card key={course.course}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-serif text-lg">
                      {course.course}: {course.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600">
                      {course.attended} of {course.totalClasses} classes attended
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getPercentageColor(course.percentage)}`}>
                      {course.percentage.toFixed(1)}%
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-lg font-bold text-green-600">{course.attended}</p>
                    <p className="text-sm text-gray-600">Present</p>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="h-5 w-5 text-yellow-600" />
                    </div>
                    <p className="text-lg font-bold text-yellow-600">{course.late}</p>
                    <p className="text-sm text-gray-600">Late</p>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <XCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <p className="text-lg font-bold text-red-600">{course.absent}</p>
                    <p className="text-sm text-gray-600">Absent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="records" className="space-y-4">
          {attendanceRecords.map((record) => (
            <Card key={record.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(record.status)}
                    <div>
                      <h4 className="font-medium text-black">{record.course}</h4>
                      <p className="text-sm text-gray-600">
                        {new Date(record.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {record.arrivalTime && <span className="text-sm text-gray-600">Arrived: {record.arrivalTime}</span>}
                    <Badge className={getStatusColor(record.status)}>{record.status}</Badge>
                  </div>
                </div>
                {record.notes && (
                  <div className="mt-2 p-2 bg-gray-50 rounded text-sm text-gray-700">
                    <strong>Note:</strong> {record.notes}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Attendance Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Attendance Trends</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">This Week</span>
                    <Badge className="bg-green-100 text-green-800">100% Present</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">This Month</span>
                    <Badge className="bg-green-100 text-green-800">96% Present</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">This Semester</span>
                    <Badge className="bg-green-100 text-green-800">96% Present</Badge>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-3">Upcoming Classes</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>BIBL201 - Tomorrow 9:00 AM</span>
                      <span className="text-green-600">Scheduled</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>THEO101 - Tomorrow 11:00 AM</span>
                      <span className="text-green-600">Scheduled</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>HIST201 - Tomorrow 2:00 PM</span>
                      <span className="text-green-600">Scheduled</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
