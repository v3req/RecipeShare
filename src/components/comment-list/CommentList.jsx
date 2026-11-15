import { commentApi } from "../../api/index.js";
import CreateComment from "../cerate-comment/CreateComment.jsx";
import Comment from "../comment/comment.jsx";
import { useState, useEffect } from "react";


export default function CommentsSection({
  recipeId,
}) {
  
  const [comments, setComments] = useState([]);
  useEffect(() => {
    commentApi.getAll(recipeId)
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));
   }, [recipeId]);
  


  return (
    <div className="comments-section">
    <CreateComment />        
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </div>
  );
}