
import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export type IconName = keyof typeof LucideIcons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  fallback?: IconName;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  fallback = "CircleAlert", 
  size = 24, 
  className, 
  ...props 
}) => {
  const LucideIcon = LucideIcons[name] || LucideIcons[fallback];
  
  return (
    <LucideIcon
      size={size}
      className={cn("", className)}
      aria-hidden="true"
      {...props}
    />
  );
};

export default Icon;
