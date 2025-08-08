/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext } from "react";
import { useContent } from "./useContent";

interface Tag {
  _id: string;
  title: string;
  __v: number;
}

interface Data {
  link: string;
  tags: Tag[];
  title: string;
  type: string;
  updatedAt: Date;
}

interface ContentContextType {
  list: Data[];
  fetchData: () => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { list, fetchData } = useContent();

  return (
    <ContentContext.Provider value={{ list, fetchData }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error("useContentContext must be used within a ContentProvider");
  }
  return context;
};
