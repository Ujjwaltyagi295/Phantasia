import { useState } from "react";
import { MobileHeader } from "../components/mobile-header";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { ChevronLeft, ChevronRight, Code, FileText, Lightbulb, MoreHorizontal, Plus, Users } from 'lucide-react';

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState("May");
  const [currentYear, setCurrentYear] = useState("2023");
  const [viewType, setViewType] = useState("month");

  return (
    <div className="flex flex-col min-h-screen ">
      <MobileHeader title="Calendar" />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
            <div className="flex items-center gap-2">
              <Select value={viewType} onValueChange={setViewType}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="View" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Day</SelectItem>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                </SelectContent>
              </Select>
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Event
              </Button>
            </div>
          </div>
          <p className="text-muted-foreground">
            Schedule and manage your classes and learning sessions
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-0">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h2 className="text-xl font-semibold">{currentMonth} {currentYear}</h2>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline">Today</Button>
            </div>
            
            {viewType === "month" && (
              <div className="grid grid-cols-7 text-center">
                <div className="py-3 border-b font-medium">Sun</div>
                <div className="py-3 border-b font-medium">Mon</div>
                <div className="py-3 border-b font-medium">Tue</div>
                <div className="py-3 border-b font-medium">Wed</div>
                <div className="py-3 border-b font-medium">Thu</div>
                <div className="py-3 border-b font-medium">Fri</div>
                <div className="py-3 border-b font-medium">Sat</div>
                
                {/* Previous month days */}
                <div className="h-32 p-2 border text-muted-foreground">30</div>
                
                {/* Current month days */}
                {Array.from({ length: 31 }, (_, i) => {
                  const day = i + 1;
                  const isToday = day === 15;
                  const hasEvents = [3, 7, 10, 15, 18, 22, 25, 28].includes(day);
                  
                  return (
                    <div 
                      key={day} 
                      className={`h-32 p-2 border relative ${isToday ? 'bg-muted/50' : ''}`}
                    >
                      <div className={`flex justify-between ${isToday ? 'font-bold' : ''}`}>
                        <span>{day}</span>
                        {hasEvents && (
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      
                      {day === 3 && (
                        <div className="mt-1 p-1 text-xs rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                          10:00 AM - Data Science
                        </div>
                      )}
                      
                      {day === 7 && (
                        <div className="mt-1 p-1 text-xs rounded bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                          2:00 PM - Study Group
                        </div>
                      )}
                      
                      {day === 10 && (
                        <div className="mt-1 p-1 text-xs rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
                          11:30 AM - Web Dev
                        </div>
                      )}
                      
                      {day === 15 && (
                        <>
                          <div className="mt-1 p-1 text-xs rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                            10:00 AM - Data Science
                          </div>
                          <div className="mt-1 p-1 text-xs rounded bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300">
                            3:00 PM - Quiz
                          </div>
                        </>
                      )}
                      
                      {day === 18 && (
                        <div className="mt-1 p-1 text-xs rounded bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                          2:00 PM - Study Group
                        </div>
                      )}
                      
                      {day === 22 && (
                        <div className="mt-1 p-1 text-xs rounded bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300">
                          1:00 PM - Assignment Due
                        </div>
                      )}
                      
                      {day === 25 && (
                        <div className="mt-1 p-1 text-xs rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
                          11:30 AM - Web Dev
                        </div>
                      )}
                      
                      {day === 28 && (
                        <div className="mt-1 p-1 text-xs rounded bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300">
                          4:00 PM - Office Hours
                        </div>
                      )}
                    </div>
                  );
                })}
                
                {/* Next month days */}
                {Array.from({ length: 4 }, (_, i) => (
                  <div key={i} className="h-32 p-2 border text-muted-foreground">{i + 1}</div>
                ))}
              </div>
            )}
            
            {viewType === "week" && (
              <div>
                <div className="grid grid-cols-8 text-center">
                  <div className="py-3 border-b"></div>
                  <div className="py-3 border-b font-medium">Sun 14</div>
                  <div className="py-3 border-b font-medium">Mon 15</div>
                  <div className="py-3 border-b font-medium">Tue 16</div>
                  <div className="py-3 border-b font-medium">Wed 17</div>
                  <div className="py-3 border-b font-medium">Thu 18</div>
                  <div className="py-3 border-b font-medium">Fri 19</div>
                  <div className="py-3 border-b font-medium">Sat 20</div>
                </div>
                
                <div className="grid grid-cols-8">
                  <div className="border-r">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div key={i} className="h-20 border-b px-2 py-1 text-xs text-right">
                        {i + 8}:00
                      </div>
                    ))}
                  </div>
                  
                  {Array.from({ length: 7 }, (_, dayIndex) => (
                    <div key={dayIndex} className="relative">
                      {Array.from({ length: 12 }, (_, hourIndex) => (
                        <div key={hourIndex} className="h-20 border-b border-r"></div>
                      ))}
                      
                      {dayIndex === 1 && (
                        <div 
                          className="absolute top-0 left-0 right-0 h-20 m-1 p-2 text-xs rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                          style={{ top: "calc(2 * 5rem + 0.25rem)" }}
                        >
                          <div className="font-medium">Data Science</div>
                          <div>10:00 AM - 11:30 AM</div>
                        </div>
                      )}
                      
                      {dayIndex === 1 && (
                        <div 
                          className="absolute top-0 left-0 right-0 h-20 m-1 p-2 text-xs rounded bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300"
                          style={{ top: "calc(7 * 5rem + 0.25rem)" }}
                        >
                          <div className="font-medium">Quiz</div>
                          <div>3:00 PM - 4:00 PM</div>
                        </div>
                      )}
                      
                      {dayIndex === 4 && (
                        <div 
                          className="absolute top-0 left-0 right-0 h-20 m-1 p-2 text-xs rounded bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                          style={{ top: "calc(6 * 5rem + 0.25rem)" }}
                        >
                          <div className="font-medium">Study Group</div>
                          <div>2:00 PM - 3:30 PM</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {viewType === "day" && (
              <div>
                <div className="text-center py-3 border-b font-medium">
                  Monday, May 15
                </div>
                
                <div className="grid grid-cols-1 divide-y">
                  {Array.from({ length: 12 }, (_, i) => {
                    const hour = i + 8;
                    const hasEvent = hour === 10 || hour === 15;
                    
                    return (
                      <div key={i} className="flex">
                        <div className="w-20 p-2 text-right text-sm border-r">
                          {hour}:00
                        </div>
                        <div className="flex-1 min-h-[5rem] p-2 relative">
                          {hour === 10 && (
                            <div className="p-2 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                              <div className="font-medium">Data Science Fundamentals</div>
                              <div className="text-sm">10:00 AM - 11:30 AM</div>
                              <div className="flex items-center gap-2 mt-2 text-xs">
                                <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950">
                                  <FileText className="h-3 w-3 mr-1" />
                                  Lecture
                                </Badge>
                                <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950">
                                  <Users className="h-3 w-3 mr-1" />
                                  Sarah Johnson
                                </Badge>
                              </div>
                            </div>
                          )}
                          
                          {hour === 15 && (
                            <div className="p-2 rounded bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300">
                              <div className="font-medium">Data Science Quiz</div>
                              <div className="text-sm">3:00 PM - 4:00 PM</div>
                              <div className="flex items-center gap-2 mt-2 text-xs">
                                <Badge variant="outline" className="bg-yellow-50 dark:bg-yellow-950">
                                  <Lightbulb className="h-3 w-3 mr-1" />
                                  Assessment
                                </Badge>
                                <Badge variant="outline" className="bg-yellow-50 dark:bg-yellow-950">
                                  <Code className="h-3 w-3 mr-1" />
                                  Module 3
                                </Badge>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Upcoming Events</h2>
          <div className="grid gap-4">
            <Card>
              <CardContent className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-medium">Data Science Fundamentals</h3>
                    <p className="text-sm text-muted-foreground">Today, 10:00 AM - 11:30 AM</p>
                  </div>
                </div>
                <Badge>Today</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-yellow-600 dark:text-yellow-300" />
                  </div>
                  <div>
                    <h3 className="font-medium">Data Science Quiz</h3>
                    <p className="text-sm text-muted-foreground">Today, 3:00 PM - 4:00 PM</p>
                  </div>
                </div>
                <Badge>Today</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-medium">Study Group Session</h3>
                    <p className="text-sm text-muted-foreground">Thursday, 2:00 PM - 3:30 PM</p>
                  </div>
                </div>
                <Badge variant="outline">In 3 days</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

