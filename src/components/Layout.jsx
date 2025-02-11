import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Code, Mail, User, FolderGit2, Menu, X } from "lucide-react";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getFileIcon = (path) => {
    switch (path) {
      case "/":
        return "📄";
      case "/about":
        return "📘";
      case "/projects":
        return "📂";
      case "/contact":
        return "📧";
      default:
        return "📄";
    }
  };

  const navigationItems = [
    { path: "/", label: "home.jsx", icon: User },
    { path: "/about", label: "about.jsx", icon: FolderGit2 },
    { path: "/projects", label: "projects.jsx", icon: Code },
    { path: "/contact", label: "contact.jsx", icon: Mail },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono">
      <header className="bg-[#323233] p-2 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <Code className="w-5 h-5 text-blue-400" />
          <span className="hidden sm:inline">
            Portfolio - Visual Studio Code
          </span>
          <span className="sm:hidden">Portfolio</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1 lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#d4d4d4]" />
            ) : (
              <Menu className="w-6 h-6 text-[#d4d4d4]" />
            )}
          </button>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1e1e1e] z-40 lg:hidden pt-16">
          <div className="p-4 space-y-4">
            {navigationItems.map(({ path, label, icon: Icon }) => (
              <div
                key={path}
                onClick={() => handleNavigation(path)}
                className={`flex items-center space-x-4 p-3 rounded-md cursor-pointer ${
                  location.pathname === path ? "bg-[#37373d]" : ""
                }`}
              >
                <Icon className="w-6 h-6" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex">
        <div className="hidden lg:flex w-16 bg-[#252526] flex-col items-center py-4 space-y-6">
          {navigationItems.map(({ path, icon: Icon }) => (
            <div
              key={path}
              onClick={() => navigate(path)}
              className={`cursor-pointer p-2 rounded-md ${
                location.pathname === path ? "bg-[#37373d]" : ""
              }`}
            >
              <Icon className="w-6 h-6" />
            </div>
          ))}
        </div>

        <div className="hidden lg:block w-64 bg-[#252526] border-r border-[#3c3c3c] p-4">
          <h2 className="text-sm uppercase mb-4">Explorer</h2>
          <div className="space-y-2">
            {navigationItems.map(({ path, label }) => (
              <div
                key={path}
                onClick={() => navigate(path)}
                className={`flex items-center space-x-2 text-sm cursor-pointer ${
                  location.pathname === path ? "text-white" : "text-[#8c8c8c]"
                }`}
              >
                <span className="text-blue-400">{getFileIcon(path)}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-auto">{children}</div>
      </div>

      <footer className="bg-[#007acc] text-white text-sm p-1 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span>🌿 main</span>
          <span className="hidden sm:inline">📦 npm</span>
        </div>
        <div className="text-xs sm:text-sm">Powered by React + JavaScript</div>
      </footer>
    </div>
  );
};

export default Layout;
