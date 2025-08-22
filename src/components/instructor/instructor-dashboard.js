"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Users, FileText, Clock, TrendingUp, Calendar, GraduationCap, AlertCircle, Star } from "lucide-react";
// Demo data
const stats = [
    {
        title: "Active Courses",
        value: "4",
        change: "+1",
        changeType: "positive",
        icon: BookOpen,
    },
    {
        title: "Total Students",
        value: "127",
        change: "+8",
        changeType: "positive",
        icon: Users,
    },
    {
        title: "Pending Grades",
        value: "23",
        change: "-5",
        changeType: "positive",
        icon: FileText,
    },
    {
        title: "This Week's Classes",
        value: "12",
        change: "0",
        changeType: "neutral",
        icon: Calendar,
    },
];
const myCourses = [
    {
        id: 1,
        code: "THEO101",
        title: "Introduction to Theology",
        students: 32,
        progress: 75,
        nextClass: "Today, 2:00 PM",
        status: "active",
    },
    {
        id: 2,
        code: "BIBL201",
        title: "Biblical Interpretation",
        students: 28,
        progress: 68,
        nextClass: "Tomorrow, 10:00 AM",
        status: "active",
    },
    {
        id: 3,
        code: "HIST301",
        title: "Church History",
        students: 35,
        progress: 82,
        nextClass: "Wed, 1:00 PM",
        status: "active",
    },
    {
        id: 4,
        code: "PRAC401",
        title: "Practical Ministry",
        students: 32,
        progress: 45,
        nextClass: "Thu, 3:00 PM",
        status: "active",
    },
];
const recentSubmissions = [
    {
        id: 1,
        student: "Sarah Johnson",
        assignment: "Theology Essay #2",
        course: "THEO101",
        submittedAt: "2 hours ago",
        status: "pending",
    },
    {
        id: 2,
        student: "Michael Chen",
        assignment: "Biblical Analysis",
        course: "BIBL201",
        submittedAt: "4 hours ago",
        status: "pending",
    },
    {
        id: 3,
        student: "Emily Davis",
        assignment: "Church History Timeline",
        course: "HIST301",
        submittedAt: "1 day ago",
        status: "graded",
    },
    {
        id: 4,
        student: "David Wilson",
        assignment: "Ministry Reflection",
        course: "PRAC401",
        submittedAt: "1 day ago",
        status: "pending",
    },
];
const upcomingDeadlines = [
    {
        id: 1,
        title: "Grade Theology Essays",
        course: "THEO101",
        dueDate: "Today",
        priority: "high",
    },
    {
        id: 2,
        title: "Prepare Biblical Interpretation Lecture",
        course: "BIBL201",
        dueDate: "Tomorrow",
        priority: "medium",
    },
    {
        id: 3,
        title: "Review Ministry Presentations",
        course: "PRAC401",
        dueDate: "March 2",
        priority: "low",
    },
];
const topStudents = [
    {
        id: 1,
        name: "Sarah Johnson",
        course: "THEO101",
        grade: "A",
        avatar: "/diverse-student-studying.png",
    },
    {
        id: 2,
        name: "Michael Chen",
        course: "BIBL201",
        grade: "A-",
        avatar: "/diverse-students-studying.png",
    },
    {
        id: 3,
        name: "Emily Davis",
        course: "HIST301",
        grade: "A",
        avatar: "/diverse-students-studying.png",
    },
];
export function InstructorDashboard() {
    return (_jsxs("div", Object.assign({ className: "space-y-6" }, { children: [_jsx("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, { children: stats.map((stat) => {
                    const Icon = stat.icon;
                    return (_jsxs(Card, { children: [_jsxs(CardHeader, Object.assign({ className: "flex flex-row items-center justify-between space-y-0 pb-2" }, { children: [_jsx(CardTitle, Object.assign({ className: "text-sm font-medium text-gray-600" }, { children: stat.title })), _jsx(Icon, { className: "h-4 w-4 text-gray-400" })] })), _jsxs(CardContent, { children: [_jsx("div", Object.assign({ className: "text-2xl font-bold text-gray-900" }, { children: stat.value })), _jsxs("div", Object.assign({ className: "flex items-center space-x-1 text-xs" }, { children: [_jsx(TrendingUp, { className: "h-3 w-3 text-green-500" }), _jsx("span", Object.assign({ className: "text-green-600 font-medium" }, { children: stat.change })), _jsx("span", Object.assign({ className: "text-gray-500" }, { children: "from last week" }))] }))] })] }, stat.title));
                }) })), _jsxs("div", Object.assign({ className: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, { children: [_jsxs(Card, Object.assign({ className: "lg:col-span-2" }, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, Object.assign({ className: "flex items-center space-x-2" }, { children: [_jsx(BookOpen, { className: "h-5 w-5" }), _jsx("span", { children: "My Courses" })] })), _jsx(CardDescription, { children: "Current semester courses and progress" })] }), _jsx(CardContent, { children: _jsx("div", Object.assign({ className: "space-y-4" }, { children: myCourses.map((course) => (_jsxs("div", Object.assign({ className: "border rounded-lg p-4" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center justify-between mb-2" }, { children: [_jsxs("div", { children: [_jsxs("h3", Object.assign({ className: "font-medium text-gray-900" }, { children: [course.code, ": ", course.title] })), _jsxs("p", Object.assign({ className: "text-sm text-gray-500" }, { children: [course.students, " students enrolled"] }))] }), _jsx(Badge, Object.assign({ variant: "secondary" }, { children: course.status }))] })), _jsxs("div", Object.assign({ className: "space-y-2" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center justify-between text-sm" }, { children: [_jsx("span", Object.assign({ className: "text-gray-600" }, { children: "Course Progress" })), _jsxs("span", Object.assign({ className: "font-medium" }, { children: [course.progress, "%"] }))] })), _jsx(Progress, { value: course.progress, className: "h-2" }), _jsxs("div", Object.assign({ className: "flex items-center justify-between text-sm" }, { children: [_jsx("span", Object.assign({ className: "text-gray-600" }, { children: "Next Class:" })), _jsx("span", Object.assign({ className: "font-medium text-red-600" }, { children: course.nextClass }))] }))] }))] }), course.id))) })) })] })), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, Object.assign({ className: "flex items-center space-x-2" }, { children: [_jsx(Clock, { className: "h-5 w-5" }), _jsx("span", { children: "Upcoming Deadlines" })] })), _jsx(CardDescription, { children: "Tasks and deadlines to track" })] }), _jsx(CardContent, { children: _jsx("div", Object.assign({ className: "space-y-4" }, { children: upcomingDeadlines.map((deadline) => (_jsxs("div", Object.assign({ className: "flex items-start space-x-3" }, { children: [_jsx("div", Object.assign({ className: `p-1 rounded-full ${deadline.priority === "high"
                                                    ? "bg-red-100"
                                                    : deadline.priority === "medium"
                                                        ? "bg-yellow-100"
                                                        : "bg-green-100"}` }, { children: _jsx(AlertCircle, { className: `h-3 w-3 ${deadline.priority === "high"
                                                        ? "text-red-600"
                                                        : deadline.priority === "medium"
                                                            ? "text-yellow-600"
                                                            : "text-green-600"}` }) })), _jsxs("div", Object.assign({ className: "flex-1 min-w-0" }, { children: [_jsx("p", Object.assign({ className: "text-sm font-medium text-gray-900" }, { children: deadline.title })), _jsx("p", Object.assign({ className: "text-xs text-gray-500" }, { children: deadline.course })), _jsxs("p", Object.assign({ className: "text-xs text-gray-500" }, { children: ["Due: ", deadline.dueDate] }))] }))] }), deadline.id))) })) })] })] })), _jsxs("div", Object.assign({ className: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, { children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, Object.assign({ className: "flex items-center space-x-2" }, { children: [_jsx(FileText, { className: "h-5 w-5" }), _jsx("span", { children: "Recent Submissions" })] })), _jsx(CardDescription, { children: "Latest student assignment submissions" })] }), _jsxs(CardContent, { children: [_jsx("div", Object.assign({ className: "space-y-4" }, { children: recentSubmissions.map((submission) => (_jsxs("div", Object.assign({ className: "flex items-center justify-between" }, { children: [_jsxs("div", Object.assign({ className: "flex-1 min-w-0" }, { children: [_jsx("p", Object.assign({ className: "text-sm font-medium text-gray-900" }, { children: submission.student })), _jsx("p", Object.assign({ className: "text-xs text-gray-500" }, { children: submission.assignment })), _jsxs("p", Object.assign({ className: "text-xs text-gray-500" }, { children: [submission.course, " \u2022 ", submission.submittedAt] }))] })), _jsx("div", Object.assign({ className: "flex items-center space-x-2" }, { children: submission.status === "pending" ? (_jsx(Badge, Object.assign({ variant: "outline", className: "text-yellow-600 border-yellow-600" }, { children: "Pending" }))) : (_jsx(Badge, Object.assign({ variant: "outline", className: "text-green-600 border-green-600" }, { children: "Graded" }))) }))] }), submission.id))) })), _jsx(Button, Object.assign({ variant: "outline", className: "w-full mt-4 bg-transparent" }, { children: "View All Submissions" }))] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, Object.assign({ className: "flex items-center space-x-2" }, { children: [_jsx(Star, { className: "h-5 w-5" }), _jsx("span", { children: "Top Performing Students" })] })), _jsx(CardDescription, { children: "Students with highest grades this semester" })] }), _jsxs(CardContent, { children: [_jsx("div", Object.assign({ className: "space-y-4" }, { children: topStudents.map((student, index) => (_jsxs("div", Object.assign({ className: "flex items-center space-x-3" }, { children: [_jsx("div", Object.assign({ className: "flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full text-xs font-bold" }, { children: index + 1 })), _jsxs(Avatar, Object.assign({ className: "h-8 w-8" }, { children: [_jsx(AvatarImage, { src: student.avatar || "/placeholder.svg", alt: student.name }), _jsx(AvatarFallback, { children: student.name
                                                                .split(" ")
                                                                .map((n) => n[0])
                                                                .join("") })] })), _jsxs("div", Object.assign({ className: "flex-1 min-w-0" }, { children: [_jsx("p", Object.assign({ className: "text-sm font-medium text-gray-900" }, { children: student.name })), _jsx("p", Object.assign({ className: "text-xs text-gray-500" }, { children: student.course }))] })), _jsx(Badge, Object.assign({ variant: "outline", className: "text-green-600 border-green-600" }, { children: student.grade }))] }), student.id))) })), _jsx(Button, Object.assign({ variant: "outline", className: "w-full mt-4 bg-transparent" }, { children: "View All Students" }))] })] })] })), _jsxs("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" }, { children: [_jsxs(Button, Object.assign({ variant: "outline", className: "h-20 flex flex-col items-center justify-center space-y-2 bg-transparent" }, { children: [_jsx(FileText, { className: "h-6 w-6" }), _jsx("span", Object.assign({ className: "text-sm" }, { children: "Create Assignment" }))] })), _jsxs(Button, Object.assign({ variant: "outline", className: "h-20 flex flex-col items-center justify-center space-y-2 bg-transparent" }, { children: [_jsx(GraduationCap, { className: "h-6 w-6" }), _jsx("span", Object.assign({ className: "text-sm" }, { children: "Grade Submissions" }))] })), _jsxs(Button, Object.assign({ variant: "outline", className: "h-20 flex flex-col items-center justify-center space-y-2 bg-transparent" }, { children: [_jsx(Calendar, { className: "h-6 w-6" }), _jsx("span", Object.assign({ className: "text-sm" }, { children: "Mark Attendance" }))] })), _jsxs(Button, Object.assign({ variant: "outline", className: "h-20 flex flex-col items-center justify-center space-y-2 bg-transparent" }, { children: [_jsx(Users, { className: "h-6 w-6" }), _jsx("span", Object.assign({ className: "text-sm" }, { children: "View Students" }))] }))] }))] })));
}
