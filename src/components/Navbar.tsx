import { Button } from "./ui/Button";
import { LuShare2 } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex mt-14 items-center font-onest justify-between">
      <p className="text-3xl font-bold">All Notes</p>
      <div className="flex gap-6">
        <Button
          variant="secondary"
          text="Share Brain"
          startIcon={<LuShare2 />}
          onClick={() => {}}
        />
        <Button
          variant="primary"
          text="Add Content"
          startIcon={<IoMdAdd />}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Navbar;
