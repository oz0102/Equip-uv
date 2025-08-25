import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, FileText, AlertCircle, CheckCircle, Upload, BookOpen, Users, GraduationCap, ArrowLeft, Play, Download, Send, Filter, CalendarIcon } from "lucide-react"
import { useState } from "react"

// Type definitions
interface Task {
  id: number
  title: string
  course: string
  instructor: string
  type: string
  taskType: 'submission' | 'resource' | 'video'
  dueDate?: string
  dueDateFormatted?: string
  submittedAt: string | null
  status: string
  priority: string
  points?: number
  estimatedTime: string
  description: string
  instructions: string
  attachments: string[]
  daysRemaining?: number
  submittedDateFormatted?: string
  grade?: number
  feedback?: string
  videoUrl?: string
  videoThumbnail?: string
  resourceUrl?: string
  resourceType?: string
}

interface OverdueTask {
  id: number
  title: string
  course: string
  instructor: string
  type: string
  dueDate: string
  points?: number
  daysOverdue: number
  priority: string
}

export default function TasksCenter() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [submissionText, setSubmissionText] = useState("")
  const [dateFilter, setDateFilter] = useState("")
  const [showDateFilter, setShowDateFilter] = useState(false)

  const tasks: Task[] = [
    {
      id: 1,
      title: "The Parable of the Good Samaritan: Contextual Analysis",
      course: "BIBL301 - New Testament Exegesis",
      instructor: "Dr. Sarah Henderson",
      type: "exegesis",
      taskType: "submission",
      dueDate: "2025-09-15T23:59:00",
      dueDateFormatted: "September 15, 2025",
      submittedAt: null,
      status: "pending",
      priority: "high",
      points: 120,
      estimatedTime: "8-10 hours",
      description: "Conduct a thorough exegetical analysis of Luke 10:25-37, examining the historical, cultural, and theological context of the Good Samaritan parable.",
      instructions: "Your analysis should include: (1) Historical-grammatical interpretation, (2) Cultural background research, (3) Theological implications, and (4) Contemporary application principles. Use at least 8 scholarly sources.",
      attachments: ["rubric.pdf", "source-guidelines.pdf", "sample-exegesis.pdf"],
      daysRemaining: 22
    },
    {
      id: 2,
      title: "Introduction to Salvation - Video Lecture",
      course: "THEO101 - Foundations Program",
      instructor: "Dr. Michael Roberts",
      type: "video",
      taskType: "video",
      submittedAt: null,
      status: "pending",
      priority: "medium",
      estimatedTime: "45 minutes",
      description: "Watch the introductory video lecture on Salvation covering the origin of sin, repentance from dead works, and faith towards God.",
      instructions: "Watch the complete video and take notes on key concepts. This will prepare you for the upcoming discussion session.",
      attachments: ["lecture-notes.pdf", "discussion-questions.pdf"],
      videoUrl: "https://example.com/salvation-intro",
      videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop"
    },
    {
      id: 3,
      title: "Difference Between Sin and Dead Works - Reading",
      course: "THEO101 - Foundations Program",
      instructor: "Dr. Michael Roberts",
      type: "reading",
      taskType: "resource",
      submittedAt: null,
      status: "pending",
      priority: "low",
      estimatedTime: "30 minutes",
      description: "Read the assigned chapter on understanding the distinction between sin and dead works as outlined in Hebrews 6:1 and Isaiah 64:6.",
      instructions: "Read carefully and reflect on the key differences. Consider how this applies to your personal faith journey.",
      attachments: ["chapter-reading.pdf"],
      resourceUrl: "https://example.com/sin-dead-works.pdf",
      resourceType: "pdf"
    },
    {
      id: 4,
      title: "Daily Standup - Week 3",
      course: "PRAC401 - Pastoral Leadership",
      instructor: "Rev. Dr. James Wilson",
      type: "standup",
      taskType: "submission",
      dueDate: "2025-08-30T23:59:00",
      dueDateFormatted: "August 30, 2025",
      submittedAt: null,
      status: "pending",
      priority: "medium",
      estimatedTime: "15 minutes",
      description: "Share your weekly progress, challenges, and insights from your ministry leadership studies.",
      instructions: "Provide a brief update on: 1) What you learned this week, 2) Any challenges you're facing, 3) How you plan to apply these concepts in ministry.",
      attachments: [],
      daysRemaining: 5
    },
    {
      id: 5,
      title: "Church History Timeline Project",
      course: "HIST301 - Early Church History",
      instructor: "Dr. Rachel Martinez",
      type: "project",
      taskType: "submission",
      dueDate: "2025-08-20T23:59:00",
      dueDateFormatted: "August 20, 2025",
      submittedAt: "2025-08-19T16:30:00",
      status: "submitted",
      priority: "medium",
      points: 85,
      estimatedTime: "10-12 hours",
      description: "Create a comprehensive timeline of major events, figures, and theological developments in the early church (33-451 CE).",
      instructions: "Include at least 75 significant events with dates, brief descriptions, and historical significance. Use visual elements and maintain chronological accuracy.",
      attachments: ["timeline-template.pdf", "resource-list.pdf"],
      submittedDateFormatted: "August 19, 2025"
    },
    {
      id: 6,
      title: "Reformation Theology Research Paper",
      course: "HIST201 - Church History Survey",
      instructor: "Prof. David Thompson",
      type: "essay",
      taskType: "submission",
      dueDate: "2025-08-15T23:59:00",
      dueDateFormatted: "August 15, 2025",
      submittedAt: "2025-08-14T20:45:00",
      status: "graded",
      priority: "medium",
      points: 150,
      grade: 138,
      estimatedTime: "12-15 hours",
      description: "Examine the theological contributions of a major Reformation figure and their lasting impact on Protestant Christianity.",
      instructions: "Choose from Luther, Calvin, Zwingli, or Cranmer. Analyze their key theological positions, historical context, and contemporary relevance. Minimum 3500 words with primary source integration.",
      attachments: ["paper-guidelines.pdf", "citation-style.pdf"],
      submittedDateFormatted: "August 14, 2025",
      feedback: "Excellent analysis of Calvin's doctrine of predestination. Strong use of primary sources and clear argumentation. Consider expanding on contemporary applications."
    }
  ]

  // Overdue tasks
  const overdueTasks: OverdueTask[] = [
    {
      id: 7,
      title: "Greek Translation Assignment #4",
      course: "LANG201 - Biblical Greek II",
      instructor: "Prof. Timothy Clark",
      type: "translation",
      dueDate: "August 20, 2025",
      points: 75,
      daysOverdue: 4,
      priority: "high"
    }
  ]

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "pending":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "submitted":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "graded":
        return "bg-emerald-100 text-emerald-800 border-emerald-200"
      case "overdue":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "exegesis":
        return <BookOpen className="h-4 w-4" />
      case "essay":
        return <FileText className="h-4 w-4" />
      case "exam":
        return <GraduationCap className="h-4 w-4" />
      case "project":
        return <CheckCircle className="h-4 w-4" />
      case "practicum":
        return <Users className="h-4 w-4" />
      case "translation":
        return <BookOpen className="h-4 w-4" />
      case "video":
        return <Play className="h-4 w-4" />
      case "reading":
        return <BookOpen className="h-4 w-4" />
      case "standup":
        return <Users className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getPriorityColor = (priority: string): string => {
    switch (priority) {
      case "high":
        return "text-red-600"
      case "medium":
        return "text-amber-600"
      case "low":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  const pendingTasks = tasks.filter((t) => t.status === "pending")
  const submittedTasks = tasks.filter((t) => t.status === "submitted")
  const gradedTasks = tasks.filter((t) => t.status === "graded")

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task)
    setSubmissionText("")
  }

  const handleBackToList = () => {
    setSelectedTask(null)
  }

  const handleSubmit = () => {
    if (submissionText.trim()) {
      // Simulate submission
      alert("Task submitted successfully!")
      setSubmissionText("")
      setSelectedTask(null)
    }
  }

  const filteredTasks = (taskList: Task[]) => {
    if (!dateFilter) return taskList
    return taskList.filter(task => 
      task.dueDate && task.dueDate.includes(dateFilter)
    )
  }

  // Task Details View
  if (selectedTask) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={handleBackToList}
            className="flex items-center text-slate-600 hover:text-slate-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tasks
          </Button>

          {/* Task Header */}
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="font-serif text-2xl flex items-center text-slate-800">
                    {getTypeIcon(selectedTask.type)}
                    <span className="ml-3">{selectedTask.title}</span>
                  </CardTitle>
                  <p className="text-slate-600 mt-2 text-lg">{selectedTask.course} • {selectedTask.instructor}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={`${getPriorityColor(selectedTask.priority)} bg-white border`}>
                    {selectedTask.priority} priority
                  </Badge>
                  {selectedTask.points && (
                    <Badge className="bg-slate-100 text-slate-700">{selectedTask.points} pts</Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-700 text-lg leading-relaxed">{selectedTask.description}</p>
              
              {selectedTask.dueDate && (
                <div className="flex items-center space-x-6 text-slate-600">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Due: {selectedTask.dueDateFormatted}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Est. Time: {selectedTask.estimatedTime}
                  </div>
                  {selectedTask.daysRemaining && (
                    <div className="text-amber-600 font-medium">
                      {selectedTask.daysRemaining} days remaining
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Task Content Based on Type */}
          {selectedTask.taskType === 'video' && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Play className="h-5 w-5 mr-2" />
                  Video Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  {selectedTask.videoThumbnail ? (
                    <img 
                      src={selectedTask.videoThumbnail} 
                      alt="Video thumbnail" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-center">
                      <Play className="h-16 w-16 mx-auto text-slate-400 mb-2" />
                      <p className="text-slate-600">Video content will load here</p>
                    </div>
                  )}
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Video
                </Button>
              </CardContent>
            </Card>
          )}

          {selectedTask.taskType === 'resource' && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Resource Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 p-6 rounded-lg border text-center">
                  <FileText className="h-12 w-12 mx-auto text-slate-400 mb-3" />
                  <p className="text-slate-600 mb-4">Reading material available for download</p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download Resource
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Instructions */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 p-4 rounded-lg border">
                <p className="text-slate-700 leading-relaxed">{selectedTask.instructions}</p>
              </div>
            </CardContent>
          </Card>

          {/* Attachments */}
          {selectedTask.attachments.length > 0 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Attachments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {selectedTask.attachments.map((attachment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-slate-600" />
                        <span className="text-slate-700">{attachment}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Submission Area (only for submission tasks) */}
          {selectedTask.taskType === 'submission' && selectedTask.status === 'pending' && (
            <Card className="shadow-lg border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">
                  {selectedTask.type === 'standup' ? 'Daily Standup Submission' : 'Task Submission'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder={selectedTask.type === 'standup' 
                    ? "Share your weekly progress, challenges, and insights..." 
                    : "Enter your submission here..."}
                  value={submissionText}
                  onChange={(e) => setSubmissionText(e.target.value)}
                  rows={8}
                  className="w-full"
                />
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-600">
                    {selectedTask.type === 'standup' 
                      ? "This will serve as your daily standup feedback"
                      : "Type your response or paste your content above"}
                  </p>
                  <div className="space-x-2">
                    <Button variant="outline" onClick={() => setSubmissionText("")}>
                      Clear
                    </Button>
                    <Button 
                      onClick={handleSubmit}
                      disabled={!submissionText.trim()}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Submit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Submission Status */}
          {selectedTask.status === 'submitted' && (
            <Card className="shadow-lg border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium">
                    Task submitted on {selectedTask.submittedDateFormatted}
                  </span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Grade and Feedback */}
          {selectedTask.status === 'graded' && (
            <Card className="shadow-lg border-emerald-200">
              <CardHeader>
                <CardTitle className="text-emerald-800">Grade & Feedback</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600">
                    {selectedTask.grade}/{selectedTask.points}
                  </div>
                  <div className="text-lg text-slate-600">
                    ({Math.round(((selectedTask.grade || 0) / (selectedTask.points || 1)) * 100)}%)
                  </div>
                </div>
                {selectedTask.feedback && (
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-emerald-800 mb-2">Instructor Feedback:</h4>
                    <p className="text-emerald-700">{selectedTask.feedback}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    )
  }

  // Main Tasks List View
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-800 font-serif">Tasks Center</h1>
          <p className="text-slate-600 text-lg">Track your academic progress and manage tasks</p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-700">Overdue</p>
                  <p className="text-3xl font-bold text-red-800">{overdueTasks.length}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-amber-700">Pending</p>
                  <p className="text-3xl font-bold text-amber-800">{pendingTasks.length}</p>
                </div>
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-700">Submitted</p>
                  <p className="text-3xl font-bold text-blue-800">{submittedTasks.length}</p>
                </div>
                <Upload className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-emerald-700">Completed</p>
                  <p className="text-3xl font-bold text-emerald-800">{gradedTasks.length}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Date Filter */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-800">Your Tasks</h2>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setShowDateFilter(!showDateFilter)}
              className="flex items-center"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter by Date
            </Button>
            {showDateFilter && (
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-4 w-4 text-slate-600" />
                <Input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-40"
                />
                {dateFilter && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setDateFilter("")}
                  >
                    Clear
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Task Tabs */}
        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm border">
            <TabsTrigger value="overdue" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-700">
              Overdue ({overdueTasks.length})
            </TabsTrigger>
            <TabsTrigger value="pending" className="data-[state=active]:bg-amber-50 data-[state=active]:text-amber-700">
              Pending ({pendingTasks.length})
            </TabsTrigger>
            <TabsTrigger value="submitted" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              Submitted ({submittedTasks.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700">
              Completed ({gradedTasks.length})
            </TabsTrigger>
          </TabsList>

          {/* Overdue Tab */}
          <TabsContent value="overdue" className="space-y-6 mt-6">
            {overdueTasks.map((task) => (
              <Card key={task.id} className="border-red-300 bg-red-50/50 shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="font-serif text-lg text-red-800">
                        {task.title}
                      </CardTitle>
                      <p className="text-sm text-red-700 mt-1">{task.course} • {task.instructor}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="destructive">{task.daysOverdue} days overdue</Badge>
                      {task.points && <Badge variant="outline" className="bg-white">{task.points} pts</Badge>}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>

          {/* Pending Tab */}
          <TabsContent value="pending" className="space-y-6 mt-6">
            {filteredTasks(pendingTasks).map((task) => (
              <Card 
                key={task.id} 
                className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-amber-400 cursor-pointer"
                onClick={() => handleTaskClick(task)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="font-serif text-lg flex items-center text-slate-800">
                        {getTypeIcon(task.type)}
                        <span className="ml-2">{task.title}</span>
                        {task.taskType === 'video' && (
                          <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700">
                            Video
                          </Badge>
                        )}
                        {task.taskType === 'resource' && (
                          <Badge variant="outline" className="ml-2 bg-green-50 text-green-700">
                            Resource
                          </Badge>
                        )}
                      </CardTitle>
                      <p className="text-sm text-slate-600 mt-1">{task.course} • {task.instructor}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={`${getPriorityColor(task.priority)} bg-white border`}>
                        {task.priority} priority
                      </Badge>
                      {task.points && (
                        <Badge className="bg-slate-100 text-slate-700">{task.points} pts</Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">{task.description}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-slate-600">
                    {task.dueDate && (
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Due: {task.dueDateFormatted}
                      </div>
                    )}
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {task.estimatedTime}
                    </div>
                    {task.daysRemaining && (
                      <div className="text-amber-600 font-medium">
                        {task.daysRemaining} days remaining
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-slate-600">
                      {task.attachments.length > 0 && (
                        <span>{task.attachments.length} attachment(s)</span>
                      )}
                    </div>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Submitted Tab */}
          <TabsContent value="submitted" className="space-y-6 mt-6">
            {filteredTasks(submittedTasks).map((task) => (
              <Card 
                key={task.id} 
                className="shadow-lg border-l-4 border-l-blue-400 cursor-pointer"
                onClick={() => handleTaskClick(task)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="font-serif text-lg flex items-center text-slate-800">
                        {getTypeIcon(task.type)}
                        <span className="ml-2">{task.title}</span>
                      </CardTitle>
                      <p className="text-sm text-slate-600 mt-1">{task.course} • {task.instructor}</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">submitted</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">{task.description}</p>

                  <div className="flex items-center space-x-4 text-sm text-slate-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Submitted: {task.submittedDateFormatted}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {task.points ? `${task.points} points` : 'No points'}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-blue-600 font-medium">Awaiting grade...</div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Completed Tab */}
          <TabsContent value="completed" className="space-y-6 mt-6">
            {filteredTasks(gradedTasks).map((task) => (
              <Card 
                key={task.id} 
                className="shadow-lg border-l-4 border-l-emerald-400 cursor-pointer"
                onClick={() => handleTaskClick(task)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="font-serif text-lg flex items-center text-slate-800">
                        {getTypeIcon(task.type)}
                        <span className="ml-2">{task.title}</span>
                      </CardTitle>
                      <p className="text-sm text-slate-600 mt-1">{task.course} • {task.instructor}</p>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">completed</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">{task.description}</p>

                  {task.feedback && (
                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                      <h4 className="font-semibold text-emerald-800 mb-2">Instructor Feedback:</h4>
                      <p className="text-sm text-emerald-700">{task.feedback}</p>
                    </div>
                  )}

                  <div className="flex items-center space-x-4 text-sm text-slate-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Submitted: {task.submittedDateFormatted}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {task.points ? `${task.points} points` : 'No points'}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      {task.grade && task.points ? (
                        <div className="text-2xl font-bold">
                          <span className="text-emerald-600">
                            {task.grade}/{task.points}
                          </span>
                          <span className="text-lg text-slate-600 ml-2">
                            ({Math.round((task.grade / task.points) * 100)}%)
                          </span>
                        </div>
                      ) : (
                        <div className="text-emerald-600 font-medium">Task Completed</div>
                      )}
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Calendar, Clock, FileText, AlertCircle, CheckCircle, Upload, Star, BookOpen, Users, GraduationCap } from "lucide-react"
// import { useState } from "react"

// // Type definitions
// interface Assignment {
//   id: number
//   title: string
//   course: string
//   instructor: string
//   type: string
//   dueDate: string
//   dueDateFormatted: string
//   submittedAt: string | null
//   status: string
//   priority: string
//   points: number
//   estimatedTime: string
//   description: string
//   instructions: string
//   attachments: string[]
//   daysRemaining?: number
//   submittedDateFormatted?: string
//   grade?: number
//   feedback?: string
// }

// interface OverdueAssignment {
//   id: number
//   title: string
//   course: string
//   instructor: string
//   type: string
//   dueDate: string
//   points: number
//   daysOverdue: number
//   priority: string
// }

// export default function BiblicalAssignments() {
//   const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null)

//   const assignments: Assignment[] = [
//     {
//       id: 1,
//       title: "The Parable of the Good Samaritan: Contextual Analysis",
//       course: "BIBL301 - New Testament Exegesis",
//       instructor: "Dr. Sarah Henderson",
//       type: "exegesis",
//       dueDate: "2025-09-15T23:59:00",
//       dueDateFormatted: "September 15, 2025",
//       submittedAt: null,
//       status: "pending",
//       priority: "high",
//       points: 120,
//       estimatedTime: "8-10 hours",
//       description: "Conduct a thorough exegetical analysis of Luke 10:25-37, examining the historical, cultural, and theological context of the Good Samaritan parable.",
//       instructions: "Your analysis should include: (1) Historical-grammatical interpretation, (2) Cultural background research, (3) Theological implications, and (4) Contemporary application principles. Use at least 8 scholarly sources.",
//       attachments: ["rubric.pdf", "source-guidelines.pdf", "sample-exegesis.pdf"],
//       daysRemaining: 22
//     },
//     {
//       id: 2,
//       title: "Systematic Theology Midterm Examination",
//       course: "THEO201 - Systematic Theology II",
//       instructor: "Prof. Michael Roberts",
//       type: "exam",
//       dueDate: "2025-09-10T14:00:00",
//       dueDateFormatted: "September 10, 2025",
//       submittedAt: null,
//       status: "pending",
//       priority: "high",
//       points: 200,
//       estimatedTime: "3 hours",
//       description: "Comprehensive examination covering soteriology, pneumatology, and ecclesiology from the first half of the semester.",
//       instructions: "The exam will consist of short answer questions (40%), essay questions (40%), and biblical application scenarios (20%). Closed book examination administered in classroom.",
//       attachments: ["study-guide.pdf", "key-terms.pdf"],
//       daysRemaining: 17
//     },
//     {
//       id: 3,
//       title: "Ministry Leadership Case Study",
//       course: "PRAC401 - Pastoral Leadership",
//       instructor: "Rev. Dr. James Wilson",
//       type: "project",
//       dueDate: "2025-09-25T23:59:00",
//       dueDateFormatted: "September 25, 2025",
//       submittedAt: null,
//       status: "pending",
//       priority: "medium",
//       points: 100,
//       estimatedTime: "6-8 hours",
//       description: "Analyze a real-world church leadership challenge and propose biblical solutions using course principles.",
//       instructions: "Select from provided case studies or propose your own (with approval). Apply leadership theories from course readings and integrate biblical principles. Include implementation plan and potential obstacles.",
//       attachments: ["case-studies.pdf", "template.docx"],
//       daysRemaining: 32
//     },
//     {
//       id: 4,
//       title: "Church History Timeline Project",
//       course: "HIST301 - Early Church History",
//       instructor: "Dr. Rachel Martinez",
//       type: "project",
//       dueDate: "2025-08-20T23:59:00",
//       dueDateFormatted: "August 20, 2025",
//       submittedAt: "2025-08-19T16:30:00",
//       status: "submitted",
//       priority: "medium",
//       points: 85,
//       estimatedTime: "10-12 hours",
//       description: "Create a comprehensive timeline of major events, figures, and theological developments in the early church (33-451 CE).",
//       instructions: "Include at least 75 significant events with dates, brief descriptions, and historical significance. Use visual elements and maintain chronological accuracy.",
//       attachments: ["timeline-template.pdf", "resource-list.pdf"],
//       submittedDateFormatted: "August 19, 2025"
//     },
//     {
//       id: 5,
//       title: "Reformation Theology Research Paper",
//       course: "HIST201 - Church History Survey",
//       instructor: "Prof. David Thompson",
//       type: "essay",
//       dueDate: "2025-08-15T23:59:00",
//       dueDateFormatted: "August 15, 2025",
//       submittedAt: "2025-08-14T20:45:00",
//       status: "graded",
//       priority: "medium",
//       points: 150,
//       grade: 138,
//       estimatedTime: "12-15 hours",
//       description: "Examine the theological contributions of a major Reformation figure and their lasting impact on Protestant Christianity.",
//       instructions: "Choose from Luther, Calvin, Zwingli, or Cranmer. Analyze their key theological positions, historical context, and contemporary relevance. Minimum 3500 words with primary source integration.",
//       attachments: ["paper-guidelines.pdf", "citation-style.pdf"],
//       submittedDateFormatted: "August 14, 2025",
//       feedback: "Excellent analysis of Calvin's doctrine of predestination. Strong use of primary sources and clear argumentation. Consider expanding on contemporary applications."
//     },
//     {
//       id: 6,
//       title: "Biblical Counseling Practicum",
//       course: "COUN301 - Biblical Counseling Methods",
//       instructor: "Dr. Lisa Anderson",
//       type: "practicum",
//       dueDate: "2025-08-10T23:59:00",
//       dueDateFormatted: "August 10, 2025",
//       submittedAt: "2025-08-10T18:15:00",
//       status: "graded",
//       priority: "high",
//       points: 100,
//       grade: 95,
//       estimatedTime: "15-20 hours",
//       description: "Complete supervised counseling sessions and submit reflective analysis of biblical counseling principles applied.",
//       instructions: "Conduct 5 practice counseling sessions with assigned partners. Submit session notes, biblical integration reports, and personal reflection essay.",
//       attachments: ["practicum-handbook.pdf", "reflection-prompts.pdf"],
//       submittedDateFormatted: "August 10, 2025",
//       feedback: "Outstanding application of biblical principles in counseling contexts. Thoughtful reflection and excellent pastoral sensitivity demonstrated."
//     }
//   ]

//   // Overdue assignments (simulated for demo)
//   const overdueAssignments: OverdueAssignment[] = [
//     {
//       id: 7,
//       title: "Greek Translation Assignment #4",
//       course: "LANG201 - Biblical Greek II",
//       instructor: "Prof. Timothy Clark",
//       type: "translation",
//       dueDate: "August 20, 2025",
//       points: 75,
//       daysOverdue: 4,
//       priority: "high"
//     }
//   ]

//   const getStatusColor = (status: string): string => {
//     switch (status) {
//       case "pending":
//         return "bg-amber-100 text-amber-800 border-amber-200"
//       case "submitted":
//         return "bg-blue-100 text-blue-800 border-blue-200"
//       case "graded":
//         return "bg-emerald-100 text-emerald-800 border-emerald-200"
//       case "overdue":
//         return "bg-red-100 text-red-800 border-red-200"
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-200"
//     }
//   }

//   const getTypeIcon = (type: string) => {
//     switch (type) {
//       case "exegesis":
//         return <BookOpen className="h-4 w-4" />
//       case "essay":
//         return <FileText className="h-4 w-4" />
//       case "exam":
//         return <GraduationCap className="h-4 w-4" />
//       case "project":
//         return <CheckCircle className="h-4 w-4" />
//       case "practicum":
//         return <Users className="h-4 w-4" />
//       case "translation":
//         return <BookOpen className="h-4 w-4" />
//       default:
//         return <FileText className="h-4 w-4" />
//     }
//   }

//   const getPriorityColor = (priority: string): string => {
//     switch (priority) {
//       case "high":
//         return "text-red-600"
//       case "medium":
//         return "text-amber-600"
//       case "low":
//         return "text-green-600"
//       default:
//         return "text-gray-600"
//     }
//   }

//   const isOverdue = (dueDate: string): boolean => {
//     return new Date(dueDate) < new Date()
//   }

//   const pendingAssignments = assignments.filter((a) => a.status === "pending")
//   const submittedAssignments = assignments.filter((a) => a.status === "submitted")
//   const gradedAssignments = assignments.filter((a) => a.status === "graded")

//   // Calculate stats
//   const totalAssignments = assignments.length + overdueAssignments.length
//   const avgGrade = gradedAssignments.length > 0 
//     ? Math.round(gradedAssignments.reduce((sum, a) => sum + ((a.grade || 0) / a.points) * 100, 0) / gradedAssignments.length)
//     : 0

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
//       <div className="max-w-7xl mx-auto space-y-8">
        
//         {/* Header Section */}
//         <div className="text-center space-y-4">
//           <h1 className="text-4xl font-bold text-slate-800 font-serif">Assignment Center</h1>
//           <p className="text-slate-600 text-lg">Track your academic progress and manage assignments</p>
//         </div>

//         {/* Stats Dashboard */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
//           <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 shadow-lg">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-red-700">Overdue</p>
//                   <p className="text-3xl font-bold text-red-800">{overdueAssignments.length}</p>
//                 </div>
//                 <AlertCircle className="h-8 w-8 text-red-600" />
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="bg-gradient-to-br from-amber-50 to-amber-100 shadow-lg">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-amber-700">Pending</p>
//                   <p className="text-3xl font-bold text-amber-800">{pendingAssignments.length}</p>
//                 </div>
//                 <Clock className="h-8 w-8 text-amber-600" />
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-blue-700">Submitted</p>
//                   <p className="text-3xl font-bold text-blue-800">{submittedAssignments.length}</p>
//                 </div>
//                 <Upload className="h-8 w-8 text-blue-600" />
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 shadow-lg">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-emerald-700">Graded</p>
//                   <p className="text-3xl font-bold text-emerald-800">{gradedAssignments.length}</p>
//                 </div>
//                 <CheckCircle className="h-8 w-8 text-emerald-600" />
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg">
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-purple-700">Avg Grade</p>
//                   <p className="text-3xl font-bold text-purple-800">{avgGrade}%</p>
//                 </div>
//                 <Star className="h-8 w-8 text-purple-600" />
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Assignment Tabs */}
//         <Tabs defaultValue="overdue" className="w-full">
//           <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm border">
//             <TabsTrigger value="overdue" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-700">
//               Overdue ({overdueAssignments.length})
//             </TabsTrigger>
//             <TabsTrigger value="pending" className="data-[state=active]:bg-amber-50 data-[state=active]:text-amber-700">
//               Pending ({pendingAssignments.length})
//             </TabsTrigger>
//             <TabsTrigger value="submitted" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
//               Submitted ({submittedAssignments.length})
//             </TabsTrigger>
//             <TabsTrigger value="graded" className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700">
//               Graded ({gradedAssignments.length})
//             </TabsTrigger>
//           </TabsList>

//           {/* Overdue Tab */}
//           <TabsContent value="overdue" className="space-y-6 mt-6">
//             {overdueAssignments.map((assignment) => (
//               <Card key={assignment.id} className="border-red-300 bg-red-50/50 shadow-lg">
//                 <CardHeader>
//                   <div className="flex items-start justify-between">
//                     <div className="flex-1">
//                       <CardTitle className="font-serif text-lg text-red-800 flex items-center">
//                         {getTypeIcon(assignment.type)}
//                         <span className="ml-2">{assignment.title}</span>
//                       </CardTitle>
//                       <p className="text-sm text-red-700 mt-1">{assignment.course} • {assignment.instructor}</p>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Badge variant="destructive">{assignment.daysOverdue} days overdue</Badge>
//                       <Badge variant="outline" className="bg-white">{assignment.points} pts</Badge>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="bg-red-100 p-4 rounded-lg border border-red-200">
//                     <p className="text-sm text-red-800">
//                       This assignment was due on {assignment.dueDate}. Late submissions may receive reduced points.
//                     </p>
//                   </div>
                  
//                   <div className="flex items-center justify-between pt-4 border-t border-red-200">
//                     <div className="text-sm text-red-700">Due Date: {assignment.dueDate}</div>
//                     <div className="flex items-center space-x-2">
//                       <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-50">
//                         Contact Instructor
//                       </Button>
//                       <Button size="sm" className="bg-red-600 hover:bg-red-700">
//                         <Upload className="h-4 w-4 mr-2" />
//                         Submit Late
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </TabsContent>

//           {/* Pending Tab */}
//           <TabsContent value="pending" className="space-y-6 mt-6">
//             {pendingAssignments.map((assignment) => (
//               <Card key={assignment.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-amber-400">
//                 <CardHeader>
//                   <div className="flex items-start justify-between">
//                     <div className="flex-1">
//                       <CardTitle className="font-serif text-lg flex items-center text-slate-800">
//                         {getTypeIcon(assignment.type)}
//                         <span className="ml-2">{assignment.title}</span>
//                         {assignment.priority === "high" && (
//                           <Star className="h-4 w-4 ml-2 text-red-500 fill-current" />
//                         )}
//                       </CardTitle>
//                       <p className="text-sm text-slate-600 mt-1">{assignment.course} • {assignment.instructor}</p>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Badge className={`${getPriorityColor(assignment.priority)} bg-white border`}>
//                         {assignment.priority} priority
//                       </Badge>
//                       <Badge className="bg-slate-100 text-slate-700">{assignment.points} pts</Badge>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <p className="text-slate-700">{assignment.description}</p>
                  
//                   <div className="bg-slate-50 p-4 rounded-lg border">
//                     <h4 className="font-semibold text-slate-800 mb-2">Instructions:</h4>
//                     <p className="text-sm text-slate-700">{assignment.instructions}</p>
//                   </div>

//                   <div className="flex items-center space-x-6 text-sm text-slate-600">
//                     <div className="flex items-center">
//                       <Calendar className="h-4 w-4 mr-2" />
//                       Due: {assignment.dueDateFormatted}
//                     </div>
//                     <div className="flex items-center">
//                       <Clock className="h-4 w-4 mr-2" />
//                       Est. Time: {assignment.estimatedTime}
//                     </div>
//                     <div className="text-amber-600 font-medium">
//                       {assignment.daysRemaining} days remaining
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between pt-4 border-t">
//                     <div className="text-sm text-slate-600">
//                       {assignment.attachments.length > 0 && (
//                         <span>{assignment.attachments.length} attachment(s) available</span>
//                       )}
//                     </div>
//                     <div className="space-x-2">
//                       <Button variant="outline" size="sm">
//                         View Details
//                       </Button>
//                       <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
//                         Start Assignment
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </TabsContent>

//           {/* Submitted Tab */}
//           <TabsContent value="submitted" className="space-y-6 mt-6">
//             {submittedAssignments.map((assignment) => (
//               <Card key={assignment.id} className="shadow-lg border-l-4 border-l-blue-400">
//                 <CardHeader>
//                   <div className="flex items-start justify-between">
//                     <div className="flex-1">
//                       <CardTitle className="font-serif text-lg flex items-center text-slate-800">
//                         {getTypeIcon(assignment.type)}
//                         <span className="ml-2">{assignment.title}</span>
//                       </CardTitle>
//                       <p className="text-sm text-slate-600 mt-1">{assignment.course} • {assignment.instructor}</p>
//                     </div>
//                     <Badge className="bg-blue-100 text-blue-800 border-blue-200">submitted</Badge>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <p className="text-slate-700">{assignment.description}</p>

//                   <div className="flex items-center space-x-4 text-sm text-slate-600">
//                     <div className="flex items-center">
//                       <Calendar className="h-4 w-4 mr-2" />
//                       Submitted: {assignment.submittedDateFormatted}
//                     </div>
//                     <div className="flex items-center">
//                       <Clock className="h-4 w-4 mr-2" />
//                       {assignment.points} points
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between pt-4 border-t">
//                     <div className="text-blue-600 font-medium">Awaiting grade...</div>
//                     <Button variant="outline" size="sm">
//                       View Submission
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </TabsContent>

//           {/* Graded Tab */}
//           <TabsContent value="graded" className="space-y-6 mt-6">
//             {gradedAssignments.map((assignment) => (
//               <Card key={assignment.id} className="shadow-lg border-l-4 border-l-emerald-400">
//                 <CardHeader>
//                   <div className="flex items-start justify-between">
//                     <div className="flex-1">
//                       <CardTitle className="font-serif text-lg flex items-center text-slate-800">
//                         {getTypeIcon(assignment.type)}
//                         <span className="ml-2">{assignment.title}</span>
//                       </CardTitle>
//                       <p className="text-sm text-slate-600 mt-1">{assignment.course} • {assignment.instructor}</p>
//                     </div>
//                     <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">graded</Badge>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <p className="text-slate-700">{assignment.description}</p>

//                   {assignment.feedback && (
//                     <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
//                       <h4 className="font-semibold text-emerald-800 mb-2">Instructor Feedback:</h4>
//                       <p className="text-sm text-emerald-700">{assignment.feedback}</p>
//                     </div>
//                   )}

//                   <div className="flex items-center space-x-4 text-sm text-slate-600">
//                     <div className="flex items-center">
//                       <Calendar className="h-4 w-4 mr-2" />
//                       Submitted: {assignment.submittedDateFormatted}
//                     </div>
//                     <div className="flex items-center">
//                       <Clock className="h-4 w-4 mr-2" />
//                       {assignment.points} points
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between pt-4 border-t">
//                     <div className="flex items-center space-x-4">
//                       <div className="text-2xl font-bold">
//                         <span className="text-emerald-600">
//                           {assignment.grade || 0}/{assignment.points}
//                         </span>
//                         <span className="text-lg text-slate-600 ml-2">
//                           ({Math.round(((assignment.grade || 0) / assignment.points) * 100)}%)
//                         </span>
//                       </div>
//                       {Math.round(((assignment.grade || 0) / assignment.points) * 100) >= 90 && (
//                         <Star className="h-5 w-5 text-yellow-500 fill-current" />
//                       )}
//                     </div>
//                     <div className="space-x-2">
//                       <Button variant="outline" size="sm">
//                         View Feedback
//                       </Button>
//                       <Button variant="outline" size="sm">
//                         View Submission
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   )
// }