import React from "react";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();
  const menuItems = [
    { path: "/", label: "WORK" },
    { path: "/About", label: "ABOUT" }
  ];
  
  // Find the active item based on current path
  const activeIndex = menuItems.findIndex(item => 
    (item.path === "/" && location.pathname === "/") || 
    (item.path !== "/" && location.pathname.startsWith(item.path))
  );
  
  // Calculate marker position
  const totalHeight = (2 * menuItems.length - 1) * 24;
  const markerStyle =
    activeIndex >= 0
      ? {
          position: "fixed",
          right: "24px", 
          top: `calc(50% - ${totalHeight / 2}px + ${activeIndex * 48}px + ${1}px)`,
          width: "24px",
          height: "24px",
          transition: "top 0.5s ease",
        }
      : {};

  return (
    <>
      {activeIndex >= 0 && (
        <div style={markerStyle} className="hidden md:block bg-black dark:bg-white" />
      )}
      <aside className="hidden md:block fixed right-[48px] top-1/2 transform -translate-y-1/2">
        <ul className="space-y-6 px-1">
          {menuItems.map((item) => (
            <li key={item.path} className="text-right h-6">
              <Link 
                to={item.path}
                className="menu-item"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default Menu;