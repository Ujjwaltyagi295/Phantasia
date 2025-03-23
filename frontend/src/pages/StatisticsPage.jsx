import { useState } from "react";
import { MobileHeader } from "../components/mobile-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { 
  Area, 
  AreaChart, 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Legend, 
  Line, 
  LineChart, 
  Pie, 
  PieChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../components/ui/chart";

export default function StatisticsPage() {
  const [timeRange, setTimeRange] = useState("month");

  return (
    <div className="flex flex-col min-h-screen ">
      <MobileHeader title="Statistics" />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Learning Statistics</h1>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Last Week</SelectItem>
                <SelectItem value="month">Last Month</SelectItem>
                <SelectItem value="year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="text-md text-muted-foreground mt-2 font-medium">
            Track your learning progress and performance over time
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">Study Hours</CardTitle>
              <CardDescription>Total study time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.5 hours</div>
              <p className="text-sm text-muted-foreground font-medium">
                +12% from previous {timeRange}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">Lessons Completed</CardTitle>
              <CardDescription>Total lessons finished</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">37 lessons</div>
              <p className="text-sm text-muted-foreground font-medium">
                +8% from previous {timeRange}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">Quiz Score</CardTitle>
              <CardDescription>Average quiz performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-sm text-muted-foreground font-medium">
                +5% from previous {timeRange}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bolds">Streak</CardTitle>
              <CardDescription>Consecutive learning days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5 days</div>
              <p className="text-sm text-muted-foreground font-medium">
                Personal best: 14 days
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Study Time Distribution</CardTitle>
                <CardDescription>Hours spent studying by day of week</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <ChartContainer
                  config={{
                    hours: {
                      label: "Hours",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={studyTimeData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="hours" fill="var(--color-hours)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Activity</CardTitle>
                  <CardDescription>Daily activity over the past month</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <ChartContainer
                    config={{
                      minutes: {
                        label: "Minutes",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={activityData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area 
                          type="monotone" 
                          dataKey="minutes" 
                          stroke="var(--color-minutes)" 
                          fill="var(--color-minutes)" 
                          fillOpacity={0.2} 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Subject Distribution</CardTitle>
                  <CardDescription>Time spent by subject area</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <ChartContainer
                    config={{
                      value: {
                        label: "Hours",
                        color: "hsl(var(--chart-3))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={subjectData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="var(--color-value)"
                          dataKey="value"
                          nameKey="name"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="courses" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Progress</CardTitle>
                <CardDescription>Completion percentage by course</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <ChartContainer
                  config={{
                    progress: {
                      label: "Progress (%)",
                      color: "hsl(var(--chart-4))",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={courseProgressData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis type="category" dataKey="name" width={150} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="progress" fill="var(--color-progress)" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="performance" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Quiz Performance</CardTitle>
                <CardDescription>Score trends over time</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <ChartContainer
                  config={{
                    score: {
                      label: "Score (%)",
                      color: "hsl(var(--chart-5))",
                    },
                    average: {
                      label: "Class Average (%)",
                      color: "hsl(var(--chart-6))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={quizPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="quiz" />
                      <YAxis domain={[0, 100]} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="score" 
                        stroke="var(--color-score)" 
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="average" 
                        stroke="var(--color-average)" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

const studyTimeData = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3.2 },
  { day: "Wed", hours: 4.5 },
  { day: "Thu", hours: 3.8 },
  { day: "Fri", hours: 2.1 },
  { day: "Sat", hours: 4.2 },
  { day: "Sun", hours: 4.2 },
];

const activityData = [
  { date: "05/01", minutes: 45 },
  { date: "05/02", minutes: 60 },
  { date: "05/03", minutes: 30 },
  { date: "05/04", minutes: 90 },
  { date: "05/05", minutes: 75 },
  { date: "05/06", minutes: 0 },
  { date: "05/07", minutes: 0 },
  { date: "05/08", minutes: 120 },
  { date: "05/09", minutes: 60 },
  { date: "05/10", minutes: 45 },
  { date: "05/11", minutes: 30 },
  { date: "05/12", minutes: 60 },
  { date: "05/13", minutes: 90 },
  { date: "05/14", minutes: 75 },
  { date: "05/15", minutes: 45 },
  { date: "05/16", minutes: 60 },
  { date: "05/17", minutes: 90 },
  { date: "05/18", minutes: 120 },
  { date: "05/19", minutes: 45 },
  { date: "05/20", minutes: 30 },
  { date: "05/21", minutes: 0 },
  { date: "05/22", minutes: 45 },
  { date: "05/23", minutes: 60 },
  { date: "05/24", minutes: 90 },
  { date: "05/25", minutes: 75 },
  { date: "05/26", minutes: 60 },
  { date: "05/27", minutes: 45 },
  { date: "05/28", minutes: 60 },
  { date: "05/29", minutes: 90 },
  { date: "05/30", minutes: 120 },
];

const subjectData = [
  { name: "Web Dev", value: 12 },
  { name: "Data Science", value: 8 },
  { name: "UI/UX", value: 5 },
  { name: "Mobile Dev", value: 3 },
];

const courseProgressData = [
  { name: "Advanced Web Development", progress: 75 },
  { name: "Data Science Fundamentals", progress: 42 },
  { name: "Python Programming", progress: 100 },
  { name: "HTML & CSS Basics", progress: 100 },
  { name: "JavaScript Essentials", progress: 100 },
  { name: "UI/UX Design Principles", progress: 25 },
  { name: "Mobile App Development", progress: 10 },
];

const quizPerformanceData = [
  { quiz: "Quiz 1", score: 78, average: 72 },
  { quiz: "Quiz 2", score: 82, average: 75 },
  { quiz: "Quiz 3", score: 88, average: 76 },
  { quiz: "Quiz 4", score: 85, average: 78 },
  { quiz: "Quiz 5", score: 90, average: 80 },
  { quiz: "Quiz 6", score: 92, average: 82 },
  { quiz: "Quiz 7", score: 88, average: 81 },
  { quiz: "Quiz 8", score: 95, average: 83 },
];

