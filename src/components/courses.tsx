import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, Clock, User, CheckCircle, AlertCircle, FileText, Video, Download, Eye, Link } from "lucide-react"

// Define a union type for resource types
type ResourceType = 'pdf' | 'video' | 'mp3' | 'link' | 'book' | 'document';

// Updated ResourceItem to include a more specific type and optionally a direct content field for syllabi
type ResourceItem = {
  title: string;
  type?: ResourceType; // Make type optional as syllabus items might not have a file type
  url?: string; // Make URL optional as syllabus items might be fetched directly
  content?: string; // For syllabus items that are just text points
}

type BookItem = {
  title: string;
  author: string;
  url: string;
}

type RecordingItem = {
  title: string;
  date: string;
  url: string;
}

type Course = {
  id: number;
  code: string;
  title: string;
  instructor: string;
  credits: number;
  progress: number;
  schedule: string;
  location: string;
  description: string;
  nextClass: string;
  status: 'active' | 'upcoming' | 'completed';
  syllabi: ResourceItem[]; // Syllabi is now a list of ResourceItem, where type/url can be optional
  readingResources: ResourceItem[]; // Reading resources can now have different file types
  recordings: RecordingItem[];
  attachedBooks: BookItem[];
}

type Task = {
  id: number;
  title: string;
  course: string;
  courseName: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  completed: boolean;
  description: string;
}

export default function CoursesPage() {
  const [currentView, setCurrentView] = useState<'courses' | 'course-detail'>('courses')
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  const courses: Course[] = [
    {
      id: 1,
      code: "SAL101",
      title: "Salvation",
      instructor: "Osazee Samson",
      credits: 3,
      progress: 25,
      schedule: "Thursday 4:00 PM",
      location: "Room 101",
      description: "The concept and dynamics of salvation including origin of sin, repentance, and faith towards God",
      nextClass: "2025-08-28",
      status: "active",
      syllabi: [
        { title: "Introduction to Salvation", content: "Brief overview of salvation concepts." },
        { title: "Definition of repentance", type: "document", url: "#" }, // This could be a document on the definition
        { title: "What are dead works?", type:"document", url: "#" },
        { title: "The role of repentance in salvation", type: "document", url: "#" },
        { title: "Living a life of continual repentance", type: "document", url: "#" },
        { title: "Faith and Justification", content: "Understanding faith as a gift from God." },
        { title: "Eternal Security", content: "Exploring the doctrine of eternal security." }
      ],
      readingResources: [
        { title: "Systematic Theology by Wayne Grudem (Chapter 25)", type: "pdf", url: "#" },
        { title: "The Gospel According to Jesus (Video Series)", type: "video", url: "#" },
        { title: "Podcast on Repentance", type: "mp3", url: "#" },
        { title: "Articles on Salvation (External Link)", type: "link", url: "https://example.com/salvation-articles" },
        { title: "Key Scripture Passages", type: "document", url: "#" }
      ],
      recordings: [
        { title: "Week 1: Introduction to Salvation", date: "2025-08-21", url: "#" },
        { title: "Week 2: Origin of Sin", date: "2025-08-14", url: "#" }
      ],
      attachedBooks: [
        { title: "Salvation Study Guide", author: "Osazee Samson", url: "#" },
        { title: "Biblical Foundations", author: "Various Authors", url: "#" }
      ]
    },
    {
      id: 2,
      code: "THEO101",
      title: "Introduction to Systematic Theology",
      instructor: "Prof. Michael Williams",
      credits: 4,
      progress: 0,
      schedule: "Tuesday 2:00 PM",
      location: "Room 203",
      description: "A comprehensive overview of Christian doctrine and theological foundations",
      nextClass: "2025-09-03",
      status: "upcoming",
      syllabi: [
        { title: "Course Introduction and Methodology", content: "" },
        { title: "The Doctrine of God", content: "" },
        { title: "The Doctrine of Christ", content: "" },
        { title: "The Doctrine of the Holy Spirit", content: "" },
      ],
      readingResources: [
        { title: "Theology for Beginners", type: "book", url: "#" },
        { title: "Historical Theology Overview", type: "pdf", url: "#" }
      ],
      recordings: [],
      attachedBooks: []
    },
    {
      id: 3,
      code: "BIBL101",
      title: "Biblical Hermeneutics",
      instructor: "Dr. Sarah Johnson",
      credits: 3,
      progress: 100,
      schedule: "Wednesday 3:00 PM",
      location: "Room 105",
      description: "Principles and methods of biblical interpretation",
      nextClass: "2025-07-30",
      status: "completed",
      syllabi: [
        { title: "Introduction to Hermeneutics", content: "" },
        { title: "Historical-Grammatical Method", content: "" },
        { title: "Literary Context", content: "" }
      ],
      readingResources: [
        { title: "How to Read the Bible for All Its Worth", type: "book", url: "#" }
      ],
      recordings: [],
      attachedBooks: []
    }
  ]

  const tasks: Task[] = [
    {
      id: 1,
      title: "Essay on Original Sin",
      course: "SAL101",
      courseName: "Salvation",
      priority: "high",
      dueDate: "2025-08-30",
      completed: false,
      description: "Write a 1500-word essay discussing the origin of sin and its impact on humanity"
    },
    {
      id: 2,
      title: "Repentance vs Dead Works Analysis",
      course: "SAL101",
      courseName: "Salvation",
      priority: "medium",
      dueDate: "2025-09-05",
      completed: false,
      description: "Compare and contrast repentance from dead works with true biblical repentance"
    },
    {
      id: 3,
      title: "Faith Reflection Paper",
      course: "SAL101",
      courseName: "Salvation",
      priority: "low",
      dueDate: "2025-09-12",
      completed: true,
      description: "Personal reflection on the role of faith in salvation"
    }
  ]

  const activeCourse = courses.find(course => course.status === 'active')
  const upcomingCourses = courses.filter(course => course.status === 'upcoming')
  const completedCourses = courses.filter(course => course.status === 'completed')

  const getPriorityColor = (priority: 'high' | 'medium' | 'low') => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getResourceIcon = (type?: ResourceType) => {
    switch (type) {
      case 'pdf':
      case 'document':
        return <FileText className="h-4 w-4 mr-1 text-red-500" />;
      case 'video':
        return <Video className="h-4 w-4 mr-1 text-blue-500" />;
      case 'mp3':
        // Using FileText as a placeholder for audio, consider lucide-react Speaker or Headphones if available
        return <FileText className="h-4 w-4 mr-1 text-orange-500" />;
      case 'link':
        return <Link className="h-4 w-4 mr-1 text-purple-500" />;
      case 'book':
        return <BookOpen className="h-4 w-4 mr-1 text-green-500" />;
      default:
        return <FileText className="h-4 w-4 mr-1 text-gray-500" />; // Default icon for general items
    }
  }; // CLOSING BRACE WAS MISSING HERE

  const getActionIcon = (type?: ResourceType) => {
    switch (type) {
      case 'video':
      case 'mp3':
      case 'link':
        return <Eye className="h-4 w-4" />; // View icon for playable/viewable content
      case 'pdf':
      case 'document':
      case 'book':
      default:
        return <Download className="h-4 w-4" />; // Download icon for file types
    }
  }

  const getActionText = (type?: ResourceType) => {
    switch (type) {
      case 'video':
      case 'mp3':
      case 'link':
        return "View";
      case 'pdf':
      case 'document':
      case 'book':
      default:
        return "Download";
    }
  }


  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date()
  }

  const viewCourse = (course: Course) => {
    setSelectedCourse(course)
    setCurrentView('course-detail')
  }

  const backToCourses = () => {
    setCurrentView('courses')
    setSelectedCourse(null)
  }

  if (currentView === 'course-detail' && selectedCourse) {
    return (
      <div className="space-y-6 p-4">
        <div className="flex items-center justify-between">
          <Button onClick={backToCourses} variant="outline">
            ← Back to Courses
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-black">
              {selectedCourse.code}: {selectedCourse.title}
            </CardTitle>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {selectedCourse.instructor}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {selectedCourse.schedule}
              </div>
              <Badge variant="outline" className="text-red-600 border-red-600 w-fit">
                {selectedCourse.credits} Credits
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{selectedCourse.description}</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Course Progress</span>
                <span className="font-medium">{selectedCourse.progress}%</span>
              </div>
              <Progress value={selectedCourse.progress} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Syllabi */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-red-600" />
                Syllabus
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedCourse.syllabi.length > 0 ? (
                <div className="space-y-2">
                  {selectedCourse.syllabi.map((item: ResourceItem, index: number) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-start justify-between p-2 border rounded gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center">
                          {item.type && getResourceIcon(item.type)}
                          <span className="text-sm font-medium truncate">{item.title}</span>
                        </div>
                        {item.content && (
                          <p className="text-xs text-gray-600 ml-5 mt-1">{item.content}</p>
                        )}
                      </div>
                      {item.url && (
                        <Button size="sm" variant="outline" onClick={() => window.open(item.url, '_blank')} className="flex-shrink-0">
                          {getActionIcon(item.type)}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No syllabus items available</p>
              )}
            </CardContent>

          </Card>

          {/* Reading Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-red-600" />
                Reading Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedCourse.readingResources.length > 0 ? (
                <div className="space-y-2">
                  {selectedCourse.readingResources.map((item: ResourceItem, index: number) => (
                    <div key={index} className="flex items-center justify-between p-2 border rounded gap-2">
                      <div className="flex items-center min-w-0 flex-1">
                        {getResourceIcon(item.type)}
                        <span className="text-sm truncate">{item.title}</span>
                      </div>
                      <Button size="sm" variant="outline" onClick={() => window.open(item.url, '_blank')} className="flex-shrink-0">
                        {getActionIcon(item.type)}
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No reading resources available</p>
              )}
            </CardContent>
          </Card>

          {/* Recordings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="h-5 w-5 mr-2 text-red-600" />
                Class Recordings
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedCourse.recordings.length > 0 ? (
                <div className="space-y-2">
                  {selectedCourse.recordings.map((item: RecordingItem, index: number) => (
                    <div key={index} className="p-2 border rounded">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium truncate">{item.title}</p>
                          <p className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
                        </div>
                        <Button size="sm" variant="outline" onClick={() => window.open(item.url, '_blank')} className="flex-shrink-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No recordings available</p>
              )}
            </CardContent>
          </Card>

          {/* Attached Books */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-red-600" />
                Attached Books
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedCourse.attachedBooks.length > 0 ? (
                <div className="space-y-2">
                  {selectedCourse.attachedBooks.map((item: BookItem, index: number) => (
                    <div key={index} className="p-2 border rounded">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium truncate">{item.title}</p>
                          <p className="text-xs text-gray-500">by {item.author}</p>
                        </div>
                        <Button size="sm" variant="outline" onClick={() => window.open(item.url, '_blank')} className="flex-shrink-0">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No books attached</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-4">
      {/* Header Stats - Mobile: 2 columns, Tablet+: 3 columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm font-medium text-gray-600">Active Course</p>
                <p className="text-lg md:text-2xl font-bold text-black">{activeCourse ? 1 : 0}</p>
              </div>
              <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm font-medium text-gray-600">Pending Tasks</p>
                <p className="text-lg md:text-2xl font-bold text-black">
                  {tasks.filter(task => !task.completed).length}
                </p>
              </div>
              <AlertCircle className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2 md:col-span-1">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm font-medium text-gray-600">Completed Courses</p>
                <p className="text-lg md:text-2xl font-bold text-black">{completedCourses.length}</p>
              </div>
              <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Active Course */}
      {activeCourse && (
        <div>
          <h2 className="text-xl font-semibold text-black mb-4">Current Course (This Week)</h2>
          <Card className="border-2 border-red-200 bg-red-50/30">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <CardTitle className="font-serif text-lg sm:text-xl text-black">
                    {activeCourse.code}: {activeCourse.title}
                  </CardTitle>
                  <div className="flex items-center mt-2 text-sm text-gray-600">
                    <User className="h-4 w-4 mr-1" />
                    {activeCourse.instructor}
                  </div>
                  <Badge className="mt-2 bg-green-100 text-green-800 border-green-200 w-fit">
                    Active
                  </Badge>
                </div>
                <Badge variant="outline" className="text-red-600 border-red-600 w-fit">
                  {activeCourse.credits} Credits
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-700 text-sm">{activeCourse.description}</p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{activeCourse.progress}%</span>
                </div>
                <Progress value={activeCourse.progress} className="h-2" />
              </div>

              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{activeCourse.schedule} • {activeCourse.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>Next class: {new Date(activeCourse.nextClass).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-end pt-4 border-t">
                <Button
                  size="sm"
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => viewCourse(activeCourse)}
                >
                  View Course Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tasks Section */}
      <div>
        <h2 className="text-xl font-semibold text-black mb-4">Tasks</h2>
        <div className="grid grid-cols-1 gap-4">
          {tasks.map((task) => (
            <Card key={task.id} className={`${task.completed ? 'opacity-60' : ''} ${isOverdue(task.dueDate) && !task.completed ? 'border-red-300 bg-red-50/30' : ''}`}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    {task.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className={`h-5 w-5 ${isOverdue(task.dueDate) ? 'text-red-600' : 'text-yellow-600'} mt-0.5 flex-shrink-0`} />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-medium text-sm md:text-base ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}>
                        {task.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-600">
                    <span className="font-medium">{task.courseName}</span>
                    <Badge className={`${getPriorityColor(task.priority)} text-xs`}>
                      {task.priority} priority
                    </Badge>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                      {isOverdue(task.dueDate) && !task.completed && (
                        <span className="ml-2 text-red-600 font-medium">(Overdue)</span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-gray-700">{task.description}</p>

                  <div className="flex justify-end pt-2 border-t">
                    <Button size="sm" variant="outline" className="text-xs">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All Courses Overview */}
      <div>
        <h2 className="text-xl font-semibold text-black mb-4">All Courses</h2>

        {/* Upcoming Courses */}
        {upcomingCourses.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Upcoming</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {upcomingCourses.map((course) => (
                <Card key={course.id} className="opacity-75">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="font-serif text-base sm:text-lg text-black">
                          {course.code}: {course.title}
                        </CardTitle>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <User className="h-4 w-4 mr-1" />
                          {course.instructor}
                        </div>
                        <Badge className="mt-2 bg-blue-100 text-blue-800 border-blue-200 w-fit">
                          Upcoming
                        </Badge>
                      </div>
                      <Badge variant="outline" className="text-red-600 border-red-600 w-fit">
                        {course.credits} Credits
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm mb-3">{course.description}</p>
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Starts: {new Date(course.nextClass).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Completed Courses */}
        {completedCourses.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Completed</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {completedCourses.map((course) => (
                <Card key={course.id} className="opacity-60">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="font-serif text-base sm:text-lg text-black">
                          {course.code}: {course.title}
                        </CardTitle>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <User className="h-4 w-4 mr-1" />
                          {course.instructor}
                        </div>
                        <Badge className="mt-2 bg-green-100 text-green-800 border-green-200 w-fit">
                          Completed
                        </Badge>
                      </div>
                      <Badge variant="outline" className="text-red-600 border-red-600 w-fit">
                        {course.credits} Credits
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <p className="text-gray-700 text-sm flex-1">{course.description}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => viewCourse(course)}
                        className="w-full sm:w-auto"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
