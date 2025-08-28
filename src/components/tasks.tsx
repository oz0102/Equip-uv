import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon, Clock, FileText, AlertCircle, CheckCircle, Upload, BookOpen, Users, GraduationCap, ArrowLeft, Play, Download, Send, Filter, CalendarDays, Eye, ChevronLeft, ChevronRight } from "lucide-react"
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
  submittedContent?: string
  submittedFiles?: string[]
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
  
  // Enhanced date filtering state
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [filterMode, setFilterMode] = useState<"day" | "week">("day")
  const [showCalendar, setShowCalendar] = useState(false)

  // Helper functions for date manipulation
  const getWeekStart = (date: Date) => {
    const d = new Date(date)
    const day = d.getDay()
    const diff = d.getDate() - day
    return new Date(d.setDate(diff))
  }

  const getWeekEnd = (date: Date) => {
    const weekStart = getWeekStart(date)
    const weekEnd = new Date(weekStart)
    weekEnd.setDate(weekStart.getDate() + 6)
    return weekEnd
  }

  const formatDateRange = (start: Date, end: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' }
    return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`
  }

  const getCurrentDisplayDate = () => {
    if (!selectedDate) return "Today"
    
    if (filterMode === "day") {
      return selectedDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric',
        year: 'numeric'
      })
    } else {
      const weekStart = getWeekStart(selectedDate)
      const weekEnd = getWeekEnd(selectedDate)
      return `Week of ${formatDateRange(weekStart, weekEnd)}`
    }
  }

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
      submittedDateFormatted: "August 19, 2025",
      submittedContent: "I have completed the comprehensive timeline covering the early church period from 33-451 CE. My timeline includes 78 significant events, starting with the Crucifixion and Resurrection of Jesus Christ (30-33 CE) and concluding with the Council of Chalcedon (451 CE).\n\nKey sections include:\n\n1. Apostolic Period (33-100 CE)\n- Pentecost and the birth of the church\n- Paul's missionary journeys\n- Destruction of Jerusalem (70 CE)\n- Deaths of the apostles\n\n2. Post-Apostolic Period (100-300 CE)\n- Early church fathers (Clement, Ignatius, Polycarp)\n- Major persecutions under Roman emperors\n- Development of the New Testament canon\n- Rise of Christian apologetics\n\n3. Imperial Period (300-451 CE)\n- Constantine's conversion and Edict of Milan\n- Major ecumenical councils\n- Theological controversies (Arianism, Nestorianism)\n- Establishment of Christianity as state religion\n\nEach event includes the date, key figures involved, brief description, and its significance for church development. I've used color coding for different types of events (theological, political, persecution, councils) and included maps showing the geographical spread of Christianity.",
      submittedFiles: ["timeline-visual.pdf", "research-sources.docx", "event-details.xlsx"]
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
      feedback: "Excellent analysis of Calvin's doctrine of predestination. Strong use of primary sources and clear argumentation. Consider expanding on contemporary applications.",
      submittedContent: "John Calvin and the Doctrine of Predestination: Theological Foundations and Lasting Impact\n\n[This is a preview of the submitted paper]\n\nIntroduction\n\nJohn Calvin (1509-1564) stands as one of the most influential theologians of the Protestant Reformation, whose systematic approach to Christian doctrine continues to shape Protestant Christianity today. This paper examines Calvin's theological contributions, with particular focus on his doctrine of predestination, analyzing both its historical development and contemporary relevance...\n\n[The full 3,847-word paper continues with detailed analysis of Calvin's theological system, including extensive citations from the Institutes of the Christian Religion and other primary sources.]",
      submittedFiles: ["calvin-paper-final.docx", "primary-sources-bibliography.pdf"]
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

  // Enhanced filtering function
  const filteredTasks = (taskList: Task[]) => {
    if (!selectedDate) return taskList
    
    return taskList.filter(task => {
      if (!task.dueDate) return false
      
      const taskDate = new Date(task.dueDate)
      
      if (filterMode === "day") {
        return (
          taskDate.getFullYear() === selectedDate.getFullYear() &&
          taskDate.getMonth() === selectedDate.getMonth() &&
          taskDate.getDate() === selectedDate.getDate()
        )
      } else {
        const weekStart = getWeekStart(selectedDate)
        const weekEnd = getWeekEnd(selectedDate)
        return taskDate >= weekStart && taskDate <= weekEnd
      }
    })
  }

  // Task Details View
  if (selectedTask) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={handleBackToList}
            className="flex items-center text-slate-600 hover:text-slate-800 p-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tasks
          </Button>

          {/* Task Header */}
          <Card className="shadow-lg">
            <CardHeader className="pb-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="font-serif text-xl md:text-2xl flex items-start text-slate-800 leading-tight">
                      <div className="flex-shrink-0 mt-1">
                        {getTypeIcon(selectedTask.type)}
                      </div>
                      <span className="ml-3 break-words">{selectedTask.title}</span>
                    </CardTitle>
                  </div>
                </div>
                <p className="text-slate-600 text-base md:text-lg break-words">{selectedTask.course} • {selectedTask.instructor}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className={`${getPriorityColor(selectedTask.priority)} bg-white border text-xs`}>
                    {selectedTask.priority} priority
                  </Badge>
                  {selectedTask.points && (
                    <Badge className="bg-slate-100 text-slate-700 text-xs">{selectedTask.points} pts</Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <p className="text-slate-700 text-base md:text-lg leading-relaxed">{selectedTask.description}</p>
              
              {selectedTask.dueDate && (
                <div className="space-y-3 md:space-y-0 md:flex md:items-center md:space-x-6 text-slate-600">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">Due: {selectedTask.dueDateFormatted}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">Est. Time: {selectedTask.estimatedTime}</span>
                  </div>
                  {selectedTask.daysRemaining && (
                    <div className="text-amber-600 font-medium text-sm">
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
                <CardTitle className="flex items-center text-lg">
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
                    <div className="text-center p-4">
                      <Play className="h-12 w-12 md:h-16 md:w-16 mx-auto text-slate-400 mb-2" />
                      <p className="text-slate-600 text-sm">Video content will load here</p>
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
                <CardTitle className="flex items-center text-lg">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Resource Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 p-6 rounded-lg border text-center">
                  <FileText className="h-12 w-12 mx-auto text-slate-400 mb-3" />
                  <p className="text-slate-600 mb-4">Reading material available for download</p>
                  <Button className="bg-green-600 hover:bg-green-700 w-full md:w-auto">
                    <Download className="h-4 w-4 mr-2" />
                    Download Resource
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Student Submission Display */}
          {selectedTask.status === 'submitted' && selectedTask.submittedContent && (
            <Card className="shadow-lg border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800 text-lg">
                  <Eye className="h-5 w-5 mr-2" />
                  Student Submission
                </CardTitle>
                <p className="text-sm text-blue-600 mt-1">
                  Submitted on {selectedTask.submittedDateFormatted}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 max-h-80 md:max-h-96 overflow-y-auto">
                  <div className="prose prose-sm max-w-none">
                    <div className="whitespace-pre-wrap text-slate-700 leading-relaxed text-sm">
                      {selectedTask.submittedContent}
                    </div>
                  </div>
                </div>

                {selectedTask.submittedFiles && selectedTask.submittedFiles.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-blue-800">Submitted Files:</h4>
                    <div className="space-y-2">
                      {selectedTask.submittedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200 gap-2">
                          <div className="flex items-center min-w-0 flex-1">
                            <FileText className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                            <span className="text-blue-700 text-sm truncate">{file}</span>
                          </div>
                          <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-100 flex-shrink-0">
                            <Download className="h-4 w-4 mr-1" />
                            <span className="hidden sm:inline">Download</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-center pt-4 border-t border-blue-200">
                  <div className="flex items-center text-blue-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Awaiting instructor review</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Instructions */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 p-4 rounded-lg border">
                <p className="text-slate-700 leading-relaxed text-sm md:text-base">{selectedTask.instructions}</p>
              </div>
            </CardContent>
          </Card>

          {/* Attachments */}
          {selectedTask.attachments.length > 0 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Attachments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {selectedTask.attachments.map((attachment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border gap-2">
                      <div className="flex items-center min-w-0 flex-1">
                        <FileText className="h-4 w-4 mr-2 text-slate-600 flex-shrink-0" />
                        <span className="text-slate-700 text-sm truncate">{attachment}</span>
                      </div>
                      <Button variant="outline" size="sm" className="flex-shrink-0">
                        <Download className="h-4 w-4 mr-1" />
                        <span className="hidden sm:inline">Download</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Submission Area */}
          {selectedTask.taskType === 'submission' && selectedTask.status === 'pending' && (
            <Card className="shadow-lg border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 text-lg">
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
                  rows={6}
                  className="w-full resize-none"
                />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-600">
                    {selectedTask.type === 'standup' 
                      ? "This will serve as your daily standup feedback"
                      : "Type your response or paste your content above"}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setSubmissionText("")} className="flex-1 sm:flex-none">
                      Clear
                    </Button>
                    <Button 
                      onClick={handleSubmit}
                      disabled={!submissionText.trim()}
                      className="bg-blue-600 hover:bg-blue-700 flex-1 sm:flex-none"
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
          {selectedTask.status === 'submitted' && !selectedTask.submittedContent && (
            <Card className="shadow-lg border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium text-center">
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
                <CardTitle className="text-emerald-800 text-lg">Grade & Feedback</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-600">
                    {selectedTask.grade}/{selectedTask.points}
                  </div>
                  <div className="text-base md:text-lg text-slate-600">
                    ({Math.round(((selectedTask.grade || 0) / (selectedTask.points || 1)) * 100)}%)
                  </div>
                </div>
                {selectedTask.feedback && (
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-emerald-800 mb-2">Instructor Feedback:</h4>
                    <p className="text-emerald-700 text-sm md:text-base">{selectedTask.feedback}</p>
                  </div>
                )}

                {selectedTask.submittedContent && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-emerald-800">Your Submission:</h4>
                    <div className="bg-gray-50 p-4 rounded-lg border max-h-48 md:max-h-64 overflow-y-auto">
                      <div className="prose prose-sm max-w-none">
                        <div className="whitespace-pre-wrap text-slate-700 leading-relaxed text-sm">
                          {selectedTask.submittedContent.length > 500 
                            ? selectedTask.submittedContent.substring(0, 500) + "..."
                            : selectedTask.submittedContent}
                        </div>
                      </div>
                    </div>
                    {selectedTask.submittedFiles && selectedTask.submittedFiles.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {selectedTask.submittedFiles.map((file, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-100 text-xs">
                            <FileText className="h-3 w-3 mr-1" />
                            <span className="truncate max-w-[100px]">{file}</span>
                          </Badge>
                        ))}
                      </div>
                    )}
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-2 md:space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 font-serif">Tasks Center</h1>
          <p className="text-slate-600 text-base md:text-lg">Track your academic progress and manage tasks</p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 shadow-lg">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-red-700">Overdue</p>
                  <p className="text-2xl md:text-3xl font-bold text-red-800">{overdueTasks.length}</p>
                </div>
                <AlertCircle className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 shadow-lg">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-amber-700">Pending</p>
                  <p className="text-2xl md:text-3xl font-bold text-amber-800">{pendingTasks.length}</p>
                </div>
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-amber-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-blue-700">Submitted</p>
                  <p className="text-2xl md:text-3xl font-bold text-blue-800">{submittedTasks.length}</p>
                </div>
                <Upload className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 shadow-lg">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-emerald-700">Completed</p>
                  <p className="text-2xl md:text-3xl font-bold text-emerald-800">{gradedTasks.length}</p>
                </div>
                <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-emerald-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile-Optimized Date Filter Section */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-col space-y-3 md:flex-row md:items-center md:justify-between md:space-y-0">
              <CardTitle className="font-serif text-base md:text-lg flex items-center">
                <CalendarDays className="h-5 w-5 mr-2" />
                Task Date Filter
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Button
                  variant={filterMode === "day" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterMode("day")}
                  className="text-xs px-3"
                >
                  Daily
                </Button>
                <Button
                  variant={filterMode === "week" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterMode("week")}
                  className="text-xs px-3"
                >
                  Weekly
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Mobile-first layout */}
            <div className="space-y-4">
              {/* Current Selection Display */}
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm font-medium text-blue-800 break-words">
                  {getCurrentDisplayDate()}
                </p>
                {filterMode === "week" && selectedDate && (
                  <p className="text-xs text-blue-600 mt-1">
                    {getWeekStart(selectedDate).toLocaleDateString()} - {getWeekEnd(selectedDate).toLocaleDateString()}
                  </p>
                )}
              </div>

              {/* Mobile Navigation Controls */}
              <div className="block md:hidden">
                {filterMode === "week" && (
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (selectedDate) {
                          const prevWeek = new Date(selectedDate)
                          prevWeek.setDate(selectedDate.getDate() - 7)
                          setSelectedDate(prevWeek)
                        }
                      }}
                      className="flex items-center text-xs px-3"
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Button>
                    <span className="text-xs text-slate-600 font-medium">Week Navigation</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (selectedDate) {
                          const nextWeek = new Date(selectedDate)
                          nextWeek.setDate(selectedDate.getDate() + 7)
                          setSelectedDate(nextWeek)
                        }
                      }}
                      className="flex items-center text-xs px-3"
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Control Buttons */}
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const today = new Date()
                    setSelectedDate(today)
                  }}
                  className="w-full md:w-auto text-xs"
                >
                  Go to Today
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="w-full md:w-auto text-xs"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {showCalendar ? "Hide" : "Show"} Calendar
                </Button>

                {/* Desktop Week Navigation */}
                {filterMode === "week" && (
                  <div className="hidden md:flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (selectedDate) {
                          const prevWeek = new Date(selectedDate)
                          prevWeek.setDate(selectedDate.getDate() - 7)
                          setSelectedDate(prevWeek)
                        }
                      }}
                      className="text-xs"
                    >
                      Previous Week
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (selectedDate) {
                          const nextWeek = new Date(selectedDate)
                          nextWeek.setDate(selectedDate.getDate() + 7)
                          setSelectedDate(nextWeek)
                        }
                      }}
                      className="text-xs"
                    >
                      Next Week
                    </Button>
                  </div>
                )}

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedDate(undefined)}
                  className="w-full md:w-auto text-xs"
                >
                  Clear Filter
                </Button>
              </div>

              {/* Calendar Display */}
              {showCalendar && (
                <div className="mt-4">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border w-full mx-auto"
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Mobile-Optimized Task Tabs */}
        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-white shadow-sm border h-auto p-1">
            <TabsTrigger value="overdue" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-700 text-xs p-2 md:p-3">
              <div className="text-center">
                <div>Overdue</div>
                <div className="font-bold">({overdueTasks.length})</div>
              </div>
            </TabsTrigger>
            <TabsTrigger value="pending" className="data-[state=active]:bg-amber-50 data-[state=active]:text-amber-700 text-xs p-2 md:p-3">
              <div className="text-center">
                <div>Pending</div>
                <div className="font-bold">({filteredTasks(pendingTasks).length})</div>
              </div>
            </TabsTrigger>
            <TabsTrigger value="submitted" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 text-xs p-2 md:p-3">
              <div className="text-center">
                <div>Submitted</div>
                <div className="font-bold">({filteredTasks(submittedTasks).length})</div>
              </div>
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 text-xs p-2 md:p-3">
              <div className="text-center">
                <div>Completed</div>
                <div className="font-bold">({filteredTasks(gradedTasks).length})</div>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* Overdue Tab */}
          <TabsContent value="overdue" className="space-y-4 md:space-y-6 mt-6">
            {overdueTasks.map((task) => (
              <Card key={task.id} className="border-red-300 bg-red-50/50 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="font-serif text-base md:text-lg text-red-800 break-words leading-tight">
                          {task.title}
                        </CardTitle>
                        <p className="text-xs md:text-sm text-red-700 mt-1 break-words">{task.course} • {task.instructor}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="destructive" className="text-xs">{task.daysOverdue} days overdue</Badge>
                      {task.points && <Badge variant="outline" className="bg-white text-xs">{task.points} pts</Badge>}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>

          {/* Pending Tab */}
          <TabsContent value="pending" className="space-y-4 md:space-y-6 mt-6">
            {filteredTasks(pendingTasks).length === 0 ? (
              <Card className="p-6 md:p-8 text-center">
                <CalendarDays className="h-10 w-10 md:h-12 md:w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-base md:text-lg font-medium text-gray-600 mb-2">No pending tasks found</h3>
                <p className="text-sm text-gray-500">
                  {selectedDate 
                    ? `No tasks due ${filterMode === "day" ? "on this date" : "in this week"}.`
                    : "Clear the date filter to see all pending tasks."
                  }
                </p>
              </Card>
            ) : (
              filteredTasks(pendingTasks).map((task) => (
                <Card 
                  key={task.id} 
                  className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-amber-400 cursor-pointer"
                  onClick={() => handleTaskClick(task)}
                >
                  <CardHeader className="pb-3">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="font-serif text-base md:text-lg flex items-start text-slate-800 leading-tight">
                            <div className="flex-shrink-0 mt-1">
                              {getTypeIcon(task.type)}
                            </div>
                            <span className="ml-2 break-words">{task.title}</span>
                          </CardTitle>
                          <p className="text-xs md:text-sm text-slate-600 mt-1 break-words">{task.course} • {task.instructor}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {task.taskType === 'video' && (
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 text-xs">
                            Video
                          </Badge>
                        )}
                        {task.taskType === 'resource' && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 text-xs">
                            Resource
                          </Badge>
                        )}
                        <Badge className={`${getPriorityColor(task.priority)} bg-white border text-xs`}>
                          {task.priority} priority
                        </Badge>
                        {task.points && (
                          <Badge className="bg-slate-100 text-slate-700 text-xs">{task.points} pts</Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed line-clamp-3">{task.description}</p>
                    
                    <div className="space-y-2 md:flex md:items-center md:space-y-0 md:space-x-6 text-xs md:text-sm text-slate-600">
                      {task.dueDate && (
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>Due: {task.dueDateFormatted}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{task.estimatedTime}</span>
                      </div>
                      {task.daysRemaining && (
                        <div className="text-amber-600 font-medium">
                          {task.daysRemaining} days remaining
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="text-xs md:text-sm text-slate-600">
                        {task.attachments.length > 0 && (
                          <span>{task.attachments.length} attachment(s)</span>
                        )}
                      </div>
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white text-xs px-3">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Submitted Tab */}
          <TabsContent value="submitted" className="space-y-4 md:space-y-6 mt-6">
            {filteredTasks(submittedTasks).length === 0 ? (
              <Card className="p-6 md:p-8 text-center">
                <Upload className="h-10 w-10 md:h-12 md:w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-base md:text-lg font-medium text-gray-600 mb-2">No submitted tasks found</h3>
                <p className="text-sm text-gray-500">
                  {selectedDate 
                    ? `No submitted tasks ${filterMode === "day" ? "on this date" : "in this week"}.`
                    : "Clear the date filter to see all submitted tasks."
                  }
                </p>
              </Card>
            ) : (
              filteredTasks(submittedTasks).map((task) => (
                <Card 
                  key={task.id} 
                  className="shadow-lg border-l-4 border-l-blue-400 cursor-pointer"
                  onClick={() => handleTaskClick(task)}
                >
                  <CardHeader className="pb-3">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="font-serif text-base md:text-lg flex items-start text-slate-800 leading-tight">
                            <div className="flex-shrink-0 mt-1">
                              {getTypeIcon(task.type)}
                            </div>
                            <span className="ml-2 break-words">{task.title}</span>
                          </CardTitle>
                          <p className="text-xs md:text-sm text-slate-600 mt-1 break-words">{task.course} • {task.instructor}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs">submitted</Badge>
                        {task.submittedContent && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 text-xs">
                            <Eye className="h-3 w-3 mr-1" />
                            Has Content
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed line-clamp-3">{task.description}</p>

                    <div className="space-y-2 md:flex md:items-center md:space-y-0 md:space-x-4 text-xs md:text-sm text-slate-600">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>Submitted: {task.submittedDateFormatted}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{task.points ? `${task.points} points` : 'No points'}</span>
                      </div>
                    </div>

                    {task.submittedContent && (
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <h4 className="text-xs md:text-sm font-medium text-blue-800 mb-2">Submission Preview:</h4>
                        <p className="text-xs md:text-sm text-blue-700 line-clamp-2">
                          {task.submittedContent.length > 120 
                            ? task.submittedContent.substring(0, 120) + "..."
                            : task.submittedContent}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="text-blue-600 font-medium text-xs md:text-sm">Awaiting grade...</div>
                      <Button variant="outline" size="sm" className="text-xs px-3">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Completed Tab */}
          <TabsContent value="completed" className="space-y-4 md:space-y-6 mt-6">
            {filteredTasks(gradedTasks).length === 0 ? (
              <Card className="p-6 md:p-8 text-center">
                <CheckCircle className="h-10 w-10 md:h-12 md:w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-base md:text-lg font-medium text-gray-600 mb-2">No completed tasks found</h3>
                <p className="text-sm text-gray-500">
                  {selectedDate 
                    ? `No completed tasks ${filterMode === "day" ? "on this date" : "in this week"}.`
                    : "Clear the date filter to see all completed tasks."
                  }
                </p>
              </Card>
            ) : (
              filteredTasks(gradedTasks).map((task) => (
                <Card 
                  key={task.id} 
                  className="shadow-lg border-l-4 border-l-emerald-400 cursor-pointer"
                  onClick={() => handleTaskClick(task)}
                >
                  <CardHeader className="pb-3">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="font-serif text-base md:text-lg flex items-start text-slate-800 leading-tight">
                            <div className="flex-shrink-0 mt-1">
                              {getTypeIcon(task.type)}
                            </div>
                            <span className="ml-2 break-words">{task.title}</span>
                          </CardTitle>
                          <p className="text-xs md:text-sm text-slate-600 mt-1 break-words">{task.course} • {task.instructor}</p>
                        </div>
                        <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs flex-shrink-0">completed</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed line-clamp-3">{task.description}</p>

                    {task.feedback && (
                      <div className="bg-emerald-50 p-3 md:p-4 rounded-lg border border-emerald-200">
                        <h4 className="font-semibold text-emerald-800 mb-2 text-xs md:text-sm">Instructor Feedback:</h4>
                        <p className="text-xs md:text-sm text-emerald-700 line-clamp-3">{task.feedback}</p>
                      </div>
                    )}

                    <div className="space-y-2 md:flex md:items-center md:space-y-0 md:space-x-4 text-xs md:text-sm text-slate-600">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>Submitted: {task.submittedDateFormatted}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{task.points ? `${task.points} points` : 'No points'}</span>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-3 md:flex-row md:items-center md:justify-between md:space-y-0 pt-3 border-t">
                      <div className="flex items-center">
                        {task.grade && task.points ? (
                          <div className="text-xl md:text-2xl font-bold">
                            <span className="text-emerald-600">
                              {task.grade}/{task.points}
                            </span>
                            <span className="text-sm md:text-lg text-slate-600 ml-2">
                              ({Math.round((task.grade / task.points) * 100)}%)
                            </span>
                          </div>
                        ) : (
                          <div className="text-emerald-600 font-medium text-sm">Task Completed</div>
                        )}
                      </div>
                      <Button variant="outline" size="sm" className="text-xs px-3 w-full md:w-auto">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}