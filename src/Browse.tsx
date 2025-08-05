import Sidebar from "./components/Sidebar";
import BrainDump from "./components/BrainDump";

const Browse = () => {
  return (
    <div className="flex bg-gray-200 w-full min-h-screen">
      <Sidebar />
      <BrainDump />
    </div>
  );
};

export default Browse;
