import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react"

export function Attendance() {
  const attendanceRecords = [
    {
      id: 1,
      course: "Salvation - Origin of Sin",
      date: "2024-01-15",
      status: "present",
      notes: "",
    },
    {
      id: 2,
      course: "Salvation - Difference Between Sin and Dead Works",
      date: "2024-01-15",
      status: "present",
      notes: "",
    },
    {
      id: 3,
      course: "Salvation - Repentance from Dead Works",
      date: "2024-01-15",
      status: "excused",
      notes: "Doctor's appointment - medical note provided",
    },
    {
      id: 4,
      course: "Salvation - Faith Towards God",
      date: "2024-01-13",
      status: "present",
      notes: "",
    },
    {
      id: 5,
      course: "Salvation - Origin of Sin",
      date: "2024-01-13",
      status: "absent",
      notes: "No notification provided",
    },
    {
      id: 6,
      course: "Salvation - Difference Between Sin and Dead Works",
      date: "2024-01-12",
      status: "present",
      notes: "",
    },
    {
      id: 7,
      course: "Salvation - Repentance from Dead Works",
      date: "2024-01-12",
      status: "present",
      notes: "",
    },
    {
      id: 8,
      course: "Salvation - Faith Towards God",
      date: "2024-01-10",
      status: "present",
      notes: "",
    },
    {
      id: 9,
      course: "Salvation - Origin of Sin",
      date: "2024-01-08",
      status: "excused",
      notes: "Family emergency - prior notification given",
    },
    {
      id: 10,
      course: "Salvation - Difference Between Sin and Dead Works",
      date: "2024-01-08",
      status: "present",
      notes: "",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "absent":
        return <XCircle className="h-4 w-4 text-red-600" />
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
      case "excused":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Calculate overall statistics
  const totalRecords = attendanceRecords.length
  const presentCount = attendanceRecords.filter(record => record.status === "present").length
  const absentCount = attendanceRecords.filter(record => record.status === "absent").length
  const excusedCount = attendanceRecords.filter(record => record.status === "excused").length
  const attendanceRate = Math.round((presentCount / totalRecords) * 100)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Attendance Records</h1>
        <p className="text-gray-600">Salvation Course - Student Attendance Tracking</p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
                <p className="text-2xl font-bold text-green-600">{attendanceRate}%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Present</p>
                <p className="text-2xl font-bold text-green-600">{presentCount}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Absent</p>
                <p className="text-2xl font-bold text-red-600">{absentCount}</p>
              </div>
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Excused</p>
                <p className="text-2xl font-bold text-blue-600">{excusedCount}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">Course Subtopics Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Origin of Sin", "Difference Between Sin and Dead Works", "Repentance from Dead Works", "Faith Towards God"].map((subtopic) => {
              const subtopicRecords = attendanceRecords.filter(record => record.course.includes(subtopic))
              const presentInSubtopic = subtopicRecords.filter(record => record.status === "present").length
              const totalInSubtopic = subtopicRecords.length
              const subtopicRate = totalInSubtopic > 0 ? Math.round((presentInSubtopic / totalInSubtopic) * 100) : 0

              return (
                <div key={subtopic} className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">{subtopic}</h4>
                  <p className="text-2xl font-bold text-green-600">{subtopicRate}%</p>
                  <p className="text-xs text-gray-600">{presentInSubtopic}/{totalInSubtopic} classes</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Attendance Records */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">Detailed Attendance Records</CardTitle>
          <p className="text-sm text-gray-600">Complete history of class attendance</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {attendanceRecords.map((record) => (
              <Card key={record.id} className="border-l-4 border-l-gray-200">
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
                      <Badge className={getStatusColor(record.status)}>
                        {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  {record.notes && (
                    <div className="mt-3 p-3 bg-gray-50 rounded text-sm text-gray-700 border-l-2 border-blue-200">
                      <strong>Note:</strong> {record.notes}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-lg">Status Legend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-green-800">Present</p>
                <p className="text-xs text-green-600">Student attended the class</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
              <XCircle className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-medium text-red-800">Absent</p>
                <p className="text-xs text-red-600">Student did not attend the class</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-blue-800">Excused</p>
                <p className="text-xs text-blue-600">Absence with valid reason/documentation</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}