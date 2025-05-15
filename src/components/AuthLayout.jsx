import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AuthLayout = ({
  title,
  description,
  children,
  footerText,
  footerLink,
  footerLinkText,
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 rounded-xl w-96 space-y-4 shadow-lg bg-white">
        <ArrowLeft
          size={16}
          className="mr-2 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-zinc-400">{description}</p>
        {children}
        {footerText && footerLink && (
          <p className="text-center text-sm text-zinc-400">
            {footerText}{" "}
            <Link to={footerLink} className="text-blue-400 hover:underline">
              {footerLinkText}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
