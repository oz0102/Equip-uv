import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, Clock, User, CheckCircle, AlertCircle, FileText, Video, Download, Eye } from "lucide-react"

type ResourceItem = {
  title: string;
  type: string;
  url: string;
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
  syllabi: ResourceItem[];
  readingResources: ResourceItem[];
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
        { title: "Course Syllabus", type: "pdf", url: "#" },
        { title: "Reading Schedule", type: "pdf", url: "#" }
      ],
      readingResources: [
        { title: "Systematic Theology by Wayne Grudem", type: "book", url: "#" },
        { title: "The Gospel According to Jesus", type: "book", url: "#" },
        { title: "Articles on Salvation", type: "pdf", url: "#" }
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
      syllabi: [],
      readingResources: [],
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
      syllabi: [],
      readingResources: [],
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
      <div className="space-y-6">
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
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {selectedCourse.instructor}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {selectedCourse.schedule}
              </div>
              <Badge variant="outline" className="text-red-600 border-red-600">
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
                Syllabi
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedCourse.syllabi.length > 0 ? (
                <div className="space-y-2">
                  {selectedCourse.syllabi.map((item: ResourceItem, index: number) => (
                    <div key={index} className="flex items-center justify-between p-2 border rounded">
                      <span className="text-sm">{item.title}</span>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No syllabi available</p>
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
                    <div key={index} className="flex items-center justify-between p-2 border rounded">
                      <span className="text-sm">{item.title}</span>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
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
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{item.title}</p>
                          <p className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Video className="h-4 w-4" />
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
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{item.title}</p>
                          <p className="text-xs text-gray-500">by {item.author}</p>
                        </div>
                        <Button size="sm" variant="outline">
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
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Course</p>
                <p className="text-2xl font-bold text-black">{activeCourse ? 1 : 0}</p>
              </div>
              <BookOpen className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Tasks</p>
                <p className="text-2xl font-bold text-black">
                  {tasks.filter(task => !task.completed).length}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed Courses</p>
                <p className="text-2xl font-bold text-black">{completedCourses.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
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
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="font-serif text-xl text-black">
                    {activeCourse.code}: {activeCourse.title}
                  </CardTitle>
                  <div className="flex items-center mt-2 text-sm text-gray-600">
                    <User className="h-4 w-4 mr-1" />
                    {activeCourse.instructor}
                  </div>
                  <Badge className="mt-2 bg-green-100 text-green-800 border-green-200">
                    Active
                  </Badge>
                </div>
                <Badge variant="outline" className="text-red-600 border-red-600">
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
                  <Calendar className="h-4 w-4 mr-2" />
                  {activeCourse.schedule} • {activeCourse.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  Next class: {new Date(activeCourse.nextClass).toLocaleDateString()}
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
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {task.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertCircle className={`h-5 w-5 ${isOverdue(task.dueDate) ? 'text-red-600' : 'text-yellow-600'}`} />
                      )}
                      <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}>
                        {task.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span className="font-medium">{task.courseName}</span>
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority} priority
                      </Badge>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                        {isOverdue(task.dueDate) && !task.completed && (
                          <span className="ml-2 text-red-600 font-medium">(Overdue)</span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-700">{task.description}</p>
                  </div>
                  
                  <div className="ml-4">
                    <Button size="sm" variant="outline">
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
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-serif text-lg text-black">
                          {course.code}: {course.title}
                        </CardTitle>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <User className="h-4 w-4 mr-1" />
                          {course.instructor}
                        </div>
                        <Badge className="mt-2 bg-blue-100 text-blue-800 border-blue-200">
                          Upcoming
                        </Badge>
                      </div>
                      <Badge variant="outline" className="text-red-600 border-red-600">
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
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-serif text-lg text-black">
                          {course.code}: {course.title}
                        </CardTitle>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <User className="h-4 w-4 mr-1" />
                          {course.instructor}
                        </div>
                        <Badge className="mt-2 bg-green-100 text-green-800 border-green-200">
                          Completed
                        </Badge>
                      </div>
                      <Badge variant="outline" className="text-red-600 border-red-600">
                        {course.credits} Credits
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700 text-sm">{course.description}</p>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => viewCourse(course)}
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