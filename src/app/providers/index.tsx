'use client';

import QueryProvider from './QueryProvider';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};
