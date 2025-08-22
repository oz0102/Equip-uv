import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, FileText, AlertCircle, CheckCircle } from "lucide-react"

export function Assignments() {
  const assignments = [
    {
      id: 1,
      title: "Biblical Hermeneutics Essay",
      course: "BIBL201 - Biblical Hermeneutics",
      type: "essay",
      dueDate: "2024-01-15T23:59:00",
      submittedAt: null,
      status: "pending",
      points: 100,
      description: "Write a 2000-word essay on the historical-grammatical method of biblical interpretation.",
      instructions:
        "Your essay should include an introduction, three main sections discussing different aspects of the method, and a conclusion with practical applications.",
      attachments: ["rubric.pdf", "reading-list.pdf"],
    },
    {
      id: 2,
      title: "Theology Quiz #3",
      course: "THEO101 - Introduction to Systematic Theology",
      type: "quiz",
      dueDate: "2024-01-18T11:30:00",
      submittedAt: null,
      status: "pending",
      points: 50,
      description: "Quiz covering chapters 8-10 on the doctrine of salvation.",
      instructions: "The quiz will be available for 60 minutes and consists of 25 multiple choice questions.",
      attachments: ["study-guide.pdf"],
    },
    {
      id: 3,
      title: "Ministry Reflection Paper",
      course: "PRAC301 - Pastoral Care and Counseling",
      type: "project",
      dueDate: "2024-01-22T23:59:00",
      submittedAt: null,
      status: "pending",
      points: 75,
      description: "Reflect on your ministry experience and apply pastoral care principles.",
      instructions: "Write a 1500-word reflection paper connecting your ministry experience with course concepts.",
      attachments: ["reflection-template.docx"],
    },
    {
      id: 4,
      title: "Church History Timeline",
      course: "HIST201 - Church History",
      type: "project",
      dueDate: "2024-01-10T23:59:00",
      submittedAt: "2024-01-09T15:30:00",
      status: "submitted",
      points: 80,
      grade: 92,
      description: "Create a comprehensive timeline of major events in church history.",
      instructions: "Include at least 50 significant events with dates, descriptions, and historical context.",
      attachments: ["timeline-template.pdf"],
    },
    {
      id: 5,
      title: "Systematic Theology Exam",
      course: "THEO201 - Advanced Systematic Theology",
      type: "exam",
      dueDate: "2024-01-08T14:00:00",
      submittedAt: "2024-01-08T13:45:00",
      status: "graded",
      points: 150,
      grade: 131,
      description: "Comprehensive exam covering all topics from the first half of the semester.",
      instructions: "The exam consists of essay questions and will be administered in person.",
      attachments: [],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "submitted":
        return "bg-blue-100 text-blue-800"
      case "graded":
        return "bg-green-100 text-green-800"
      case "late":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "essay":
        return <FileText className="h-4 w-4" />
      case "quiz":
        return <Clock className="h-4 w-4" />
      case "exam":
        return <AlertCircle className="h-4 w-4" />
      case "project":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const pendingAssignments = assignments.filter((a) => a.status === "pending")
  const submittedAssignments = assignments.filter((a) => a.status === "submitted")
  const gradedAssignments = assignments.filter((a) => a.status === "graded")

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date()
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">{pendingAssignments.length}</p>
              <p className="text-sm text-gray-600">Pending</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{submittedAssignments.length}</p>
              <p className="text-sm text-gray-600">Submitted</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{gradedAssignments.length}</p>
              <p className="text-sm text-gray-600">Graded</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-black">
                {gradedAssignments.length > 0
                  ? Math.round(
                      gradedAssignments.reduce((sum, a) => sum + (a.grade! / a.points) * 100, 0) /
                        gradedAssignments.length,
                    )
                  : 0}
                %
              </p>
              <p className="text-sm text-gray-600">Avg Grade</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assignments Tabs */}
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">Pending ({pendingAssignments.length})</TabsTrigger>
          <TabsTrigger value="submitted">Submitted ({submittedAssignments.length})</TabsTrigger>
          <TabsTrigger value="graded">Graded ({gradedAssignments.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {pendingAssignments.map((assignment) => (
            <Card key={assignment.id} className={`${isOverdue(assignment.dueDate) ? "border-red-500" : ""}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="font-serif text-lg flex items-center">
                      {getTypeIcon(assignment.type)}
                      <span className="ml-2">{assignment.title}</span>
                      {isOverdue(assignment.dueDate) && (
                        <Badge variant="destructive" className="ml-2">
                          Overdue
                        </Badge>
                      )}
                    </CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{assignment.course}</p>
                  </div>
                  <Badge className={getStatusColor(assignment.status)}>{assignment.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{assignment.description}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Due: {new Date(assignment.dueDate).toLocaleDateString()} at{" "}
                    {new Date(assignment.dueDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {assignment.points} points
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-gray-600">
                    {assignment.attachments.length > 0 && <span>{assignment.attachments.length} attachment(s)</span>}
                  </div>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      Start Assignment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="submitted" className="space-y-4">
          {submittedAssignments.map((assignment) => (
            <Card key={assignment.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="font-serif text-lg flex items-center">
                      {getTypeIcon(assignment.type)}
                      <span className="ml-2">{assignment.title}</span>
                    </CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{assignment.course}</p>
                  </div>
                  <Badge className={getStatusColor(assignment.status)}>{assignment.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{assignment.description}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Submitted: {new Date(assignment.submittedAt!).toLocaleDateString()} at{" "}
                    {new Date(assignment.submittedAt!).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {assignment.points} points
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-blue-600 font-medium">Awaiting grade...</div>
                  <Button variant="outline" size="sm">
                    View Submission
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="graded" className="space-y-4">
          {gradedAssignments.map((assignment) => (
            <Card key={assignment.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="font-serif text-lg flex items-center">
                      {getTypeIcon(assignment.type)}
                      <span className="ml-2">{assignment.title}</span>
                    </CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{assignment.course}</p>
                  </div>
                  <Badge className={getStatusColor(assignment.status)}>{assignment.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{assignment.description}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Submitted: {new Date(assignment.submittedAt!).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {assignment.points} points
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-lg font-bold">
                    <span className="text-green-600">
                      {assignment.grade}/{assignment.points}
                    </span>
                    <span className="text-sm text-gray-600 ml-2">
                      ({Math.round((assignment.grade! / assignment.points) * 100)}%)
                    </span>
                  </div>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">
                      View Feedback
                    </Button>
                    <Button variant="outline" size="sm">
                      View Submission
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
