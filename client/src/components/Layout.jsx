import { NavLink, Outlet } from "react-router-dom";
import { Medal } from "lucide-react";
import Footer from "./Shared/Footer";
import { MobileNav } from "./Shared/MobileNav";
import { MainNav } from "./Shared/MainNav";
import { UserNav } from "./Shared/UserNav";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center max-w-screen-xl mx-auto">
          <NavLink
            to="/"
            className="flex items-center gap-2 font-bold text-xl mr-6"
          >
            <Medal className="h-6 w-6 text-blue-600" />
            <span>Olympic Tickets</span>
          </NavLink>
          <MainNav />
          <MobileNav />
          <div className="ml-auto flex items-center gap-2">
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
