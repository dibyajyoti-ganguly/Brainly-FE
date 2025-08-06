import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "../components/ui/Card";

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

const BrainDump = () => {
  const [list, setList] = useState<Data[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
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
        console.log(result);
        setList(result); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-10 w-full bg-gray-100">
      <Navbar />
      <div className="flex flex-wrap gap-8 py-10">
        {list.map((item, index) => {
          return (
            <Card
              key={index}
              link={item.link}
              tags={item.tags}
              title={item.title}
              type={item.type}
              updatedAt={item.updatedAt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BrainDump;
