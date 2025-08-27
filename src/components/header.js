import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Bell, Menu, LogOut, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/components/auth/auth-context";
const pageNames = {
    dashboard: "Dashboard",
    courses: "My Courses",
    assignments: "Assignments",
    grades: "Grades",
    attendance: "Attendance",
    calendar: "Calendar",
    profile: "Profile",
};
// Sample notifications data - replace with actual data from your API
const notifications = [
    {
        id: 1,
        type: "feedback",
        title: "Task Graded",
        message: "Your task on Baptisms has been graded by Osazee Samson",
        time: "2 hours ago",
        read: false,
    },
    {
        id: 2,
        type: "admin",
        title: "Missed class",
        message: "We noticed you missed the last class. Please reach the admin team to resolve this.",
        time: "1 day ago",
        read: false,
    },
    {
        id: 3,
        type: "feedback",
        title: "Tutor Feedback",
        message: "Great improvement on your essay structure! Keep up the good work.",
        time: "3 days ago",
        read: true,
    },
];
export function Header({ currentPage, setSidebarOpen }) {
    const [showNotifications, setShowNotifications] = useState(false);
    const { logout } = useAuth();
    const unreadCount = notifications.filter(n => !n.read).length;
    const handleLogout = () => {
        logout();
        // Additional cleanup if needed
    };
    return (_jsxs("header", { className: "bg-white border-b border-gray-200 px-6 py-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(Button, { variant: "ghost", size: "sm", className: "lg:hidden", onClick: () => setSidebarOpen(true), children: _jsx(Menu, { className: "h-5 w-5" }) }), _jsx("h2", { className: "font-serif text-2xl font-bold text-black", children: pageNames[currentPage] })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("div", { className: "relative", children: [_jsxs(Button, { variant: "ghost", size: "sm", className: "relative", onClick: () => setShowNotifications(!showNotifications), children: [_jsx(Bell, { className: "h-5 w-5" }), unreadCount > 0 && (_jsx("span", { className: "absolute -top-1 -right-1 h-4 w-4 bg-red-600 rounded-full text-xs text-white flex items-center justify-center", children: unreadCount }))] }), showNotifications && (_jsxs("div", { className: "absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50", children: [_jsx("div", { className: "p-4 border-b border-gray-200", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "font-semibold text-gray-900", children: "Notifications" }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setShowNotifications(false), children: _jsx(X, { className: "h-4 w-4" }) })] }) }), _jsx("div", { className: "max-h-96 overflow-y-auto", children: notifications.length > 0 ? (notifications.map((notification) => (_jsx("div", { className: `p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${!notification.read ? "bg-blue-50" : ""}`, children: _jsx("div", { className: "flex items-start justify-between", children: _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("h4", { className: "text-sm font-medium text-gray-900", children: notification.title }), !notification.read && (_jsx("span", { className: "w-2 h-2 bg-blue-600 rounded-full" }))] }), _jsx("p", { className: "text-sm text-gray-600 mt-1", children: notification.message }), _jsx("p", { className: "text-xs text-gray-400 mt-2", children: notification.time })] }) }) }, notification.id)))) : (_jsxs("div", { className: "p-8 text-center text-gray-500", children: [_jsx(Bell, { className: "h-8 w-8 mx-auto mb-2 text-gray-300" }), _jsx("p", { children: "No notifications" })] })) }), notifications.length > 0 && (_jsx("div", { className: "p-4 border-t border-gray-200", children: _jsx(Button, { variant: "ghost", size: "sm", className: "w-full text-blue-600 hover:text-blue-700", children: "Mark all as read" }) }))] }))] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: handleLogout, className: "text-gray-600 hover:text-red-600", title: "Logout", children: _jsx(LogOut, { className: "h-5 w-5" }) })] })] }), showNotifications && (_jsx("div", { className: "fixed inset-0 z-40 bg-transparent", onClick: () => setShowNotifications(false) }))] }));
}
