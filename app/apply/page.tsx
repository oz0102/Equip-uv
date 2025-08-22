"use client"

import { StudentApplication } from "@/components/application/student-application"
import { useRouter } from "next/navigation"

export default function ApplyPage() {
  const router = useRouter()

  const handleBack = () => {
    router.push("/")
  }

  return <StudentApplication onBack={handleBack} />
}
