import { Outlet } from "react-router-dom"
import { Sidebar } from "./sidebar"

export default function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Fixed Full-Height Sidebar */}
      <div className="h-screen">
        <Sidebar />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}
