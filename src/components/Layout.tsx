import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Brain, ImageDown, Home, Sliders } from "lucide-react";
import clsx from "clsx";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Denoise Images", href: "/denoise", icon: ImageDown },
  { name: "Filters", href: "/filters", icon: Sliders },
  { name: "About", href: "/about", icon: Brain },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Brain className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-semibold text-gray-900">
                  UltraDiffusion
                </span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={clsx(
                        "inline-flex items-center px-1 pt-1 text-sm font-medium",
                        location.pathname === item.href
                          ? "border-b-2 border-indigo-500 text-gray-900"
                          : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      )}
                    >
                      <Icon className="h-4 w-4 mr-1" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="bg-white mt-auto">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <p className="text-base text-gray-500">
                © {new Date().getFullYear()} UltraDiffusion Research. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
