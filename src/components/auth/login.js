var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, GraduationCap, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
// Demo credentials
const DEMO_CREDENTIALS = {
    student: {
        email: "student@equip.academy",
        password: "student123",
        userData: {
            id: "1",
            name: "Sarah Johnson",
            role: "student",
            studentId: "EQ2024001",
            program: "foundations",
            cohort: "Foundations 2024 Spring",
        },
    },
    admin: {
        email: "admin@equip.academy",
        password: "admin123",
        userData: {
            id: "2",
            name: "Dr. Michael Thompson",
            role: "admin",
            department: "Administration",
        },
    },
    instructor: {
        email: "instructor@equip.academy",
        password: "instructor123",
        userData: {
            id: "3",
            name: "Prof. David Wilson",
            role: "instructor",
            instructorId: "INS001",
            department: "Biblical Studies",
            specialization: ["Theology", "Biblical Interpretation"],
        },
    },
};
export function Login({ onLogin }) {
    const [selectedRole, setSelectedRole] = useState("student");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleRoleChange = (role) => {
        setSelectedRole(role);
        setEmail(DEMO_CREDENTIALS[role].email);
        setPassword(DEMO_CREDENTIALS[role].password);
        setError("");
    };
    const handleLogin = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        // Simulate API call delay
        yield new Promise((resolve) => setTimeout(resolve, 1000));
        const credentials = DEMO_CREDENTIALS[selectedRole];
        if (email === credentials.email && password === credentials.password) {
            onLogin(selectedRole, credentials.userData);
        }
        else {
            setError("Invalid email or password. Please use the demo credentials.");
        }
        setIsLoading(false);
    });
    const fillDemoCredentials = () => {
        setEmail(DEMO_CREDENTIALS[selectedRole].email);
        setPassword(DEMO_CREDENTIALS[selectedRole].password);
        setError("");
    };
    return (_jsx("div", Object.assign({ className: "min-h-screen bg-gray-50 flex items-center justify-center p-4" }, { children: _jsxs("div", Object.assign({ className: "w-full max-w-md space-y-6" }, { children: [_jsxs("div", Object.assign({ className: "text-center space-y-2" }, { children: [_jsx("div", Object.assign({ className: "flex justify-center" }, { children: _jsx("div", Object.assign({ className: "bg-red-600 p-3 rounded-full" }, { children: _jsx(GraduationCap, { className: "h-8 w-8 text-white" }) })) })), _jsx("h1", Object.assign({ className: "text-3xl font-serif font-bold text-gray-900" }, { children: "Equip Academy" })), _jsx("p", Object.assign({ className: "text-gray-600" }, { children: "Bible School Learning Management System" }))] })), _jsxs(Card, { children: [_jsxs(CardHeader, Object.assign({ className: "space-y-1" }, { children: [_jsx(CardTitle, Object.assign({ className: "text-2xl font-serif" }, { children: "Sign In" })), _jsx(CardDescription, { children: "Choose your role and enter your credentials to access your portal" })] })), _jsxs(CardContent, { children: [_jsxs("form", Object.assign({ onSubmit: handleLogin, className: "space-y-4" }, { children: [_jsxs("div", Object.assign({ className: "space-y-2" }, { children: [_jsx(Label, Object.assign({ htmlFor: "role" }, { children: "Select Role" })), _jsxs(Select, Object.assign({ value: selectedRole, onValueChange: handleRoleChange }, { children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Choose your role" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, Object.assign({ value: "student" }, { children: "Student Portal" })), _jsx(SelectItem, Object.assign({ value: "instructor" }, { children: "Instructor Portal" })), _jsx(SelectItem, Object.assign({ value: "admin" }, { children: "Admin Portal" }))] })] }))] })), _jsxs("div", Object.assign({ className: "space-y-2" }, { children: [_jsx(Label, Object.assign({ htmlFor: "email" }, { children: "Email" })), _jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email", required: true })] })), _jsxs("div", Object.assign({ className: "space-y-2" }, { children: [_jsx(Label, Object.assign({ htmlFor: "password" }, { children: "Password" })), _jsxs("div", Object.assign({ className: "relative" }, { children: [_jsx(Input, { id: "password", type: showPassword ? "text" : "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Enter your password", required: true }), _jsx(Button, Object.assign({ type: "button", variant: "ghost", size: "sm", className: "absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent", onClick: () => setShowPassword(!showPassword) }, { children: showPassword ? (_jsx(EyeOff, { className: "h-4 w-4 text-gray-400" })) : (_jsx(Eye, { className: "h-4 w-4 text-gray-400" })) }))] }))] })), error && (_jsx(Alert, Object.assign({ variant: "destructive" }, { children: _jsx(AlertDescription, { children: error }) }))), _jsxs("div", Object.assign({ className: "bg-yellow-50 border border-yellow-200 rounded-lg p-3" }, { children: [_jsx("p", Object.assign({ className: "text-sm text-yellow-800 mb-2" }, { children: _jsxs("strong", { children: ["Demo Credentials for ", selectedRole, ":"] }) })), _jsxs("p", Object.assign({ className: "text-xs text-yellow-700 mb-2" }, { children: ["Email: ", DEMO_CREDENTIALS[selectedRole].email, _jsx("br", {}), "Password: ", DEMO_CREDENTIALS[selectedRole].password] })), _jsx(Button, Object.assign({ type: "button", variant: "outline", size: "sm", onClick: fillDemoCredentials, className: "text-yellow-800 border-yellow-300 hover:bg-yellow-100 bg-transparent" }, { children: "Fill Demo Credentials" }))] })), _jsx(Button, Object.assign({ type: "submit", className: "w-full bg-red-600 hover:bg-red-700", disabled: isLoading }, { children: isLoading ? "Signing In..." : "Sign In" }))] })), _jsx("div", Object.assign({ className: "mt-6 pt-4 border-t border-gray-200" }, { children: _jsxs("div", Object.assign({ className: "text-center" }, { children: [_jsx("p", Object.assign({ className: "text-sm text-gray-600 mb-3" }, { children: "New to Equip Academy?" })), _jsx(Link, Object.assign({ to: "/apply" }, { children: _jsxs(Button, Object.assign({ variant: "outline", className: "w-full bg-transparent" }, { children: [_jsx(UserPlus, { className: "h-4 w-4 mr-2" }), "Apply for Admission"] })) }))] })) }))] })] }), _jsx("div", Object.assign({ className: "text-center text-sm text-gray-500" }, { children: _jsx("p", { children: "\u00A9 2024 Equip Academy. All rights reserved." }) }))] })) })));
}
