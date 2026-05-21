import React from "react";
import { ArrowRight, Download, Mail } from "lucide-react";

export const InteractiveHoverButton = React.forwardRef(
  ({ children, className = "", href, ...props }, ref) => {
    const Component = href ? "a" : "button";
    // Determine icon based on button content
    let IconComponent = ArrowRight; // default
    if (
      children.toLowerCase().includes("download") ||
      children.toLowerCase().includes("cv")
    ) {
      IconComponent = Download;
    } else if (
      children.toLowerCase().includes("contact") ||
      children.toLowerCase().includes("email")
    ) {
      IconComponent = Mail;
    }

    // Determine text color based on background
    let textColor = "text-black"; // default for white buttons
    if (className.includes("text-white")) {
      textColor = "text-white";
    } else if (className.includes("text-black")) {
      textColor = "text-black";
    }

    return (
      <Component
        ref={ref}
        href={href}
        className={`group relative inline-block w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold transition-colors no-underline ${className}`}
        {...props}
      >
        <div className="flex items-center gap-2">
          <IconComponent className="h-4 w-4 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0" />
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div
          className={`absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 ${textColor}`}
        >
          <span>{children}</span>
          <ArrowRight />
        </div>
      </Component>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
