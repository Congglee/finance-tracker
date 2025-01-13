"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const AppContext = createContext<{
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}>({
  sidebarOpen: true,
  setSidebarOpen: () => {},
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpenState] = useState<boolean>(true);

  const setSidebarOpen = useCallback(
    (open: boolean) => {
      setSidebarOpenState(open);
      localStorage.setItem("sidebar-open", JSON.stringify(open));
    },
    [setSidebarOpenState]
  );

  useEffect(() => {
    const _sidebarOpen = localStorage.getItem("sidebar-open");
    setSidebarOpenState(_sidebarOpen ? JSON.parse(_sidebarOpen) : true);
  }, [setSidebarOpenState]);

  return (
    <AppContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </AppContext.Provider>
  );
}
