import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { InstructorSidebar } from "@/components/instructor/instructor-sidebar";
import { InstructorHeader } from "@/components/instructor/instructor-header";
import { InstructorDashboard } from "@/components/instructor/instructor-dashboard";
export function InstructorPortal() {
    const [currentPage, setCurrentPage] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const renderPage = () => {
        switch (currentPage) {
            case "dashboard":
                return _jsx(InstructorDashboard, {});
            default:
                return _jsx(InstructorDashboard, {});
        }
    };
    return (_jsxs("div", { className: "flex h-screen bg-gray-50", children: [_jsx(InstructorSidebar, { currentPage: currentPage, setCurrentPage: setCurrentPage, isOpen: sidebarOpen, setIsOpen: setSidebarOpen }), _jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [_jsx(InstructorHeader, { currentPage: currentPage, setSidebarOpen: setSidebarOpen }), _jsx("main", { className: "flex-1 overflow-y-auto p-6", children: renderPage() })] })] }));
}
