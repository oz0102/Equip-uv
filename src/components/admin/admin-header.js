import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Menu, Search, Plus } from "lucide-react";
import { useAuth } from "@/components/auth/auth-context";
const pageNames = {
    dashboard: "Dashboard",
    users: "User Management",
    students: "Students",
    instructors: "Instructors",
    courses: "Courses",
    cohorts: "Cohorts",
    analytics: "Analytics",
    reports: "Reports",
    settings: "Settings",
};
export function AdminHeader({ currentPage, setSidebarOpen }) {
    const { user } = useAuth();
    return (_jsx("header", Object.assign({ className: "bg-white border-b border-gray-200 px-4 py-3" }, { children: _jsxs("div", Object.assign({ className: "flex items-center justify-between" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center space-x-4" }, { children: [_jsx(Button, Object.assign({ variant: "ghost", size: "sm", className: "lg:hidden", onClick: () => setSidebarOpen(true) }, { children: _jsx(Menu, { className: "h-5 w-5" }) })), _jsxs("div", { children: [_jsx("h1", Object.assign({ className: "text-2xl font-serif font-bold text-gray-900" }, { children: pageNames[currentPage] })), _jsxs("p", Object.assign({ className: "text-sm text-gray-500" }, { children: ["Welcome back, ", user === null || user === void 0 ? void 0 : user.name] }))] })] })), _jsxs("div", Object.assign({ className: "flex items-center space-x-4" }, { children: [_jsxs("div", Object.assign({ className: "relative hidden md:block" }, { children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" }), _jsx(Input, { placeholder: "Search...", className: "pl-10 w-64" })] })), (currentPage === "users" ||
                            currentPage === "students" ||
                            currentPage === "instructors" ||
                            currentPage === "courses") && (_jsxs(Button, Object.assign({ size: "sm", className: "bg-red-600 hover:bg-red-700" }, { children: [_jsx(Plus, { className: "h-4 w-4 mr-2" }), "Add New"] }))), _jsxs(Button, Object.assign({ variant: "ghost", size: "sm", className: "relative" }, { children: [_jsx(Bell, { className: "h-5 w-5" }), _jsx("span", Object.assign({ className: "absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center" }, { children: "3" }))] }))] }))] })) })));
}
