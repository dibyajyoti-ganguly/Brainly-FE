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
  const { link, tags, title, updatedAt } = props;

  return (
    <div className="bg-zinc-50 w-64 h-[330px] font-onest py-7 px-6 rounded-2xl shadow-md">
      <p className="text-xl font-semibold">{title}</p>
      <br />
      {link.includes("\n") ? (
        <ul className="list-disc pl-4 text-zinc-800 font-medium">
          {link.split("\n").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-zinc-800 font-medium">{link}</p>
      )}
      <br />
      <div className="flex gap-2 text-xs">
        {tags.map((tag) => (
          <p className="bg-indigo-100 text-indigo-500 font-semibold rounded-2xl p-2.5">
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
