import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Edit, Save, QrCode } from "lucide-react"
import { useState } from "react"

export function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "Grace",
    lastName: "Festus",
    email: "EsoheF@student.equip.academy",
    phone: "+234 123 4567",
    address: "Opet",
    bio: "Passionate about biblical studies and ministry preparation. Currently pursuing foundational training in equip academy.",
  })

  const studentInfo = {
    studentId: "EQ2024001",
    program: "Foundations Program",
    cohort: "Foundations Cohort 3 Q1",
    enrollmentDate: "2024-01-08",
    expectedGraduation: "2024-12-15",
    status: "Active",
    gpa: 3.85,
    completedCredits: 24,
    totalCredits: 60,
    academicStanding: "Good Standing",
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">
                  {formData.firstName[0]}
                  {formData.lastName[0]}
                </span>
              </div>
              <div>
                <h1 className="font-serif text-3xl font-bold text-black">
                  {formData.firstName} {formData.lastName}
                </h1>
                <p className="text-lg text-gray-600">{studentInfo.program}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge className="bg-green-100 text-green-800">{studentInfo.status}</Badge>
                  <span className="text-sm text-gray-600">Student ID: {studentInfo.studentId}</span>
                </div>
              </div>
            </div>
            <Button
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              className="bg-red-600 hover:bg-red-700"
            >
              {isEditing ? (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Digital ID Card */}
        <div className="lg:col-span-1">
          <Card className="bg-black text-white overflow-hidden">
            <CardContent className="p-6 text-center">
              <div className="space-y-4">
                {/* Logo/Brand */}
                <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-black font-bold text-lg">EQUIP</span>
                </div>
                
                {/* Student Name */}
                <h2 className="text-2xl font-bold text-white">
                  {formData.firstName} {formData.lastName}
                </h2>
                
                {/* Student ID */}
                <p className="text-red-400 text-lg font-mono">
                  DYN/DM/{studentInfo.studentId.slice(-4)}
                </p>
                
                {/* QR Code Placeholder */}
                <div className="bg-red-400 p-4 rounded-lg mx-auto w-48 h-48 flex items-center justify-center">
                  <div className="grid grid-cols-8 gap-1 w-full h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`${Math.random() > 0.5 ? 'bg-black' : 'bg-red-400'} rounded-sm`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Program Info */}
                <div className="space-y-1">
                  <p className="text-white text-lg font-semibold">{studentInfo.program}</p>
                  <p className="text-yellow-400">{studentInfo.cohort}</p>
                </div>
                
                {/* Verification Text */}
                <p className="text-gray-300 text-sm">Scan for verification</p>
                
                {/* Footer */}
                <div className="border-t border-gray-600 pt-4 space-y-1">
                  <p className="text-xs text-gray-400">This card remains the property of DYEN.</p>
                  <p className="text-xs text-gray-400">If found, please return to the nearest DYEN office.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Combined Personal and Academic Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information Section */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  disabled={!isEditing}
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  disabled={!isEditing}
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Academic Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Program Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Program</span>
                  <span className="font-medium">{studentInfo.program}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cohort</span>
                  <span className="font-medium">{studentInfo.cohort}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Enrollment Date</span>
                  <span className="font-medium">{new Date(studentInfo.enrollmentDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Expected Graduation</span>
                  <span className="font-medium">{new Date(studentInfo.expectedGraduation).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Academic Standing</span>
                  <Badge className="bg-green-100 text-green-800">{studentInfo.academicStanding}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Academic Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Current GPA</span>
                  <span className="font-bold text-green-600 text-lg">{studentInfo.gpa}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Credits Completed</span>
                  <span className="font-medium">
                    {studentInfo.completedCredits} / {studentInfo.totalCredits}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">
                      {Math.round((studentInfo.completedCredits / studentInfo.totalCredits) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: `${(studentInfo.completedCredits / studentInfo.totalCredits) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

