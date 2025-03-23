import { useParams } from "react-router-dom";
import { MobileHeader } from "../components/mobile-header";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { BookOpen, CheckCircle, ChevronRight, Clock, FileText, Play, Star, Users } from 'lucide-react';

export default function CoursePage() {
  // In a real app, you would fetch the course data based on the courseId
  const { courseId } = useParams();
  
  const course = {
    id: courseId,
    title: courseId === "web-development" 
      ? "Advanced Web Development" 
      : "Data Science Fundamentals",
    description: courseId === "web-development"
      ? "Master modern web technologies and frameworks to build professional, scalable web applications."
      : "Learn data analysis, visualization and machine learning techniques to extract insights from data.",
    category: courseId === "web-development" ? "Programming" : "Data Science",
    level: "Intermediate",
    modules: courseId === "web-development" ? 12 : 10,
    duration: courseId === "web-development" ? "24 Hours" : "32 Hours",
    students: courseId === "web-development" ? 15420 : 12350,
    rating: courseId === "web-development" ? 4.8 : 4.7,
    instructor: courseId === "web-development" ? "John Smith" : "Sarah Johnson",
    instructorTitle: courseId === "web-development" 
      ? "Senior Web Developer at TechCorp" 
      : "Data Scientist at DataInsights",
    progress: courseId === "web-development" ? 75 : 42,
    overview: courseId === "web-development"
      ? "This comprehensive course covers advanced concepts in modern web development, including frontend frameworks, backend technologies, API design, and deployment strategies. You'll build real-world projects and learn best practices for creating scalable, maintainable web applications."
      : "This course provides a solid foundation in data science, covering statistical analysis, data cleaning, visualization, and machine learning algorithms. You'll work with real datasets and learn how to extract meaningful insights to drive decision-making.",
    whatYouWillLearn: courseId === "web-development"
      ? [
          "Build full-stack web applications using modern frameworks",
          "Implement authentication and authorization",
          "Design and consume RESTful APIs",
          "Optimize application performance",
          "Deploy applications to cloud platforms",
          "Implement testing strategies"
        ]
      : [
          "Clean and preprocess data effectively",
          "Create compelling data visualizations",
          "Apply statistical methods to analyze data",
          "Build and evaluate machine learning models",
          "Extract insights from complex datasets",
          "Communicate findings through data storytelling"
        ],
    modules: courseId === "web-development"
      ? [
          {
            id: 1,
            title: "Modern JavaScript Fundamentals",
            lessons: 5,
            duration: "2h 30m",
            completed: true
          },
          {
            id: 2,
            title: "React.js Essentials",
            lessons: 8,
            duration: "4h 15m",
            completed: true
          },
          {
            id: 3,
            title: "State Management with Redux",
            lessons: 6,
            duration: "3h 45m",
            completed: true
          },
          {
            id: 4,
            title: "Building RESTful APIs",
            lessons: 7,
            duration: "3h 20m",
            completed: false,
            current: true
          },
          {
            id: 5,
            title: "Authentication and Authorization",
            lessons: 5,
            duration: "2h 50m",
            completed: false
          },
          {
            id: 6,
            title: "Testing Web Applications",
            lessons: 6,
            duration: "3h 10m",
            completed: false
          }
        ]
      : [
          {
            id: 1,
            title: "Introduction to Data Science",
            lessons: 4,
            duration: "2h 15m",
            completed: true
          },
          {
            id: 2,
            title: "Data Cleaning and Preprocessing",
            lessons: 6,
            duration: "3h 30m",
            completed: true
          },
          {
            id: 3,
            title: "Exploratory Data Analysis",
            lessons: 5,
            duration: "3h 45m",
            completed: false,
            current: true
          },
          {
            id: 4,
            title: "Data Visualization Techniques",
            lessons: 7,
            duration: "4h 20m",
            completed: false
          },
          {
            id: 5,
            title: "Introduction to Machine Learning",
            lessons: 8,
            duration: "5h 10m",
            completed: false
          }
        ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MobileHeader title={course.title} />
      <main className="flex-1 p-6 md:p-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge className="bg-indigo-600">{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">{course.title}</h1>
              <p className="text-muted-foreground mb-4">{course.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating.toFixed(1)} ({course.students.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center">
                  <FileText className="mr-1 h-4 w-4 text-muted-foreground" />
                  <span>{course.modules} modules</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
                <CardDescription>You've completed {course.progress}% of this course</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={course.progress} className="h-2 mb-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Started on May 15, 2023</span>
                  <span>Estimated completion: July 10, 2023</span>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="overview" className="mb-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">About This Course</h2>
                    <p className="text-muted-foreground">{course.overview}</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">What You'll Learn</h2>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {course.whatYouWillLearn.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Instructor</h2>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`/placeholder.svg?height=48&width=48`} alt={course.instructor} />
                        <AvatarFallback>{course.instructor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{course.instructor}</h3>
                        <p className="text-sm text-muted-foreground">{course.instructorTitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="curriculum" className="mt-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Course Content</h2>
                  <div className="text-sm text-muted-foreground flex flex-wrap gap-x-6 gap-y-2">
                    <div className="flex items-center">
                      <FileText className="mr-1 h-4 w-4" />
                      {course.modules.reduce((acc, module) => acc + module.lessons, 0)} lessons
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {course.duration} total
                    </div>
                  </div>
                  <div className="space-y-2">
                    {course.modules.map((module) => (
                      <Card key={module.id} className={module.current ? "border-indigo-600" : ""}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {module.completed ? (
                                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                </div>
                              ) : module.current ? (
                                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                  <Play className="h-5 w-5 text-indigo-600" />
                                </div>
                              ) : (
                                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                                  <span className="text-gray-600 font-medium">{module.id}</span>
                                </div>
                              )}
                              <div>
                                <h3 className="font-medium">{module.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {module.lessons} lessons • {module.duration}
                                </p>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon">
                              <ChevronRight className="h-5 w-5" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex flex-col items-center p-6 bg-muted rounded-lg">
                      <div className="text-4xl font-bold">{course.rating.toFixed(1)}</div>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-5 w-5 ${i < Math.floor(course.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        Course Rating
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Progress value={70} className="h-2 flex-1" />
                        <span className="text-sm text-muted-foreground w-10 text-right">70%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <Star className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <Progress value={20} className="h-2 flex-1" />
                        <span className="text-sm text-muted-foreground w-10 text-right">20%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(3)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          {[...Array(2)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-muted-foreground" />
                          ))}
                        </div>
                        <Progress value={7} className="h-2 flex-1" />
                        <span className="text-sm text-muted-foreground w-10 text-right">7%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(2)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          {[...Array(3)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-muted-foreground" />
                          ))}
                        </div>
                        <Progress value={2} className="h-2 flex-1" />
                        <span className="text-sm text-muted-foreground w-10 text-right">2%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-muted-foreground" />
                          ))}
                        </div>
                        <Progress value={1} className="h-2 flex-1" />
                        <span className="text-sm text-muted-foreground w-10 text-right">1%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card className="sticky top-6">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Play className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Continue Learning</h3>
                {course.modules.find(m => m.current) && (
                  <div className="mb-4">
                    <p className="font-medium">{course.modules.find(m => m.current)?.title}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Lesson 3: {course.id === "web-development" ? "Building a RESTful API with Express" : "Visualizing Data Distributions"}
                    </p>
                    <Progress value={45} className="h-1 mb-1" />
                    <p className="text-xs text-muted-foreground">45% complete</p>
                  </div>
                )}
                <Button className="w-full mb-2">Resume Course</Button>
                <Button variant="outline" className="w-full">Download Resources</Button>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium mb-2">This course includes:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>{course.modules} modules</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>{course.modules.reduce((acc, module) => acc + module.lessons, 0)} lessons</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{course.duration} of video content</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>Access to student community</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

