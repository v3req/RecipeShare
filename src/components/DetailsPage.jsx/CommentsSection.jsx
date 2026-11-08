import Comment from "./Comment.jsx";

export default function CommentsSection() {
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
        {/* Example comment: no profile photo */}
        <Comment
          author="Alex Johnson"
          date="2 days ago"
          text="This recipe was fantastic! I made it for my family and everyone loved it."
        />
        
      </div>
  );
}