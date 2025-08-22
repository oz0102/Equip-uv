import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";
import { AdminDashboard } from "@/components/admin/admin-dashboard";
export function AdminPortal() {
    const [currentPage, setCurrentPage] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const renderPage = () => {
        switch (currentPage) {
            case "dashboard":
                return _jsx(AdminDashboard, {});
            default:
                return _jsx(AdminDashboard, {});
        }
    };
    return (_jsxs("div", Object.assign({ className: "flex h-screen bg-gray-50" }, { children: [_jsx(AdminSidebar, { currentPage: currentPage, setCurrentPage: setCurrentPage, isOpen: sidebarOpen, setIsOpen: setSidebarOpen }), _jsxs("div", Object.assign({ className: "flex-1 flex flex-col overflow-hidden" }, { children: [_jsx(AdminHeader, { currentPage: currentPage, setSidebarOpen: setSidebarOpen }), _jsx("main", Object.assign({ className: "flex-1 overflow-y-auto p-6" }, { children: renderPage() }))] }))] })));
}
