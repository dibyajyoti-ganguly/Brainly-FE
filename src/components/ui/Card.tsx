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
}

const Cards = (props: data) => {
  const { link, tags, title } = props;

  return (
    <div className="bg-zinc-50 w-64 h-80 font-onest py-7 px-6">
      <p className="text-xl font-semibold">{title}</p>
      <br />
      <p>{link}</p>
      <br />
      <div className="flex gap-2 text-xs">
        {tags.map((tag) => (
          <p className="bg-indigo-100 text-indigo-500 font-semibold rounded-2xl p-2.5">
            {tag.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Cards;
