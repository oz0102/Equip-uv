import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react";
import { useState } from "react";
export function Attendance() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const attendanceRecords = [
        {
            id: 1,
            course: "BIBL201 - Biblical Hermeneutics",
            date: "2024-01-15",
            status: "present",
            arrivalTime: "09:00",
            notes: "",
        },
        {
            id: 2,
            course: "THEO101 - Introduction to Systematic Theology",
            date: "2024-01-15",
            status: "present",
            arrivalTime: "11:00",
            notes: "",
        },
        {
            id: 3,
            course: "HIST201 - Church History",
            date: "2024-01-15",
            status: "late",
            arrivalTime: "14:15",
            notes: "Traffic delay",
        },
        {
            id: 4,
            course: "BIBL201 - Biblical Hermeneutics",
            date: "2024-01-13",
            status: "present",
            arrivalTime: "09:00",
            notes: "",
        },
        {
            id: 5,
            course: "THEO101 - Introduction to Systematic Theology",
            date: "2024-01-13",
            status: "absent",
            arrivalTime: "",
            notes: "Sick leave - doctor's note provided",
        },
        {
            id: 6,
            course: "PRAC201 - Pastoral Care and Counseling",
            date: "2024-01-12",
            status: "present",
            arrivalTime: "14:00",
            notes: "",
        },
        {
            id: 7,
            course: "THEO201 - Advanced Systematic Theology",
            date: "2024-01-12",
            status: "present",
            arrivalTime: "10:00",
            notes: "",
        },
        {
            id: 8,
            course: "BIBL201 - Biblical Hermeneutics",
            date: "2024-01-10",
            status: "present",
            arrivalTime: "09:00",
            notes: "",
        },
    ];
    const courseStats = [
        {
            course: "BIBL201",
            title: "Biblical Hermeneutics",
            totalClasses: 15,
            attended: 14,
            late: 1,
            absent: 0,
            percentage: 93.3,
        },
        {
            course: "THEO101",
            title: "Introduction to Systematic Theology",
            totalClasses: 16,
            attended: 15,
            late: 0,
            absent: 1,
            percentage: 93.8,
        },
        {
            course: "HIST201",
            title: "Church History",
            totalClasses: 12,
            attended: 11,
            late: 1,
            absent: 0,
            percentage: 91.7,
        },
        {
            course: "PRAC201",
            title: "Pastoral Care and Counseling",
            totalClasses: 14,
            attended: 14,
            late: 0,
            absent: 0,
            percentage: 100,
        },
        {
            course: "THEO201",
            title: "Advanced Systematic Theology",
            totalClasses: 13,
            attended: 13,
            late: 0,
            absent: 0,
            percentage: 100,
        },
    ];
    const getStatusIcon = (status) => {
        switch (status) {
            case "present":
                return _jsx(CheckCircle, { className: "h-4 w-4 text-green-600" });
            case "absent":
                return _jsx(XCircle, { className: "h-4 w-4 text-red-600" });
            case "late":
                return _jsx(Clock, { className: "h-4 w-4 text-yellow-600" });
            case "excused":
                return _jsx(AlertTriangle, { className: "h-4 w-4 text-blue-600" });
            default:
                return _jsx(CheckCircle, { className: "h-4 w-4 text-gray-400" });
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case "present":
                return "bg-green-100 text-green-800";
            case "absent":
                return "bg-red-100 text-red-800";
            case "late":
                return "bg-yellow-100 text-yellow-800";
            case "excused":
                return "bg-blue-100 text-blue-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    const getPercentageColor = (percentage) => {
        if (percentage >= 95)
            return "text-green-600";
        if (percentage >= 90)
            return "text-blue-600";
        if (percentage >= 85)
            return "text-yellow-600";
        return "text-red-600";
    };
    const overallStats = {
        totalClasses: courseStats.reduce((sum, course) => sum + course.totalClasses, 0),
        attended: courseStats.reduce((sum, course) => sum + course.attended, 0),
        late: courseStats.reduce((sum, course) => sum + course.late, 0),
        absent: courseStats.reduce((sum, course) => sum + course.absent, 0),
    };
    const overallPercentage = Math.round((overallStats.attended / overallStats.totalClasses) * 100);
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [_jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Overall Rate" }), _jsxs("p", { className: `text-2xl font-bold ${getPercentageColor(overallPercentage)}`, children: [overallPercentage, "%"] })] }), _jsx(CheckCircle, { className: "h-8 w-8 text-green-600" })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Classes Attended" }), _jsx("p", { className: "text-2xl font-bold text-green-600", children: overallStats.attended })] }), _jsx(CheckCircle, { className: "h-8 w-8 text-green-600" })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Late Arrivals" }), _jsx("p", { className: "text-2xl font-bold text-yellow-600", children: overallStats.late })] }), _jsx(Clock, { className: "h-8 w-8 text-yellow-600" })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Absences" }), _jsx("p", { className: "text-2xl font-bold text-red-600", children: overallStats.absent })] }), _jsx(XCircle, { className: "h-8 w-8 text-red-600" })] }) }) })] }), _jsxs(Tabs, { defaultValue: "overview", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-3", children: [_jsx(TabsTrigger, { value: "overview", children: "Course Overview" }), _jsx(TabsTrigger, { value: "records", children: "Attendance Records" }), _jsx(TabsTrigger, { value: "calendar", children: "Calendar View" })] }), _jsx(TabsContent, { value: "overview", className: "space-y-4", children: courseStats.map((course) => (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs(CardTitle, { className: "font-serif text-lg", children: [course.course, ": ", course.title] }), _jsxs("p", { className: "text-sm text-gray-600", children: [course.attended, " of ", course.totalClasses, " classes attended"] })] }), _jsx("div", { className: "text-right", children: _jsxs("div", { className: `text-2xl font-bold ${getPercentageColor(course.percentage)}`, children: [course.percentage.toFixed(1), "%"] }) })] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-3 gap-4", children: [_jsxs("div", { className: "text-center p-3 bg-green-50 rounded-lg", children: [_jsx("div", { className: "flex items-center justify-center mb-2", children: _jsx(CheckCircle, { className: "h-5 w-5 text-green-600" }) }), _jsx("p", { className: "text-lg font-bold text-green-600", children: course.attended }), _jsx("p", { className: "text-sm text-gray-600", children: "Present" })] }), _jsxs("div", { className: "text-center p-3 bg-yellow-50 rounded-lg", children: [_jsx("div", { className: "flex items-center justify-center mb-2", children: _jsx(Clock, { className: "h-5 w-5 text-yellow-600" }) }), _jsx("p", { className: "text-lg font-bold text-yellow-600", children: course.late }), _jsx("p", { className: "text-sm text-gray-600", children: "Late" })] }), _jsxs("div", { className: "text-center p-3 bg-red-50 rounded-lg", children: [_jsx("div", { className: "flex items-center justify-center mb-2", children: _jsx(XCircle, { className: "h-5 w-5 text-red-600" }) }), _jsx("p", { className: "text-lg font-bold text-red-600", children: course.absent }), _jsx("p", { className: "text-sm text-gray-600", children: "Absent" })] })] }) })] }, course.course))) }), _jsx(TabsContent, { value: "records", className: "space-y-4", children: attendanceRecords.map((record) => (_jsx(Card, { children: _jsxs(CardContent, { className: "p-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [getStatusIcon(record.status), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-black", children: record.course }), _jsx("p", { className: "text-sm text-gray-600", children: new Date(record.date).toLocaleDateString("en-US", {
                                                                    weekday: "long",
                                                                    year: "numeric",
                                                                    month: "long",
                                                                    day: "numeric",
                                                                }) })] })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [record.arrivalTime && _jsxs("span", { className: "text-sm text-gray-600", children: ["Arrived: ", record.arrivalTime] }), _jsx(Badge, { className: getStatusColor(record.status), children: record.status })] })] }), record.notes && (_jsxs("div", { className: "mt-2 p-2 bg-gray-50 rounded text-sm text-gray-700", children: [_jsx("strong", { children: "Note:" }), " ", record.notes] }))] }) }, record.id))) }), _jsx(TabsContent, { value: "calendar", className: "space-y-4", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "font-serif", children: "Attendance Calendar" }) }), _jsx(CardContent, { children: _jsx(Calendar, { mode: "single", selected: selectedDate, onSelect: setSelectedDate, className: "rounded-md border" }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "font-serif", children: "Attendance Trends" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm text-gray-600", children: "This Week" }), _jsx(Badge, { className: "bg-green-100 text-green-800", children: "100% Present" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm text-gray-600", children: "This Month" }), _jsx(Badge, { className: "bg-green-100 text-green-800", children: "96% Present" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm text-gray-600", children: "This Semester" }), _jsx(Badge, { className: "bg-green-100 text-green-800", children: "96% Present" })] })] }), _jsxs("div", { className: "pt-4 border-t", children: [_jsx("h4", { className: "font-medium mb-3", children: "Upcoming Classes" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsx("span", { children: "BIBL201 - Tomorrow 9:00 AM" }), _jsx("span", { className: "text-green-600", children: "Scheduled" })] }), _jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsx("span", { children: "THEO101 - Tomorrow 11:00 AM" }), _jsx("span", { className: "text-green-600", children: "Scheduled" })] }), _jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsx("span", { children: "HIST201 - Tomorrow 2:00 PM" }), _jsx("span", { className: "text-green-600", children: "Scheduled" })] })] })] })] })] })] }) })] })] }));
}
