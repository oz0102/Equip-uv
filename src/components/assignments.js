import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, FileText, AlertCircle, CheckCircle } from "lucide-react";
export function Assignments() {
    const assignments = [
        {
            id: 1,
            title: "Biblical Hermeneutics Essay",
            course: "BIBL201 - Biblical Hermeneutics",
            type: "essay",
            dueDate: "2024-01-15T23:59:00",
            submittedAt: null,
            status: "pending",
            points: 100,
            description: "Write a 2000-word essay on the historical-grammatical method of biblical interpretation.",
            instructions: "Your essay should include an introduction, three main sections discussing different aspects of the method, and a conclusion with practical applications.",
            attachments: ["rubric.pdf", "reading-list.pdf"],
        },
        {
            id: 2,
            title: "Theology Quiz #3",
            course: "THEO101 - Introduction to Systematic Theology",
            type: "quiz",
            dueDate: "2024-01-18T11:30:00",
            submittedAt: null,
            status: "pending",
            points: 50,
            description: "Quiz covering chapters 8-10 on the doctrine of salvation.",
            instructions: "The quiz will be available for 60 minutes and consists of 25 multiple choice questions.",
            attachments: ["study-guide.pdf"],
        },
        {
            id: 3,
            title: "Ministry Reflection Paper",
            course: "PRAC301 - Pastoral Care and Counseling",
            type: "project",
            dueDate: "2024-01-22T23:59:00",
            submittedAt: null,
            status: "pending",
            points: 75,
            description: "Reflect on your ministry experience and apply pastoral care principles.",
            instructions: "Write a 1500-word reflection paper connecting your ministry experience with course concepts.",
            attachments: ["reflection-template.docx"],
        },
        {
            id: 4,
            title: "Church History Timeline",
            course: "HIST201 - Church History",
            type: "project",
            dueDate: "2024-01-10T23:59:00",
            submittedAt: "2024-01-09T15:30:00",
            status: "submitted",
            points: 80,
            grade: 92,
            description: "Create a comprehensive timeline of major events in church history.",
            instructions: "Include at least 50 significant events with dates, descriptions, and historical context.",
            attachments: ["timeline-template.pdf"],
        },
        {
            id: 5,
            title: "Systematic Theology Exam",
            course: "THEO201 - Advanced Systematic Theology",
            type: "exam",
            dueDate: "2024-01-08T14:00:00",
            submittedAt: "2024-01-08T13:45:00",
            status: "graded",
            points: 150,
            grade: 131,
            description: "Comprehensive exam covering all topics from the first half of the semester.",
            instructions: "The exam consists of essay questions and will be administered in person.",
            attachments: [],
        },
    ];
    const getStatusColor = (status) => {
        switch (status) {
            case "pending":
                return "bg-yellow-100 text-yellow-800";
            case "submitted":
                return "bg-blue-100 text-blue-800";
            case "graded":
                return "bg-green-100 text-green-800";
            case "late":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    const getTypeIcon = (type) => {
        switch (type) {
            case "essay":
                return _jsx(FileText, { className: "h-4 w-4" });
            case "quiz":
                return _jsx(Clock, { className: "h-4 w-4" });
            case "exam":
                return _jsx(AlertCircle, { className: "h-4 w-4" });
            case "project":
                return _jsx(CheckCircle, { className: "h-4 w-4" });
            default:
                return _jsx(FileText, { className: "h-4 w-4" });
        }
    };
    const pendingAssignments = assignments.filter((a) => a.status === "pending");
    const submittedAssignments = assignments.filter((a) => a.status === "submitted");
    const gradedAssignments = assignments.filter((a) => a.status === "graded");
    const isOverdue = (dueDate) => {
        return new Date(dueDate) < new Date();
    };
    return (_jsxs("div", Object.assign({ className: "space-y-6" }, { children: [_jsxs("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-4 gap-4" }, { children: [_jsx(Card, { children: _jsx(CardContent, Object.assign({ className: "p-4" }, { children: _jsxs("div", Object.assign({ className: "text-center" }, { children: [_jsx("p", Object.assign({ className: "text-2xl font-bold text-red-600" }, { children: pendingAssignments.length })), _jsx("p", Object.assign({ className: "text-sm text-gray-600" }, { children: "Pending" }))] })) })) }), _jsx(Card, { children: _jsx(CardContent, Object.assign({ className: "p-4" }, { children: _jsxs("div", Object.assign({ className: "text-center" }, { children: [_jsx("p", Object.assign({ className: "text-2xl font-bold text-blue-600" }, { children: submittedAssignments.length })), _jsx("p", Object.assign({ className: "text-sm text-gray-600" }, { children: "Submitted" }))] })) })) }), _jsx(Card, { children: _jsx(CardContent, Object.assign({ className: "p-4" }, { children: _jsxs("div", Object.assign({ className: "text-center" }, { children: [_jsx("p", Object.assign({ className: "text-2xl font-bold text-green-600" }, { children: gradedAssignments.length })), _jsx("p", Object.assign({ className: "text-sm text-gray-600" }, { children: "Graded" }))] })) })) }), _jsx(Card, { children: _jsx(CardContent, Object.assign({ className: "p-4" }, { children: _jsxs("div", Object.assign({ className: "text-center" }, { children: [_jsxs("p", Object.assign({ className: "text-2xl font-bold text-black" }, { children: [gradedAssignments.length > 0
                                                ? Math.round(gradedAssignments.reduce((sum, a) => sum + (a.grade / a.points) * 100, 0) /
                                                    gradedAssignments.length)
                                                : 0, "%"] })), _jsx("p", Object.assign({ className: "text-sm text-gray-600" }, { children: "Avg Grade" }))] })) })) })] })), _jsxs(Tabs, Object.assign({ defaultValue: "pending", className: "w-full" }, { children: [_jsxs(TabsList, Object.assign({ className: "grid w-full grid-cols-3" }, { children: [_jsxs(TabsTrigger, Object.assign({ value: "pending" }, { children: ["Pending (", pendingAssignments.length, ")"] })), _jsxs(TabsTrigger, Object.assign({ value: "submitted" }, { children: ["Submitted (", submittedAssignments.length, ")"] })), _jsxs(TabsTrigger, Object.assign({ value: "graded" }, { children: ["Graded (", gradedAssignments.length, ")"] }))] })), _jsx(TabsContent, Object.assign({ value: "pending", className: "space-y-4" }, { children: pendingAssignments.map((assignment) => (_jsxs(Card, Object.assign({ className: `${isOverdue(assignment.dueDate) ? "border-red-500" : ""}` }, { children: [_jsx(CardHeader, { children: _jsxs("div", Object.assign({ className: "flex items-start justify-between" }, { children: [_jsxs("div", Object.assign({ className: "flex-1" }, { children: [_jsxs(CardTitle, Object.assign({ className: "font-serif text-lg flex items-center" }, { children: [getTypeIcon(assignment.type), _jsx("span", Object.assign({ className: "ml-2" }, { children: assignment.title })), isOverdue(assignment.dueDate) && (_jsx(Badge, Object.assign({ variant: "destructive", className: "ml-2" }, { children: "Overdue" })))] })), _jsx("p", Object.assign({ className: "text-sm text-gray-600 mt-1" }, { children: assignment.course }))] })), _jsx(Badge, Object.assign({ className: getStatusColor(assignment.status) }, { children: assignment.status }))] })) }), _jsxs(CardContent, Object.assign({ className: "space-y-4" }, { children: [_jsx("p", Object.assign({ className: "text-gray-700" }, { children: assignment.description })), _jsxs("div", Object.assign({ className: "flex items-center space-x-4 text-sm text-gray-600" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center" }, { children: [_jsx(Calendar, { className: "h-4 w-4 mr-1" }), "Due: ", new Date(assignment.dueDate).toLocaleDateString(), " at", " ", new Date(assignment.dueDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })] })), _jsxs("div", Object.assign({ className: "flex items-center" }, { children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), assignment.points, " points"] }))] })), _jsxs("div", Object.assign({ className: "flex items-center justify-between pt-4 border-t" }, { children: [_jsx("div", Object.assign({ className: "text-sm text-gray-600" }, { children: assignment.attachments.length > 0 && _jsxs("span", { children: [assignment.attachments.length, " attachment(s)"] }) })), _jsxs("div", Object.assign({ className: "space-x-2" }, { children: [_jsx(Button, Object.assign({ variant: "outline", size: "sm" }, { children: "View Details" })), _jsx(Button, Object.assign({ size: "sm", className: "bg-red-600 hover:bg-red-700" }, { children: "Start Assignment" }))] }))] }))] }))] }), assignment.id))) })), _jsx(TabsContent, Object.assign({ value: "submitted", className: "space-y-4" }, { children: submittedAssignments.map((assignment) => (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs("div", Object.assign({ className: "flex items-start justify-between" }, { children: [_jsxs("div", Object.assign({ className: "flex-1" }, { children: [_jsxs(CardTitle, Object.assign({ className: "font-serif text-lg flex items-center" }, { children: [getTypeIcon(assignment.type), _jsx("span", Object.assign({ className: "ml-2" }, { children: assignment.title }))] })), _jsx("p", Object.assign({ className: "text-sm text-gray-600 mt-1" }, { children: assignment.course }))] })), _jsx(Badge, Object.assign({ className: getStatusColor(assignment.status) }, { children: assignment.status }))] })) }), _jsxs(CardContent, Object.assign({ className: "space-y-4" }, { children: [_jsx("p", Object.assign({ className: "text-gray-700" }, { children: assignment.description })), _jsxs("div", Object.assign({ className: "flex items-center space-x-4 text-sm text-gray-600" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center" }, { children: [_jsx(Calendar, { className: "h-4 w-4 mr-1" }), "Submitted: ", new Date(assignment.submittedAt).toLocaleDateString(), " at", " ", new Date(assignment.submittedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })] })), _jsxs("div", Object.assign({ className: "flex items-center" }, { children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), assignment.points, " points"] }))] })), _jsxs("div", Object.assign({ className: "flex items-center justify-between pt-4 border-t" }, { children: [_jsx("div", Object.assign({ className: "text-sm text-blue-600 font-medium" }, { children: "Awaiting grade..." })), _jsx(Button, Object.assign({ variant: "outline", size: "sm" }, { children: "View Submission" }))] }))] }))] }, assignment.id))) })), _jsx(TabsContent, Object.assign({ value: "graded", className: "space-y-4" }, { children: gradedAssignments.map((assignment) => (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs("div", Object.assign({ className: "flex items-start justify-between" }, { children: [_jsxs("div", Object.assign({ className: "flex-1" }, { children: [_jsxs(CardTitle, Object.assign({ className: "font-serif text-lg flex items-center" }, { children: [getTypeIcon(assignment.type), _jsx("span", Object.assign({ className: "ml-2" }, { children: assignment.title }))] })), _jsx("p", Object.assign({ className: "text-sm text-gray-600 mt-1" }, { children: assignment.course }))] })), _jsx(Badge, Object.assign({ className: getStatusColor(assignment.status) }, { children: assignment.status }))] })) }), _jsxs(CardContent, Object.assign({ className: "space-y-4" }, { children: [_jsx("p", Object.assign({ className: "text-gray-700" }, { children: assignment.description })), _jsxs("div", Object.assign({ className: "flex items-center space-x-4 text-sm text-gray-600" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center" }, { children: [_jsx(Calendar, { className: "h-4 w-4 mr-1" }), "Submitted: ", new Date(assignment.submittedAt).toLocaleDateString()] })), _jsxs("div", Object.assign({ className: "flex items-center" }, { children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), assignment.points, " points"] }))] })), _jsxs("div", Object.assign({ className: "flex items-center justify-between pt-4 border-t" }, { children: [_jsxs("div", Object.assign({ className: "text-lg font-bold" }, { children: [_jsxs("span", Object.assign({ className: "text-green-600" }, { children: [assignment.grade, "/", assignment.points] })), _jsxs("span", Object.assign({ className: "text-sm text-gray-600 ml-2" }, { children: ["(", Math.round((assignment.grade / assignment.points) * 100), "%)"] }))] })), _jsxs("div", Object.assign({ className: "space-x-2" }, { children: [_jsx(Button, Object.assign({ variant: "outline", size: "sm" }, { children: "View Feedback" })), _jsx(Button, Object.assign({ variant: "outline", size: "sm" }, { children: "View Submission" }))] }))] }))] }))] }, assignment.id))) }))] }))] })));
}
