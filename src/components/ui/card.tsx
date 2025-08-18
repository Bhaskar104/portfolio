"use client";

import type React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  className = "",
  children,
  onClick,
}) => {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardContentProps> = ({
  className = "",
  children,
}) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};
