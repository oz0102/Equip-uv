import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { BookOpen, Clock, Heart, Users, Award, Target, TrendingUp, CalendarDays, Filter } from "lucide-react"
import { useState } from "react"

// Define types for better type safety
interface DailyProgress {
  bibleStudy: {
    completed: boolean;
    chaptersRead: number;
    keyLesson: string;
  };
  prayer: {
    completed: boolean;
    minutesPrayed: number;
    notes: string;
  };
}

interface WeeklyProgress {
  prayerStretch: {
    completed: boolean;
    duration: number;
    reflection: string;
  };
  evangelism: {
    completed: boolean;
    peopleReached: number;
    soulsWon: number;
    testimony: string;
  };
}

export function Tracker() {
  // Calendar and filtering state
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [filterMode, setFilterMode] = useState<"day" | "week">("day")
  const [showCalendar, setShowCalendar] = useState(false)

  // Admin-set targets
  const adminTargets = {
    bibleStudy: { chapters: 2, description: "2 chapters daily" },
    prayer: { minutes: 30, description: "30 minutes daily" },
    prayerStretch: { minutes: 120, description: "120 minutes weekly" },
    evangelism: { people: 5, description: "Reach 5 people weekly" }
  }

  // Helper functions for date manipulation
  const getWeekStart = (date: Date) => {
    const d = new Date(date)
    const day = d.getDay()
    const diff = d.getDate() - day
    return new Date(d.setDate(diff))
  }

  const getWeekEnd = (date: Date) => {
    const weekStart = getWeekStart(date)
    const weekEnd = new Date(weekStart)
    weekEnd.setDate(weekStart.getDate() + 6)
    return weekEnd
  }

  const formatDateRange = (start: Date, end: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' }
    return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`
  }

  const getCurrentDisplayDate = () => {
    if (!selectedDate) return "Today"
    
    if (filterMode === "day") {
      return selectedDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric',
        year: 'numeric'
      })
    } else {
      const weekStart = getWeekStart(selectedDate)
      const weekEnd = getWeekEnd(selectedDate)
      return `Week of ${formatDateRange(weekStart, weekEnd)}`
    }
  }

  // Fixed: Added the setter for dailyProgress
  const [dailyProgress, setDailyProgress] = useState<DailyProgress>({
    bibleStudy: {
      completed: true,
      chaptersRead: 3,
      keyLesson: "Romans 8:28 - God works all things for good. Even in trials, His purpose prevails."
    },
    prayer: {
      completed: true,
      minutesPrayed: 45,
      notes: "Prayed for family, church leadership, and personal guidance for ministry decisions."
    }
  })

  const [weeklyProgress, setWeeklyProgress] = useState<WeeklyProgress>({
    prayerStretch: {
      completed: true,
      duration: 135,
      reflection: "Spent extended time in intercession for the church's upcoming outreach event. Felt led to pray specifically for breakthrough in our community."
    },
    evangelism: {
      completed: true,
      peopleReached: 7,
      soulsWon: 2,
      testimony: "Shared gospel with colleagues at work. Two accepted Christ! Praise God for divine appointments and open hearts."
    }
  })

  // Calculate overall stats
  const overallStats = {
    bibleStudyStreak: 12,
    prayerStreak: 15,
    weeklyGoalsCompleted: 8,
    totalSoulsWon: 18,
    completionRate: 89
  }

  const getProgressColor = (achieved: number, target: number) => {
    const percentage = (achieved / target) * 100
    if (percentage >= 100) return "text-green-600"
    if (percentage >= 80) return "text-blue-600"
    if (percentage >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getProgressBg = (achieved: number, target: number) => {
    const percentage = (achieved / target) * 100
    if (percentage >= 100) return "bg-green-100"
    if (percentage >= 80) return "bg-blue-100"
    if (percentage >= 60) return "bg-yellow-100"
    return "bg-red-100"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Discipleship Growth Tracker</h1>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <p className="text-blue-800 font-medium italic">
            "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!"
          </p>
          <p className="text-blue-600 text-sm mt-1">- 2 Corinthians 5:17</p>
          <p className="text-blue-700 text-sm mt-2">
            Keep pressing forward in your spiritual journey. Every step counts toward becoming who God has called you to be!
          </p>
        </div>
      </div>

      {/* Calendar Filter Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-serif text-lg flex items-center">
              <CalendarDays className="h-5 w-5 mr-2" />
              Date & Period Selection
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant={filterMode === "day" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterMode("day")}
              >
                Daily View
              </Button>
              <Button
                variant={filterMode === "week" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterMode("week")}
              >
                Weekly View
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Selected {filterMode === "day" ? "Date" : "Week"}</h4>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowCalendar(!showCalendar)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {showCalendar ? "Hide" : "Show"} Calendar
                  </Button>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-800">
                    {getCurrentDisplayDate()}
                  </p>
                  {filterMode === "week" && selectedDate && (
                    <p className="text-xs text-blue-600 mt-1">
                      {getWeekStart(selectedDate).toLocaleDateString()} - {getWeekEnd(selectedDate).toLocaleDateString()}
                    </p>
                  )}
                </div>

                <div className="flex flex-col space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const today = new Date()
                      setSelectedDate(today)
                    }}
                  >
                    Go to Today
                  </Button>
                  
                  {filterMode === "week" && (
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (selectedDate) {
                            const prevWeek = new Date(selectedDate)
                            prevWeek.setDate(selectedDate.getDate() - 7)
                            setSelectedDate(prevWeek)
                          }
                        }}
                      >
                        Previous Week
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (selectedDate) {
                            const nextWeek = new Date(selectedDate)
                            nextWeek.setDate(selectedDate.getDate() + 7)
                            setSelectedDate(nextWeek)
                          }
                        }}
                      >
                        Next Week
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {showCalendar && (
              <div className="lg:col-span-2">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border w-full"
                />
              </div>
            )}
            
            {!showCalendar && (
              <div className="lg:col-span-2">
                <div className="p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 text-center">
                  <CalendarDays className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    {filterMode === "day" 
                      ? "Track your daily spiritual goals for the selected date" 
                      : "Review and update your weekly spiritual commitments"
                    }
                  </p>
                  <p className="text-xs text-gray-500">
                    Click "Show Calendar" to select a different {filterMode === "day" ? "date" : "week"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Overall Progress Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                <p className="text-2xl font-bold text-green-600">{overallStats.completionRate}%</p>
              </div>
              <Target className="h-6 w-6 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Bible Study Streak</p>
                <p className="text-2xl font-bold text-blue-600">{overallStats.bibleStudyStreak}</p>
              </div>
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Prayer Streak</p>
                <p className="text-2xl font-bold text-purple-600">{overallStats.prayerStreak}</p>
              </div>
              <Heart className="h-6 w-6 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Weekly Goals</p>
                <p className="text-2xl font-bold text-orange-600">{overallStats.weeklyGoalsCompleted}</p>
              </div>
              <Award className="h-6 w-6 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Souls Won</p>
                <p className="text-2xl font-bold text-red-600">{overallStats.totalSoulsWon}</p>
              </div>
              <Users className="h-6 w-6 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Daily Goals Section */}
      {filterMode === "day" && (
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Daily Spiritual Goals - {selectedDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </CardTitle>
            <p className="text-sm text-gray-600">Spiritual disciplines and progress for {getCurrentDisplayDate()}</p>
          </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bible Study Card */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                    Bible Study
                  </CardTitle>
                  <Badge className="bg-blue-100 text-blue-800">
                    Target: {adminTargets.bibleStudy.description}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Did you study today?</label>
                  <Switch 
                    checked={dailyProgress.bibleStudy.completed} 
                    onCheckedChange={(checked) => setDailyProgress((prev: DailyProgress) => ({
                      ...prev,
                      bibleStudy: { ...prev.bibleStudy, completed: checked }
                    }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Chapters read:</label>
                  <Input
                    type="number"
                    value={dailyProgress.bibleStudy.chaptersRead}
                    onChange={(e) => setDailyProgress((prev: DailyProgress) => ({
                      ...prev,
                      bibleStudy: { ...prev.bibleStudy, chaptersRead: parseInt(e.target.value) || 0 }
                    }))}
                    className="w-20"
                    min="0"
                  />
                  <div className={`text-sm ${getProgressColor(dailyProgress.bibleStudy.chaptersRead, adminTargets.bibleStudy.chapters)}`}>
                    {dailyProgress.bibleStudy.chaptersRead}/{adminTargets.bibleStudy.chapters} chapters
                    {dailyProgress.bibleStudy.chaptersRead >= adminTargets.bibleStudy.chapters && " ✅ Goal exceeded!"}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Key lesson / highlight verse:</label>
                  <Textarea
                    value={dailyProgress.bibleStudy.keyLesson}
                    onChange={(e) => setDailyProgress((prev: DailyProgress) => ({
                      ...prev,
                      bibleStudy: { ...prev.bibleStudy, keyLesson: e.target.value }
                    }))}
                    className="min-h-20"
                    placeholder="Share what God revealed to you today..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Prayer Card */}
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-purple-600" />
                    Prayer
                  </CardTitle>
                  <Badge className="bg-purple-100 text-purple-800">
                    Target: {adminTargets.prayer.description}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Did you pray today?</label>
                  <Switch 
                    checked={dailyProgress.prayer.completed}
                    onCheckedChange={(checked) => setDailyProgress((prev: DailyProgress) => ({
                      ...prev,
                      prayer: { ...prev.prayer, completed: checked }
                    }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Minutes prayed:</label>
                  <Input
                    type="number"
                    value={dailyProgress.prayer.minutesPrayed}
                    onChange={(e) => setDailyProgress((prev: DailyProgress) => ({
                      ...prev,
                      prayer: { ...prev.prayer, minutesPrayed: parseInt(e.target.value) || 0 }
                    }))}
                    className="w-20"
                    min="0"
                  />
                  <div className={`text-sm ${getProgressColor(dailyProgress.prayer.minutesPrayed, adminTargets.prayer.minutes)}`}>
                    {dailyProgress.prayer.minutesPrayed}/{adminTargets.prayer.minutes} minutes
                    {dailyProgress.prayer.minutesPrayed >= adminTargets.prayer.minutes && " ✅ Goal exceeded!"}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Prayer notes:</label>
                  <Textarea
                    value={dailyProgress.prayer.notes}
                    onChange={(e) => setDailyProgress((prev: DailyProgress) => ({
                      ...prev,
                      prayer: { ...prev.prayer, notes: e.target.value }
                    }))}
                    className="min-h-20"
                    placeholder="Record your prayer requests, praise reports, or insights..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      )}

      {/* Weekly Goals Section */}
      {filterMode === "week" && (
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Weekly Spiritual Goals - {selectedDate && formatDateRange(getWeekStart(selectedDate), getWeekEnd(selectedDate))}
            </CardTitle>
            <p className="text-sm text-gray-600">Extended spiritual commitments for {getCurrentDisplayDate()}</p>
          </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Prayer Stretch Card */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-green-600" />
                    Prayer Stretch
                  </CardTitle>
                  <Badge className="bg-green-100 text-green-800">
                    Target: {adminTargets.prayerStretch.description}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Completed this week?</label>
                  <Switch 
                    checked={weeklyProgress.prayerStretch.completed}
                    onCheckedChange={(checked) => setWeeklyProgress((prev: WeeklyProgress) => ({
                      ...prev,
                      prayerStretch: { ...prev.prayerStretch, completed: checked }
                    }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Duration prayed (minutes):</label>
                  <Input
                    type="number"
                    value={weeklyProgress.prayerStretch.duration}
                    onChange={(e) => setWeeklyProgress((prev: WeeklyProgress) => ({
                      ...prev,
                      prayerStretch: { ...prev.prayerStretch, duration: parseInt(e.target.value) || 0 }
                    }))}
                    className="w-24"
                    min="0"
                  />
                  <div className={`text-sm ${getProgressColor(weeklyProgress.prayerStretch.duration, adminTargets.prayerStretch.minutes)}`}>
                    {weeklyProgress.prayerStretch.duration}/{adminTargets.prayerStretch.minutes} minutes
                    {weeklyProgress.prayerStretch.duration >= adminTargets.prayerStretch.minutes && " ✅ Goal exceeded!"}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Reflection:</label>
                  <Textarea
                    value={weeklyProgress.prayerStretch.reflection}
                    onChange={(e) => setWeeklyProgress((prev: WeeklyProgress) => ({
                      ...prev,
                      prayerStretch: { ...prev.prayerStretch, reflection: e.target.value }
                    }))}
                    className="min-h-20"
                    placeholder="How did extended prayer time impact you this week?"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Evangelism Card */}
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <Users className="h-5 w-5 mr-2 text-red-600" />
                    Evangelism
                  </CardTitle>
                  <Badge className="bg-red-100 text-red-800">
                    Target: {adminTargets.evangelism.description}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Did you evangelize this week?</label>
                  <Switch 
                    checked={weeklyProgress.evangelism.completed}
                    onCheckedChange={(checked) => setWeeklyProgress((prev: WeeklyProgress) => ({
                      ...prev,
                      evangelism: { ...prev.evangelism, completed: checked }
                    }))}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">People reached:</label>
                    <Input
                      type="number"
                      value={weeklyProgress.evangelism.peopleReached}
                      onChange={(e) => setWeeklyProgress((prev: WeeklyProgress) => ({
                        ...prev,
                        evangelism: { ...prev.evangelism, peopleReached: parseInt(e.target.value) || 0 }
                      }))}
                      className="w-20"
                      min="0"
                    />
                    <div className={`text-sm ${getProgressColor(weeklyProgress.evangelism.peopleReached, adminTargets.evangelism.people)}`}>
                      {weeklyProgress.evangelism.peopleReached}/{adminTargets.evangelism.people}
                      {weeklyProgress.evangelism.peopleReached >= adminTargets.evangelism.people && " ✅"}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Souls won:</label>
                    <Input
                      type="number"
                      value={weeklyProgress.evangelism.soulsWon}
                      onChange={(e) => setWeeklyProgress((prev: WeeklyProgress) => ({
                        ...prev,
                        evangelism: { ...prev.evangelism, soulsWon: parseInt(e.target.value) || 0 }
                      }))}
                      className="w-20"
                      min="0"
                    />
                    <div className="text-sm text-green-600 font-medium">
                      🎉 {weeklyProgress.evangelism.soulsWon} souls!
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Testimony / experience:</label>
                  <Textarea
                    value={weeklyProgress.evangelism.testimony}
                    onChange={(e) => setWeeklyProgress((prev: WeeklyProgress) => ({
                      ...prev,
                      evangelism: { ...prev.evangelism, testimony: e.target.value }
                    }))}
                    className="min-h-20"
                    placeholder="Share your evangelism experiences and testimonies..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      )}

      {/* Progress Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Growth Summary & Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Progress Bars */}
            <div className="space-y-4">
              <h4 className="font-medium">Current Week Progress</h4>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Bible Study</span>
                    <span className="text-green-600">150%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Daily Prayer</span>
                    <span className="text-green-600">150%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Prayer Stretch</span>
                    <span className="text-green-600">112%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Evangelism</span>
                    <span className="text-green-600">140%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="font-medium">Recent Achievements</h4>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-2 bg-yellow-50 rounded-lg border border-yellow-200">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="text-sm font-medium">Bible Study Champion</p>
                    <p className="text-xs text-gray-600">12-day streak</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-2 bg-purple-50 rounded-lg border border-purple-200">
                  <Heart className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm font-medium">Prayer Warrior</p>
                    <p className="text-xs text-gray-600">15-day streak</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-2 bg-red-50 rounded-lg border border-red-200">
                  <Users className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="text-sm font-medium">Soul Winner</p>
                    <p className="text-xs text-gray-600">18 souls won this cohort</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Encouragement */}
            <div className="space-y-4">
              <h4 className="font-medium">Keep Growing!</h4>
              
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm font-medium text-green-800">Excellent Progress!</p>
                  <p className="text-xs text-green-600 mt-1">
                    You're exceeding all your goals. Your dedication to spiritual growth is inspiring!
                  </p>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-800">Next Milestone</p>
                  <p className="text-xs text-blue-600 mt-1">
                    3 more days to reach a 20-day prayer streak. You can do it!
                  </p>
                </div>

                <Button className="w-full">
                  View Detailed Analytics
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}