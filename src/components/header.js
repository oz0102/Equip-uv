import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
const pageNames = {
    dashboard: "Dashboard",
    courses: "My Courses",
    assignments: "Assignments",
    grades: "Grades",
    attendance: "Attendance",
    calendar: "Calendar",
    profile: "Profile",
};
export function Header({ currentPage, setSidebarOpen }) {
    return (_jsx("header", { className: "bg-white border-b border-gray-200 px-6 py-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(Button, { variant: "ghost", size: "sm", className: "lg:hidden", onClick: () => setSidebarOpen(true), children: _jsx(Menu, { className: "h-5 w-5" }) }), _jsx("h2", { className: "font-serif text-2xl font-bold text-black", children: pageNames[currentPage] })] }), _jsx("div", { className: "flex items-center space-x-4", children: _jsxs(Button, { variant: "ghost", size: "sm", className: "relative", children: [_jsx(Bell, { className: "h-5 w-5" }), _jsx("span", { className: "absolute -top-1 -right-1 h-4 w-4 bg-red-600 rounded-full text-xs text-white flex items-center justify-center", children: "3" })] }) })] }) }));
}
