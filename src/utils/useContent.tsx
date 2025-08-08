// src/hooks/useContent.ts
import { useState, useCallback } from "react";

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

export function useContent() {
  const [list, setList] = useState<Data[]>([]);

  const fetchData = useCallback(async () => {
    const token = localStorage.getItem("token");

    try {
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };
      if (token) {
        headers["Authorization"] = token;
      }

      const response = await fetch("http://localhost:3000/api/v1/content", {
        headers,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setList(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  return { list, fetchData };
}
