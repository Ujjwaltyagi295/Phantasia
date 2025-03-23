import { Link } from "react-router-dom";
import { MobileHeader } from "../components/mobile-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { BookOpen, Clock, Code, FileText, Search, Star, Users } from 'lucide-react';

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MobileHeader title="Courses" />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Explore Courses</h1>
          <p className="text-muted-foreground">
            Discover new skills, expand your knowledge, and advance your career
          </p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search for courses..." 
            className="pl-10 max-w-md"
          />
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="programming">Programming</TabsTrigger>
            <TabsTrigger value="data-science">Data Science</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="programming" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter(course => course.category === "Programming")
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))
              }
            </div>
          </TabsContent>
          <TabsContent value="data-science" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter(course => course.category === "Data Science")
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))
              }
            </div>
          </TabsContent>
          <TabsContent value="design" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter(course => course.category === "Design")
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))
              }
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <Link to={`/courses/${course.id}`}>
      <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <Badge className="bg-indigo-600 hover:bg-indigo-700">{course.category}</Badge>
            <Badge variant="outline">{course.level}</Badge>
          </div>
          <CardTitle className="mt-4 text-3xl">{course.title}</CardTitle>
          <CardDescription >{course.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-sm mb-2">
            <div className="flex items-center">
              {course.category === "Programming" && <Code className="mr-1 h-4 w-4 text-indigo-500" />}
              {course.category === "Data Science" && <FileText className="mr-1 h-4 w-4 text-indigo-500" />}
              {course.category === "Design" && <BookOpen className="mr-1 h-4 w-4 text-indigo-500" />}
              {course.modules} Modules
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4 text-indigo-500" />
              {course.duration}
            </div>
          </div>
          {course.progress !== undefined && (
            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full" 
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Users className="mr-1 h-4 w-4" />
            {course.students.toLocaleString()} students
          </div>
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
            {course.rating.toFixed(1)}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

const courses = [
  {
    id: "web-development",
    title: "Advanced Web Development",
    description: "Master modern web technologies and frameworks",
    category: "Programming",
    level: "Intermediate",
    modules: 12,
    duration: "24 Hours",
    students: 15420,
    rating: 4.8,
    instructor: "John Smith",
    progress: 75
  },
  {
    id: "data-science",
    title: "Data Science Fundamentals",
    description: "Learn data analysis, visualization and machine learning",
    category: "Data Science",
    level: "Intermediate",
    modules: 10,
    duration: "32 Hours",
    students: 12350,
    rating: 4.7,
    instructor: "Sarah Johnson",
    progress: 42
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications",
    category: "Programming",
    level: "Intermediate",
    modules: 8,
    duration: "20 Hours",
    students: 9870,
    rating: 4.6,
    instructor: "Michael Chen"
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description: "Master cloud infrastructure and deployment",
    category: "Programming",
    level: "Advanced",
    modules: 14,
    duration: "36 Hours",
    students: 7650,
    rating: 4.9,
    instructor: "David Wilson"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design Principles",
    description: "Learn to create beautiful and functional interfaces",
    category: "Design",
    level: "Beginner",
    modules: 10,
    duration: "18 Hours",
    students: 11230,
    rating: 4.7,
    instructor: "Emma Rodriguez"
  },
  {
    id: "python-programming",
    title: "Python Programming",
    description: "Introduction to Python programming language",
    category: "Programming",
    level: "Beginner",
    modules: 8,
    duration: "16 Hours",
    students: 21540,
    rating: 4.8,
    instructor: "Alex Thompson",
    progress: 100
  },
  {
    id: "machine-learning",
    title: "Machine Learning Fundamentals",
    description: "Introduction to machine learning algorithms and applications",
    category: "Data Science",
    level: "Advanced",
    modules: 12,
    duration: "40 Hours",
    students: 8920,
    rating: 4.9,
    instructor: "Lisa Wang"
  },
  {
    id: "javascript-essentials",
    title: "JavaScript Essentials",
    description: "Master the core concepts of JavaScript",
    category: "Programming",
    level: "Beginner",
    modules: 10,
    duration: "20 Hours",
    students: 18750,
    rating: 4.6,
    instructor: "Robert Johnson",
    progress: 100
  },
  {
    id: "data-visualization",
    title: "Data Visualization Techniques",
    description: "Create compelling visual representations of data",
    category: "Data Science",
    level: "Intermediate",
    modules: 8,
    duration: "16 Hours",
    students: 7430,
    rating: 4.5,
    instructor: "Jennifer Lee"
  }
];


