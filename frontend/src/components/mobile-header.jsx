import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Sidebar } from "./sidebar";

export function MobileHeader({ title }) {
  return (
    <div className="md:hidden flex items-center justify-between p-4 border-b bg-white dark:bg-gray-900">
      <h1 className="font-semibold text-sm">{title}</h1>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[16rem]">
          {/* Sidebar inside the Sheet for mobile */}
          <Sidebar className="flex md:hidden" />
        </SheetContent>
      </Sheet>
    </div>
  );
}

