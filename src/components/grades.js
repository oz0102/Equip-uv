import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, Award, Target, BookOpen } from "lucide-react";
export function Grades() {
    const courseGrades = [
        {
            course: "BIBL201",
            title: "Salvation",
            currentGrade: 88.5,
            letterGrade: "B+",
            credits: 3,
            assignments: [
                { name: "Quiz #1", grade: 85, maxPoints: 100, weight: 15 },
                { name: "Attendance", grade: 90, maxPoints: 100, weight: 15 },
            ],
        },
        {
            course: "THEO101",
            title: "Repentance from dead works",
            currentGrade: 91.2,
            letterGrade: "A-",
            credits: 4,
            assignments: [
                { name: "Quiz #1", grade: 85, maxPoints: 100, weight: 15 },
                { name: "Attendance", grade: 90, maxPoints: 100, weight: 15 },
                { name: "Presentation", grade: 88, maxPoints: 100, weight: 25 },
            ],
        },
        {
            course: "HIST201",
            title: "Baptisms",
            currentGrade: 94.3,
            letterGrade: "A",
            credits: 3,
            assignments: [
                { name: "Quiz #1", grade: 85, maxPoints: 100, weight: 15 },
                { name: "Attendance", grade: 90, maxPoints: 100, weight: 15 },
                { name: "Presentation", grade: 88, maxPoints: 100, weight: 25 },
            ],
        },
        {
            course: "PRAC201",
            title: "Stewardship",
            currentGrade: 86.7,
            letterGrade: "B+",
            credits: 3,
            assignments: [
                { name: "Quiz #1", grade: 85, maxPoints: 100, weight: 15 },
                { name: "Attendance", grade: 90, maxPoints: 100, weight: 15 },
            ],
        },
        {
            course: "THEO201",
            title: "End of times",
            currentGrade: 89.1,
            letterGrade: "B+",
            credits: 4,
            assignments: [
                { name: "Quiz #1", grade: 85, maxPoints: 100, weight: 15 },
                { name: "Attendance", grade: 90, maxPoints: 100, weight: 15 },
            ],
        },
    ];
    const semesterProgress = [
        { week: "Week 1", gpa: 3.2 },
        { week: "Week 2", gpa: 3.4 },
        { week: "Week 3", gpa: 3.5 },
        { week: "Week 4", gpa: 3.6 },
        { week: "Week 5", gpa: 3.7 },
        { week: "Week 6", gpa: 3.8 },
        { week: "Week 7", gpa: 3.85 },
    ];
    const gradeDistribution = [
        { grade: "A", count: 8 },
        { grade: "B+", count: 6 },
        { grade: "B", count: 3 },
        { grade: "B-", count: 2 },
        { grade: "C+", count: 1 },
    ];
    const calculateGPA = () => {
        const totalPoints = courseGrades.reduce((sum, course) => {
            const gradePoints = getGradePoints(course.letterGrade);
            return sum + gradePoints * course.credits;
        }, 0);
        const totalCredits = courseGrades.reduce((sum, course) => sum + course.credits, 0);
        return (totalPoints / totalCredits).toFixed(2);
    };
    const getGradePoints = (letterGrade) => {
        const gradeMap = {
            A: 4.0,
            "A-": 3.7,
            "B+": 3.3,
            B: 3.0,
            "B-": 2.7,
            "C+": 2.3,
            C: 2.0,
            "C-": 1.7,
            "D+": 1.3,
            D: 1.0,
            F: 0.0,
        };
        return gradeMap[letterGrade] || 0;
    };
    const getGradeColor = (grade) => {
        if (grade >= 90)
            return "text-green-600";
        if (grade >= 80)
            return "text-blue-600";
        if (grade >= 70)
            return "text-yellow-600";
        return "text-red-600";
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [_jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Current GPA" }), _jsx("p", { className: "text-3xl font-bold text-green-600", children: calculateGPA() })] }), _jsx(TrendingUp, { className: "h-8 w-8 text-green-600" })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Credits Earned" }), _jsx("p", { className: "text-3xl font-bold text-blue-600", children: courseGrades.reduce((sum, course) => sum + course.credits, 0) })] }), _jsx(Award, { className: "h-8 w-8 text-blue-600" })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Avg Grade" }), _jsxs("p", { className: "text-3xl font-bold text-purple-600", children: [Math.round(courseGrades.reduce((sum, course) => sum + course.currentGrade, 0) / courseGrades.length), "%"] })] }), _jsx(Target, { className: "h-8 w-8 text-purple-600" })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-600", children: "Courses" }), _jsx("p", { className: "text-3xl font-bold text-red-600", children: courseGrades.length })] }), _jsx(BookOpen, { className: "h-8 w-8 text-red-600" })] }) }) })] }), _jsxs(Tabs, { defaultValue: "courses", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-3", children: [_jsx(TabsTrigger, { value: "courses", children: "Course Grades" }), _jsx(TabsTrigger, { value: "progress", children: "Progress Tracking" })] }), _jsx(TabsContent, { value: "courses", className: "space-y-4", children: courseGrades.map((course) => (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs(CardTitle, { className: "font-serif text-lg", children: [course.course, ": ", course.title] }), _jsxs("p", { className: "text-sm text-gray-600", children: [course.credits, " Credits"] })] }), _jsxs("div", { className: "text-right", children: [_jsx("div", { className: "text-2xl font-bold", children: _jsx("span", { className: getGradeColor(course.currentGrade), children: course.letterGrade }) }), _jsxs("p", { className: "text-sm text-gray-600", children: [course.currentGrade.toFixed(1), "%"] })] })] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between text-sm", children: [_jsx("span", { className: "text-gray-600", children: "Overall Progress" }), _jsxs("span", { className: "font-medium", children: [course.currentGrade.toFixed(1), "%"] })] }), _jsx(Progress, { value: course.currentGrade, className: "h-2" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4", children: course.assignments.map((assignment, index) => (_jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium text-sm", children: assignment.name }), _jsxs("p", { className: "text-xs text-gray-600", children: ["Weight: ", assignment.weight, "%"] })] }), _jsxs("div", { className: "text-right", children: [_jsxs("p", { className: `font-bold ${getGradeColor(assignment.grade)}`, children: [assignment.grade, "/", assignment.maxPoints] }), _jsxs("p", { className: "text-xs text-gray-600", children: [Math.round((assignment.grade / assignment.maxPoints) * 100), "%"] })] })] }, index))) })] }) })] }, course.course))) }), _jsxs(TabsContent, { value: "progress", className: "space-y-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "font-serif", children: "GPA Progress This Semester" }) }), _jsx(CardContent, { children: _jsx("div", { className: "h-64", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { data: semesterProgress, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "week" }), _jsx(YAxis, { domain: [3.0, 4.0] }), _jsx(Tooltip, {}), _jsx(Line, { type: "monotone", dataKey: "gpa", stroke: "#dc2626", strokeWidth: 3, dot: { fill: "#dc2626", strokeWidth: 2, r: 4 } })] }) }) }) })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "font-serif", children: "Academic Standing" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Current Status" }), _jsx(Badge, { className: "bg-green-100 text-green-800", children: "Good Standing" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Dean's List Eligible" }), _jsx(Badge, { className: "bg-blue-100 text-blue-800", children: "Yes" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Graduation Progress" }), _jsx("span", { className: "font-medium", children: "40% Complete" })] }), _jsx(Progress, { value: 40, className: "h-2" })] })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "font-serif", children: "Semester Goals" }) }), _jsx(CardContent, { className: "space-y-4", children: _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm text-gray-600", children: "Maintain 3.8+ GPA" }), _jsx(Badge, { className: "bg-green-100 text-green-800", children: "On Track" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm text-gray-600", children: "Complete all assignments on time" }), _jsx(Badge, { className: "bg-green-100 text-green-800", children: "On Track" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm text-gray-600", children: "Achieve 95%+ attendance" }), _jsx(Badge, { className: "bg-green-100 text-green-800", children: "Achieved" })] })] }) })] })] })] })] })] }));
}
