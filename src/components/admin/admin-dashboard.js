import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, GraduationCap, BookOpen, UserCheck, TrendingUp, AlertTriangle, Calendar, FileText, BarChart3, Clock, } from "lucide-react";
// Demo data
const stats = [
    {
        title: "Total Students",
        value: "247",
        change: "+12%",
        changeType: "positive",
        icon: GraduationCap,
    },
    {
        title: "Active Instructors",
        value: "18",
        change: "+2",
        changeType: "positive",
        icon: UserCheck,
    },
    {
        title: "Active Courses",
        value: "32",
        change: "+5",
        changeType: "positive",
        icon: BookOpen,
    },
    {
        title: "System Users",
        value: "265",
        change: "+14%",
        changeType: "positive",
        icon: Users,
    },
];
const recentActivities = [
    {
        id: 1,
        type: "enrollment",
        message: "Sarah Johnson enrolled in Biblical Foundations",
        time: "2 minutes ago",
        icon: GraduationCap,
    },
    {
        id: 2,
        type: "assignment",
        message: "Prof. Wilson created new assignment for Theology 101",
        time: "15 minutes ago",
        icon: FileText,
    },
    {
        id: 3,
        type: "user",
        message: "New instructor account created for Dr. Martinez",
        time: "1 hour ago",
        icon: UserCheck,
    },
    {
        id: 4,
        type: "system",
        message: "System backup completed successfully",
        time: "2 hours ago",
        icon: AlertTriangle,
    },
];
const upcomingEvents = [
    {
        id: 1,
        title: "Spring Semester Registration Opens",
        date: "March 1, 2024",
        type: "registration",
    },
    {
        id: 2,
        title: "Faculty Meeting",
        date: "February 28, 2024",
        type: "meeting",
    },
    {
        id: 3,
        title: "Foundations Program Graduation",
        date: "March 15, 2024",
        type: "graduation",
    },
];
const cohortProgress = [
    {
        name: "Foundations 2024 Spring",
        students: 45,
        progress: 75,
        status: "active",
    },
    {
        name: "Equip 2024 Spring",
        students: 32,
        progress: 68,
        status: "active",
    },
    {
        name: "Foundations 2023 Fall",
        students: 38,
        progress: 95,
        status: "completing",
    },
];
export function AdminDashboard() {
    return (_jsxs("div", Object.assign({ className: "space-y-6" }, { children: [_jsx("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, { children: stats.map((stat) => {
                    const Icon = stat.icon;
                    return (_jsxs(Card, { children: [_jsxs(CardHeader, Object.assign({ className: "flex flex-row items-center justify-between space-y-0 pb-2" }, { children: [_jsx(CardTitle, Object.assign({ className: "text-sm font-medium text-gray-600" }, { children: stat.title })), _jsx(Icon, { className: "h-4 w-4 text-gray-400" })] })), _jsxs(CardContent, { children: [_jsx("div", Object.assign({ className: "text-2xl font-bold text-gray-900" }, { children: stat.value })), _jsxs("div", Object.assign({ className: "flex items-center space-x-1 text-xs" }, { children: [_jsx(TrendingUp, { className: "h-3 w-3 text-green-500" }), _jsx("span", Object.assign({ className: "text-green-600 font-medium" }, { children: stat.change })), _jsx("span", Object.assign({ className: "text-gray-500" }, { children: "from last month" }))] }))] })] }, stat.title));
                }) })), _jsxs("div", Object.assign({ className: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, { children: [_jsxs(Card, Object.assign({ className: "lg:col-span-2" }, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, Object.assign({ className: "flex items-center space-x-2" }, { children: [_jsx(Clock, { className: "h-5 w-5" }), _jsx("span", { children: "Recent Activities" })] })), _jsx(CardDescription, { children: "Latest system activities and updates" })] }), _jsxs(CardContent, { children: [_jsx("div", Object.assign({ className: "space-y-4" }, { children: recentActivities.map((activity) => {
                                            const Icon = activity.icon;
                                            return (_jsxs("div", Object.assign({ className: "flex items-start space-x-3" }, { children: [_jsx("div", Object.assign({ className: "bg-gray-100 p-2 rounded-full" }, { children: _jsx(Icon, { className: "h-4 w-4 text-gray-600" }) })), _jsxs("div", Object.assign({ className: "flex-1 min-w-0" }, { children: [_jsx("p", Object.assign({ className: "text-sm text-gray-900" }, { children: activity.message })), _jsx("p", Object.assign({ className: "text-xs text-gray-500" }, { children: activity.time }))] }))] }), activity.id));
                                        }) })), _jsx(Button, Object.assign({ variant: "outline", className: "w-full mt-4 bg-transparent" }, { children: "View All Activities" }))] })] })), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, Object.assign({ className: "flex items-center space-x-2" }, { children: [_jsx(Calendar, { className: "h-5 w-5" }), _jsx("span", { children: "Upcoming Events" })] })), _jsx(CardDescription, { children: "Important dates and deadlines" })] }), _jsxs(CardContent, { children: [_jsx("div", Object.assign({ className: "space-y-4" }, { children: upcomingEvents.map((event) => (_jsxs("div", Object.assign({ className: "border-l-4 border-red-600 pl-3" }, { children: [_jsx("p", Object.assign({ className: "text-sm font-medium text-gray-900" }, { children: event.title })), _jsx("p", Object.assign({ className: "text-xs text-gray-500" }, { children: event.date }))] }), event.id))) })), _jsx(Button, Object.assign({ variant: "outline", className: "w-full mt-4 bg-transparent" }, { children: "View Calendar" }))] })] })] })), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, Object.assign({ className: "flex items-center space-x-2" }, { children: [_jsx(BarChart3, { className: "h-5 w-5" }), _jsx("span", { children: "Cohort Progress" })] })), _jsx(CardDescription, { children: "Current cohort status and completion rates" })] }), _jsx(CardContent, { children: _jsx("div", Object.assign({ className: "space-y-6" }, { children: cohortProgress.map((cohort) => (_jsxs("div", Object.assign({ className: "space-y-2" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center justify-between" }, { children: [_jsxs("div", { children: [_jsx("p", Object.assign({ className: "text-sm font-medium text-gray-900" }, { children: cohort.name })), _jsxs("p", Object.assign({ className: "text-xs text-gray-500" }, { children: [cohort.students, " students"] }))] }), _jsxs("div", Object.assign({ className: "flex items-center space-x-2" }, { children: [_jsx(Badge, Object.assign({ variant: cohort.status === "active" ? "default" : "secondary" }, { children: cohort.status === "active" ? "Active" : "Completing" })), _jsxs("span", Object.assign({ className: "text-sm font-medium" }, { children: [cohort.progress, "%"] }))] }))] })), _jsx(Progress, { value: cohort.progress, className: "h-2" })] }), cohort.name))) })) })] }), _jsxs("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" }, { children: [_jsxs(Button, Object.assign({ variant: "outline", className: "h-20 flex flex-col items-center justify-center space-y-2 bg-transparent" }, { children: [_jsx(Users, { className: "h-6 w-6" }), _jsx("span", Object.assign({ className: "text-sm" }, { children: "Manage Users" }))] })), _jsxs(Button, Object.assign({ variant: "outline", className: "h-20 flex flex-col items-center justify-center space-y-2 bg-transparent" }, { children: [_jsx(BookOpen, { className: "h-6 w-6" }), _jsx("span", Object.assign({ className: "text-sm" }, { children: "Create Course" }))] })), _jsxs(Button, Object.assign({ variant: "outline", className: "h-20 flex flex-col items-center justify-center space-y-2 bg-transparent" }, { children: [_jsx(FileText, { className: "h-6 w-6" }), _jsx("span", Object.assign({ className: "text-sm" }, { children: "Generate Report" }))] })), _jsxs(Button, Object.assign({ variant: "outline", className: "h-20 flex flex-col items-center justify-center space-y-2 bg-transparent" }, { children: [_jsx(BarChart3, { className: "h-6 w-6" }), _jsx("span", Object.assign({ className: "text-sm" }, { children: "View Analytics" }))] }))] }))] })));
}
