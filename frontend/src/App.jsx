
import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/DashBoard";
import { Home } from "./pages/Home";
import StatisticsPage from "./pages/StatisticsPage";
import CoursePage from "./pages/CoursesPage";
import AchievementsPage from "./pages/AchievementsPage";
import CalendarPage from "./pages/CalenderPage";
import CoursesPage from "./pages/CoursesPage";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      
      <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="courses/:courseId" element={<CoursePage />} />
            <Route path="statistics" element={<StatisticsPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="achievements" element={<AchievementsPage />} />
          </Route>
    </Routes>
   </Router>
  )
}

export default App