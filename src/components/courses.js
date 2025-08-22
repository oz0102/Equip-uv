import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Calendar, Clock, User } from "lucide-react";
export function Courses() {
    const courses = [
        {
            id: 1,
            code: "BIBL201",
            title: "Biblical Hermeneutics",
            instructor: "Dr. Sarah Johnson",
            credits: 3,
            progress: 75,
            schedule: "Mon, Wed, Fri 9:00-10:00 AM",
            location: "Room 101",
            description: "An introduction to the principles and methods of biblical interpretation.",
            nextClass: "2024-01-15 09:00",
            assignments: 3,
            status: "active",
        },
        {
            id: 2,
            code: "THEO101",
            title: "Introduction to Systematic Theology",
            instructor: "Prof. Michael Williams",
            credits: 4,
            progress: 60,
            schedule: "Tue, Thu 11:00 AM-12:30 PM",
            location: "Room 203",
            description: "A comprehensive overview of Christian doctrine and theological foundations.",
            nextClass: "2024-01-16 11:00",
            assignments: 2,
            status: "active",
        },
        {
            id: 3,
            code: "HIST201",
            title: "Church History",
            instructor: "Dr. Elizabeth Davis",
            credits: 3,
            progress: 85,
            schedule: "Mon, Wed 2:00-3:00 PM",
            location: "Room 105",
            description: "A survey of Christian history from the apostolic age to the present.",
            nextClass: "2024-01-15 14:00",
            assignments: 1,
            status: "active",
        },
        {
            id: 4,
            code: "PRAC201",
            title: "Pastoral Care and Counseling",
            instructor: "Rev. James Thompson",
            credits: 3,
            progress: 45,
            schedule: "Tue, Thu 2:00-3:00 PM",
            location: "Room 107",
            description: "Principles and practices of pastoral care in various ministry contexts.",
            nextClass: "2024-01-16 14:00",
            assignments: 4,
            status: "active",
        },
        {
            id: 5,
            code: "THEO201",
            title: "Advanced Systematic Theology",
            instructor: "Prof. Michael Williams",
            credits: 4,
            progress: 30,
            schedule: "Mon, Wed, Fri 10:00-11:00 AM",
            location: "Room 203",
            description: "Advanced study of theological topics including eschatology and pneumatology.",
            nextClass: "2024-01-15 10:00",
            assignments: 5,
            status: "active",
        },
    ];
    const getProgressColor = (progress) => {
        if (progress >= 80)
            return "bg-green-500";
        if (progress >= 60)
            return "bg-yellow-500";
        return "bg-red-500";
    };
    return (_jsxs("div", Object.assign({ className: "space-y-6" }, { children: [_jsxs("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-3 gap-6" }, { children: [_jsx(Card, { children: _jsx(CardContent, Object.assign({ className: "p-6" }, { children: _jsxs("div", Object.assign({ className: "flex items-center justify-between" }, { children: [_jsxs("div", { children: [_jsx("p", Object.assign({ className: "text-sm font-medium text-gray-600" }, { children: "Active Courses" })), _jsx("p", Object.assign({ className: "text-2xl font-bold text-black" }, { children: courses.length }))] }), _jsx(BookOpen, { className: "h-8 w-8 text-red-600" })] })) })) }), _jsx(Card, { children: _jsx(CardContent, Object.assign({ className: "p-6" }, { children: _jsxs("div", Object.assign({ className: "flex items-center justify-between" }, { children: [_jsxs("div", { children: [_jsx("p", Object.assign({ className: "text-sm font-medium text-gray-600" }, { children: "Total Credits" })), _jsx("p", Object.assign({ className: "text-2xl font-bold text-black" }, { children: courses.reduce((sum, course) => sum + course.credits, 0) }))] }), _jsx(Calendar, { className: "h-8 w-8 text-red-600" })] })) })) }), _jsx(Card, { children: _jsx(CardContent, Object.assign({ className: "p-6" }, { children: _jsxs("div", Object.assign({ className: "flex items-center justify-between" }, { children: [_jsxs("div", { children: [_jsx("p", Object.assign({ className: "text-sm font-medium text-gray-600" }, { children: "Avg Progress" })), _jsxs("p", Object.assign({ className: "text-2xl font-bold text-black" }, { children: [Math.round(courses.reduce((sum, course) => sum + course.progress, 0) / courses.length), "%"] }))] }), _jsx(Clock, { className: "h-8 w-8 text-red-600" })] })) })) })] })), _jsx("div", Object.assign({ className: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, { children: courses.map((course) => (_jsxs(Card, Object.assign({ className: "hover:shadow-lg transition-shadow" }, { children: [_jsx(CardHeader, { children: _jsxs("div", Object.assign({ className: "flex items-start justify-between" }, { children: [_jsxs("div", { children: [_jsxs(CardTitle, Object.assign({ className: "font-serif text-xl text-black" }, { children: [course.code, ": ", course.title] })), _jsxs("div", Object.assign({ className: "flex items-center mt-2 text-sm text-gray-600" }, { children: [_jsx(User, { className: "h-4 w-4 mr-1" }), course.instructor] }))] }), _jsxs(Badge, Object.assign({ variant: "outline", className: "text-red-600 border-red-600" }, { children: [course.credits, " Credits"] }))] })) }), _jsxs(CardContent, Object.assign({ className: "space-y-4" }, { children: [_jsx("p", Object.assign({ className: "text-gray-700 text-sm" }, { children: course.description })), _jsxs("div", Object.assign({ className: "space-y-2" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center justify-between text-sm" }, { children: [_jsx("span", Object.assign({ className: "text-gray-600" }, { children: "Progress" })), _jsxs("span", Object.assign({ className: "font-medium" }, { children: [course.progress, "%"] }))] })), _jsx(Progress, { value: course.progress, className: "h-2" })] })), _jsxs("div", Object.assign({ className: "grid grid-cols-1 gap-2 text-sm" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center text-gray-600" }, { children: [_jsx(Calendar, { className: "h-4 w-4 mr-2" }), course.schedule] })), _jsxs("div", Object.assign({ className: "flex items-center text-gray-600" }, { children: [_jsx(Clock, { className: "h-4 w-4 mr-2" }), "Next class: ", new Date(course.nextClass).toLocaleDateString(), " at", " ", new Date(course.nextClass).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })] }))] })), _jsxs("div", Object.assign({ className: "flex items-center justify-between pt-4 border-t" }, { children: [_jsxs("div", Object.assign({ className: "text-sm" }, { children: [_jsx("span", Object.assign({ className: "text-gray-600" }, { children: "Pending assignments: " })), _jsx("span", Object.assign({ className: "font-medium text-red-600" }, { children: course.assignments }))] })), _jsx(Button, Object.assign({ size: "sm", className: "bg-red-600 hover:bg-red-700" }, { children: "View Course" }))] }))] }))] }), course.id))) }))] })));
}
