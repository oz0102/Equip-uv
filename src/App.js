import { jsx as _jsx } from "react/jsx-runtime";
import { AuthProvider, useAuth } from "@/components/auth/auth-context";
import { Login } from "@/components/auth/login";
import { StudentPortal } from "@/components/portals/student-portal";
import { AdminPortal } from "@/components/portals/admin-portal";
import { InstructorPortal } from "@/components/portals/instructor-portal";
function AppContent() {
    const { user, login, isAuthenticated } = useAuth();
    if (!isAuthenticated || !user) {
        return _jsx(Login, { onLogin: login });
    }
    // Route to appropriate portal based on user role
    switch (user.role) {
        case "student":
            return _jsx(StudentPortal, {});
        case "admin":
            return _jsx(AdminPortal, {});
        case "instructor":
            return _jsx(InstructorPortal, {});
        default:
            return _jsx(Login, { onLogin: login });
    }
}
export default function App() {
    return (_jsx(AuthProvider, { children: _jsx(AppContent, {}) }));
}
