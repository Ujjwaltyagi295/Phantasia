import { MobileHeader } from "../components/mobile-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import {
  Award,
  BookOpen,
  Calendar,
  Clock,
  Code,
  FileText,
  Flame,
  GraduationCap,
  Medal,
  Star,
  Trophy,
  Users,
} from "lucide-react"

export default function AchievementsPage() {
  return (
    <div className="flex flex-col min-h-screen ">
      <MobileHeader title="Achievements" />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Achievements</h1>
          <p className="text-muted-foreground">Track your progress and earn badges as you learn</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total XP</CardTitle>
              <CardDescription>Experience points earned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4,250 XP</div>
              <p className="text-xs text-muted-foreground mt-1">Level 8 (750 XP to Level 9)</p>
              <Progress value={75} className="h-2 mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
              <CardDescription>Achievement badges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground mt-1">3 new badges this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <CardDescription>Consecutive learning days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5 days</div>
              <p className="text-xs text-muted-foreground mt-1">Personal best: 14 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Leaderboard Rank</CardTitle>
              <CardDescription>Your position among peers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#12</div>
              <p className="text-xs text-muted-foreground mt-1">Top 5% of all students</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="badges" className="mb-8">
          <TabsList>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
          </TabsList>
          <TabsContent value="badges" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
                    <GraduationCap className="h-12 w-12 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Course Completer</h3>
                  <p className="text-sm text-muted-foreground mb-4">Complete 3 full courses</p>
                  <Badge className="bg-green-600">Earned</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <Flame className="h-12 w-12 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Streak Master</h3>
                  <p className="text-sm text-muted-foreground mb-4">Maintain a 7-day learning streak</p>
                  <Badge className="bg-green-600">Earned</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                    <Code className="h-12 w-12 text-purple-600 dark:text-purple-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Code Wizard</h3>
                  <p className="text-sm text-muted-foreground mb-4">Complete 10 coding challenges</p>
                  <Badge className="bg-green-600">Earned</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mb-4">
                    <Star className="h-12 w-12 text-yellow-600 dark:text-yellow-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Perfect Score</h3>
                  <p className="text-sm text-muted-foreground mb-4">Get 100% on any quiz</p>
                  <Badge className="bg-green-600">Earned</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-green-600 dark:text-green-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Team Player</h3>
                  <p className="text-sm text-muted-foreground mb-4">Participate in 5 study groups</p>
                  <Badge className="bg-green-600">Earned</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-4">
                    <Clock className="h-12 w-12 text-orange-600 dark:text-orange-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Time Keeper</h3>
                  <p className="text-sm text-muted-foreground mb-4">Study for 50+ hours total</p>
                  <Badge className="bg-green-600">Earned</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
                    <FileText className="h-12 w-12 text-red-600 dark:text-red-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Assignment Ace</h3>
                  <p className="text-sm text-muted-foreground mb-4">Submit 10 assignments on time</p>
                  <Badge className="bg-green-600">Earned</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center mb-4">
                    <Calendar className="h-12 w-12 text-pink-600 dark:text-pink-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Early Bird</h3>
                  <p className="text-sm text-muted-foreground mb-4">Complete 5 lessons before 9 AM</p>
                  <Badge className="bg-green-600">Earned</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                    <BookOpen className="h-12 w-12 text-slate-600 dark:text-slate-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Bookworm</h3>
                  <p className="text-sm text-muted-foreground mb-4">Read 20 articles in the resource library</p>
                  <Badge variant="outline" className="text-muted-foreground">
                    In Progress (14/20)
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="leaderboard" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Leaderboard</CardTitle>
                <CardDescription>Top performers this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-yellow-200 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300 font-bold">
                        1
                      </div>
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>RJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Rachel Johnson</p>
                        <p className="text-sm text-muted-foreground">Level 12</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-yellow-600" />
                      <span className="font-bold">6,240 XP</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                        2
                      </div>
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>MP</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Michael Park</p>
                        <p className="text-sm text-muted-foreground">Level 11</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Medal className="h-5 w-5 text-slate-600" />
                      <span className="font-bold">5,890 XP</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-200 dark:bg-orange-800 text-orange-700 dark:text-orange-300 font-bold">
                        3
                      </div>
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>SL</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Sarah Lee</p>
                        <p className="text-sm text-muted-foreground">Level 10</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-orange-600" />
                      <span className="font-bold">5,420 XP</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground font-bold">
                        4
                      </div>
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">James Davis</p>
                        <p className="text-sm text-muted-foreground">Level 9</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">4,980 XP</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground font-bold">
                        5
                      </div>
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>EW</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Emily Wong</p>
                        <p className="text-sm text-muted-foreground">Level 9</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">4,750 XP</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border-2 border-blue-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-300 font-bold">
                        12
                      </div>
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Aryan Singh</p>
                        <p className="text-sm text-muted-foreground">Level 8</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">4,250 XP</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="challenges" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Active Challenges</CardTitle>
                  <CardDescription>Challenges you can complete now</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg border">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                          <Flame className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                        </div>
                        <div>
                          <h3 className="font-medium">10-Day Streak</h3>
                          <p className="text-sm text-muted-foreground">Study for 10 days in a row</p>
                        </div>
                      </div>
                      <Badge>500 XP</Badge>
                    </div>
                    <Progress value={50} className="h-2 mb-1" />
                    <p className="text-xs text-muted-foreground">5/10 days completed</p>
                  </div>

                  <div className="p-4 rounded-lg border">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                          <Code className="h-5 w-5 text-green-600 dark:text-green-300" />
                        </div>
                        <div>
                          <h3 className="font-medium">Coding Marathon</h3>
                          <p className="text-sm text-muted-foreground">Complete 5 coding exercises in one day</p>
                        </div>
                      </div>
                      <Badge>300 XP</Badge>
                    </div>
                    <Progress value={40} className="h-2 mb-1" />
                    <p className="text-xs text-muted-foreground">2/5 exercises completed</p>
                  </div>

                  <div className="p-4 rounded-lg border">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                          <BookOpen className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                        </div>
                        <div>
                          <h3 className="font-medium">Resource Explorer</h3>
                          <p className="text-sm text-muted-foreground">Read 20 articles in the resource library</p>
                        </div>
                      </div>
                      <Badge>400 XP</Badge>
                    </div>
                    <Progress value={70} className="h-2 mb-1" />
                    <p className="text-xs text-muted-foreground">14/20 articles read</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Completed Challenges</CardTitle>
                  <CardDescription>Challenges you've successfully finished</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg border bg-muted/30">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                          <Trophy className="h-5 w-5 text-green-600 dark:text-green-300" />
                        </div>
                        <div>
                          <h3 className="font-medium">Course Completer</h3>
                          <p className="text-sm text-muted-foreground">Complete 3 full courses</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                      >
                        Earned 600 XP
                      </Badge>
                    </div>
                    <Progress value={100} className="h-2 mb-1" />
                    <p className="text-xs text-muted-foreground">Completed on May 10, 2023</p>
                  </div>

                  <div className="p-4 rounded-lg border bg-muted/30">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <Star className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                        </div>
                        <div>
                          <h3 className="font-medium">Perfect Score</h3>
                          <p className="text-sm text-muted-foreground">Get 100% on any quiz</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                      >
                        Earned 250 XP
                      </Badge>
                    </div>
                    <Progress value={100} className="h-2 mb-1" />
                    <p className="text-xs text-muted-foreground">Completed on April 28, 2023</p>
                  </div>

                  <div className="p-4 rounded-lg border bg-muted/30">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-orange-600 dark:text-orange-300" />
                        </div>
                        <div>
                          <h3 className="font-medium">Study Marathon</h3>
                          <p className="text-sm text-muted-foreground">Study for 3+ hours in one day</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                      >
                        Earned 200 XP
                      </Badge>
                    </div>
                    <Progress value={100} className="h-2 mb-1" />
                    <p className="text-xs text-muted-foreground">Completed on April 15, 2023</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

