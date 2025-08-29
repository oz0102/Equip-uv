import { useState } from "react"
import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { Textarea } from "@/shared/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { Checkbox } from "@/shared/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"
import { Alert, AlertDescription } from "@/shared/ui/alert"
import { Progress } from "@/shared/ui/progress"
import { GraduationCap, ArrowLeft, ArrowRight, CheckCircle, User, BookOpen, Heart, Users } from "lucide-react"

interface ApplicationData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string

  // Program Selection
  program: "foundations" | "equip" | ""
  preferredStartDate: string

  // Educational Background
  highSchoolName: string
  highSchoolGradYear: string
  collegeAttended: string
  collegeDegree: string
  collegeGradYear: string

  // Spiritual Background
  salvationTestimony: string
  churchName: string
  pastorName: string
  yearsAsChristian: string
  ministryExperience: string

  // References
  reference1Name: string
  reference1Email: string
  reference1Phone: string
  reference1Relationship: string
  reference2Name: string
  reference2Email: string
  reference2Phone: string
  reference2Relationship: string

  // Emergency Contact
  emergencyName: string
  emergencyPhone: string
  emergencyRelationship: string

  // Agreements
  agreeToTerms: boolean
  agreeToBackground: boolean
}

const initialData: ApplicationData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  country: "United States",
  program: "",
  preferredStartDate: "",
  highSchoolName: "",
  highSchoolGradYear: "",
  collegeAttended: "",
  collegeDegree: "",
  collegeGradYear: "",
  salvationTestimony: "",
  churchName: "",
  pastorName: "",
  yearsAsChristian: "",
  ministryExperience: "",
  reference1Name: "",
  reference1Email: "",
  reference1Phone: "",
  reference1Relationship: "",
  reference2Name: "",
  reference2Email: "",
  reference2Phone: "",
  reference2Relationship: "",
  emergencyName: "",
  emergencyPhone: "",
  emergencyRelationship: "",
  agreeToTerms: false,
  agreeToBackground: false,
}

interface StudentApplicationProps {
  onBack: () => void
}

export function StudentApplication({ onBack }: StudentApplicationProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<ApplicationData>(initialData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const updateFormData = (field: keyof ApplicationData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1: // Personal Information
        if (!formData.firstName) newErrors.firstName = "First name is required"
        if (!formData.lastName) newErrors.lastName = "Last name is required"
        if (!formData.email) newErrors.email = "Email is required"
        if (!formData.phone) newErrors.phone = "Phone number is required"
        if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
        if (!formData.address) newErrors.address = "Address is required"
        if (!formData.city) newErrors.city = "City is required"
        if (!formData.state) newErrors.state = "State is required"
        if (!formData.zipCode) newErrors.zipCode = "ZIP code is required"
        break

      case 2: // Program Selection
        if (!formData.program) newErrors.program = "Please select a program"
        if (!formData.preferredStartDate) newErrors.preferredStartDate = "Please select a start date"
        break

      case 3: // Educational Background
        if (!formData.highSchoolName) newErrors.highSchoolName = "High school name is required"
        if (!formData.highSchoolGradYear) newErrors.highSchoolGradYear = "Graduation year is required"
        break

      case 4: // Spiritual Background
        if (!formData.salvationTestimony) newErrors.salvationTestimony = "Salvation testimony is required"
        if (!formData.churchName) newErrors.churchName = "Church name is required"
        if (!formData.yearsAsChristian) newErrors.yearsAsChristian = "This field is required"
        break

      case 5: // References
        if (!formData.reference1Name) newErrors.reference1Name = "Reference 1 name is required"
        if (!formData.reference1Email) newErrors.reference1Email = "Reference 1 email is required"
        if (!formData.reference1Phone) newErrors.reference1Phone = "Reference 1 phone is required"
        if (!formData.reference1Relationship) newErrors.reference1Relationship = "Relationship is required"
        if (!formData.emergencyName) newErrors.emergencyName = "Emergency contact name is required"
        if (!formData.emergencyPhone) newErrors.emergencyPhone = "Emergency contact phone is required"
        if (!formData.emergencyRelationship)
          newErrors.emergencyRelationship = "Emergency contact relationship is required"
        break

      case 6: // Review & Submit
        if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions"
        if (!formData.agreeToBackground) newErrors.agreeToBackground = "You must agree to the background check"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">Application Submitted!</h2>
              <p className="text-gray-600">
                Thank you for your application to Equip Academy. We will review your application and contact you within
                5-7 business days.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Next Steps:</strong>
                  <br />
                  1. Check your email for confirmation
                  <br />
                  2. We'll contact your references
                  <br />
                  3. Schedule an interview if selected
                </p>
              </div>
              <Button onClick={onBack} className="w-full bg-red-600 hover:bg-red-700">
                Return to Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <User className="h-5 w-5 text-red-600" />
              <h3 className="text-lg font-serif font-semibold">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                className={errors.dateOfBirth ? "border-red-500" : ""}
              />
              {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
            </div>
            <div>
              <Label htmlFor="address">Street Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => updateFormData("address", e.target.value)}
                className={errors.address ? "border-red-500" : ""}
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => updateFormData("city", e.target.value)}
                  className={errors.city ? "border-red-500" : ""}
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
              </div>
              <div>
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => updateFormData("state", e.target.value)}
                  className={errors.state ? "border-red-500" : ""}
                />
                {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code *</Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => updateFormData("zipCode", e.target.value)}
                  className={errors.zipCode ? "border-red-500" : ""}
                />
                {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-5 w-5 text-red-600" />
              <h3 className="text-lg font-serif font-semibold">Program Selection</h3>
            </div>
            <div>
              <Label>Select Program *</Label>
              <RadioGroup
                value={formData.program}
                onValueChange={(value) => updateFormData("program", value)}
                className="mt-2"
              >
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="foundations" id="foundations" />
                    <Label htmlFor="foundations" className="font-medium">
                      Foundations Program
                    </Label>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">
                    A comprehensive 1-year program covering biblical foundations, theology, and practical ministry
                    skills. Perfect for new believers or those seeking to strengthen their biblical knowledge.
                  </p>
                </div>
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="equip" id="equip" />
                    <Label htmlFor="equip" className="font-medium">
                      Equip Program
                    </Label>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">
                    An advanced 2-year program for ministry preparation, including advanced theology, leadership
                    development, and hands-on ministry experience. Requires completion of Foundations or equivalent.
                  </p>
                </div>
              </RadioGroup>
              {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
            </div>
            <div>
              <Label htmlFor="preferredStartDate">Preferred Start Date *</Label>
              <Select
                value={formData.preferredStartDate}
                onValueChange={(value) => updateFormData("preferredStartDate", value)}
              >
                <SelectTrigger className={errors.preferredStartDate ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select start date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fall-2024">Fall 2024 (September)</SelectItem>
                  <SelectItem value="spring-2025">Spring 2025 (January)</SelectItem>
                  <SelectItem value="fall-2025">Fall 2025 (September)</SelectItem>
                </SelectContent>
              </Select>
              {errors.preferredStartDate && <p className="text-red-500 text-xs mt-1">{errors.preferredStartDate}</p>}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-5 w-5 text-red-600" />
              <h3 className="text-lg font-serif font-semibold">Educational Background</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="highSchoolName">High School Name *</Label>
                <Input
                  id="highSchoolName"
                  value={formData.highSchoolName}
                  onChange={(e) => updateFormData("highSchoolName", e.target.value)}
                  className={errors.highSchoolName ? "border-red-500" : ""}
                />
                {errors.highSchoolName && <p className="text-red-500 text-xs mt-1">{errors.highSchoolName}</p>}
              </div>
              <div>
                <Label htmlFor="highSchoolGradYear">Graduation Year *</Label>
                <Input
                  id="highSchoolGradYear"
                  value={formData.highSchoolGradYear}
                  onChange={(e) => updateFormData("highSchoolGradYear", e.target.value)}
                  className={errors.highSchoolGradYear ? "border-red-500" : ""}
                />
                {errors.highSchoolGradYear && <p className="text-red-500 text-xs mt-1">{errors.highSchoolGradYear}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="collegeAttended">College/University Attended</Label>
                <Input
                  id="collegeAttended"
                  value={formData.collegeAttended}
                  onChange={(e) => updateFormData("collegeAttended", e.target.value)}
                  placeholder="Leave blank if not applicable"
                />
              </div>
              <div>
                <Label htmlFor="collegeDegree">Degree Earned</Label>
                <Input
                  id="collegeDegree"
                  value={formData.collegeDegree}
                  onChange={(e) => updateFormData("collegeDegree", e.target.value)}
                  placeholder="e.g., Bachelor of Arts"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="collegeGradYear">College Graduation Year</Label>
              <Input
                id="collegeGradYear"
                value={formData.collegeGradYear}
                onChange={(e) => updateFormData("collegeGradYear", e.target.value)}
                placeholder="Leave blank if not applicable"
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-5 w-5 text-red-600" />
              <h3 className="text-lg font-serif font-semibold">Spiritual Background</h3>
            </div>
            <div>
              <Label htmlFor="salvationTestimony">Salvation Testimony *</Label>
              <Textarea
                id="salvationTestimony"
                value={formData.salvationTestimony}
                onChange={(e) => updateFormData("salvationTestimony", e.target.value)}
                placeholder="Please share your testimony of how you came to faith in Jesus Christ..."
                rows={4}
                className={errors.salvationTestimony ? "border-red-500" : ""}
              />
              {errors.salvationTestimony && <p className="text-red-500 text-xs mt-1">{errors.salvationTestimony}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="churchName">Current Church Name *</Label>
                <Input
                  id="churchName"
                  value={formData.churchName}
                  onChange={(e) => updateFormData("churchName", e.target.value)}
                  className={errors.churchName ? "border-red-500" : ""}
                />
                {errors.churchName && <p className="text-red-500 text-xs mt-1">{errors.churchName}</p>}
              </div>
              <div>
                <Label htmlFor="pastorName">Pastor's Name</Label>
                <Input
                  id="pastorName"
                  value={formData.pastorName}
                  onChange={(e) => updateFormData("pastorName", e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="yearsAsChristian">How many years have you been a Christian? *</Label>
              <Input
                id="yearsAsChristian"
                value={formData.yearsAsChristian}
                onChange={(e) => updateFormData("yearsAsChristian", e.target.value)}
                className={errors.yearsAsChristian ? "border-red-500" : ""}
              />
              {errors.yearsAsChristian && <p className="text-red-500 text-xs mt-1">{errors.yearsAsChristian}</p>}
            </div>
            <div>
              <Label htmlFor="ministryExperience">Ministry Experience</Label>
              <Textarea
                id="ministryExperience"
                value={formData.ministryExperience}
                onChange={(e) => updateFormData("ministryExperience", e.target.value)}
                placeholder="Please describe any ministry experience you have had..."
                rows={3}
              />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="h-5 w-5 text-red-600" />
              <h3 className="text-lg font-serif font-semibold">References & Emergency Contact</h3>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-3">Reference 1 (Required) *</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="reference1Name">Full Name *</Label>
                  <Input
                    id="reference1Name"
                    value={formData.reference1Name}
                    onChange={(e) => updateFormData("reference1Name", e.target.value)}
                    className={errors.reference1Name ? "border-red-500" : ""}
                  />
                  {errors.reference1Name && <p className="text-red-500 text-xs mt-1">{errors.reference1Name}</p>}
                </div>
                <div>
                  <Label htmlFor="reference1Email">Email *</Label>
                  <Input
                    id="reference1Email"
                    type="email"
                    value={formData.reference1Email}
                    onChange={(e) => updateFormData("reference1Email", e.target.value)}
                    className={errors.reference1Email ? "border-red-500" : ""}
                  />
                  {errors.reference1Email && <p className="text-red-500 text-xs mt-1">{errors.reference1Email}</p>}
                </div>
                <div>
                  <Label htmlFor="reference1Phone">Phone *</Label>
                  <Input
                    id="reference1Phone"
                    value={formData.reference1Phone}
                    onChange={(e) => updateFormData("reference1Phone", e.target.value)}
                    className={errors.reference1Phone ? "border-red-500" : ""}
                  />
                  {errors.reference1Phone && <p className="text-red-500 text-xs mt-1">{errors.reference1Phone}</p>}
                </div>
                <div>
                  <Label htmlFor="reference1Relationship">Relationship *</Label>
                  <Input
                    id="reference1Relationship"
                    value={formData.reference1Relationship}
                    onChange={(e) => updateFormData("reference1Relationship", e.target.value)}
                    placeholder="e.g., Pastor, Mentor, Employer"
                    className={errors.reference1Relationship ? "border-red-500" : ""}
                  />
                  {errors.reference1Relationship && (
                    <p className="text-red-500 text-xs mt-1">{errors.reference1Relationship}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-3">Reference 2 (Optional)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="reference2Name">Full Name</Label>
                  <Input
                    id="reference2Name"
                    value={formData.reference2Name}
                    onChange={(e) => updateFormData("reference2Name", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="reference2Email">Email</Label>
                  <Input
                    id="reference2Email"
                    type="email"
                    value={formData.reference2Email}
                    onChange={(e) => updateFormData("reference2Email", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="reference2Phone">Phone</Label>
                  <Input
                    id="reference2Phone"
                    value={formData.reference2Phone}
                    onChange={(e) => updateFormData("reference2Phone", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="reference2Relationship">Relationship</Label>
                  <Input
                    id="reference2Relationship"
                    value={formData.reference2Relationship}
                    onChange={(e) => updateFormData("reference2Relationship", e.target.value)}
                    placeholder="e.g., Pastor, Mentor, Employer"
                  />
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-3">Emergency Contact *</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="emergencyName">Full Name *</Label>
                  <Input
                    id="emergencyName"
                    value={formData.emergencyName}
                    onChange={(e) => updateFormData("emergencyName", e.target.value)}
                    className={errors.emergencyName ? "border-red-500" : ""}
                  />
                  {errors.emergencyName && <p className="text-red-500 text-xs mt-1">{errors.emergencyName}</p>}
                </div>
                <div>
                  <Label htmlFor="emergencyPhone">Phone *</Label>
                  <Input
                    id="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={(e) => updateFormData("emergencyPhone", e.target.value)}
                    className={errors.emergencyPhone ? "border-red-500" : ""}
                  />
                  {errors.emergencyPhone && <p className="text-red-500 text-xs mt-1">{errors.emergencyPhone}</p>}
                </div>
                <div>
                  <Label htmlFor="emergencyRelationship">Relationship *</Label>
                  <Input
                    id="emergencyRelationship"
                    value={formData.emergencyRelationship}
                    onChange={(e) => updateFormData("emergencyRelationship", e.target.value)}
                    placeholder="e.g., Parent, Spouse, Sibling"
                    className={errors.emergencyRelationship ? "border-red-500" : ""}
                  />
                  {errors.emergencyRelationship && (
                    <p className="text-red-500 text-xs mt-1">{errors.emergencyRelationship}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="h-5 w-5 text-red-600" />
              <h3 className="text-lg font-serif font-semibold">Review & Submit</h3>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <h4 className="font-medium">Application Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p>
                    <strong>Name:</strong> {formData.firstName} {formData.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {formData.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {formData.phone}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Program:</strong>{" "}
                    {formData.program === "foundations" ? "Foundations Program" : "Equip Program"}
                  </p>
                  <p>
                    <strong>Start Date:</strong> {formData.preferredStartDate}
                  </p>
                  <p>
                    <strong>Church:</strong> {formData.churchName}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => updateFormData("agreeToTerms", checked as boolean)}
                />
                <div className="text-sm">
                  <Label htmlFor="agreeToTerms" className="cursor-pointer">
                    I agree to the Terms and Conditions and Privacy Policy *
                  </Label>
                  <p className="text-gray-500 text-xs mt-1">
                    By checking this box, you agree to our terms of service and privacy policy.
                  </p>
                </div>
              </div>
              {errors.agreeToTerms && <p className="text-red-500 text-xs">{errors.agreeToTerms}</p>}

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToBackground"
                  checked={formData.agreeToBackground}
                  onCheckedChange={(checked) => updateFormData("agreeToBackground", checked as boolean)}
                />
                <div className="text-sm">
                  <Label htmlFor="agreeToBackground" className="cursor-pointer">
                    I consent to a background check if accepted *
                  </Label>
                  <p className="text-gray-500 text-xs mt-1">
                    Equip Academy may conduct background checks for accepted students as part of our safety protocols.
                  </p>
                </div>
              </div>
              {errors.agreeToBackground && <p className="text-red-500 text-xs">{errors.agreeToBackground}</p>}
            </div>

            <Alert>
              <AlertDescription>
                Please review all information carefully before submitting. Once submitted, you will not be able to edit
                your application.
              </AlertDescription>
            </Alert>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-red-600 p-3 rounded-full">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-900">Equip Academy Application</h1>
          <p className="text-gray-600 mt-2">Join us in your journey of biblical education and ministry preparation</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>
              Step {currentStep} of {totalSteps}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Form Card */}
        <Card>
          <CardHeader>
            <CardTitle>Application Form</CardTitle>
            <CardDescription>Please fill out all required fields marked with an asterisk (*)</CardDescription>
          </CardHeader>
          <CardContent>{renderStep()}</CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <Button variant="outline" onClick={currentStep === 1 ? onBack : prevStep} className="bg-transparent">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {currentStep === 1 ? "Back to Login" : "Previous"}
          </Button>

          {currentStep < totalSteps ? (
            <Button onClick={nextStep} className="bg-red-600 hover:bg-red-700">
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-red-600 hover:bg-red-700">
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
