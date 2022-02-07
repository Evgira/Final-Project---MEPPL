import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import makeCall from "../../api/Call";
import env from "../../api/env";
import axios from "axios";
import "./post.css";
import "../../pages/home.css";
import { useContext } from "react";
import { ChatContext } from "../../context/SharedContext";

function Post() {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState(0);
  const { state, dispatch } = useContext(ChatContext);
  const [likedPost, setLikedPost] = useState();
  //  console.log("userID: ",state.user.id)
  const PUBLIClocation = "http://localhost:5001/uploads/";
  useEffect(() => {
    makeCall(env.POST).then((result) => {
      setPosts(result);
      console.log();
    });
  }, []);

  // makeCall(env.LIKE, "GET").then((result)=>setLikes(result))
  // console.log("RESULT FROM THE LIKES FETCH :",likes)

  //  makeCall(env.LIKE, "POST", likes ).then((result)=>{})

  const likePost = async (postId, userId) => {
    //How to understand who (userid) logged in?

    //make call

    const res = await axios
      .patch(`http://localhost:5001/posts/like/${postId}/${userId}`)
      .then((response) => {
        console.log(response);
        /* console.log(res);  */
      })
      .catch((err) => console.log(err));

    // posts.filter((post)=>{
    //  //return post._id===id?setLikes(likes+1):"not match"
    //  if(post._id==id){
    //     const data =  axios.post(`http://localhost:5001/posts/${id}`)
    //     console.log(data);
    //  }
    //})
    // console.log("FE postID",postID, "FE userID",userID)
  };

  return (
    <div className="postWrap">
      {console.log("posts", posts)}
      <div className="postsL">
        {posts.length > 0 ? (
          posts.map((post, index) => {
            //start of a single post

            return (
              <div key={index}>
                <div>{/* avatar */}</div>
                <p className="post-authorL">{post.author.userName}</p>
                <h3 className="post-contentL">{post.content}</h3>
                <h4 className="date-postL">{post.createdTime}</h4>
                <img
                  className="postImgL"
                  // src="http://localhost:5002/uploads/fadi-xd-I4dR572y7l0-unsplash-1642755615657.jpeg"
                  src={
                    post.filePath
                      ? PUBLIClocation + post.filePath
                      : PUBLIClocation + ""
                  }
                  alt="image of the post"
                />
                setLikes(result.likes)
                <div className="icons">
                  <FontAwesomeIcon
                    icon={faBookmark}
                    /*  className="iconBofetch(url).then((response)=>{if(response.status===200){response.json().then((data)=>{resolve(data);})catch((error)=>{reject(error)})okmark" */
                  />

                  <FontAwesomeIcon
                    icon={faHeart}
                    className="iconHeart"
                    onClick={(e) => likePost(post._id, state.user._id)}
                    /* onClick={likePost(post._id, state.user._id)} */
                  ></FontAwesomeIcon>
                  {post.likes && post.likes.length > 0 ? post.likes.length : ""}
                  {/* (e)=>likePost(e.target.value, state.user.id) */}
                </div>
                <h4 className="commentL">Write a comment ..</h4>
                {/* <button className="buttonL">back to the top</button> */}
              </div>
            );
          })
        ) : (
          <>
            <h3>hello</h3>
            <p>the owner of the post </p>
            <img
              className="postImgL"
              src="https://www.rismedia.com/wp-content/uploads/2019/05/social_media_post_936185802.jpg"
            />
            <div className="icons">
              <FontAwesomeIcon icon={faBookmark} className="iconBookmark" />
              {/* iconBofetch(url).then((response)=>{if(response.status===200){response.json().then((data)=>{resolve(data);})catch((error)=>{reject(error)})okmark */}
              <FontAwesomeIcon icon={faHeart} className="iconHeart" />
            </div>
            <h4 className="commentL">Write a comment ..</h4>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Post;
