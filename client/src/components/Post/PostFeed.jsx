import React from "react";
import PostCard from "./Post";

export default function PostFeed({posts}) {
    return (
        <div className="postOuterWrap">
            <div className="postFeed_container">
                <div className="postCard">
                    {posts.map((post, index) => (
                        <PostCard key={index} postData={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}