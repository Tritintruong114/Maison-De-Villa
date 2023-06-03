import { useEffect, useState } from "react";

import axios from "axios";
import { addComment } from "../../features/fetchData/homePageDetailSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showPopupLogin } from "../../features/fetchData/homePageDetailSlice";
const Comments = (slug) => {
  const [comments, setComments] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showPopup } = useSelector((store) => store.homePageDetail);
  const [reivew, setReview] = useState(false);

  const showReviewPopup = () => {
    setReview(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://maison-be.onrender.com/api/reviews/${slug.slug}`
      );
      const saveData = await response.data;
      dispatch(addComment(saveData.result.review.reverse()));
    };
    fetchData();
  }, [comments]);

  const handleSubmit = async () => {
    const postComment = { review: comments };
    await axios.post(
      `https://maison-be.onrender.com/api/reviews/${slug.slug}`,
      postComment
    );
    setComments("");
    // await fetchData();
  };

  const notLogin = () => {
    navigate(`popup`);
    dispatch(showPopupLogin(true));
  };

  return (
    <div className=" py-3 gap-3">
      {!localStorage.getItem("email") ? (
        <button
          onClick={() => notLogin()}
          className="w-full text-3xl font-bold py-3 bg-darkBrown bg-opacity-60 rounded-3xl"
        >
          Reviews
        </button>
      ) : (
        <button
          onClick={() => showReviewPopup()}
          className="w-full text-3xl font-bold py-3 bg-darkBrown bg-opacity-60 rounded-3xl"
        >
          Reviews
        </button>
      )}
      {reivew == true && (
        <div className="w-full gap-3 ">
          <textarea
            value={comments}
            onChange={(e) => setComments(e?.target?.value)}
            className="w-full mt-3 pl-3 bg-darkBrown bg-opacity-30  rounded-3xl focus:outline py-6"
            placeholder="say something"
          />
          <h1>Author : {localStorage.getItem("email")}</h1>
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
