import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Calendar as CalendarComponent } from "@/components/ui/calendar"
// import { BookOpen, Clock, MapPin, User } from "lucide-react"
// import { useState } from "react"
// export function Calendar() {
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
//   const events = [
//     {
//       id: 1,
//       title: "Biblical Hermeneutics",
//       type: "class",
//       date: "2024-01-15",
//       time: "09:00-10:00",
//       location: "Room 101",
//       instructor: "Dr. Sarah Johnson",
//       description: "Principles of Biblical Interpretation - Chapter 5",
//     },
//     {
//       id: 2,
//       title: "Introduction to Systematic Theology",
//       type: "class",
//       date: "2024-01-15",
//       time: "11:00-12:30",
//       location: "Room 203",
//       instructor: "Prof. Michael Williams",
//       description: "The Doctrine of Salvation - Justification",
//     },
//     {
//       id: 3,
//       title: "Church History",
//       type: "class",
//       date: "2024-01-15",
//       time: "14:00-15:00",
//       location: "Room 105",
//       instructor: "Dr. Elizabeth Davis",
//       description: "The Reformation Period - Martin Luther",
//     },
//     {
//       id: 4,
//       title: "Biblical Hermeneutics Essay",
//       type: "assignment",
//       date: "2024-01-15",
//       time: "23:59",
//       location: "Online Submission",
//       instructor: "Dr. Sarah Johnson",
//       description: "Essay on Historical-Grammatical Method - Due",
//     },
//     {
//       id: 5,
//       title: "Pastoral Care and Counseling",
//       type: "class",
//       date: "2024-01-16",
//       time: "14:00-15:00",
//       location: "Room 107",
//       instructor: "Rev. James Thompson",
//       description: "Crisis Counseling Techniques",
//     },
//     {
//       id: 6,
//       title: "Theology Quiz #3",
//       type: "assignment",
//       date: "2024-01-18",
//       time: "11:30",
//       location: "Room 203",
//       instructor: "Prof. Michael Williams",
//       description: "Quiz on Chapters 8-10 - Salvation Doctrine",
//     },
//     {
//       id: 7,
//       title: "Advanced Systematic Theology",
//       type: "class",
//       date: "2024-01-17",
//       time: "10:00-11:00",
//       location: "Room 203",
//       instructor: "Prof. Michael Williams",
//       description: "Eschatology - The Second Coming",
//     },
//     {
//       id: 8,
//       title: "Ministry Reflection Paper",
//       type: "assignment",
//       date: "2024-01-22",
//       time: "23:59",
//       location: "Online Submission",
//       instructor: "Rev. James Thompson",
//       description: "Reflection on Ministry Experience - Due",
//     },
//   ]
//   const getEventTypeColor = (type: string) => {
//     switch (type) {
//       case "class":
//         return "bg-blue-100 text-blue-800 border-blue-200"
//       case "assignment":
//         return "bg-red-100 text-red-800 border-red-200"
//       case "exam":
//         return "bg-purple-100 text-purple-800 border-purple-200"
//       case "event":
//         return "bg-green-100 text-green-800 border-green-200"
//       default:
//         return "bg-gray-100 text-gray-800 border-gray-200"
//     }
//   }
//   const getEventIcon = (type: string) => {
//     switch (type) {
//       case "class":
//         return <BookOpen className="h-4 w-4" />
//       case "assignment":
//         return <Clock className="h-4 w-4" />
//       default:
//         return <BookOpen className="h-4 w-4" />
//     }
//   }
//   const todayEvents = events.filter((event) => new Date(event.date).toDateString() === new Date().toDateString())
//   const upcomingEvents = events
//     .filter(
//       (event) =>
//         new Date(event.date) > new Date() && new Date(event.date) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//     )
//     .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
//   const selectedDateEvents = selectedDate
//     ? events.filter((event) => new Date(event.date).toDateString() === selectedDate.toDateString())
//     : []
//   return (
//     <div className="space-y-6">
//       {/* Today's Schedule */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="font-serif flex items-center">
//             <Clock className="mr-2 h-5 w-5 text-red-600" />
//             Today's Schedule
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           {todayEvents.length > 0 ? (
//             <div className="space-y-4">
//               {todayEvents.map((event) => (
//                 <div key={event.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                   <div className="flex items-center space-x-4">
//                     <div className={`p-2 rounded-lg ${getEventTypeColor(event.type)}`}>{getEventIcon(event.type)}</div>
//                     <div>
//                       <h4 className="font-medium text-black">{event.title}</h4>
//                       <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
//                         <div className="flex items-center">
//                           <Clock className="h-3 w-3 mr-1" />
//                           {event.time}
//                         </div>
//                         <div className="flex items-center">
//                           <MapPin className="h-3 w-3 mr-1" />
//                           {event.location}
//                         </div>
//                         <div className="flex items-center">
//                           <User className="h-3 w-3 mr-1" />
//                           {event.instructor}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500 text-center py-8">No events scheduled for today</p>
//           )}
//         </CardContent>
//       </Card>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Calendar */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="font-serif">Academic Calendar</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <CalendarComponent
//               mode="single"
//               selected={selectedDate}
//               onSelect={setSelectedDate}
//               className="rounded-md border"
//             />
//             {selectedDate && selectedDateEvents.length > 0 && (
//               <div className="mt-4 pt-4 border-t">
//                 <h4 className="font-medium mb-3">Events for {selectedDate.toLocaleDateString()}</h4>
//                 <div className="space-y-2">
//                   {selectedDateEvents.map((event) => (
//                     <div key={event.id} className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded">
//                       <div className="flex items-center space-x-2">
//                         {getEventIcon(event.type)}
//                         <span>{event.title}</span>
//                       </div>
//                       <span className="text-gray-600">{event.time}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </CardContent>
//         </Card>
//         {/* Upcoming Events */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="font-serif">Upcoming This Week</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {upcomingEvents.map((event) => (
//                 <div key={event.id} className="p-4 border border-gray-200 rounded-lg">
//                   <div className="flex items-start justify-between mb-2">
//                     <h4 className="font-medium text-black">{event.title}</h4>
//                     <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
//                   </div>
//                   <p className="text-sm text-gray-700 mb-3">{event.description}</p>
//                   <div className="space-y-1 text-sm text-gray-600">
//                     <div className="flex items-center">
//                       <Clock className="h-3 w-3 mr-2" />
//                       {new Date(event.date).toLocaleDateString()} at {event.time}
//                     </div>
//                     <div className="flex items-center">
//                       <MapPin className="h-3 w-3 mr-2" />
//                       {event.location}
//                     </div>
//                     <div className="flex items-center">
//                       <User className="h-3 w-3 mr-2" />
//                       {event.instructor}
//                     </div>
//                   </div>
//                   {event.type === "assignment" && (
//                     <div className="mt-3 pt-3 border-t">
//                       <Button size="sm" className="bg-red-600 hover:bg-red-700">
//                         View Assignment
//                       </Button>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//       {/* Quick Actions */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="font-serif">Quick Actions</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <Button
//               variant="outline"
//               className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
//             >
//               <BookOpen className="h-6 w-6" />
//               <span>View All Courses</span>
//             </Button>
//             <Button
//               variant="outline"
//               className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
//             >
//               <Clock className="h-6 w-6" />
//               <span>Upcoming Assignments</span>
//             </Button>
//             <Button
//               variant="outline"
//               className="h-20 flex flex-col items-center justify-center space-y-2 bg-transparent"
//             >
//               <User className="h-6 w-6" />
//               <span>Contact Instructors</span>
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, BookOpen, Clock, MapPin, User, MessageSquare, AlertCircle, CheckCircle, GraduationCap, Calendar as CalendarIcon, Filter } from "lucide-react";
import { useState } from "react";
export function Notifications() {
    const [filter, setFilter] = useState("all");
    // Notifications data (from your header)
    const notifications = [
        {
            id: 1,
            type: "feedback",
            category: "notification",
            title: "Assignment Graded",
            message: "Your Mathematics homework has been graded by Prof. Johnson",
            time: "2 hours ago",
            read: false,
            priority: "normal",
            instructor: "Prof. Johnson",
        },
        {
            id: 2,
            type: "admin",
            category: "notification",
            title: "System Maintenance",
            message: "Scheduled maintenance will occur this weekend from 2-4 AM",
            time: "1 day ago",
            read: false,
            priority: "high",
            instructor: "System Admin",
        },
        {
            id: 3,
            type: "feedback",
            category: "notification",
            title: "Tutor Feedback",
            message: "Great improvement on your essay structure! Keep up the good work.",
            time: "3 days ago",
            read: true,
            priority: "normal",
            instructor: "Dr. Sarah Johnson",
        },
        {
            id: 4,
            type: "grade",
            category: "notification",
            title: "New Grade Posted",
            message: "Your Church History midterm exam has been graded - Score: 89/100",
            time: "1 day ago",
            read: false,
            priority: "normal",
            instructor: "Dr. Elizabeth Davis",
        },
        {
            id: 5,
            type: "reminder",
            category: "notification",
            title: "Assignment Reminder",
            message: "Ministry Reflection Paper is due in 2 days",
            time: "6 hours ago",
            read: false,
            priority: "high",
            instructor: "Rev. James Thompson",
        },
    ];
    // Events data (from your calendar)
    const events = [
        {
            id: 6,
            title: "Biblical Hermeneutics",
            type: "class",
            category: "event",
            date: "2024-01-15",
            time: "09:00-10:00",
            location: "Room 101",
            instructor: "Dr. Sarah Johnson",
            description: "Principles of Biblical Interpretation - Chapter 5",
            priority: "normal",
        },
        {
            id: 7,
            title: "Introduction to Systematic Theology",
            type: "class",
            category: "event",
            date: "2024-01-15",
            time: "11:00-12:30",
            location: "Room 203",
            instructor: "Prof. Michael Williams",
            description: "The Doctrine of Salvation - Justification",
            priority: "normal",
        },
        {
            id: 8,
            title: "Biblical Hermeneutics Essay",
            type: "assignment",
            category: "event",
            date: "2024-01-15",
            time: "23:59",
            location: "Online Submission",
            instructor: "Dr. Sarah Johnson",
            description: "Essay on Historical-Grammatical Method - Due",
            priority: "high",
        },
        {
            id: 9,
            title: "Pastoral Care and Counseling",
            type: "class",
            category: "event",
            date: "2024-01-16",
            time: "14:00-15:00",
            location: "Room 107",
            instructor: "Rev. James Thompson",
            description: "Crisis Counseling Techniques",
            priority: "normal",
        },
        {
            id: 10,
            title: "Theology Quiz #3",
            type: "assignment",
            category: "event",
            date: "2024-01-18",
            time: "11:30",
            location: "Room 203",
            instructor: "Prof. Michael Williams",
            description: "Quiz on Chapters 8-10 - Salvation Doctrine",
            priority: "high",
        },
    ];
    // Combine and sort all items by priority and time
    const allItems = [...notifications, ...events].sort((a, b) => {
        // Priority sorting: high priority first
        if (a.priority === "high" && b.priority !== "high")
            return -1;
        if (b.priority === "high" && a.priority !== "high")
            return 1;
        // Then sort by time/date
        const aTime = a.category === "notification" ? a.time : a.date;
        const bTime = b.category === "notification" ? b.time : b.date;
        return new Date(bTime).getTime() - new Date(aTime).getTime();
    });
    // Filter items based on selected filter
    const filteredItems = allItems.filter(item => {
        if (filter === "all")
            return true;
        return item.category === (filter === "notifications" ? "notification" : "event");
    });
    const getNotificationIcon = (type) => {
        switch (type) {
            case "feedback":
                return _jsx(MessageSquare, { className: "h-4 w-4" });
            case "admin":
                return _jsx(AlertCircle, { className: "h-4 w-4" });
            case "grade":
                return _jsx(GraduationCap, { className: "h-4 w-4" });
            case "reminder":
                return _jsx(Bell, { className: "h-4 w-4" });
            case "class":
                return _jsx(BookOpen, { className: "h-4 w-4" });
            case "assignment":
                return _jsx(Clock, { className: "h-4 w-4" });
            default:
                return _jsx(Bell, { className: "h-4 w-4" });
        }
    };
    const getItemColor = (type, priority) => {
        if (priority === "high") {
            return "border-l-4 border-l-red-500 bg-red-50";
        }
        switch (type) {
            case "feedback":
                return "border-l-4 border-l-green-500 bg-green-50";
            case "admin":
                return "border-l-4 border-l-orange-500 bg-orange-50";
            case "grade":
                return "border-l-4 border-l-blue-500 bg-blue-50";
            case "reminder":
                return "border-l-4 border-l-yellow-500 bg-yellow-50";
            case "class":
                return "border-l-4 border-l-blue-500 bg-blue-50";
            case "assignment":
                return "border-l-4 border-l-purple-500 bg-purple-50";
            default:
                return "border-l-4 border-l-gray-500 bg-gray-50";
        }
    };
    const getBadgeColor = (type) => {
        switch (type) {
            case "feedback":
                return "bg-green-100 text-green-800";
            case "admin":
                return "bg-orange-100 text-orange-800";
            case "grade":
                return "bg-blue-100 text-blue-800";
            case "reminder":
                return "bg-yellow-100 text-yellow-800";
            case "class":
                return "bg-blue-100 text-blue-800";
            case "assignment":
                return "bg-purple-100 text-purple-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    const unreadCount = notifications.filter(n => !n.read).length;
    const todayEvents = events.filter(e => new Date(e.date).toDateString() === new Date().toDateString()).length;
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Unread Notifications" }), _jsx("p", { className: "text-2xl font-bold text-red-600", children: unreadCount })] }), _jsx(Bell, { className: "h-8 w-8 text-red-600" })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Today's Events" }), _jsx("p", { className: "text-2xl font-bold text-blue-600", children: todayEvents })] }), _jsx(CalendarIcon, { className: "h-8 w-8 text-blue-600" })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Items" }), _jsx("p", { className: "text-2xl font-bold text-gray-900", children: allItems.length })] }), _jsx(AlertCircle, { className: "h-8 w-8 text-gray-600" })] }) }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(CardTitle, { className: "font-serif flex items-center", children: [_jsx(Bell, { className: "mr-2 h-5 w-5 text-red-600" }), "Notifications & Events"] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Filter, { className: "h-4 w-4 text-gray-500" }), _jsxs("div", { className: "flex border rounded-lg overflow-hidden", children: [_jsxs("button", { onClick: () => setFilter("all"), className: `px-4 py-2 text-sm font-medium transition-colors ${filter === "all"
                                                        ? "bg-red-600 text-white"
                                                        : "bg-white text-gray-700 hover:bg-gray-50"}`, children: ["All (", allItems.length, ")"] }), _jsxs("button", { onClick: () => setFilter("notifications"), className: `px-4 py-2 text-sm font-medium transition-colors border-l ${filter === "notifications"
                                                        ? "bg-red-600 text-white"
                                                        : "bg-white text-gray-700 hover:bg-gray-50"}`, children: ["Notifications (", notifications.length, ")"] }), _jsxs("button", { onClick: () => setFilter("events"), className: `px-4 py-2 text-sm font-medium transition-colors border-l ${filter === "events"
                                                        ? "bg-red-600 text-white"
                                                        : "bg-white text-gray-700 hover:bg-gray-50"}`, children: ["Events (", events.length, ")"] })] })] })] }) }), _jsx(CardContent, { children: filteredItems.length > 0 ? (_jsx("div", { className: "space-y-4", children: filteredItems.map((item) => (_jsxs("div", { className: `p-4 rounded-lg border ${getItemColor(item.type, item.priority)} transition-all hover:shadow-md`, children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("div", { className: `p-2 rounded-lg ${getBadgeColor(item.type)}`, children: getNotificationIcon(item.type) }), _jsxs("div", { className: "flex-1", children: [_jsxs("h4", { className: "font-semibold text-gray-900 flex items-center space-x-2", children: [_jsx("span", { children: item.title }), item.priority === "high" && (_jsx("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800", children: "High Priority" })), item.category === "notification" && !item.read && (_jsx("span", { className: "w-2 h-2 bg-red-600 rounded-full" }))] }), _jsx("p", { className: "text-sm text-gray-600 mt-1", children: item.category === "notification" ? item.message : item.description })] })] }), _jsx(Badge, { className: getBadgeColor(item.type), children: item.type })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-4 text-sm text-gray-600", children: [item.category === "notification" ? (_jsxs("div", { className: "flex items-center", children: [_jsx(Clock, { className: "h-3 w-3 mr-1" }), item.time] })) : (_jsxs(_Fragment, { children: [_jsxs("div", { className: "flex items-center", children: [_jsx(CalendarIcon, { className: "h-3 w-3 mr-1" }), new Date(item.date).toLocaleDateString()] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Clock, { className: "h-3 w-3 mr-1" }), item.time] }), _jsxs("div", { className: "flex items-center", children: [_jsx(MapPin, { className: "h-3 w-3 mr-1" }), item.location] })] })), _jsxs("div", { className: "flex items-center", children: [_jsx(User, { className: "h-3 w-3 mr-1" }), item.instructor] })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [item.category === "notification" && !item.read && (_jsx(Button, { size: "sm", variant: "ghost", className: "text-blue-600 hover:text-blue-700", children: "Mark as Read" })), (item.type === "assignment" || item.type === "grade") && (_jsx(Button, { size: "sm", className: "bg-red-600 hover:bg-red-700", children: "View Details" }))] })] })] }, item.id))) })) : (_jsxs("div", { className: "text-center py-12", children: [_jsx(Bell, { className: "h-12 w-12 text-gray-300 mx-auto mb-4" }), _jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No items found" }), _jsx("p", { className: "text-gray-500", children: filter === "all"
                                        ? "You're all caught up! No notifications or events to display."
                                        : `No ${filter} to display at this time.` })] })) })] }), unreadCount > 0 && (_jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-medium text-gray-900", children: "Manage Notifications" }), _jsx("p", { className: "text-sm text-gray-600", children: "Keep your notifications organized" })] }), _jsxs("div", { className: "flex space-x-3", children: [_jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-2" }), "Mark All Read"] }), _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Filter, { className: "h-4 w-4 mr-2" }), "Notification Settings"] })] })] }) }) }))] }));
}
