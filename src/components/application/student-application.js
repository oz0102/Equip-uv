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
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, ArrowLeft, ArrowRight, CheckCircle, User, BookOpen, Heart, Users } from "lucide-react";
const initialData = {
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
};
export function StudentApplication({ onBack }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const totalSteps = 6;
    const progress = (currentStep / totalSteps) * 100;
    const updateFormData = (field, value) => {
        setFormData((prev) => (Object.assign(Object.assign({}, prev), { [field]: value })));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => (Object.assign(Object.assign({}, prev), { [field]: "" })));
        }
    };
    const validateStep = (step) => {
        const newErrors = {};
        switch (step) {
            case 1: // Personal Information
                if (!formData.firstName)
                    newErrors.firstName = "First name is required";
                if (!formData.lastName)
                    newErrors.lastName = "Last name is required";
                if (!formData.email)
                    newErrors.email = "Email is required";
                if (!formData.phone)
                    newErrors.phone = "Phone number is required";
                if (!formData.dateOfBirth)
                    newErrors.dateOfBirth = "Date of birth is required";
                if (!formData.address)
                    newErrors.address = "Address is required";
                if (!formData.city)
                    newErrors.city = "City is required";
                if (!formData.state)
                    newErrors.state = "State is required";
                if (!formData.zipCode)
                    newErrors.zipCode = "ZIP code is required";
                break;
            case 2: // Program Selection
                if (!formData.program)
                    newErrors.program = "Please select a program";
                if (!formData.preferredStartDate)
                    newErrors.preferredStartDate = "Please select a start date";
                break;
            case 3: // Educational Background
                if (!formData.highSchoolName)
                    newErrors.highSchoolName = "High school name is required";
                if (!formData.highSchoolGradYear)
                    newErrors.highSchoolGradYear = "Graduation year is required";
                break;
            case 4: // Spiritual Background
                if (!formData.salvationTestimony)
                    newErrors.salvationTestimony = "Salvation testimony is required";
                if (!formData.churchName)
                    newErrors.churchName = "Church name is required";
                if (!formData.yearsAsChristian)
                    newErrors.yearsAsChristian = "This field is required";
                break;
            case 5: // References
                if (!formData.reference1Name)
                    newErrors.reference1Name = "Reference 1 name is required";
                if (!formData.reference1Email)
                    newErrors.reference1Email = "Reference 1 email is required";
                if (!formData.reference1Phone)
                    newErrors.reference1Phone = "Reference 1 phone is required";
                if (!formData.reference1Relationship)
                    newErrors.reference1Relationship = "Relationship is required";
                if (!formData.emergencyName)
                    newErrors.emergencyName = "Emergency contact name is required";
                if (!formData.emergencyPhone)
                    newErrors.emergencyPhone = "Emergency contact phone is required";
                if (!formData.emergencyRelationship)
                    newErrors.emergencyRelationship = "Emergency contact relationship is required";
                break;
            case 6: // Review & Submit
                if (!formData.agreeToTerms)
                    newErrors.agreeToTerms = "You must agree to the terms and conditions";
                if (!formData.agreeToBackground)
                    newErrors.agreeToBackground = "You must agree to the background check";
                break;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
        }
    };
    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };
    const handleSubmit = () => __awaiter(this, void 0, void 0, function* () {
        if (!validateStep(currentStep))
            return;
        setIsSubmitting(true);
        // Simulate API call
        yield new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    });
    if (isSubmitted) {
        return (_jsx("div", Object.assign({ className: "min-h-screen bg-gray-50 flex items-center justify-center p-4" }, { children: _jsx(Card, Object.assign({ className: "w-full max-w-md" }, { children: _jsx(CardContent, Object.assign({ className: "pt-6" }, { children: _jsxs("div", Object.assign({ className: "text-center space-y-4" }, { children: [_jsx("div", Object.assign({ className: "flex justify-center" }, { children: _jsx("div", Object.assign({ className: "bg-green-100 p-3 rounded-full" }, { children: _jsx(CheckCircle, { className: "h-8 w-8 text-green-600" }) })) })), _jsx("h2", Object.assign({ className: "text-2xl font-serif font-bold text-gray-900" }, { children: "Application Submitted!" })), _jsx("p", Object.assign({ className: "text-gray-600" }, { children: "Thank you for your application to Equip Academy. We will review your application and contact you within 5-7 business days." })), _jsx("div", Object.assign({ className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4" }, { children: _jsxs("p", Object.assign({ className: "text-sm text-yellow-800" }, { children: [_jsx("strong", { children: "Next Steps:" }), _jsx("br", {}), "1. Check your email for confirmation", _jsx("br", {}), "2. We'll contact your references", _jsx("br", {}), "3. Schedule an interview if selected"] })) })), _jsx(Button, Object.assign({ onClick: onBack, className: "w-full bg-red-600 hover:bg-red-700" }, { children: "Return to Login" }))] })) })) })) })));
    }
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (_jsxs("div", Object.assign({ className: "space-y-4" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center space-x-2 mb-4" }, { children: [_jsx(User, { className: "h-5 w-5 text-red-600" }), _jsx("h3", Object.assign({ className: "text-lg font-serif font-semibold" }, { children: "Personal Information" }))] })), _jsxs("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, { children: [_jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "firstName" }, { children: "First Name *" })), _jsx(Input, { id: "firstName", value: formData.firstName, onChange: (e) => updateFormData("firstName", e.target.value), className: errors.firstName ? "border-red-500" : "" }), errors.firstName && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.firstName }))] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "lastName" }, { children: "Last Name *" })), _jsx(Input, { id: "lastName", value: formData.lastName, onChange: (e) => updateFormData("lastName", e.target.value), className: errors.lastName ? "border-red-500" : "" }), errors.lastName && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.lastName }))] })] })), _jsxs("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, { children: [_jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "email" }, { children: "Email Address *" })), _jsx(Input, { id: "email", type: "email", value: formData.email, onChange: (e) => updateFormData("email", e.target.value), className: errors.email ? "border-red-500" : "" }), errors.email && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.email }))] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "phone" }, { children: "Phone Number *" })), _jsx(Input, { id: "phone", value: formData.phone, onChange: (e) => updateFormData("phone", e.target.value), className: errors.phone ? "border-red-500" : "" }), errors.phone && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.phone }))] })] })), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "dateOfBirth" }, { children: "Date of Birth *" })), _jsx(Input, { id: "dateOfBirth", type: "date", value: formData.dateOfBirth, onChange: (e) => updateFormData("dateOfBirth", e.target.value), className: errors.dateOfBirth ? "border-red-500" : "" }), errors.dateOfBirth && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.dateOfBirth }))] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "address" }, { children: "Street Address *" })), _jsx(Input, { id: "address", value: formData.address, onChange: (e) => updateFormData("address", e.target.value), className: errors.address ? "border-red-500" : "" }), errors.address && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.address }))] }), _jsxs("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-3 gap-4" }, { children: [_jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "city" }, { children: "City *" })), _jsx(Input, { id: "city", value: formData.city, onChange: (e) => updateFormData("city", e.target.value), className: errors.city ? "border-red-500" : "" }), errors.city && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.city }))] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "state" }, { children: "State *" })), _jsx(Input, { id: "state", value: formData.state, onChange: (e) => updateFormData("state", e.target.value), className: errors.state ? "border-red-500" : "" }), errors.state && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.state }))] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "zipCode" }, { children: "ZIP Code *" })), _jsx(Input, { id: "zipCode", value: formData.zipCode, onChange: (e) => updateFormData("zipCode", e.target.value), className: errors.zipCode ? "border-red-500" : "" }), errors.zipCode && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.zipCode }))] })] }))] })));
            case 2:
                return (_jsxs("div", Object.assign({ className: "space-y-6" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center space-x-2 mb-4" }, { children: [_jsx(BookOpen, { className: "h-5 w-5 text-red-600" }), _jsx("h3", Object.assign({ className: "text-lg font-serif font-semibold" }, { children: "Program Selection" }))] })), _jsxs("div", { children: [_jsx(Label, { children: "Select Program *" }), _jsxs(RadioGroup, Object.assign({ value: formData.program, onValueChange: (value) => updateFormData("program", value), className: "mt-2" }, { children: [_jsxs("div", Object.assign({ className: "border rounded-lg p-4 space-y-2" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center space-x-2" }, { children: [_jsx(RadioGroupItem, { value: "foundations", id: "foundations" }), _jsx(Label, Object.assign({ htmlFor: "foundations", className: "font-medium" }, { children: "Foundations Program" }))] })), _jsx("p", Object.assign({ className: "text-sm text-gray-600 ml-6" }, { children: "A comprehensive 1-year program covering biblical foundations, theology, and practical ministry skills. Perfect for new believers or those seeking to strengthen their biblical knowledge." }))] })), _jsxs("div", Object.assign({ className: "border rounded-lg p-4 space-y-2" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center space-x-2" }, { children: [_jsx(RadioGroupItem, { value: "equip", id: "equip" }), _jsx(Label, Object.assign({ htmlFor: "equip", className: "font-medium" }, { children: "Equip Program" }))] })), _jsx("p", Object.assign({ className: "text-sm text-gray-600 ml-6" }, { children: "An advanced 2-year program for ministry preparation, including advanced theology, leadership development, and hands-on ministry experience. Requires completion of Foundations or equivalent." }))] }))] })), errors.program && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.program }))] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "preferredStartDate" }, { children: "Preferred Start Date *" })), _jsxs(Select, Object.assign({ value: formData.preferredStartDate, onValueChange: (value) => updateFormData("preferredStartDate", value) }, { children: [_jsx(SelectTrigger, Object.assign({ className: errors.preferredStartDate ? "border-red-500" : "" }, { children: _jsx(SelectValue, { placeholder: "Select start date" }) })), _jsxs(SelectContent, { children: [_jsx(SelectItem, Object.assign({ value: "fall-2024" }, { children: "Fall 2024 (September)" })), _jsx(SelectItem, Object.assign({ value: "spring-2025" }, { children: "Spring 2025 (January)" })), _jsx(SelectItem, Object.assign({ value: "fall-2025" }, { children: "Fall 2025 (September)" }))] })] })), errors.preferredStartDate && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.preferredStartDate }))] })] })));
            case 3:
                return (_jsxs("div", Object.assign({ className: "space-y-4" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center space-x-2 mb-4" }, { children: [_jsx(GraduationCap, { className: "h-5 w-5 text-red-600" }), _jsx("h3", Object.assign({ className: "text-lg font-serif font-semibold" }, { children: "Educational Background" }))] })), _jsxs("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, { children: [_jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "highSchoolName" }, { children: "High School Name *" })), _jsx(Input, { id: "highSchoolName", value: formData.highSchoolName, onChange: (e) => updateFormData("highSchoolName", e.target.value), className: errors.highSchoolName ? "border-red-500" : "" }), errors.highSchoolName && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.highSchoolName }))] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "highSchoolGradYear" }, { children: "Graduation Year *" })), _jsx(Input, { id: "highSchoolGradYear", value: formData.highSchoolGradYear, onChange: (e) => updateFormData("highSchoolGradYear", e.target.value), className: errors.highSchoolGradYear ? "border-red-500" : "" }), errors.highSchoolGradYear && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.highSchoolGradYear }))] })] })), _jsxs("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, { children: [_jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "collegeAttended" }, { children: "College/University Attended" })), _jsx(Input, { id: "collegeAttended", value: formData.collegeAttended, onChange: (e) => updateFormData("collegeAttended", e.target.value), placeholder: "Leave blank if not applicable" })] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "collegeDegree" }, { children: "Degree Earned" })), _jsx(Input, { id: "collegeDegree", value: formData.collegeDegree, onChange: (e) => updateFormData("collegeDegree", e.target.value), placeholder: "e.g., Bachelor of Arts" })] })] })), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "collegeGradYear" }, { children: "College Graduation Year" })), _jsx(Input, { id: "collegeGradYear", value: formData.collegeGradYear, onChange: (e) => updateFormData("collegeGradYear", e.target.value), placeholder: "Leave blank if not applicable" })] })] })));
            case 4:
                return (_jsxs("div", Object.assign({ className: "space-y-4" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center space-x-2 mb-4" }, { children: [_jsx(Heart, { className: "h-5 w-5 text-red-600" }), _jsx("h3", Object.assign({ className: "text-lg font-serif font-semibold" }, { children: "Spiritual Background" }))] })), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "salvationTestimony" }, { children: "Salvation Testimony *" })), _jsx(Textarea, { id: "salvationTestimony", value: formData.salvationTestimony, onChange: (e) => updateFormData("salvationTestimony", e.target.value), placeholder: "Please share your testimony of how you came to faith in Jesus Christ...", rows: 4, className: errors.salvationTestimony ? "border-red-500" : "" }), errors.salvationTestimony && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.salvationTestimony }))] }), _jsxs("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, { children: [_jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "churchName" }, { children: "Current Church Name *" })), _jsx(Input, { id: "churchName", value: formData.churchName, onChange: (e) => updateFormData("churchName", e.target.value), className: errors.churchName ? "border-red-500" : "" }), errors.churchName && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.churchName }))] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "pastorName" }, { children: "Pastor's Name" })), _jsx(Input, { id: "pastorName", value: formData.pastorName, onChange: (e) => updateFormData("pastorName", e.target.value) })] })] })), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "yearsAsChristian" }, { children: "How many years have you been a Christian? *" })), _jsx(Input, { id: "yearsAsChristian", value: formData.yearsAsChristian, onChange: (e) => updateFormData("yearsAsChristian", e.target.value), className: errors.yearsAsChristian ? "border-red-500" : "" }), errors.yearsAsChristian && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.yearsAsChristian }))] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "ministryExperience" }, { children: "Ministry Experience" })), _jsx(Textarea, { id: "ministryExperience", value: formData.ministryExperience, onChange: (e) => updateFormData("ministryExperience", e.target.value), placeholder: "Please describe any ministry experience you have had...", rows: 3 })] })] })));
            case 5:
                return (_jsxs("div", Object.assign({ className: "space-y-6" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center space-x-2 mb-4" }, { children: [_jsx(Users, { className: "h-5 w-5 text-red-600" }), _jsx("h3", Object.assign({ className: "text-lg font-serif font-semibold" }, { children: "References & Emergency Contact" }))] })), _jsxs("div", Object.assign({ className: "border rounded-lg p-4" }, { children: [_jsx("h4", Object.assign({ className: "font-medium mb-3" }, { children: "Reference 1 (Required) *" })), _jsxs("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, { children: [_jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "reference1Name" }, { children: "Full Name *" })), _jsx(Input, { id: "reference1Name", value: formData.reference1Name, onChange: (e) => updateFormData("reference1Name", e.target.value), className: errors.reference1Name ? "border-red-500" : "" }), errors.reference1Name && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.reference1Name }))] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "reference1Email" }, { children: "Email *" })), _jsx(Input, { id: "reference1Email", type: "email", value: formData.reference1Email, onChange: (e) => updateFormData("reference1Email", e.target.value), className: errors.reference1Email ? "border-red-500" : "" }), errors.reference1Email && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.reference1Email }))] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "reference1Phone" }, { children: "Phone *" })), _jsx(Input, { id: "reference1Phone", value: formData.reference1Phone, onChange: (e) => updateFormData("reference1Phone", e.target.value), className: errors.reference1Phone ? "border-red-500" : "" }), errors.reference1Phone && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.reference1Phone }))] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "reference1Relationship" }, { children: "Relationship *" })), _jsx(Input, { id: "reference1Relationship", value: formData.reference1Relationship, onChange: (e) => updateFormData("reference1Relationship", e.target.value), placeholder: "e.g., Pastor, Mentor, Employer", className: errors.reference1Relationship ? "border-red-500" : "" }), errors.reference1Relationship && (_jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.reference1Relationship })))] })] }))] })), _jsxs("div", Object.assign({ className: "border rounded-lg p-4" }, { children: [_jsx("h4", Object.assign({ className: "font-medium mb-3" }, { children: "Reference 2 (Optional)" })), _jsxs("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, { children: [_jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "reference2Name" }, { children: "Full Name" })), _jsx(Input, { id: "reference2Name", value: formData.reference2Name, onChange: (e) => updateFormData("reference2Name", e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "reference2Email" }, { children: "Email" })), _jsx(Input, { id: "reference2Email", type: "email", value: formData.reference2Email, onChange: (e) => updateFormData("reference2Email", e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "reference2Phone" }, { children: "Phone" })), _jsx(Input, { id: "reference2Phone", value: formData.reference2Phone, onChange: (e) => updateFormData("reference2Phone", e.target.value) })] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "reference2Relationship" }, { children: "Relationship" })), _jsx(Input, { id: "reference2Relationship", value: formData.reference2Relationship, onChange: (e) => updateFormData("reference2Relationship", e.target.value), placeholder: "e.g., Pastor, Mentor, Employer" })] })] }))] })), _jsxs("div", Object.assign({ className: "border rounded-lg p-4" }, { children: [_jsx("h4", Object.assign({ className: "font-medium mb-3" }, { children: "Emergency Contact *" })), _jsxs("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-3 gap-4" }, { children: [_jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "emergencyName" }, { children: "Full Name *" })), _jsx(Input, { id: "emergencyName", value: formData.emergencyName, onChange: (e) => updateFormData("emergencyName", e.target.value), className: errors.emergencyName ? "border-red-500" : "" }), errors.emergencyName && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.emergencyName }))] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "emergencyPhone" }, { children: "Phone *" })), _jsx(Input, { id: "emergencyPhone", value: formData.emergencyPhone, onChange: (e) => updateFormData("emergencyPhone", e.target.value), className: errors.emergencyPhone ? "border-red-500" : "" }), errors.emergencyPhone && _jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.emergencyPhone }))] }), _jsxs("div", { children: [_jsx(Label, Object.assign({ htmlFor: "emergencyRelationship" }, { children: "Relationship *" })), _jsx(Input, { id: "emergencyRelationship", value: formData.emergencyRelationship, onChange: (e) => updateFormData("emergencyRelationship", e.target.value), placeholder: "e.g., Parent, Spouse, Sibling", className: errors.emergencyRelationship ? "border-red-500" : "" }), errors.emergencyRelationship && (_jsx("p", Object.assign({ className: "text-red-500 text-xs mt-1" }, { children: errors.emergencyRelationship })))] })] }))] }))] })));
            case 6:
                return (_jsxs("div", Object.assign({ className: "space-y-6" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center space-x-2 mb-4" }, { children: [_jsx(CheckCircle, { className: "h-5 w-5 text-red-600" }), _jsx("h3", Object.assign({ className: "text-lg font-serif font-semibold" }, { children: "Review & Submit" }))] })), _jsxs("div", Object.assign({ className: "bg-gray-50 rounded-lg p-4 space-y-3" }, { children: [_jsx("h4", Object.assign({ className: "font-medium" }, { children: "Application Summary" })), _jsxs("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" }, { children: [_jsxs("div", { children: [_jsxs("p", { children: [_jsx("strong", { children: "Name:" }), " ", formData.firstName, " ", formData.lastName] }), _jsxs("p", { children: [_jsx("strong", { children: "Email:" }), " ", formData.email] }), _jsxs("p", { children: [_jsx("strong", { children: "Phone:" }), " ", formData.phone] })] }), _jsxs("div", { children: [_jsxs("p", { children: [_jsx("strong", { children: "Program:" }), " ", formData.program === "foundations" ? "Foundations Program" : "Equip Program"] }), _jsxs("p", { children: [_jsx("strong", { children: "Start Date:" }), " ", formData.preferredStartDate] }), _jsxs("p", { children: [_jsx("strong", { children: "Church:" }), " ", formData.churchName] })] })] }))] })), _jsxs("div", Object.assign({ className: "space-y-4" }, { children: [_jsxs("div", Object.assign({ className: "flex items-start space-x-2" }, { children: [_jsx(Checkbox, { id: "agreeToTerms", checked: formData.agreeToTerms, onCheckedChange: (checked) => updateFormData("agreeToTerms", checked) }), _jsxs("div", Object.assign({ className: "text-sm" }, { children: [_jsx(Label, Object.assign({ htmlFor: "agreeToTerms", className: "cursor-pointer" }, { children: "I agree to the Terms and Conditions and Privacy Policy *" })), _jsx("p", Object.assign({ className: "text-gray-500 text-xs mt-1" }, { children: "By checking this box, you agree to our terms of service and privacy policy." }))] }))] })), errors.agreeToTerms && _jsx("p", Object.assign({ className: "text-red-500 text-xs" }, { children: errors.agreeToTerms })), _jsxs("div", Object.assign({ className: "flex items-start space-x-2" }, { children: [_jsx(Checkbox, { id: "agreeToBackground", checked: formData.agreeToBackground, onCheckedChange: (checked) => updateFormData("agreeToBackground", checked) }), _jsxs("div", Object.assign({ className: "text-sm" }, { children: [_jsx(Label, Object.assign({ htmlFor: "agreeToBackground", className: "cursor-pointer" }, { children: "I consent to a background check if accepted *" })), _jsx("p", Object.assign({ className: "text-gray-500 text-xs mt-1" }, { children: "Equip Academy may conduct background checks for accepted students as part of our safety protocols." }))] }))] })), errors.agreeToBackground && _jsx("p", Object.assign({ className: "text-red-500 text-xs" }, { children: errors.agreeToBackground }))] })), _jsx(Alert, { children: _jsx(AlertDescription, { children: "Please review all information carefully before submitting. Once submitted, you will not be able to edit your application." }) })] })));
            default:
                return null;
        }
    };
    return (_jsx("div", Object.assign({ className: "min-h-screen bg-gray-50 py-8 px-4" }, { children: _jsxs("div", Object.assign({ className: "max-w-4xl mx-auto" }, { children: [_jsxs("div", Object.assign({ className: "text-center mb-8" }, { children: [_jsx("div", Object.assign({ className: "flex justify-center mb-4" }, { children: _jsx("div", Object.assign({ className: "bg-red-600 p-3 rounded-full" }, { children: _jsx(GraduationCap, { className: "h-8 w-8 text-white" }) })) })), _jsx("h1", Object.assign({ className: "text-3xl font-serif font-bold text-gray-900" }, { children: "Equip Academy Application" })), _jsx("p", Object.assign({ className: "text-gray-600 mt-2" }, { children: "Join us in your journey of biblical education and ministry preparation" }))] })), _jsxs("div", Object.assign({ className: "mb-8" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center justify-between text-sm text-gray-600 mb-2" }, { children: [_jsxs("span", { children: ["Step ", currentStep, " of ", totalSteps] }), _jsxs("span", { children: [Math.round(progress), "% Complete"] })] })), _jsx(Progress, { value: progress, className: "h-2" })] })), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Application Form" }), _jsx(CardDescription, { children: "Please fill out all required fields marked with an asterisk (*)" })] }), _jsx(CardContent, { children: renderStep() })] }), _jsxs("div", Object.assign({ className: "flex items-center justify-between mt-6" }, { children: [_jsxs(Button, Object.assign({ variant: "outline", onClick: currentStep === 1 ? onBack : prevStep, className: "bg-transparent" }, { children: [_jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }), currentStep === 1 ? "Back to Login" : "Previous"] })), currentStep < totalSteps ? (_jsxs(Button, Object.assign({ onClick: nextStep, className: "bg-red-600 hover:bg-red-700" }, { children: ["Next", _jsx(ArrowRight, { className: "h-4 w-4 ml-2" })] }))) : (_jsx(Button, Object.assign({ onClick: handleSubmit, disabled: isSubmitting, className: "bg-red-600 hover:bg-red-700" }, { children: isSubmitting ? "Submitting..." : "Submit Application" })))] }))] })) })));
}
