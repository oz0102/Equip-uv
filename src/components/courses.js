import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Calendar, Clock, User, CheckCircle, AlertCircle, FileText, Video, Download, Eye } from "lucide-react";
export default function CoursesPage() {
    const [currentView, setCurrentView] = useState('courses');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const courses = [
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
    ];
    const tasks = [
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
    ];
    const activeCourse = courses.find(course => course.status === 'active');
    const upcomingCourses = courses.filter(course => course.status === 'upcoming');
    const completedCourses = courses.filter(course => course.status === 'completed');
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high': return 'bg-red-100 text-red-800 border-red-200';
            case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'low': return 'bg-green-100 text-green-800 border-green-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };
    const isOverdue = (dueDate) => {
        return new Date(dueDate) < new Date();
    };
    const viewCourse = (course) => {
        setSelectedCourse(course);
        setCurrentView('course-detail');
    };
    const backToCourses = () => {
        setCurrentView('courses');
        setSelectedCourse(null);
    };
    if (currentView === 'course-detail' && selectedCourse) {
        return (_jsxs("div", { className: "space-y-6", children: [_jsx("div", { className: "flex items-center justify-between", children: _jsx(Button, { onClick: backToCourses, variant: "outline", children: "\u2190 Back to Courses" }) }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "font-serif text-2xl text-black", children: [selectedCourse.code, ": ", selectedCourse.title] }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-600", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(User, { className: "h-4 w-4 mr-1" }), selectedCourse.instructor] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Calendar, { className: "h-4 w-4 mr-1" }), selectedCourse.schedule] }), _jsxs(Badge, { variant: "outline", className: "text-red-600 border-red-600", children: [selectedCourse.credits, " Credits"] })] })] }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-gray-700 mb-4", children: selectedCourse.description }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsx("span", { className: "text-gray-600", children: "Course Progress" }), _jsxs("span", { className: "font-medium", children: [selectedCourse.progress, "%"] })] }), _jsx(Progress, { value: selectedCourse.progress, className: "h-2" })] })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center", children: [_jsx(FileText, { className: "h-5 w-5 mr-2 text-red-600" }), "Syllabi"] }) }), _jsx(CardContent, { children: selectedCourse.syllabi.length > 0 ? (_jsx("div", { className: "space-y-2", children: selectedCourse.syllabi.map((item, index) => (_jsxs("div", { className: "flex items-center justify-between p-2 border rounded", children: [_jsx("span", { className: "text-sm", children: item.title }), _jsx(Button, { size: "sm", variant: "outline", children: _jsx(Download, { className: "h-4 w-4" }) })] }, index))) })) : (_jsx("p", { className: "text-gray-500 text-sm", children: "No syllabi available" })) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center", children: [_jsx(BookOpen, { className: "h-5 w-5 mr-2 text-red-600" }), "Reading Resources"] }) }), _jsx(CardContent, { children: selectedCourse.readingResources.length > 0 ? (_jsx("div", { className: "space-y-2", children: selectedCourse.readingResources.map((item, index) => (_jsxs("div", { className: "flex items-center justify-between p-2 border rounded", children: [_jsx("span", { className: "text-sm", children: item.title }), _jsx(Button, { size: "sm", variant: "outline", children: _jsx(Eye, { className: "h-4 w-4" }) })] }, index))) })) : (_jsx("p", { className: "text-gray-500 text-sm", children: "No reading resources available" })) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center", children: [_jsx(Video, { className: "h-5 w-5 mr-2 text-red-600" }), "Class Recordings"] }) }), _jsx(CardContent, { children: selectedCourse.recordings.length > 0 ? (_jsx("div", { className: "space-y-2", children: selectedCourse.recordings.map((item, index) => (_jsx("div", { className: "p-2 border rounded", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium", children: item.title }), _jsx("p", { className: "text-xs text-gray-500", children: new Date(item.date).toLocaleDateString() })] }), _jsx(Button, { size: "sm", variant: "outline", children: _jsx(Video, { className: "h-4 w-4" }) })] }) }, index))) })) : (_jsx("p", { className: "text-gray-500 text-sm", children: "No recordings available" })) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center", children: [_jsx(BookOpen, { className: "h-5 w-5 mr-2 text-red-600" }), "Attached Books"] }) }), _jsx(CardContent, { children: selectedCourse.attachedBooks.length > 0 ? (_jsx("div", { className: "space-y-2", children: selectedCourse.attachedBooks.map((item, index) => (_jsx("div", { className: "p-2 border rounded", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium", children: item.title }), _jsxs("p", { className: "text-xs text-gray-500", children: ["by ", item.author] })] }), _jsx(Button, { size: "sm", variant: "outline", children: _jsx(Download, { className: "h-4 w-4" }) })] }) }, index))) })) : (_jsx("p", { className: "text-gray-500 text-sm", children: "No books attached" })) })] })] })] }));
    }
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Active Course" }), _jsx("p", { className: "text-2xl font-bold text-black", children: activeCourse ? 1 : 0 })] }), _jsx(BookOpen, { className: "h-8 w-8 text-red-600" })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Pending Tasks" }), _jsx("p", { className: "text-2xl font-bold text-black", children: tasks.filter(task => !task.completed).length })] }), _jsx(AlertCircle, { className: "h-8 w-8 text-red-600" })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Completed Courses" }), _jsx("p", { className: "text-2xl font-bold text-black", children: completedCourses.length })] }), _jsx(CheckCircle, { className: "h-8 w-8 text-green-600" })] }) }) })] }), activeCourse && (_jsxs("div", { children: [_jsx("h2", { className: "text-xl font-semibold text-black mb-4", children: "Current Course (This Week)" }), _jsxs(Card, { className: "border-2 border-red-200 bg-red-50/30", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { children: [_jsxs(CardTitle, { className: "font-serif text-xl text-black", children: [activeCourse.code, ": ", activeCourse.title] }), _jsxs("div", { className: "flex items-center mt-2 text-sm text-gray-600", children: [_jsx(User, { className: "h-4 w-4 mr-1" }), activeCourse.instructor] }), _jsx(Badge, { className: "mt-2 bg-green-100 text-green-800 border-green-200", children: "Active" })] }), _jsxs(Badge, { variant: "outline", className: "text-red-600 border-red-600", children: [activeCourse.credits, " Credits"] })] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx("p", { className: "text-gray-700 text-sm", children: activeCourse.description }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsx("span", { className: "text-gray-600", children: "Progress" }), _jsxs("span", { className: "font-medium", children: [activeCourse.progress, "%"] })] }), _jsx(Progress, { value: activeCourse.progress, className: "h-2" })] }), _jsxs("div", { className: "grid grid-cols-1 gap-2 text-sm", children: [_jsxs("div", { className: "flex items-center text-gray-600", children: [_jsx(Calendar, { className: "h-4 w-4 mr-2" }), activeCourse.schedule, " \u2022 ", activeCourse.location] }), _jsxs("div", { className: "flex items-center text-gray-600", children: [_jsx(Clock, { className: "h-4 w-4 mr-2" }), "Next class: ", new Date(activeCourse.nextClass).toLocaleDateString()] })] }), _jsx("div", { className: "flex items-center justify-end pt-4 border-t", children: _jsx(Button, { size: "sm", className: "bg-red-600 hover:bg-red-700", onClick: () => viewCourse(activeCourse), children: "View Course Details" }) })] })] })] })), _jsxs("div", { children: [_jsx("h2", { className: "text-xl font-semibold text-black mb-4", children: "Tasks" }), _jsx("div", { className: "grid grid-cols-1 gap-4", children: tasks.map((task) => (_jsx(Card, { className: `${task.completed ? 'opacity-60' : ''} ${isOverdue(task.dueDate) && !task.completed ? 'border-red-300 bg-red-50/30' : ''}`, children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [task.completed ? (_jsx(CheckCircle, { className: "h-5 w-5 text-green-600" })) : (_jsx(AlertCircle, { className: `h-5 w-5 ${isOverdue(task.dueDate) ? 'text-red-600' : 'text-yellow-600'}` })), _jsx("h3", { className: `font-medium ${task.completed ? 'line-through text-gray-500' : 'text-black'}`, children: task.title })] }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-600 mb-2", children: [_jsx("span", { className: "font-medium", children: task.courseName }), _jsxs(Badge, { className: getPriorityColor(task.priority), children: [task.priority, " priority"] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), "Due: ", new Date(task.dueDate).toLocaleDateString(), isOverdue(task.dueDate) && !task.completed && (_jsx("span", { className: "ml-2 text-red-600 font-medium", children: "(Overdue)" }))] })] }), _jsx("p", { className: "text-sm text-gray-700", children: task.description })] }), _jsx("div", { className: "ml-4", children: _jsx(Button, { size: "sm", variant: "outline", children: "View Details" }) })] }) }) }, task.id))) })] }), _jsxs("div", { children: [_jsx("h2", { className: "text-xl font-semibold text-black mb-4", children: "All Courses" }), upcomingCourses.length > 0 && (_jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-700 mb-3", children: "Upcoming" }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: upcomingCourses.map((course) => (_jsxs(Card, { className: "opacity-75", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { children: [_jsxs(CardTitle, { className: "font-serif text-lg text-black", children: [course.code, ": ", course.title] }), _jsxs("div", { className: "flex items-center mt-2 text-sm text-gray-600", children: [_jsx(User, { className: "h-4 w-4 mr-1" }), course.instructor] }), _jsx(Badge, { className: "mt-2 bg-blue-100 text-blue-800 border-blue-200", children: "Upcoming" })] }), _jsxs(Badge, { variant: "outline", className: "text-red-600 border-red-600", children: [course.credits, " Credits"] })] }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-gray-700 text-sm mb-3", children: course.description }), _jsx("div", { className: "text-sm text-gray-600", children: _jsxs("div", { className: "flex items-center", children: [_jsx(Calendar, { className: "h-4 w-4 mr-2" }), "Starts: ", new Date(course.nextClass).toLocaleDateString()] }) })] })] }, course.id))) })] })), completedCourses.length > 0 && (_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-700 mb-3", children: "Completed" }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: completedCourses.map((course) => (_jsxs(Card, { className: "opacity-60", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { children: [_jsxs(CardTitle, { className: "font-serif text-lg text-black", children: [course.code, ": ", course.title] }), _jsxs("div", { className: "flex items-center mt-2 text-sm text-gray-600", children: [_jsx(User, { className: "h-4 w-4 mr-1" }), course.instructor] }), _jsx(Badge, { className: "mt-2 bg-green-100 text-green-800 border-green-200", children: "Completed" })] }), _jsxs(Badge, { variant: "outline", className: "text-red-600 border-red-600", children: [course.credits, " Credits"] })] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("p", { className: "text-gray-700 text-sm", children: course.description }), _jsx(Button, { size: "sm", variant: "outline", onClick: () => viewCourse(course), children: "View Details" })] }) })] }, course.id))) })] }))] })] }));
}
