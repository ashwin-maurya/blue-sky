import { useState, useContext, useEffect } from "react";
import TinyMCEEditor from "../Helper/Editor";
import blogContext from "../Helper/Context/blogContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TitleandContent from "../Component/common/WriteComponents/TitleandContent";
import Tag from "../Component/common/WriteComponents/Tag";
import Category from "../Component/common/WriteComponents/Category";
import FeaturedImage from "../Component/common/WriteComponents/FeaturedImage";
import Content from "../Component/common/WriteComponents/Content";
const WriteBlog = ({ postid, UserDetails, id, check, setcheck, blog2 }) => {
  const [blogs, setblog] = useState({
    postID: postid,
    userID: JSON.parse(localStorage.getItem("UserData")).UserID,
    UserName: "",
  });

  const [blogContent, setblogContent] = useState({});
  useEffect(() => {
    if (id == undefined) setcheck(!check);
  }, []);
  console.log("blog2 from write page ");
  const [featuredImage, setfeaturedImage] = useState("");

  useEffect(() => {
    console.log(featuredImage);
    let input = {
      Blog_url: featuredImage,
    };
    setblog({ ...blogs, UserName: UserDetails?.username, ...input });
    setblogContent({ ...blogContent, ...blogs, ...input });

    console.log(blogs);
    console.log(blogContent);
  }, [featuredImage]);
  const context = useContext(blogContext);

  const { addblogCard, addblogcontent, updateblog } = context;

  // postID: postid,
  // userID: JSON.parse(localStorage.getItem("UserData")).UserID,
  // UserName:""
  const [tags, settags] = useState("");
  useEffect(() => {
    setblog({ ...blogs, UserName: UserDetails?.username });
  }, [UserDetails]);

  const updateDesc = (content) => {
    let input = {
      description: content,
    };

    setblogContent({ ...blogContent, ...blogs, ...input });

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

  const handleadd = async () => {
    try {
      let input = {
        Blog_url: featuredImage,
      };

      setblog({ ...blogs, ...input, UserName: UserDetails });
      console.log(blogs);
      setblogContent({ ...blogContent, ...input });
      console.log(blogContent);
      await addblogCard(blogs);
      await addblogcontent(blogContent);
      toast.success("Your blog added Successfully!");
    } catch (error) {
      toast.error("Error occured while adding your blog");
    }

    console.log("Saved to Database");
  };

  return (
    <section className="p-4 rounded-lg flex  dark:text-white dark:bg-darkBgPrimary">
      <div className=" w-[70%] px-6 p-3">
        <TitleandContent blogs={blogs} getInput={getInput}></TitleandContent>
        <Content blogContent={blogContent} updateDesc={updateDesc}></Content>
      </div>
      <div className="w-[30%] flex   flex-col justify-between my-3  ">
        <div className="">
          <Category blogs={blogs} getInput={getInput}></Category>

          <Tag tags={tags} getTags={getTags}></Tag>
          <FeaturedImage
            setfeaturedImage={setfeaturedImage}
            featuredImage={featuredImage}
            blogs={blogs}
            setblog={setblog}
            postid={postid}
            getInput={getInput}
          ></FeaturedImage>
        </div>
        <button
          className="mx-3 rounded-md border-2 dark:bg-white dark:text-black dark:hover:bg-secondary dark:hover:text-white dark:hover:border-0  text-white    pr-10 pl-10 pt-2 pb-2  bg-primaryMain"
          onClick={handleadd}
        >
          Create
        </button>
      </div>

      <div className="flex justify-center items-center "></div>
    </section>
  );
};

export default WriteBlog;
