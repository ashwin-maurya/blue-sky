import { Tags } from "../../Component/common";

export default function BlogCard(props) {
  const { card } = props;
  return (
    <div className="flex flex-col p-6  border-b-2   w-[80%] dark:border-darkBorderAll max-lg:w-[100%] group">
      <div className="max-lg:gap-1  gap-10 flex  justify-center ">
        <div className="w-[70%]">
          <div className="mb-2 flex items-center max-lg:items-start max-lg:flex-col">
            <div className="flex items-center ">
              <img
                src={card.author_imgURL}
                className="rounded-full object-contain"
                width={28}
                height={32}
                alt=""
              />
              <p className="text-[14.5px] ml-2 font-semibold font-palanquin text-gray-700 dark:text-darkTextMain">
                {card.author}
              </p>
            </div>
            <span className="text-sm ml-2 font-semibold font-palanquin text-gray-400 max-lg:hidden dark:text-darkTextPrimary">
              -
            </span>
            <p className="text-sm ml-1 font-semibold font-palanquin text-gray-400 dark:text-darkTextPrimary">
              {card.date}
            </p>
          </div>
          <div className="flex flex-col ">
            <h3 className="theme-font-minor text-xl my-1 font-bold font-serif  group-hover:text-primaryMain dark:text-darkTextMain">
              {card.label}
            </h3>
          </div>
          <div>
            <p className="max-lg:hidden text-justify dark:text-darkTextMain">
              {card.description.slice(0, 210) +
                (card.description.length > 210 ? "..." : "")}
            </p>
          </div>
          {/* <p className="dark:text-darkTextMain">{card.category}</p> */}
        </div>
        <div className="w-240 flex items-center justify-center w-[30%]">
          <img
            src={card.blog_imgURL}
            className="max-md:w-[90px] object-contain"
            width={180}
            alt="codeimg"
          />
        </div>
      </div>

      <div className="relative flex flex-wrap w-full mt-2">
        {card.tags.map((tag, index) => (
          <Tags key={index} tags={tag} />
        ))}
      </div>
    </div>
  );
}