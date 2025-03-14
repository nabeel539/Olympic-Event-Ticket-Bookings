import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import { HotelsPage } from "./pages/BrowseHotel";
import EventsPage from "./pages/EventBrowse";
import EventDetailsPage from "./pages/EventDetails";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import { HotelDetailsPage } from "./pages/HotelDetailsPage";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* User Routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard/user" element={<UserDashboard />} />
        </Route>

        {/* Admin Routes - Protected */}
        <Route element={<Layout />}>
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
        </Route>

        {/* Auth Route */}
        <Route path="/auth/*" element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* Public Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailsPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/hotels/:id" element={<HotelDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
