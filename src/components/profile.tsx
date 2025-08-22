import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Save } from "lucide-react"
import { useState } from "react"

export function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@student.equip.academy",
    phone: "(555) 123-4567",
    address: "123 Seminary Lane, Bible City, BC 12345",
    emergencyContactName: "Mary Smith",
    emergencyContactRelationship: "Spouse",
    emergencyContactPhone: "(555) 987-6543",
    bio: "Passionate about biblical studies and ministry preparation. Currently pursuing foundational training in theology and pastoral care.",
    goals: "To complete the Foundations program and continue to the Equip program for advanced ministry training.",
  })

  const studentInfo = {
    studentId: "EQ2024001",
    program: "Foundations Program",
    cohort: "Foundations 2024 Spring",
    enrollmentDate: "2024-01-08",
    expectedGraduation: "2024-12-15",
    status: "Active",
    gpa: 3.85,
    completedCredits: 24,
    totalCredits: 60,
    academicStanding: "Good Standing",
  }

  const academicHistory = [
    {
      semester: "Spring 2024",
      courses: [
        { code: "BIBL201", title: "Biblical Hermeneutics", credits: 3, grade: "B+" },
        { code: "THEO101", title: "Introduction to Systematic Theology", credits: 4, grade: "A-" },
        { code: "HIST201", title: "Church History", credits: 3, grade: "A" },
        { code: "PRAC201", title: "Pastoral Care and Counseling", credits: 3, grade: "B+" },
        { code: "THEO201", title: "Advanced Systematic Theology", credits: 4, grade: "B+" },
      ],
      gpa: 3.85,
    },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    // Here you would typically save to an API
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

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="academic">Academic Info</TabsTrigger>
          <TabsTrigger value="emergency">Emergency Contact</TabsTrigger>
          <TabsTrigger value="history">Academic History</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-6">
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

              <div>
                <Label htmlFor="goals">Academic Goals</Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => handleInputChange("goals", e.target.value)}
                  disabled={!isEditing}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic" className="space-y-6">
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
        </TabsContent>

        <TabsContent value="emergency" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Emergency Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="emergencyName">Contact Name</Label>
                <Input
                  id="emergencyName"
                  value={formData.emergencyContactName}
                  onChange={(e) => handleInputChange("emergencyContactName", e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              <div>
                <Label htmlFor="emergencyRelationship">Relationship</Label>
                <Input
                  id="emergencyRelationship"
                  value={formData.emergencyContactRelationship}
                  onChange={(e) => handleInputChange("emergencyContactRelationship", e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              <div>
                <Label htmlFor="emergencyPhone">Phone Number</Label>
                <Input
                  id="emergencyPhone"
                  value={formData.emergencyContactPhone}
                  onChange={(e) => handleInputChange("emergencyContactPhone", e.target.value)}
                  disabled={!isEditing}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          {academicHistory.map((semester, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif">{semester.semester}</CardTitle>
                  <Badge className="bg-blue-100 text-blue-800">GPA: {semester.gpa}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {semester.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">
                          {course.code}: {course.title}
                        </h4>
                        <p className="text-sm text-gray-600">{course.credits} Credits</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{course.grade}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
