import { getAllComments } from "../../api/comment-api.js";

import CreateComment from "../cerate-comment/CreateComment.jsx";
import Comment from "../comment/comment.jsx";
import { useState, useEffect } from "react";


export default function CommentsSection({
  recipeId,
  isOwner,
  isAuthenticated
}) {
  const [refreshComments, setRefreshComments] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getAllComments(recipeId)
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));
   }, [recipeId, refreshComments]);
  


  return (
    <div className="comments-section">
        <h2 className="section-title">Comments</h2>
        <p className="muted">See what people think about this recipe.</p>
        
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
        {!isOwner && isAuthenticated && <CreateComment onCreate = {() => setRefreshComments(state => !state)}/>}
    </div>
  );
}