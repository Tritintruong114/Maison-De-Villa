import { useEffect } from "react";
import { useState } from "react";
import { addComment } from "../../features/fetchData/homePageDetailSlice";
import { useDispatch } from "react-redux";
import { sanityStore } from "../../lib/client";
const Comments = () => {
  const [comments, setComments] = useState([
    { name: "truongtritin.bee@gmail.com" },
    { comment: "This is testing" },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const [comment, setComment] = useState("");

  const [reivew, setReview] = useState(false);

  const dispatch = useDispatch();

  const showReviewPopup = () => {
    setReview(true);
    setComments();
  };

  const handleSubmit = async () => {
    setReview(false);
    // e.preventDefault();

    try {
      await sanityStore.create({
        _type: "comment",
        title: title,
        body: body,
      });
      console.log("Document created!");
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  // const handleSubmit = () => {
  //   setReview(false);
  //   dispatch(addComment(comments));
  // };

  useEffect(() => {
    dispatch(addComment(comments));
  }, []);

  return (
    <div className=" py-3 gap-3">
      <button
        onClick={() => showReviewPopup()}
        className="w-full text-3xl font-bold py-3 bg-darkBrown bg-opacity-60 rounded-3xl"
      >
        Reviews
      </button>
      {reivew == true && (
        <div className="w-full gap-3 ">
          <textarea
            onChange={(e) => setBody(e?.target?.value)}
            className="w-full mt-3 pl-3 bg-darkBrown bg-opacity-30  rounded-3xl focus:outline py-6"
            placeholder="say something"
          />
          <button
            onClick={() => handleSubmit()}
            className="w-1/2 bg-darkBrown py-3 bg-opacity-30 rounded-3xl"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Comments;
