import './globals.css'
// app/layout.tsx
import './globals.css'; // Optional, if you have a global stylesheet
import React from 'react';

export const metadata = {
  title: 'SoloPilot',
  description: 'Your freelance AI assistant.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}