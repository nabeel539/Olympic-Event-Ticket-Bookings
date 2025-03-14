import { Medal } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2">
          <Medal className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium">
            Olympic Tickets &copy; 2025
          </span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <NavLink
            to="/terms"
            className="text-xs hover:underline underline-offset-4"
          >
            Terms
          </NavLink>
          <NavLink
            to="/privacy"
            className="text-xs hover:underline underline-offset-4"
          >
            Privacy
          </NavLink>
          <NavLink
            to="/contact"
            className="text-xs hover:underline underline-offset-4"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
