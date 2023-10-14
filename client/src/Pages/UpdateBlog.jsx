import { useState, useContext, useEffect } from "react";
import TinyMCEEditor from "../Helper/Editor";
import blogContext from "../Helper/Context/blogContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateBlog = ({ postid, UserDetails, id, check, setcheck, blog2 }) => {
  // console.log(blog2);
  useEffect(() => {
    if (id == undefined) setcheck(!check);
  }, []);
  console.log("blog2 from write page ");
  const context = useContext(blogContext);
  const { addblogCard, addblogcontent, updateblog } = context;

  const [blogs, setblog] = useState({ ...blog2[0] });
  const [blogContent, setblogContent] = useState({
    ...blog2[0],
  });
  const [tags, settags] = useState(blog2[0]?.tags);
  useEffect(() => {
    setblog({ ...blog2[0] });
    setblogContent({ ...blog2[0] });
    settags(blog2[0]?.tags);
  }, [blog2[0]]);

  useEffect(() => {
    setblog({ ...blogs, UserName: UserDetails?.username });
  }, [UserDetails]);

  const updateDesc = (content) => {
    let input = {
      description: content,
    };
    console.log(input);
    setblogContent({ ...input });

    console.log(blogContent);
  };
  const getTags = (e) => {
    let str = e.target.value;
    let strarr = str.split(",");

    settags(strarr);

    setblog({ ...blogs, tags: strarr, UserName: UserDetails?.username });
    console.log(blogs);
  };
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = {
      [name]: value,
    };
    setblog({ ...blogs, ...input, UserName: UserDetails?.username });
    console.log(blogs);
  };

  const handleupdate = () => {
    console.log(blogs);
    console.log(blog2[0].postID);
    console.log({ ...blogs, ...blogContent });
    updateblog({ ...blogs, ...blogContent }, blog2[0].postID);
    console.log("Saved to Database");
  };

  return (
    <section className="m-3 rounded-lg bg-gray-100 dark:text-white dark:bg-darkBgPrimary">
      <div className="text-[24px] ">
        <div className="max-lg:flex max-lg:flex-col  flex p-10  ">
          <div className="w-[30%]">Title</div>
          <div className="w-[60%]">
            <input
              name="Title"
              value={blogs?.Title}
              onChange={(e) => {
                getInput(e);
              }}
              className="max-lg:mt-2  w-full  rounded-md dark:text-black dark:focus:border-secondary dark:border-3 w-full border-2  outline-none p-3 text-[23px]"
              type="text"
            />
          </div>
        </div>
        <div className="max-lg:flex max-lg:flex-col  group flex p-10 ">
          <div className=" w-[30%]">Category</div>
          <div className="w-[60%]">
            <input
              name="Category"
              value={blogs?.Category}
              onChange={(e) => {
                getInput(e);
              }}
              className="max-lg:mt-2  w-full  rounded-md dark:text-black dark:focus:border-secondary dark:border-3 border-2 focus:border-primaryMain outline-none p-3 text-[23px]"
              type="text"
            />
          </div>
        </div>
        <div className="max-lg:flex max-lg:flex-col  flex p-10 ">
          <div className="w-[30%]">Tags</div>
          <div className="w-[60%]">
            <input
              name="tags"
              value={tags}
              onChange={(e) => {
                getTags(e);
              }}
              className="max-lg:mt-2   rounded-md dark:text-black dark:focus:border-secondary dark:border-3 w-full border-2 outline-none p-3 text-[23px]"
              type="text"
            />
          </div>
        </div>
        <div className="max-lg:flex max-lg:flex-col   flex p-10 ">
          <div className="w-[30%]">Blog Image</div>
          <div className="w-[60%]">
            <input
              name="Blog_url"
              value={blogs?.Blog_url}
              onChange={(e) => {
                getInput(e);
              }}
              className="max-lg:mt-2  w-full  rounded-md border-2 dark:text-black dark:focus:border-secondary dark:border-3 outline-none p-3 text-[23px]"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className=" flex p-10 flex-col justify-around">
        <div className="text-[23px]">Content</div>
        <div className="overflow-hidden rounded-xl  mt-10">
          <TinyMCEEditor
            blogs={blogContent}
            description={updateDesc}
          ></TinyMCEEditor>
        </div>

        <div className="flex justify-center items-center ">
          <button
            className=" border-2 dark:bg-white dark:text-black dark:hover:bg-secondary dark:hover:text-white dark:hover:border-0 border-gray-700 hover:border-blue-800 rounded-lg hover:text-white  mt-3 bg-slate-300 pr-10 pl-10 pt-2 pb-2  hover:bg-primaryMain"
            onClick={handleupdate}
          >
            Update
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpdateBlog;