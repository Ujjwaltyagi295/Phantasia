import { Link, useLocation } from "react-router-dom";
import { BarChart3, BookOpen, Calendar, GraduationCap, LayoutDashboard, Settings, Trophy, User } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

const routes = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard", color: "text-sky-500" },
  { label: "Courses", icon: BookOpen, href: "/dashboard/courses", color: "text-violet-500" },
 
  { label: "Calendar", icon: Calendar, href: "/dashboard/calendar", color: "text-orange-500" },
  { label: "Statistics", icon: BarChart3, href: "/dashboard/statistics", color: "text-emerald-500" },
  { label: "Achievements", icon: Trophy, href: "/dashboard/achievements", color: "text-yellow-500" },
 
  
];

export function Sidebar({ className }) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className={cn("h-full w-[20rem] flex-col border-r bg-slate-50 dark:bg-slate-950 hidden md:flex", className)}>
      {/* Sidebar Header */}
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
          <GraduationCap className="h-8 w-8 text-indigo-600" />
          <span>LearnHub</span>
        </Link>
      </div>

      {/* Sidebar Menu */}
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1 py-2">
          {routes.map((route) => {
            const isActive = pathname === route.href || (route.href !== "/" && pathname.startsWith(route.href));

            return (
              <Button
                key={route.href}
                variant={isActive ? "secondary" : "ghost"}
                className={cn("w-full justify-start", isActive && "bg-slate-200/50 dark:bg-slate-800/50")}
                asChild
              >
                <Link to={route.href}>
                  <route.icon className={cn("mr-2 h-5 w-5", route.color)} />
                  {route.label}
                </Link>
              </Button>
            );
          })}
        </div>
      </ScrollArea>

      {/* Sidebar Footer */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
            AS
          </div>
          <div>
            <p className="font-medium">Aryan Singh</p>
            <p className="text-xs text-muted-foreground">Premium Student</p>
          </div>
        </div>
      </div>
    </div>
  );
}
