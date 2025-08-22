import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth/auth-context";
import { LayoutDashboard, Users, GraduationCap, BookOpen, UserCheck, BarChart3, FileText, Settings, LogOut, X, } from "lucide-react";
const navigation = [
    { name: "Dashboard", href: "dashboard", icon: LayoutDashboard },
    { name: "User Management", href: "users", icon: Users },
    { name: "Students", href: "students", icon: GraduationCap },
    { name: "Instructors", href: "instructors", icon: UserCheck },
    { name: "Courses", href: "courses", icon: BookOpen },
    { name: "Cohorts", href: "cohorts", icon: Users },
    { name: "Analytics", href: "analytics", icon: BarChart3 },
    { name: "Reports", href: "reports", icon: FileText },
    { name: "Settings", href: "settings", icon: Settings },
];
export function AdminSidebar({ currentPage, setCurrentPage, isOpen, setIsOpen }) {
    const { user, logout } = useAuth();
    return (_jsxs(_Fragment, { children: [isOpen && (_jsx("div", { className: "fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden", onClick: () => setIsOpen(false) })), _jsx("div", Object.assign({ className: cn("fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0", isOpen ? "translate-x-0" : "-translate-x-full") }, { children: _jsxs("div", Object.assign({ className: "flex flex-col h-full" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center justify-between h-16 px-4 border-b border-gray-200" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center space-x-2" }, { children: [_jsx("div", Object.assign({ className: "bg-red-600 p-2 rounded-lg" }, { children: _jsx(GraduationCap, { className: "h-6 w-6 text-white" }) })), _jsxs("div", { children: [_jsx("h1", Object.assign({ className: "text-lg font-serif font-bold text-gray-900" }, { children: "Equip Academy" })), _jsx("p", Object.assign({ className: "text-xs text-red-600 font-medium" }, { children: "Admin Portal" }))] })] })), _jsx(Button, Object.assign({ variant: "ghost", size: "sm", className: "lg:hidden", onClick: () => setIsOpen(false) }, { children: _jsx(X, { className: "h-5 w-5" }) }))] })), _jsx("div", Object.assign({ className: "p-4 border-b border-gray-200" }, { children: _jsxs("div", Object.assign({ className: "flex items-center space-x-3" }, { children: [_jsx("div", Object.assign({ className: "bg-red-100 p-2 rounded-full" }, { children: _jsx(Users, { className: "h-5 w-5 text-red-600" }) })), _jsxs("div", { children: [_jsx("p", Object.assign({ className: "text-sm font-medium text-gray-900" }, { children: user === null || user === void 0 ? void 0 : user.name })), _jsx("p", Object.assign({ className: "text-xs text-gray-500" }, { children: "System Administrator" }))] })] })) })), _jsx("nav", Object.assign({ className: "flex-1 px-4 py-4 space-y-1" }, { children: navigation.map((item) => {
                                const Icon = item.icon;
                                const isActive = currentPage === item.href;
                                return (_jsxs(Button, Object.assign({ variant: isActive ? "default" : "ghost", className: cn("w-full justify-start", isActive
                                        ? "bg-red-600 text-white hover:bg-red-700"
                                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"), onClick: () => {
                                        setCurrentPage(item.href);
                                        setIsOpen(false);
                                    } }, { children: [_jsx(Icon, { className: "mr-3 h-5 w-5" }), item.name] }), item.name));
                            }) })), _jsx("div", Object.assign({ className: "p-4 border-t border-gray-200" }, { children: _jsxs(Button, Object.assign({ variant: "ghost", className: "w-full justify-start text-gray-700 hover:bg-gray-100", onClick: logout }, { children: [_jsx(LogOut, { className: "mr-3 h-5 w-5" }), "Sign Out"] })) }))] })) }))] }));
}
