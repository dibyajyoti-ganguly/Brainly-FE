import { useEffect } from "react";
import Navbar from "./Navbar";
import Card from "../components/ui/Card";
import { useContentContext } from "../utils/contentContext"; // ✅ Use context

const BrainDump = () => {
  const { list, fetchData } = useContentContext(); // ✅ Same instance as Browse

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="px-10 w-full bg-gray-100">
      <Navbar />
      <div className="flex flex-wrap gap-8 py-10">
        {list.map((item, index) => (
          <Card
            key={index}
            link={item.link}
            tags={item.tags}
            title={item.title}
            type={item.type}
            updatedAt={item.updatedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default BrainDump;
