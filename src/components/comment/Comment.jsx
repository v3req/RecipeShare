export default function Comment({
  created_at,
  comment,
  author,
}) {
    return (
    <div className="comment">
          <p className="comment-name">
            {author}
            <span className="comment-date">{created_at}</span>
          </p>
          <p className="comment-text">
            {comment}
          </p>
    </div>
    )
}