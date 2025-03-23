import { Link } from "react-router-dom";
import { MobileHeader } from "../components/mobile-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { BookOpen, Clock, Code, FileText, Flame, Lightbulb, Rocket, Trophy } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <MobileHeader title="Dashboard" />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Aryan!</h1>
          <p className="text-muted-foreground">
            Continue your learning journey. You have completed 68% of your weekly goal.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-md font-medium">Weekly Progress</CardTitle>
              <Flame className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <Progress value={68} className="h-2 mt-2" />
              <p className="text-sm text-muted-foreground mt-2 font-medium">
                5 of 7 days streak! Keep it up!
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
              <BookOpen className="h-4 w-4 text-violet-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <Progress value={40} className="h-2 mt-2" />
              <p className="text-sm text-muted-foreground mt-2 font-medium">
                2 courses in progress, 5 completed
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <Trophy className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <Progress value={80} className="h-2 mt-2" />
              <p className="text-sm text-muted-foreground mt-2 font-medium">
                3 new badges this month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Study Time</CardTitle>
              <Clock className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24h 35m</div>
              <Progress value={30} className="h-2 mt-2" />
              <p className="text-sm text-muted-foreground mt-2 font-medium">
                This week (↑12% from last week)
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="in-progress" className="mb-8">
          <TabsList>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="in-progress" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Link to="/courses/web-development">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <Badge className="bg-blue-500 hover:bg-blue-600">In Progress</Badge>
                      <div className="text-sm font-medium">75% Complete</div>
                    </div>
                    <CardTitle className="mt-4 text-3xl">Advanced Web Development</CardTitle>
                    <CardDescription>Master modern web technologies and frameworks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm mb-2">
                      <div className="flex items-center">
                        <Code className="mr-1 h-4 w-4 text-blue-500" />
                        12 Modules
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4 text-blue-500" />
                        24 Hours
                      </div>
                    </div>
                    <Progress value={75} className="h-2" />
                  </CardContent>
                </Card>
              </Link>
              <Link to="/courses/data-science">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <Badge className="bg-blue-500 hover:bg-blue-600">In Progress</Badge>
                      <div className="text-sm font-medium">42% Complete</div>
                    </div>
                    <CardTitle className="mt-4 text-3xl">Data Science Fundamentals</CardTitle>
                    <CardDescription>Learn data analysis, visualization and machine learning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm mb-2">
                      <div className="flex items-center">
                        <FileText className="mr-1 h-4 w-4 text-blue-500" />
                        10 Modules
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4 text-blue-500" />
                        32 Hours
                      </div>
                    </div>
                    <Progress value={42} className="h-2" />
                  </CardContent>
                </Card>
              </Link>
              <div className="hidden lg:block">
                <Card className="h-full flex flex-col justify-center items-center p-6 border-dashed">
                  <Rocket className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Discover More Courses</h3>
                  <p className="text-center text-muted-foreground mb-4">
                    Explore our catalog to find your next learning adventure
                  </p>
                  <Link to="/courses">
                    <Badge className="bg-indigo-600 hover:bg-indigo-700">Browse Courses</Badge>
                  </Link>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="recommended" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="border-yellow-500 text-yellow-500">Recommended</Badge>
                    <div className="text-sm font-medium">Intermediate</div>
                  </div>
                  <CardTitle className="mt-4 text-3xl">Mobile App Development</CardTitle>
                  <CardDescription>Build cross-platform mobile applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <Lightbulb className="mr-1 h-4 w-4 text-yellow-500" />
                      8 Modules
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-yellow-500" />
                      20 Hours
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="border-yellow-500 text-yellow-500">Recommended</Badge>
                    <div className="text-sm font-medium">Advanced</div>
                  </div>
                  <CardTitle className="mt-4 text-3xl">Cloud Computing</CardTitle>
                  <CardDescription>Master cloud infrastructure and deployment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <Lightbulb className="mr-1 h-4 w-4 text-yellow-500" />
                      14 Modules
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-yellow-500" />
                      36 Hours
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="border-yellow-500 text-yellow-500">Recommended</Badge>
                    <div className="text-sm font-medium">Beginner</div>
                  </div>
                  <CardTitle className="mt-4 text-3xl">UI/UX Design Principles</CardTitle>
                  <CardDescription>Learn to create beautiful and functional interfaces</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <Lightbulb className="mr-1 h-4 w-4 text-yellow-500" />
                      10 Modules
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-yellow-500" />
                      18 Hours
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="completed" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-md transition-shadow cursor-pointer opacity-80">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="border-green-500 text-green-500">Completed</Badge>
                    <div className="text-sm font-medium">100% Complete</div>
                  </div>
                  <CardTitle className="mt-4 text-3xl">Python Programming</CardTitle>
                  <CardDescription>Introduction to Python programming language</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm mb-2">
                    <div className="flex items-center">
                      <Code className="mr-1 h-4 w-4 text-green-500" />
                      8 Modules
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-green-500" />
                      16 Hours
                    </div>
                  </div>
                  <Progress value={100} className="h-2 bg-muted" />
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow cursor-pointer opacity-80">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="border-green-500 text-green-500">Completed</Badge>
                    <div className="text-sm font-medium">100% Complete</div>
                  </div>
                  <CardTitle className="mt-4 text-3xl">HTML & CSS Basics</CardTitle>
                  <CardDescription>Learn the fundamentals of web development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm mb-2">
                    <div className="flex items-center">
                      <Code className="mr-1 h-4 w-4 text-green-500" />
                      6 Modules
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-green-500" />
                      12 Hours
                    </div>
                  </div>
                  <Progress value={100} className="h-2 bg-muted" />
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow cursor-pointer opacity-80">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="border-green-500 text-green-500">Completed</Badge>
                    <div className="text-sm font-medium">100% Complete</div>
                  </div>
                  <CardTitle className="mt-4 text-3xl">JavaScript Essentials</CardTitle>
                  <CardDescription>Master the core concepts of JavaScript</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm mb-2">
                    <div className="flex items-center">
                      <Code className="mr-1 h-4 w-4 text-green-500" />
                      10 Modules
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-green-500" />
                      20 Hours
                    </div>
                  </div>
                  <Progress value={100} className="h-2 bg-muted" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Upcoming Classes</h2>
          <div className="grid gap-4">
            <Card>
              <CardContent className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-md">Advanced JavaScript Concepts</h3>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">Today, 4:00 PM - 5:30 PM</p>
                  </div>
                </div>
                <Badge className="self-start md:self-auto">Upcoming</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-md">Data Analysis with Python</h3>
                    <p className="text-sm text-muted-foreground mt-2 font-medium">Tomorrow, 2:00 PM - 3:30 PM</p>
                  </div>
                </div>
                <Badge className="self-start md:self-auto">Upcoming</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}


