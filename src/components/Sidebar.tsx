import Logo from "../assets/brain.png";
import { FiTwitter, FiVideo, FiLink } from "react-icons/fi";
import { FaRegFileAlt, FaHashtag } from "react-icons/fa";

const Sidebar = () => {
  const items = [
    { icon: <FiTwitter />, label: "Tweets" },
    { icon: <FiVideo />, label: "Videos" },
    { icon: <FaRegFileAlt />, label: "Documents" },
    { icon: <FiLink />, label: "Links" },
    { icon: <FaHashtag />, label: "Tags" },
  ];

  return (
    <div className="flex flex-col gap-12 w-1/5 px-4 py-4 bg-zinc-50 font-onest text-black">
      <div className="flex items-center gap-2.5">
        <img src={Logo} alt="App Logo" />
        <p className="text-3xl font-semibold">Brainly</p>
      </div>
      <ul className="flex flex-col gap-4 mx-4 text-gray-700 text-lg">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-5">
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
