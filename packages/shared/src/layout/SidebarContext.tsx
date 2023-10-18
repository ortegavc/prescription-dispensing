import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  expanded: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);


interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
   
    setExpanded(!expanded);
  };

  const contextValue: SidebarContextType = {
    expanded,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }

  return context;
};
