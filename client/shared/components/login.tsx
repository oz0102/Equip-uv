import type React from "react"

import { useState } from "react"
import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { Alert, AlertDescription } from "@/shared/ui/alert"
import { Eye, EyeOff, GraduationCap, UserPlus } from "lucide-react"
import { Link } from "react-router-dom"

interface LoginProps {
  onLogin: (role: "student" | "admin" | "instructor", userData: any) => void
}

// Demo credentials
const DEMO_CREDENTIALS = {
  student: {
    email: "student@equip.academy",
    password: "student123",
    userData: {
      id: "1",
      name: "Osazee Samson",
      role: "student",
      studentId: "EQ2024001",
      program: "foundations",
      cohort: "Foundations 2026 Q1",
    },
  },
  admin: {
    email: "admin@equip.academy",
    password: "admin123",
    userData: {
      id: "2",
      name: "Osazee Samson Festus",
      role: "admin",
      department: "Administration",
    },
  },
  instructor: {
    email: "instructor@equip.academy",
    password: "instructor123",
    userData: {
      id: "3",
      name: "Osazee Samson Festus",
      role: "instructor",
      instructorId: "INS001",
      department: "Biblical Studies",
      specialization: ["Theology", "Biblical Interpretation"],
    },
  },
}

export function Login({ onLogin }: LoginProps) {
  const [selectedRole, setSelectedRole] = useState<"student" | "admin" | "instructor">("student")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleRoleChange = (role: "student" | "admin" | "instructor") => {
    setSelectedRole(role)
    setEmail(DEMO_CREDENTIALS[role].email)
    setPassword(DEMO_CREDENTIALS[role].password)
    setError("")
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const credentials = DEMO_CREDENTIALS[selectedRole]

    if (email === credentials.email && password === credentials.password) {
      onLogin(selectedRole, credentials.userData)
    } else {
      setError("Invalid email or password. Please use the demo credentials.")
    }

    setIsLoading(false)
  }

  const fillDemoCredentials = () => {
    setEmail(DEMO_CREDENTIALS[selectedRole].email)
    setPassword(DEMO_CREDENTIALS[selectedRole].password)
    setError("")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo and Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="bg-red-600 p-3 rounded-full">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-900">Equip Academy</h1>
          <p className="text-gray-600">Bible School Learning Management System</p>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-serif">Sign In</CardTitle>
            <CardDescription>Choose your role and enter your credentials to access your portal</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role">Select Role</Label>
                <Select value={selectedRole} onValueChange={handleRoleChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student Portal</SelectItem>
                    <SelectItem value="instructor">Instructor Portal</SelectItem>
                    <SelectItem value="admin">Admin Portal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Demo Credentials Helper */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800 mb-2">
                  <strong>Demo Credentials for {selectedRole}:</strong>
                </p>
                <p className="text-xs text-yellow-700 mb-2">
                  Email: {DEMO_CREDENTIALS[selectedRole].email}
                  <br />
                  Password: {DEMO_CREDENTIALS[selectedRole].password}
                </p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={fillDemoCredentials}
                  className="text-yellow-800 border-yellow-300 hover:bg-yellow-100 bg-transparent"
                >
                  Fill Demo Credentials
                </Button>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-3">New to Equip Academy?</p>
                <Link to="/apply">
                  <Button variant="outline" className="w-full bg-transparent">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Apply for Admission
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2024 Equip Academy. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
