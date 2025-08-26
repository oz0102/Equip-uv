import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Dashboard } from "@/components/dashboard";
// import { Courses } from "@/components/courses"
// import { Assignments } from "@/components/assignments"
import Courses from "@/components/courses";
import Assignments from "@/components/tasks";
import { Grades } from "@/components/grades";
import { Attendance } from "@/components/attendance";
import { Calendar } from "@/components/calendar";
import { Profile } from "@/components/profile";
export function StudentPortal() {
    const [currentPage, setCurrentPage] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const renderPage = () => {
        switch (currentPage) {
            case "dashboard":
                return _jsx(Dashboard, {});
            case "courses":
                return _jsx(Courses, {});
            case "assignments":
                return _jsx(Assignments, {});
            case "grades":
                return _jsx(Grades, {});
            case "attendance":
                return _jsx(Attendance, {});
            case "calendar":
                return _jsx(Calendar, {});
            case "profile":
                return _jsx(Profile, {});
            default:
                return _jsx(Dashboard, {});
        }
    };
    return (_jsxs("div", { className: "flex h-screen bg-gray-50", children: [_jsx(Sidebar, { currentPage: currentPage, setCurrentPage: setCurrentPage, isOpen: sidebarOpen, setIsOpen: setSidebarOpen }), _jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [_jsx(Header, { currentPage: currentPage, setSidebarOpen: setSidebarOpen }), _jsx("main", { className: "flex-1 overflow-y-auto p-6", children: renderPage() })] })] }));
}
