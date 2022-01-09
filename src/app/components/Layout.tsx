import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="layout bg-white dark:bg-black dark:text-white">
      {children}
    </main>
  );
}
