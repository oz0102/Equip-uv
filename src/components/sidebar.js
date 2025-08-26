import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BookOpen, Calendar, ClipboardList, GraduationCap, Home, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navigation = [
    { name: "Dashboard", icon: Home, key: "dashboard" },
    { name: "Courses", icon: BookOpen, key: "courses" },
    { name: "Tasks", icon: ClipboardList, key: "tasks" },
    { name: "Grades", icon: GraduationCap, key: "grades" },
    { name: "Attendance", icon: Calendar, key: "attendance" },
    { name: "Tracker", icon: Calendar, key: "tracker" },
    { name: "Calendar", icon: Calendar, key: "calendar" },
    { name: "Profile", icon: User, key: "profile" },
];
export function Sidebar({ currentPage, setCurrentPage, isOpen, setIsOpen }) {
    return (_jsxs(_Fragment, { children: [isOpen && (_jsx("div", { className: "fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden", onClick: () => setIsOpen(false) })), _jsxs("div", { className: `
        fixed inset-y-0 left-0 z-50 w-64 bg-black text-white transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `, children: [_jsxs("div", { className: "flex items-center justify-between h-16 px-6 border-b border-gray-800", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center", children: _jsx("span", { className: "text-white font-bold text-sm", children: "EA" }) }), _jsx("h1", { className: "font-serif text-xl font-bold", children: "Equip Academy" })] }), _jsx(Button, { variant: "ghost", size: "sm", className: "lg:hidden text-white hover:bg-gray-800", onClick: () => setIsOpen(false), children: _jsx(X, { className: "h-5 w-5" }) })] }), _jsx("nav", { className: "mt-8 px-4", children: _jsx("div", { className: "space-y-2", children: navigation.map((item) => {
                                const Icon = item.icon;
                                const isActive = currentPage === item.key;
                                return (_jsxs("button", { onClick: () => {
                                        setCurrentPage(item.key);
                                        setIsOpen(false);
                                    }, className: `
                    w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                    ${isActive ? "bg-red-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}
                  `, children: [_jsx(Icon, { className: "mr-3 h-5 w-5" }), item.name] }, item.key));
                            }) }) }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800", children: _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("div", { className: "w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center", children: _jsx("span", { className: "text-black font-semibold text-sm", children: "OSF" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium", children: "Osazee Samson" }), _jsx("p", { className: "text-xs text-gray-400", children: "Student ID: EQ2025001" })] })] }) })] })] }));
}
