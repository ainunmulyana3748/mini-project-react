// src/components/Breadcrumb.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ items }) => {
  return (
    <nav
      className="flex items-center justify-center text-sm text-gray-600 mb-4"
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />}
          {item.href ? (
            <Link
              to={item.href}
              className="hover:underline hover:text-black font-medium"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-500 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
