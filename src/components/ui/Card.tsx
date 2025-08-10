import { RiDeleteBin5Line } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";
import { useContentContext } from "../../utils/ContentContext";

interface Tag {
  _id: string;
  title: string;
  __v: number;
}

interface data {
  link: string;
  tags: Tag[];
  title: string;
  type: string;
  updatedAt: Date;
}

const Card = (props: data) => {
  const { fetchData } = useContentContext();
  const { link, tags, title, updatedAt } = props;
  const token = localStorage.getItem("token");

  const isIframe = link.trim().startsWith("<iframe");

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = token;
  }

  // Trigger Twitter widget rendering after mounting

  return (
    <div className="bg-zinc-50 w-[270px] font-onest py-7 px-6 rounded-2xl shadow-md">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">{title}</p>
        <IoShareSocialOutline
          className="cursor-pointer"
          onClick={async () => {
            const response = await fetch(
              "http://localhost:3000/api/v1/brain/share",
              {
                method: "POST",
                headers,
                body: JSON.stringify({ contentName: title }),
              }
            );
            const URL = await response.json();
            if (response.ok) alert(URL.link);
          }}
        />
        <RiDeleteBin5Line
          className="cursor-pointer"
          onClick={async () => {
            const response = await fetch(
              "http://localhost:3000/api/v1/content",
              {
                method: "DELETE",
                headers,
                body: JSON.stringify({ link, title }),
              }
            );
            if (response.ok) {
              await fetchData();
            }
          }}
        />
      </div>
      <br />
      {link.includes("\n") ? (
        <ul className="list-disc pl-4 text-zinc-800 font-medium">
          {link.split("\n").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : isIframe ? (
        <div dangerouslySetInnerHTML={{ __html: link }} />
      ) : (
        <p className="text-zinc-800 font-medium">{link}</p>
      )}

      <br />
      <div className="flex gap-2 text-xs">
        {tags.map((tag) => (
          <p
            key={tag._id}
            className="bg-indigo-100 text-indigo-500 font-semibold rounded-2xl p-2.5"
          >
            {tag.title}
          </p>
        ))}
      </div>
      <br />
      <p className="text-xs text-gray-600">
        Added on{" "}
        {new Date(updatedAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </p>
    </div>
  );
};

export default Card;
