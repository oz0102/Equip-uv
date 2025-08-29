import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { Progress } from "@/shared/ui/progress"
import { CalendarIcon, Clock, AlertCircle, CheckCircle, BookOpen, Users, Heart, TrendingUp, Target, Award, GraduationCap } from "lucide-react"
import { Link } from "react-router-dom"

export function Dashboard() {
  // Hardcoded data based on provided pages
  const studentName = "Gracee"
  const program = "Foundations Program"
  const cohort = "Foundations Cohort 3 Q1"
  const cohortShort = "Cohort 3 Q1"
  
  // Stats from various pages
  const stats = {
    gpa: 3.85,
    attendanceRate: 80,  // From attendance: 8 present/excused out of 10
    pendingTasks: 4,
    bibleStudyStreak: 12,
    prayerStreak: 15,
    soulsWon: 18
  }

  // Active course from courses page
  const activeCourse = {
    code: "SAL101",
    title: "Salvation",
    instructor: "Osazee Samson",
    nextClass: "Thursday 4:00 PM",
    progress: 25
  }

  // Last 3-4 tasks from tasks page (pending ones)
  const recentTasks = [
    {
      id: 1,
      title: "The Parable of the Good Samaritan: Contextual Analysis",
      course: "BIBL301",
      dueDate: "September 15, 2025",
      status: "pending",
      priority: "high",
      daysRemaining: 18
    },
    {
      id: 4,
      title: "Daily Standup - Week 3",
      course: "PRAC401",
      dueDate: "August 30, 2025",
      status: "pending",
      priority: "medium",
      daysRemaining: 2
    },
    {
      id: 2,
      title: "Introduction to Salvation - Video Lecture",
      course: "THEO101",
      dueDate: null,
      status: "pending",
      priority: "medium",
      daysRemaining: null
    },
    {
      id: 3,
      title: "Difference Between Sin and Dead Works - Reading",
      course: "THEO101",
      dueDate: null,
      status: "pending",
      priority: "low",
      daysRemaining: null
    }
  ]

  // Daily tracker summary from tracker page
  const dailyTracker = {
    bibleStudy: {
      completed: true,
      chaptersRead: 3,
      target: 2
    },
    prayer: {
      completed: true,
      minutesPrayed: 45,
      target: 30
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800"
      case "medium": return "bg-yellow-100 text-yellow-800"
      case "low": return "bg-green-100 text-green-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (completed: boolean) => {
    return completed ? <CheckCircle className="h-4 w-4 text-green-600" /> : <AlertCircle className="h-4 w-4 text-red-600" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        {/* Welcome Section */}
        <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
          <CardContent className="p-4 md:p-6">
            <h1 className="text-2xl md:text-3xl font-bold font-serif mb-1 md:mb-2">WELCOME Back {studentName}</h1>
            <p className="text-red-100 text-sm md:text-base mb-2">You are registered into the {program}, {cohortShort}</p>
            <Button className="w-full md:w-auto bg-white text-red-600 hover:bg-red-50" asChild>
              <Link to="/profile">View profile</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Card className="shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center mb-1">
                <GraduationCap className="h-4 w-4 mr-2 text-gray-600" />
                <p className="text-xs md:text-sm text-gray-600">GPA</p>
              </div>
              <p className="text-lg md:text-2xl font-bold">{stats.gpa}</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center mb-1">
                <CalendarIcon className="h-4 w-4 mr-2 text-gray-600" />
                <p className="text-xs md:text-sm text-gray-600">Attendance</p>
              </div>
              <p className="text-lg md:text-2xl font-bold">{stats.attendanceRate}%</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center mb-1">
                <AlertCircle className="h-4 w-4 mr-2 text-gray-600" />
                <p className="text-xs md:text-sm text-gray-600">Pending Tasks</p>
              </div>
              <p className="text-lg md:text-2xl font-bold">{stats.pendingTasks}</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center mb-1">
                <BookOpen className="h-4 w-4 mr-2 text-gray-600" />
                <p className="text-xs md:text-sm text-gray-600">Bible Streak</p>
              </div>
              <p className="text-lg md:text-2xl font-bold">{stats.bibleStudyStreak}</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center mb-1">
                <Heart className="h-4 w-4 mr-2 text-gray-600" />
                <p className="text-xs md:text-sm text-gray-600">Prayer Streak</p>
              </div>
              <p className="text-lg md:text-2xl font-bold">{stats.prayerStreak}</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center mb-1">
                <Users className="h-4 w-4 mr-2 text-gray-600" />
                <p className="text-xs md:text-sm text-gray-600">Souls Won</p>
              </div>
              <p className="text-lg md:text-2xl font-bold">{stats.soulsWon}</p>
            </CardContent>
          </Card>
        </div>

        {/* Program and Active Course */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-base md:text-lg font-serif flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-red-600" />
                Your Program
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Program</p>
                  <p className="font-medium">{program}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Cohort</p>
                  <p className="font-medium">{cohort}</p>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                  <Link to="/profile">View Profile</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-base md:text-lg font-serif flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-red-600" />
                Active Course
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Course</p>
                  <p className="font-medium">{activeCourse.code}: {activeCourse.title}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Instructor</p>
                  <p className="font-medium">{activeCourse.instructor}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Next Class</p>
                  <p className="font-medium">{activeCourse.nextClass}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{activeCourse.progress}%</span>
                  </div>
                  <Progress value={activeCourse.progress} className="h-2" />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                  <Link to="/courses">View Courses</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Tasks */}
        <Card className="shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-base md:text-lg font-serif flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-red-600" />
              Recent Tasks
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            <div className="space-y-4">
              {recentTasks.slice(0, 4).map((task) => (
                <div key={task.id} className="border rounded-lg p-3 md:p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <p className="font-medium text-sm md:text-base">{task.title}</p>
                      <p className="text-xs md:text-sm text-gray-600">{task.course}</p>
                    </div>
                    <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                  </div>
                  <div className="flex items-center text-xs md:text-sm text-gray-600">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {task.dueDate ? `Due: ${task.dueDate}` : 'No due date'}
                    {task.daysRemaining !== null && (
                      <span className="ml-2">
                        ({task.daysRemaining} days left)
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-red-600 hover:bg-red-700" asChild>
              <Link to="/tasks">View All Tasks</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Daily Tracker */}
        <Card className="shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-base md:text-lg font-serif flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-red-600" />
              Today's Tracker
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="border rounded-lg p-3 md:p-4">
                <div className="flex items-center mb-2">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  <h3 className="font-medium">Bible Study</h3>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  {getStatusIcon(dailyTracker.bibleStudy.completed)}
                  <span className="ml-2">
                    {dailyTracker.bibleStudy.chaptersRead} / {dailyTracker.bibleStudy.target} chapters
                  </span>
                </div>
                <Progress 
                  value={(dailyTracker.bibleStudy.chaptersRead / dailyTracker.bibleStudy.target) * 100} 
                  className="h-2"
                />
              </div>
              <div className="border rounded-lg p-3 md:p-4">
                <div className="flex items-center mb-2">
                  <Heart className="h-5 w-5 mr-2 text-purple-600" />
                  <h3 className="font-medium">Prayer</h3>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  {getStatusIcon(dailyTracker.prayer.completed)}
                  <span className="ml-2">
                    {dailyTracker.prayer.minutesPrayed} / {dailyTracker.prayer.target} minutes
                  </span>
                </div>
                <Progress 
                  value={(dailyTracker.prayer.minutesPrayed / dailyTracker.prayer.target) * 100} 
                  className="h-2"
                />
              </div>
            </div>
            <Button className="w-full mt-4 bg-red-600 hover:bg-red-700" asChild>
              <Link to="/tracker">Update Tracker</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}