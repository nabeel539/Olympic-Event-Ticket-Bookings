import { NavLink } from "react-router-dom";

export function MainNav() {
  const navItems = [
    { href: "/events", label: "Events" },
    // { href: "/venues", label: "Venues" },
    { href: "/hotels", label: "Hotels" },
    // { href: "/about", label: "About" },
  ];

  return (
    <nav className="hidden md:flex gap-6">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors hover:text-primary ${
              isActive ? "text-foreground" : "text-muted-foreground"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
