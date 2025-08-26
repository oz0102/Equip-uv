import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";
export function Attendance() {
    const attendanceRecords = [
        {
            id: 1,
            course: "Salvation - Origin of Sin",
            date: "2024-01-15",
            status: "present",
            notes: "",
        },
        {
            id: 2,
            course: "Salvation - Difference Between Sin and Dead Works",
            date: "2024-01-15",
            status: "present",
            notes: "",
        },
        {
            id: 3,
            course: "Salvation - Repentance from Dead Works",
            date: "2024-01-15",
            status: "excused",
            notes: "Doctor's appointment - medical note provided",
        },
        {
            id: 4,
            course: "Salvation - Faith Towards God",
            date: "2024-01-13",
            status: "present",
            notes: "",
        },
        {
            id: 5,
            course: "Salvation - Origin of Sin",
            date: "2024-01-13",
            status: "absent",
            notes: "No notification provided",
        },
        {
            id: 6,
            course: "Salvation - Difference Between Sin and Dead Works",
            date: "2024-01-12",
            status: "present",
            notes: "",
        },
        {
            id: 7,
            course: "Salvation - Repentance from Dead Works",
            date: "2024-01-12",
            status: "present",
            notes: "",
        },
        {
            id: 8,
            course: "Salvation - Faith Towards God",
            date: "2024-01-10",
            status: "present",
            notes: "",
        },
        {
            id: 9,
            course: "Salvation - Origin of Sin",
            date: "2024-01-08",
            status: "excused",
            notes: "Family emergency - prior notification given",
        },
        {
            id: 10,
            course: "Salvation - Difference Between Sin and Dead Works",
            date: "2024-01-08",
            status: "present",
            notes: "",
        },
    ];
    const getStatusIcon = (status) => {
        switch (status) {
            case "present":
                return _jsx(CheckCircle, { className: "h-4 w-4 text-green-600" });
            case "absent":
                return _jsx(XCircle, { className: "h-4 w-4 text-red-600" });
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
            case "excused":
                return "bg-blue-100 text-blue-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    // Calculate overall statistics
    const totalRecords = attendanceRecords.length;
    const presentCount = attendanceRecords.filter(record => record.status === "present").length;
    const absentCount = attendanceRecords.filter(record => record.status === "absent").length;
    const excusedCount = attendanceRecords.filter(record => record.status === "excused").length;
    const attendanceRate = Math.round((presentCount / totalRecords) * 100);
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "text-center mb-6", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Attendance Records" }), _jsx("p", { className: "text-gray-600", children: "Salvation Course - Student Attendance Tracking" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [_jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Attendance Rate" }), _jsxs("p", { className: "text-2xl font-bold text-green-600", children: [attendanceRate, "%"] })] }), _jsx(CheckCircle, { className: "h-8 w-8 text-green-600" })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Present" }), _jsx("p", { className: "text-2xl font-bold text-green-600", children: presentCount })] }), _jsx(CheckCircle, { className: "h-8 w-8 text-green-600" })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Absent" }), _jsx("p", { className: "text-2xl font-bold text-red-600", children: absentCount })] }), _jsx(XCircle, { className: "h-8 w-8 text-red-600" })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Excused" }), _jsx("p", { className: "text-2xl font-bold text-blue-600", children: excusedCount })] }), _jsx(AlertTriangle, { className: "h-8 w-8 text-blue-600" })] }) }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "font-serif text-xl", children: "Detailed Attendance Records" }), _jsx("p", { className: "text-sm text-gray-600", children: "Complete history of class attendance" })] }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-4", children: attendanceRecords.map((record) => (_jsx(Card, { className: "border-l-4 border-l-gray-200", children: _jsxs(CardContent, { className: "p-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [getStatusIcon(record.status), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-black", children: record.course }), _jsx("p", { className: "text-sm text-gray-600", children: new Date(record.date).toLocaleDateString("en-US", {
                                                                        weekday: "long",
                                                                        year: "numeric",
                                                                        month: "long",
                                                                        day: "numeric",
                                                                    }) })] })] }), _jsx("div", { className: "flex items-center space-x-4", children: _jsx(Badge, { className: getStatusColor(record.status), children: record.status.charAt(0).toUpperCase() + record.status.slice(1) }) })] }), record.notes && (_jsxs("div", { className: "mt-3 p-3 bg-gray-50 rounded text-sm text-gray-700 border-l-2 border-blue-200", children: [_jsx("strong", { children: "Note:" }), " ", record.notes] }))] }) }, record.id))) }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "font-serif text-lg", children: "Status Legend" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "flex items-center space-x-3 p-3 bg-green-50 rounded-lg", children: [_jsx(CheckCircle, { className: "h-5 w-5 text-green-600" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-green-800", children: "Present" }), _jsx("p", { className: "text-xs text-green-600", children: "Student attended the class" })] })] }), _jsxs("div", { className: "flex items-center space-x-3 p-3 bg-red-50 rounded-lg", children: [_jsx(XCircle, { className: "h-5 w-5 text-red-600" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-red-800", children: "Absent" }), _jsx("p", { className: "text-xs text-red-600", children: "Student did not attend the class" })] })] }), _jsxs("div", { className: "flex items-center space-x-3 p-3 bg-blue-50 rounded-lg", children: [_jsx(AlertTriangle, { className: "h-5 w-5 text-blue-600" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium text-blue-800", children: "Excused" }), _jsx("p", { className: "text-xs text-blue-600", children: "Absence with valid reason/documentation" })] })] })] }) })] })] }));
}
