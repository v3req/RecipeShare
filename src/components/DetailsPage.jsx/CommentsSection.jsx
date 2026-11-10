import Comment from "./Comment.jsx";
import { useState, useEffect } from "react";
import { apiKey, baseUrl } from "../../api/baseurl.js";

export default function CommentsSection({
  recipeId,
}) {
  console.log(recipeId)
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(baseUrl + `comments?=eq.${recipeId}&select=*`, {
         method: 'GET',
         headers: {
            'apikey': apiKey,
          }
      })
         .then(response => response.json())
         .then(data => setComments(data))
         .catch(error => console.error('Error fetching recipes:', error));
   }, [recipeId]);
  


  return (
 <div className="comments-section">
        <h2 className="section-title">Comments</h2>
        <p className="muted">See what people think about this recipe.</p>
        <div className="comment-form">
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="comment-name">Your Name</label>
              <input
                className="form-control"
                type="text"
                id="comment-name"
                name="name"
                placeholder="Enter your name"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment-text">Your Comment</label>
              <textarea
                className="form-control"
                id="comment-text"
                name="comment"
                placeholder="Share your thoughts..."
                required=""
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Post Comment
            </button>
          </form>
        </div>
        
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
  );
}