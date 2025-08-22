import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { BookOpen, Clock, MapPin, User } from "lucide-react"
import { useState } from "react"

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const events = [
    {
      id: 1,
      title: "Biblical Hermeneutics",
      type: "class",
      date: "2024-01-15",
      time: "09:00-10:00",
      location: "Room 101",
      instructor: "Dr. Sarah Johnson",
      description: "Principles of Biblical Interpretation - Chapter 5",
    },
    {
      id: 2,
      title: "Introduction to Systematic Theology",
      type: "class",
      date: "2024-01-15",
      time: "11:00-12:30",
      location: "Room 203",
      instructor: "Prof. Michael Williams",
      description: "The Doctrine of Salvation - Justification",
    },
    {
      id: 3,
      title: "Church History",
      type: "class",
      date: "2024-01-15",
      time: "14:00-15:00",
      location: "Room 105",
      instructor: "Dr. Elizabeth Davis",
      description: "The Reformation Period - Martin Luther",
    },
    {
      id: 4,
      title: "Biblical Hermeneutics Essay",
      type: "assignment",
      date: "2024-01-15",
      time: "23:59",
      location: "Online Submission",
      instructor: "Dr. Sarah Johnson",
      description: "Essay on Historical-Grammatical Method - Due",
    },
    {
      id: 5,
      title: "Pastoral Care and Counseling",
      type: "class",
      date: "2024-01-16",
      time: "14:00-15:00",
      location: "Room 107",
      instructor: "Rev. James Thompson",
      description: "Crisis Counseling Techniques",
    },
    {
      id: 6,
      title: "Theology Quiz #3",
      type: "assignment",
      date: "2024-01-18",
      time: "11:30",
      location: "Room 203",
      instructor: "Prof. Michael Williams",
      description: "Quiz on Chapters 8-10 - Salvation Doctrine",
    },
    {
      id: 7,
      title: "Advanced Systematic Theology",
      type: "class",
      date: "2024-01-17",
      time: "10:00-11:00",
      location: "Room 203",
      instructor: "Prof. Michael Williams",
      description: "Eschatology - The Second Coming",
    },
    {
      id: 8,
      title: "Ministry Reflection Paper",
      type: "assignment",
      date: "2024-01-22",
      time: "23:59",
      location: "Online Submission",
      instructor: "Rev. James Thompson",
      description: "Reflection on Ministry Experience - Due",
    },
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "class":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "assignment":
        return "bg-red-100 text-red-800 border-red-200"
      case "exam":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "event":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getEventIcon = (type: string) => {
    switch (type) {
      case "class":
        return <BookOpen className="h-4 w-4" />
      case "assignment":
        return <Clock className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const todayEvents = events.filter((event) => new Date(event.date).toDateString() === new Date().toDateString())

  const upcomingEvents = events
    .filter(
      (event) =>
        new Date(event.date) > new Date() && new Date(event.date) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    )
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const selectedDateEvents = selectedDate
    ? events.filter((event) => new Date(event.date).toDateString() === selectedDate.toDateString())
    : []

  return (
    <div className="space-y-6">
      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif flex items-center">
            <Clock className="mr-2 h-5 w-5 text-red-600" />
            Today's Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          {todayEvents.length > 0 ? (
            <div className="space-y-4">
              {todayEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${getEventTypeColor(event.type)}`}>{getEventIcon(event.type)}</div>
                    <div>
                      <h4 className="font-medium text-black">{event.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {event.instructor}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No events scheduled for today</p>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Academic Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />

            {selectedDate && selectedDateEvents.length > 0 && (
              <div className="mt-4 pt-4 border-t">
                <h4 className="font-medium mb-3">Events for {selectedDate.toLocaleDateString()}</h4>
                <div className="space-y-2">
                  {selectedDateEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded">
                      <div className="flex items-center space-x-2">
                        {getEventIcon(event.type)}
                        <span>{event.title}</span>
                      </div>
                      <span className="text-gray-600">{event.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Upcoming This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-black">{event.title}</h4>
                    <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                  </div>

                  <p className="text-sm text-gray-700 mb-3">{event.description}</p>

                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-2" />
                      {new Date(event.date).toLocaleDateString()} at {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-2" />
                      {event.instructor}
                    </div>
                  </div>

                  {event.type === "assignment" && (
                    <div className="mt-3 pt-3 border-t">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        View Assignment
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
            >
              <BookOpen className="h-6 w-6" />
              <span>View All Courses</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
            >
              <Clock className="h-6 w-6" />
              <span>Upcoming Assignments</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
            >
              <User className="h-6 w-6" />
              <span>Contact Instructors</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
