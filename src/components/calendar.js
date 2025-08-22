import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { BookOpen, Clock, MapPin, User } from "lucide-react";
import { useState } from "react";
export function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());
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
    ];
    const getEventTypeColor = (type) => {
        switch (type) {
            case "class":
                return "bg-blue-100 text-blue-800 border-blue-200";
            case "assignment":
                return "bg-red-100 text-red-800 border-red-200";
            case "exam":
                return "bg-purple-100 text-purple-800 border-purple-200";
            case "event":
                return "bg-green-100 text-green-800 border-green-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };
    const getEventIcon = (type) => {
        switch (type) {
            case "class":
                return _jsx(BookOpen, { className: "h-4 w-4" });
            case "assignment":
                return _jsx(Clock, { className: "h-4 w-4" });
            default:
                return _jsx(BookOpen, { className: "h-4 w-4" });
        }
    };
    const todayEvents = events.filter((event) => new Date(event.date).toDateString() === new Date().toDateString());
    const upcomingEvents = events
        .filter((event) => new Date(event.date) > new Date() && new Date(event.date) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const selectedDateEvents = selectedDate
        ? events.filter((event) => new Date(event.date).toDateString() === selectedDate.toDateString())
        : [];
    return (_jsxs("div", Object.assign({ className: "space-y-6" }, { children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, Object.assign({ className: "font-serif flex items-center" }, { children: [_jsx(Clock, { className: "mr-2 h-5 w-5 text-red-600" }), "Today's Schedule"] })) }), _jsx(CardContent, { children: todayEvents.length > 0 ? (_jsx("div", Object.assign({ className: "space-y-4" }, { children: todayEvents.map((event) => (_jsxs("div", Object.assign({ className: "flex items-center justify-between p-4 border border-gray-200 rounded-lg" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center space-x-4" }, { children: [_jsx("div", Object.assign({ className: `p-2 rounded-lg ${getEventTypeColor(event.type)}` }, { children: getEventIcon(event.type) })), _jsxs("div", { children: [_jsx("h4", Object.assign({ className: "font-medium text-black" }, { children: event.title })), _jsxs("div", Object.assign({ className: "flex items-center space-x-4 text-sm text-gray-600 mt-1" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center" }, { children: [_jsx(Clock, { className: "h-3 w-3 mr-1" }), event.time] })), _jsxs("div", Object.assign({ className: "flex items-center" }, { children: [_jsx(MapPin, { className: "h-3 w-3 mr-1" }), event.location] })), _jsxs("div", Object.assign({ className: "flex items-center" }, { children: [_jsx(User, { className: "h-3 w-3 mr-1" }), event.instructor] }))] }))] })] })), _jsx(Badge, Object.assign({ className: getEventTypeColor(event.type) }, { children: event.type }))] }), event.id))) }))) : (_jsx("p", Object.assign({ className: "text-gray-500 text-center py-8" }, { children: "No events scheduled for today" }))) })] }), _jsxs("div", Object.assign({ className: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, { children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, Object.assign({ className: "font-serif" }, { children: "Academic Calendar" })) }), _jsxs(CardContent, { children: [_jsx(CalendarComponent, { mode: "single", selected: selectedDate, onSelect: setSelectedDate, className: "rounded-md border" }), selectedDate && selectedDateEvents.length > 0 && (_jsxs("div", Object.assign({ className: "mt-4 pt-4 border-t" }, { children: [_jsxs("h4", Object.assign({ className: "font-medium mb-3" }, { children: ["Events for ", selectedDate.toLocaleDateString()] })), _jsx("div", Object.assign({ className: "space-y-2" }, { children: selectedDateEvents.map((event) => (_jsxs("div", Object.assign({ className: "flex items-center justify-between text-sm p-2 bg-gray-50 rounded" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center space-x-2" }, { children: [getEventIcon(event.type), _jsx("span", { children: event.title })] })), _jsx("span", Object.assign({ className: "text-gray-600" }, { children: event.time }))] }), event.id))) }))] })))] })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, Object.assign({ className: "font-serif" }, { children: "Upcoming This Week" })) }), _jsx(CardContent, { children: _jsx("div", Object.assign({ className: "space-y-4" }, { children: upcomingEvents.map((event) => (_jsxs("div", Object.assign({ className: "p-4 border border-gray-200 rounded-lg" }, { children: [_jsxs("div", Object.assign({ className: "flex items-start justify-between mb-2" }, { children: [_jsx("h4", Object.assign({ className: "font-medium text-black" }, { children: event.title })), _jsx(Badge, Object.assign({ className: getEventTypeColor(event.type) }, { children: event.type }))] })), _jsx("p", Object.assign({ className: "text-sm text-gray-700 mb-3" }, { children: event.description })), _jsxs("div", Object.assign({ className: "space-y-1 text-sm text-gray-600" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center" }, { children: [_jsx(Clock, { className: "h-3 w-3 mr-2" }), new Date(event.date).toLocaleDateString(), " at ", event.time] })), _jsxs("div", Object.assign({ className: "flex items-center" }, { children: [_jsx(MapPin, { className: "h-3 w-3 mr-2" }), event.location] })), _jsxs("div", Object.assign({ className: "flex items-center" }, { children: [_jsx(User, { className: "h-3 w-3 mr-2" }), event.instructor] }))] })), event.type === "assignment" && (_jsx("div", Object.assign({ className: "mt-3 pt-3 border-t" }, { children: _jsx(Button, Object.assign({ size: "sm", className: "bg-red-600 hover:bg-red-700" }, { children: "View Assignment" })) })))] }), event.id))) })) })] })] })), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, Object.assign({ className: "font-serif" }, { children: "Quick Actions" })) }), _jsx(CardContent, { children: _jsxs("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-3 gap-4" }, { children: [_jsxs(Button, Object.assign({ variant: "outline", className: "h-20 flex flex-col items-center justify-center space-y-2 bg-transparent" }, { children: [_jsx(BookOpen, { className: "h-6 w-6" }), _jsx("span", { children: "View All Courses" })] })), _jsxs(Button, Object.assign({ variant: "outline", className: "h-20 flex flex-col items-center justify-center space-y-2 bg-transparent" }, { children: [_jsx(Clock, { className: "h-6 w-6" }), _jsx("span", { children: "Upcoming Assignments" })] })), _jsxs(Button, Object.assign({ variant: "outline", className: "h-20 flex flex-col items-center justify-center space-y-2 bg-transparent" }, { children: [_jsx(User, { className: "h-6 w-6" }), _jsx("span", { children: "Contact Instructors" })] }))] })) })] })] })));
}
