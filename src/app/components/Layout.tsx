import React from 'react';
import classNames from 'classnames';

type LayoutProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Layout({ className, children }: LayoutProps) {
  return (
    <main
      className={classNames(
        className,
        'layout bg-white dark:bg-black dark:text-white'
      )}
    >
      {children}
    </main>
  );
}
