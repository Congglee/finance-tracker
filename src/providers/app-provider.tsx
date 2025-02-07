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

  newTransactionSheetOpen: boolean;
  setNewTransactionSheetOpen: (open: boolean) => void;
}>({
  sidebarOpen: true,
  setSidebarOpen: () => {},

  newTransactionSheetOpen: false,
  setNewTransactionSheetOpen: () => {},
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
  const [newTransactionSheetOpen, setNewTransactionSheetOpen] =
    useState<boolean>(false);

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
    <AppContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        newTransactionSheetOpen,
        setNewTransactionSheetOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
