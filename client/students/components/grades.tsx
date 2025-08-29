import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"
import { Badge } from "@/shared/ui/badge"
import { Progress } from "@/shared/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { TrendingUp, Award, Target, BookOpen } from "lucide-react"

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
  ]

  const semesterProgress = [
    { week: "Week 1", gpa: 3.2 },
    { week: "Week 2", gpa: 3.4 },
    { week: "Week 3", gpa: 3.5 },
    { week: "Week 4", gpa: 3.6 },
    { week: "Week 5", gpa: 3.7 },
    { week: "Week 6", gpa: 3.8 },
    { week: "Week 7", gpa: 3.85 },
  ]

  const gradeDistribution = [
    { grade: "A", count: 8 },
    { grade: "B+", count: 6 },
    { grade: "B", count: 3 },
    { grade: "B-", count: 2 },
    { grade: "C+", count: 1 },
  ]

  const calculateGPA = () => {
    const totalPoints = courseGrades.reduce((sum, course) => {
      const gradePoints = getGradePoints(course.letterGrade)
      return sum + gradePoints * course.credits
    }, 0)
    const totalCredits = courseGrades.reduce((sum, course) => sum + course.credits, 0)
    return (totalPoints / totalCredits).toFixed(2)
  }

  const getGradePoints = (letterGrade: string) => {
    const gradeMap: { [key: string]: number } = {
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
    }
    return gradeMap[letterGrade] || 0
  }

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return "text-green-600"
    if (grade >= 80) return "text-blue-600"
    if (grade >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="space-y-6">
          {/* GPA Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Current GPA</p>
                    <p className="text-2xl md:text-3xl font-bold text-green-600">{calculateGPA()}</p>
                  </div>
                  <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
    
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Credits Earned</p>
                    <p className="text-2xl md:text-3xl font-bold text-blue-600">
                      {courseGrades.reduce((sum, course) => sum + course.credits, 0)}
                    </p>
                  </div>
                  <Award className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
    
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Grade</p>
                    <p className="text-2xl md:text-3xl font-bold text-purple-600">
                      {Math.round(courseGrades.reduce((sum, course) => sum + course.currentGrade, 0) / courseGrades.length)}
                      %
                    </p>
                  </div>
                  <Target className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
    
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Courses</p>
                    <p className="text-2xl md:text-3xl font-bold text-red-600">{courseGrades.length}</p>
                  </div>
                  <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-red-600" />
                </div>
              </CardContent>
            </Card>
          </div>

      <Tabs defaultValue="courses" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="courses">Course Grades</TabsTrigger>
          <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          {courseGrades.map((course) => (
            <Card key={course.course}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-serif text-lg">
                      {course.course}: {course.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600">{course.credits} Credits</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      <span className={getGradeColor(course.currentGrade)}>{course.letterGrade}</span>
                    </div>
                    <p className="text-sm text-gray-600">{course.currentGrade.toFixed(1)}%</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Overall Progress</span>
                    <span className="font-medium">{course.currentGrade.toFixed(1)}%</span>
                  </div>
                  <Progress value={course.currentGrade} className="h-2" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {course.assignments.map((assignment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{assignment.name}</p>
                          <p className="text-xs text-gray-600">Weight: {assignment.weight}%</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold ${getGradeColor(assignment.grade)}`}>
                            {assignment.grade}/{assignment.maxPoints}
                          </p>
                          <p className="text-xs text-gray-600">
                            {Math.round((assignment.grade / assignment.maxPoints) * 100)}%
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">GPA Progress This Semester</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={semesterProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis domain={[3.0, 4.0]} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="gpa"
                      stroke="#dc2626"
                      strokeWidth={3}
                      dot={{ fill: "#dc2626", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Academic Standing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Current Status</span>
                  <Badge className="bg-green-100 text-green-800">Good Standing</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Dean's List Eligible</span>
                  <Badge className="bg-blue-100 text-blue-800">Yes</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Graduation Progress</span>
                  <span className="font-medium">40% Complete</span>
                </div>
                <Progress value={40} className="h-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Semester Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Maintain 3.8+ GPA</span>
                    <Badge className="bg-green-100 text-green-800">On Track</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Complete all assignments on time</span>
                    <Badge className="bg-green-100 text-green-800">On Track</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Achieve 95%+ attendance</span>
                    <Badge className="bg-green-100 text-green-800">Achieved</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>


      </Tabs>
    </div>
  )
}
