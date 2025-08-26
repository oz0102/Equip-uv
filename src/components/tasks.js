import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, Clock, FileText, AlertCircle, CheckCircle, Upload, BookOpen, Users, GraduationCap, ArrowLeft, Play, Download, Send, Filter, CalendarDays } from "lucide-react";
import { useState } from "react";
export default function TasksCenter() {
    const [selectedTask, setSelectedTask] = useState(null);
    const [submissionText, setSubmissionText] = useState("");
    // Enhanced date filtering state (similar to tracker.tsx)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [filterMode, setFilterMode] = useState("day");
    const [showCalendar, setShowCalendar] = useState(false);
    // Helper functions for date manipulation (from tracker.tsx)
    const getWeekStart = (date) => {
        const d = new Date(date);
        const day = d.getDay();
        const diff = d.getDate() - day;
        return new Date(d.setDate(diff));
    };
    const getWeekEnd = (date) => {
        const weekStart = getWeekStart(date);
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        return weekEnd;
    };
    const formatDateRange = (start, end) => {
        const options = { month: 'short', day: 'numeric' };
        return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
    };
    const getCurrentDisplayDate = () => {
        if (!selectedDate)
            return "Today";
        if (filterMode === "day") {
            return selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            });
        }
        else {
            const weekStart = getWeekStart(selectedDate);
            const weekEnd = getWeekEnd(selectedDate);
            return `Week of ${formatDateRange(weekStart, weekEnd)}`;
        }
    };
    const tasks = [
        {
            id: 1,
            title: "The Parable of the Good Samaritan: Contextual Analysis",
            course: "BIBL301 - New Testament Exegesis",
            instructor: "Dr. Sarah Henderson",
            type: "exegesis",
            taskType: "submission",
            dueDate: "2025-09-15T23:59:00",
            dueDateFormatted: "September 15, 2025",
            submittedAt: null,
            status: "pending",
            priority: "high",
            points: 120,
            estimatedTime: "8-10 hours",
            description: "Conduct a thorough exegetical analysis of Luke 10:25-37, examining the historical, cultural, and theological context of the Good Samaritan parable.",
            instructions: "Your analysis should include: (1) Historical-grammatical interpretation, (2) Cultural background research, (3) Theological implications, and (4) Contemporary application principles. Use at least 8 scholarly sources.",
            attachments: ["rubric.pdf", "source-guidelines.pdf", "sample-exegesis.pdf"],
            daysRemaining: 22
        },
        {
            id: 2,
            title: "Introduction to Salvation - Video Lecture",
            course: "THEO101 - Foundations Program",
            instructor: "Dr. Michael Roberts",
            type: "video",
            taskType: "video",
            submittedAt: null,
            status: "pending",
            priority: "medium",
            estimatedTime: "45 minutes",
            description: "Watch the introductory video lecture on Salvation covering the origin of sin, repentance from dead works, and faith towards God.",
            instructions: "Watch the complete video and take notes on key concepts. This will prepare you for the upcoming discussion session.",
            attachments: ["lecture-notes.pdf", "discussion-questions.pdf"],
            videoUrl: "https://example.com/salvation-intro",
            videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop"
        },
        {
            id: 3,
            title: "Difference Between Sin and Dead Works - Reading",
            course: "THEO101 - Foundations Program",
            instructor: "Dr. Michael Roberts",
            type: "reading",
            taskType: "resource",
            submittedAt: null,
            status: "pending",
            priority: "low",
            estimatedTime: "30 minutes",
            description: "Read the assigned chapter on understanding the distinction between sin and dead works as outlined in Hebrews 6:1 and Isaiah 64:6.",
            instructions: "Read carefully and reflect on the key differences. Consider how this applies to your personal faith journey.",
            attachments: ["chapter-reading.pdf"],
            resourceUrl: "https://example.com/sin-dead-works.pdf",
            resourceType: "pdf"
        },
        {
            id: 4,
            title: "Daily Standup - Week 3",
            course: "PRAC401 - Pastoral Leadership",
            instructor: "Rev. Dr. James Wilson",
            type: "standup",
            taskType: "submission",
            dueDate: "2025-08-30T23:59:00",
            dueDateFormatted: "August 30, 2025",
            submittedAt: null,
            status: "pending",
            priority: "medium",
            estimatedTime: "15 minutes",
            description: "Share your weekly progress, challenges, and insights from your ministry leadership studies.",
            instructions: "Provide a brief update on: 1) What you learned this week, 2) Any challenges you're facing, 3) How you plan to apply these concepts in ministry.",
            attachments: [],
            daysRemaining: 5
        },
        {
            id: 5,
            title: "Church History Timeline Project",
            course: "HIST301 - Early Church History",
            instructor: "Dr. Rachel Martinez",
            type: "project",
            taskType: "submission",
            dueDate: "2025-08-20T23:59:00",
            dueDateFormatted: "August 20, 2025",
            submittedAt: "2025-08-19T16:30:00",
            status: "submitted",
            priority: "medium",
            points: 85,
            estimatedTime: "10-12 hours",
            description: "Create a comprehensive timeline of major events, figures, and theological developments in the early church (33-451 CE).",
            instructions: "Include at least 75 significant events with dates, brief descriptions, and historical significance. Use visual elements and maintain chronological accuracy.",
            attachments: ["timeline-template.pdf", "resource-list.pdf"],
            submittedDateFormatted: "August 19, 2025"
        },
        {
            id: 6,
            title: "Reformation Theology Research Paper",
            course: "HIST201 - Church History Survey",
            instructor: "Prof. David Thompson",
            type: "essay",
            taskType: "submission",
            dueDate: "2025-08-15T23:59:00",
            dueDateFormatted: "August 15, 2025",
            submittedAt: "2025-08-14T20:45:00",
            status: "graded",
            priority: "medium",
            points: 150,
            grade: 138,
            estimatedTime: "12-15 hours",
            description: "Examine the theological contributions of a major Reformation figure and their lasting impact on Protestant Christianity.",
            instructions: "Choose from Luther, Calvin, Zwingli, or Cranmer. Analyze their key theological positions, historical context, and contemporary relevance. Minimum 3500 words with primary source integration.",
            attachments: ["paper-guidelines.pdf", "citation-style.pdf"],
            submittedDateFormatted: "August 14, 2025",
            feedback: "Excellent analysis of Calvin's doctrine of predestination. Strong use of primary sources and clear argumentation. Consider expanding on contemporary applications."
        }
    ];
    // Overdue tasks
    const overdueTasks = [
        {
            id: 7,
            title: "Greek Translation Assignment #4",
            course: "LANG201 - Biblical Greek II",
            instructor: "Prof. Timothy Clark",
            type: "translation",
            dueDate: "August 20, 2025",
            points: 75,
            daysOverdue: 4,
            priority: "high"
        }
    ];
    const getStatusColor = (status) => {
        switch (status) {
            case "pending":
                return "bg-amber-100 text-amber-800 border-amber-200";
            case "submitted":
                return "bg-blue-100 text-blue-800 border-blue-200";
            case "graded":
                return "bg-emerald-100 text-emerald-800 border-emerald-200";
            case "overdue":
                return "bg-red-100 text-red-800 border-red-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };
    const getTypeIcon = (type) => {
        switch (type) {
            case "exegesis":
                return _jsx(BookOpen, { className: "h-4 w-4" });
            case "essay":
                return _jsx(FileText, { className: "h-4 w-4" });
            case "exam":
                return _jsx(GraduationCap, { className: "h-4 w-4" });
            case "project":
                return _jsx(CheckCircle, { className: "h-4 w-4" });
            case "practicum":
                return _jsx(Users, { className: "h-4 w-4" });
            case "translation":
                return _jsx(BookOpen, { className: "h-4 w-4" });
            case "video":
                return _jsx(Play, { className: "h-4 w-4" });
            case "reading":
                return _jsx(BookOpen, { className: "h-4 w-4" });
            case "standup":
                return _jsx(Users, { className: "h-4 w-4" });
            default:
                return _jsx(FileText, { className: "h-4 w-4" });
        }
    };
    const getPriorityColor = (priority) => {
        switch (priority) {
            case "high":
                return "text-red-600";
            case "medium":
                return "text-amber-600";
            case "low":
                return "text-green-600";
            default:
                return "text-gray-600";
        }
    };
    const pendingTasks = tasks.filter((t) => t.status === "pending");
    const submittedTasks = tasks.filter((t) => t.status === "submitted");
    const gradedTasks = tasks.filter((t) => t.status === "graded");
    const handleTaskClick = (task) => {
        setSelectedTask(task);
        setSubmissionText("");
    };
    const handleBackToList = () => {
        setSelectedTask(null);
    };
    const handleSubmit = () => {
        if (submissionText.trim()) {
            // Simulate submission
            alert("Task submitted successfully!");
            setSubmissionText("");
            setSelectedTask(null);
        }
    };
    // Enhanced filtering function
    const filteredTasks = (taskList) => {
        if (!selectedDate)
            return taskList;
        return taskList.filter(task => {
            if (!task.dueDate)
                return false; // Only filter tasks with due dates
            const taskDate = new Date(task.dueDate);
            if (filterMode === "day") {
                // Filter by specific day
                return (taskDate.getFullYear() === selectedDate.getFullYear() &&
                    taskDate.getMonth() === selectedDate.getMonth() &&
                    taskDate.getDate() === selectedDate.getDate());
            }
            else {
                // Filter by week
                const weekStart = getWeekStart(selectedDate);
                const weekEnd = getWeekEnd(selectedDate);
                return taskDate >= weekStart && taskDate <= weekEnd;
            }
        });
    };
    // Task Details View
    if (selectedTask) {
        return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6", children: _jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [_jsxs(Button, { variant: "ghost", onClick: handleBackToList, className: "flex items-center text-slate-600 hover:text-slate-800", children: [_jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }), "Back to Tasks"] }), _jsxs(Card, { className: "shadow-lg", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsxs(CardTitle, { className: "font-serif text-2xl flex items-center text-slate-800", children: [getTypeIcon(selectedTask.type), _jsx("span", { className: "ml-3", children: selectedTask.title })] }), _jsxs("p", { className: "text-slate-600 mt-2 text-lg", children: [selectedTask.course, " \u2022 ", selectedTask.instructor] })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs(Badge, { className: `${getPriorityColor(selectedTask.priority)} bg-white border`, children: [selectedTask.priority, " priority"] }), selectedTask.points && (_jsxs(Badge, { className: "bg-slate-100 text-slate-700", children: [selectedTask.points, " pts"] }))] })] }) }), _jsxs(CardContent, { className: "space-y-6", children: [_jsx("p", { className: "text-slate-700 text-lg leading-relaxed", children: selectedTask.description }), selectedTask.dueDate && (_jsxs("div", { className: "flex items-center space-x-6 text-slate-600", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(CalendarIcon, { className: "h-5 w-5 mr-2" }), "Due: ", selectedTask.dueDateFormatted] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Clock, { className: "h-5 w-5 mr-2" }), "Est. Time: ", selectedTask.estimatedTime] }), selectedTask.daysRemaining && (_jsxs("div", { className: "text-amber-600 font-medium", children: [selectedTask.daysRemaining, " days remaining"] }))] }))] })] }), selectedTask.taskType === 'video' && (_jsxs(Card, { className: "shadow-lg", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center", children: [_jsx(Play, { className: "h-5 w-5 mr-2" }), "Video Content"] }) }), _jsxs(CardContent, { children: [_jsx("div", { className: "aspect-video bg-slate-100 rounded-lg flex items-center justify-center mb-4", children: selectedTask.videoThumbnail ? (_jsx("img", { src: selectedTask.videoThumbnail, alt: "Video thumbnail", className: "w-full h-full object-cover rounded-lg" })) : (_jsxs("div", { className: "text-center", children: [_jsx(Play, { className: "h-16 w-16 mx-auto text-slate-400 mb-2" }), _jsx("p", { className: "text-slate-600", children: "Video content will load here" })] })) }), _jsxs(Button, { className: "w-full bg-blue-600 hover:bg-blue-700", children: [_jsx(Play, { className: "h-4 w-4 mr-2" }), "Watch Video"] })] })] })), selectedTask.taskType === 'resource' && (_jsxs(Card, { className: "shadow-lg", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center", children: [_jsx(BookOpen, { className: "h-5 w-5 mr-2" }), "Resource Content"] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "bg-slate-50 p-6 rounded-lg border text-center", children: [_jsx(FileText, { className: "h-12 w-12 mx-auto text-slate-400 mb-3" }), _jsx("p", { className: "text-slate-600 mb-4", children: "Reading material available for download" }), _jsxs(Button, { className: "bg-green-600 hover:bg-green-700", children: [_jsx(Download, { className: "h-4 w-4 mr-2" }), "Download Resource"] })] }) })] })), _jsxs(Card, { className: "shadow-lg", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Instructions" }) }), _jsx(CardContent, { children: _jsx("div", { className: "bg-slate-50 p-4 rounded-lg border", children: _jsx("p", { className: "text-slate-700 leading-relaxed", children: selectedTask.instructions }) }) })] }), selectedTask.attachments.length > 0 && (_jsxs(Card, { className: "shadow-lg", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Attachments" }) }), _jsx(CardContent, { children: _jsx("div", { className: "space-y-2", children: selectedTask.attachments.map((attachment, index) => (_jsxs("div", { className: "flex items-center justify-between p-3 bg-slate-50 rounded-lg border", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(FileText, { className: "h-4 w-4 mr-2 text-slate-600" }), _jsx("span", { className: "text-slate-700", children: attachment })] }), _jsxs(Button, { variant: "outline", size: "sm", children: [_jsx(Download, { className: "h-4 w-4 mr-1" }), "Download"] })] }, index))) }) })] })), selectedTask.taskType === 'submission' && selectedTask.status === 'pending' && (_jsxs(Card, { className: "shadow-lg border-blue-200", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-blue-800", children: selectedTask.type === 'standup' ? 'Daily Standup Submission' : 'Task Submission' }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx(Textarea, { placeholder: selectedTask.type === 'standup'
                                            ? "Share your weekly progress, challenges, and insights..."
                                            : "Enter your submission here...", value: submissionText, onChange: (e) => setSubmissionText(e.target.value), rows: 8, className: "w-full" }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("p", { className: "text-sm text-slate-600", children: selectedTask.type === 'standup'
                                                    ? "This will serve as your daily standup feedback"
                                                    : "Type your response or paste your content above" }), _jsxs("div", { className: "space-x-2", children: [_jsx(Button, { variant: "outline", onClick: () => setSubmissionText(""), children: "Clear" }), _jsxs(Button, { onClick: handleSubmit, disabled: !submissionText.trim(), className: "bg-blue-600 hover:bg-blue-700", children: [_jsx(Send, { className: "h-4 w-4 mr-2" }), "Submit"] })] })] })] })] })), selectedTask.status === 'submitted' && (_jsx(Card, { className: "shadow-lg border-blue-200 bg-blue-50", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-center", children: [_jsx(CheckCircle, { className: "h-6 w-6 text-blue-600 mr-2" }), _jsxs("span", { className: "text-blue-800 font-medium", children: ["Task submitted on ", selectedTask.submittedDateFormatted] })] }) }) })), selectedTask.status === 'graded' && (_jsxs(Card, { className: "shadow-lg border-emerald-200", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-emerald-800", children: "Grade & Feedback" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "text-center", children: [_jsxs("div", { className: "text-4xl font-bold text-emerald-600", children: [selectedTask.grade, "/", selectedTask.points] }), _jsxs("div", { className: "text-lg text-slate-600", children: ["(", Math.round(((selectedTask.grade || 0) / (selectedTask.points || 1)) * 100), "%)"] })] }), selectedTask.feedback && (_jsxs("div", { className: "bg-emerald-50 p-4 rounded-lg border border-emerald-200", children: [_jsx("h4", { className: "font-semibold text-emerald-800 mb-2", children: "Instructor Feedback:" }), _jsx("p", { className: "text-emerald-700", children: selectedTask.feedback })] }))] })] }))] }) }));
    }
    // Main Tasks List View
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6", children: _jsxs("div", { className: "max-w-7xl mx-auto space-y-8", children: [_jsxs("div", { className: "text-center space-y-4", children: [_jsx("h1", { className: "text-4xl font-bold text-slate-800 font-serif", children: "Tasks Center" }), _jsx("p", { className: "text-slate-600 text-lg", children: "Track your academic progress and manage tasks" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [_jsx(Card, { className: "bg-gradient-to-br from-red-50 to-red-100 border-red-200 shadow-lg", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-red-700", children: "Overdue" }), _jsx("p", { className: "text-3xl font-bold text-red-800", children: overdueTasks.length })] }), _jsx(AlertCircle, { className: "h-8 w-8 text-red-600" })] }) }) }), _jsx(Card, { className: "bg-gradient-to-br from-amber-50 to-amber-100 shadow-lg", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-amber-700", children: "Pending" }), _jsx("p", { className: "text-3xl font-bold text-amber-800", children: pendingTasks.length })] }), _jsx(Clock, { className: "h-8 w-8 text-amber-600" })] }) }) }), _jsx(Card, { className: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-blue-700", children: "Submitted" }), _jsx("p", { className: "text-3xl font-bold text-blue-800", children: submittedTasks.length })] }), _jsx(Upload, { className: "h-8 w-8 text-blue-600" })] }) }) }), _jsx(Card, { className: "bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 shadow-lg", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-emerald-700", children: "Completed" }), _jsx("p", { className: "text-3xl font-bold text-emerald-800", children: gradedTasks.length })] }), _jsx(CheckCircle, { className: "h-8 w-8 text-emerald-600" })] }) }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(CardTitle, { className: "font-serif text-lg flex items-center", children: [_jsx(CalendarDays, { className: "h-5 w-5 mr-2" }), "Task Date Filter"] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Button, { variant: filterMode === "day" ? "default" : "outline", size: "sm", onClick: () => setFilterMode("day"), children: "Daily View" }), _jsx(Button, { variant: filterMode === "week" ? "default" : "outline", size: "sm", onClick: () => setFilterMode("week"), children: "Weekly View" })] })] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsx("div", { className: "lg:col-span-1", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("h4", { className: "font-medium", children: ["Selected ", filterMode === "day" ? "Date" : "Week"] }), _jsxs(Button, { variant: "outline", size: "sm", onClick: () => setShowCalendar(!showCalendar), children: [_jsx(Filter, { className: "h-4 w-4 mr-2" }), showCalendar ? "Hide" : "Show", " Calendar"] })] }), _jsxs("div", { className: "p-3 bg-blue-50 rounded-lg border border-blue-200", children: [_jsx("p", { className: "text-sm font-medium text-blue-800", children: getCurrentDisplayDate() }), filterMode === "week" && selectedDate && (_jsxs("p", { className: "text-xs text-blue-600 mt-1", children: [getWeekStart(selectedDate).toLocaleDateString(), " - ", getWeekEnd(selectedDate).toLocaleDateString()] }))] }), _jsxs("div", { className: "flex flex-col space-y-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: () => {
                                                                const today = new Date();
                                                                setSelectedDate(today);
                                                            }, children: "Go to Today" }), filterMode === "week" && (_jsxs("div", { className: "flex space-x-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: () => {
                                                                        if (selectedDate) {
                                                                            const prevWeek = new Date(selectedDate);
                                                                            prevWeek.setDate(selectedDate.getDate() - 7);
                                                                            setSelectedDate(prevWeek);
                                                                        }
                                                                    }, children: "Previous Week" }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => {
                                                                        if (selectedDate) {
                                                                            const nextWeek = new Date(selectedDate);
                                                                            nextWeek.setDate(selectedDate.getDate() + 7);
                                                                            setSelectedDate(nextWeek);
                                                                        }
                                                                    }, children: "Next Week" })] })), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setSelectedDate(undefined), children: "Clear Filter" })] })] }) }), showCalendar && (_jsx("div", { className: "lg:col-span-2", children: _jsx(Calendar, { mode: "single", selected: selectedDate, onSelect: setSelectedDate, className: "rounded-md border w-full" }) })), !showCalendar && (_jsx("div", { className: "lg:col-span-2", children: _jsxs("div", { className: "p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 text-center", children: [_jsx(CalendarDays, { className: "h-8 w-8 text-gray-400 mx-auto mb-2" }), _jsx("p", { className: "text-sm text-gray-600 mb-2", children: filterMode === "day"
                                                        ? "Filter tasks by specific due date"
                                                        : "Filter tasks by due dates within the selected week" }), _jsxs("p", { className: "text-xs text-gray-500", children: ["Click \"Show Calendar\" to select a different ", filterMode === "day" ? "date" : "week"] })] }) }))] }) })] }), _jsxs(Tabs, { defaultValue: "pending", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-4 bg-white shadow-sm border", children: [_jsxs(TabsTrigger, { value: "overdue", className: "data-[state=active]:bg-red-50 data-[state=active]:text-red-700", children: ["Overdue (", overdueTasks.length, ")"] }), _jsxs(TabsTrigger, { value: "pending", className: "data-[state=active]:bg-amber-50 data-[state=active]:text-amber-700", children: ["Pending (", filteredTasks(pendingTasks).length, ")"] }), _jsxs(TabsTrigger, { value: "submitted", className: "data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700", children: ["Submitted (", filteredTasks(submittedTasks).length, ")"] }), _jsxs(TabsTrigger, { value: "completed", className: "data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700", children: ["Completed (", filteredTasks(gradedTasks).length, ")"] })] }), _jsx(TabsContent, { value: "overdue", className: "space-y-6 mt-6", children: overdueTasks.map((task) => (_jsx(Card, { className: "border-red-300 bg-red-50/50 shadow-lg", children: _jsx(CardHeader, { children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsx(CardTitle, { className: "font-serif text-lg text-red-800", children: task.title }), _jsxs("p", { className: "text-sm text-red-700 mt-1", children: [task.course, " \u2022 ", task.instructor] })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs(Badge, { variant: "destructive", children: [task.daysOverdue, " days overdue"] }), task.points && _jsxs(Badge, { variant: "outline", className: "bg-white", children: [task.points, " pts"] })] })] }) }) }, task.id))) }), _jsx(TabsContent, { value: "pending", className: "space-y-6 mt-6", children: filteredTasks(pendingTasks).length === 0 ? (_jsxs(Card, { className: "p-8 text-center", children: [_jsx(CalendarDays, { className: "h-12 w-12 mx-auto text-gray-400 mb-4" }), _jsx("h3", { className: "text-lg font-medium text-gray-600 mb-2", children: "No pending tasks found" }), _jsx("p", { className: "text-sm text-gray-500", children: selectedDate
                                            ? `No tasks due ${filterMode === "day" ? "on this date" : "in this week"}.`
                                            : "Clear the date filter to see all pending tasks." })] })) : (filteredTasks(pendingTasks).map((task) => (_jsxs(Card, { className: "shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-amber-400 cursor-pointer", onClick: () => handleTaskClick(task), children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsxs(CardTitle, { className: "font-serif text-lg flex items-center text-slate-800", children: [getTypeIcon(task.type), _jsx("span", { className: "ml-2", children: task.title }), task.taskType === 'video' && (_jsx(Badge, { variant: "outline", className: "ml-2 bg-blue-50 text-blue-700", children: "Video" })), task.taskType === 'resource' && (_jsx(Badge, { variant: "outline", className: "ml-2 bg-green-50 text-green-700", children: "Resource" }))] }), _jsxs("p", { className: "text-sm text-slate-600 mt-1", children: [task.course, " \u2022 ", task.instructor] })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs(Badge, { className: `${getPriorityColor(task.priority)} bg-white border`, children: [task.priority, " priority"] }), task.points && (_jsxs(Badge, { className: "bg-slate-100 text-slate-700", children: [task.points, " pts"] }))] })] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx("p", { className: "text-slate-700", children: task.description }), _jsxs("div", { className: "flex items-center space-x-6 text-sm text-slate-600", children: [task.dueDate && (_jsxs("div", { className: "flex items-center", children: [_jsx(CalendarIcon, { className: "h-4 w-4 mr-2" }), "Due: ", task.dueDateFormatted] })), _jsxs("div", { className: "flex items-center", children: [_jsx(Clock, { className: "h-4 w-4 mr-2" }), task.estimatedTime] }), task.daysRemaining && (_jsxs("div", { className: "text-amber-600 font-medium", children: [task.daysRemaining, " days remaining"] }))] }), _jsxs("div", { className: "flex items-center justify-between pt-4 border-t", children: [_jsx("div", { className: "text-sm text-slate-600", children: task.attachments.length > 0 && (_jsxs("span", { children: [task.attachments.length, " attachment(s)"] })) }), _jsx(Button, { size: "sm", className: "bg-amber-600 hover:bg-amber-700 text-white", children: "View Details" })] })] })] }, task.id)))) }), _jsx(TabsContent, { value: "submitted", className: "space-y-6 mt-6", children: filteredTasks(submittedTasks).length === 0 ? (_jsxs(Card, { className: "p-8 text-center", children: [_jsx(Upload, { className: "h-12 w-12 mx-auto text-gray-400 mb-4" }), _jsx("h3", { className: "text-lg font-medium text-gray-600 mb-2", children: "No submitted tasks found" }), _jsx("p", { className: "text-sm text-gray-500", children: selectedDate
                                            ? `No submitted tasks ${filterMode === "day" ? "on this date" : "in this week"}.`
                                            : "Clear the date filter to see all submitted tasks." })] })) : (filteredTasks(submittedTasks).map((task) => (_jsxs(Card, { className: "shadow-lg border-l-4 border-l-blue-400 cursor-pointer", onClick: () => handleTaskClick(task), children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsxs(CardTitle, { className: "font-serif text-lg flex items-center text-slate-800", children: [getTypeIcon(task.type), _jsx("span", { className: "ml-2", children: task.title })] }), _jsxs("p", { className: "text-sm text-slate-600 mt-1", children: [task.course, " \u2022 ", task.instructor] })] }), _jsx(Badge, { className: "bg-blue-100 text-blue-800 border-blue-200", children: "submitted" })] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx("p", { className: "text-slate-700", children: task.description }), _jsxs("div", { className: "flex items-center space-x-4 text-sm text-slate-600", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(CalendarIcon, { className: "h-4 w-4 mr-2" }), "Submitted: ", task.submittedDateFormatted] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Clock, { className: "h-4 w-4 mr-2" }), task.points ? `${task.points} points` : 'No points'] })] }), _jsxs("div", { className: "flex items-center justify-between pt-4 border-t", children: [_jsx("div", { className: "text-blue-600 font-medium", children: "Awaiting grade..." }), _jsx(Button, { variant: "outline", size: "sm", children: "View Details" })] })] })] }, task.id)))) }), _jsx(TabsContent, { value: "completed", className: "space-y-6 mt-6", children: filteredTasks(gradedTasks).length === 0 ? (_jsxs(Card, { className: "p-8 text-center", children: [_jsx(CheckCircle, { className: "h-12 w-12 mx-auto text-gray-400 mb-4" }), _jsx("h3", { className: "text-lg font-medium text-gray-600 mb-2", children: "No completed tasks found" }), _jsx("p", { className: "text-sm text-gray-500", children: selectedDate
                                            ? `No completed tasks ${filterMode === "day" ? "on this date" : "in this week"}.`
                                            : "Clear the date filter to see all completed tasks." })] })) : (filteredTasks(gradedTasks).map((task) => (_jsxs(Card, { className: "shadow-lg border-l-4 border-l-emerald-400 cursor-pointer", onClick: () => handleTaskClick(task), children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsxs(CardTitle, { className: "font-serif text-lg flex items-center text-slate-800", children: [getTypeIcon(task.type), _jsx("span", { className: "ml-2", children: task.title })] }), _jsxs("p", { className: "text-sm text-slate-600 mt-1", children: [task.course, " \u2022 ", task.instructor] })] }), _jsx(Badge, { className: "bg-emerald-100 text-emerald-800 border-emerald-200", children: "completed" })] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx("p", { className: "text-slate-700", children: task.description }), task.feedback && (_jsxs("div", { className: "bg-emerald-50 p-4 rounded-lg border border-emerald-200", children: [_jsx("h4", { className: "font-semibold text-emerald-800 mb-2", children: "Instructor Feedback:" }), _jsx("p", { className: "text-sm text-emerald-700", children: task.feedback })] })), _jsxs("div", { className: "flex items-center space-x-4 text-sm text-slate-600", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(CalendarIcon, { className: "h-4 w-4 mr-2" }), "Submitted: ", task.submittedDateFormatted] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Clock, { className: "h-4 w-4 mr-2" }), task.points ? `${task.points} points` : 'No points'] })] }), _jsxs("div", { className: "flex items-center justify-between pt-4 border-t", children: [_jsx("div", { className: "flex items-center space-x-4", children: task.grade && task.points ? (_jsxs("div", { className: "text-2xl font-bold", children: [_jsxs("span", { className: "text-emerald-600", children: [task.grade, "/", task.points] }), _jsxs("span", { className: "text-lg text-slate-600 ml-2", children: ["(", Math.round((task.grade / task.points) * 100), "%)"] })] })) : (_jsx("div", { className: "text-emerald-600 font-medium", children: "Task Completed" })) }), _jsx("div", { className: "space-x-2", children: _jsx(Button, { variant: "outline", size: "sm", children: "View Details" }) })] })] })] }, task.id)))) })] })] }) }));
}
