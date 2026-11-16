export default function Comment({
  created_at,
  text,
}) {
    return (
    <div className="comment">
          <p className="comment-name">
            <span className="comment-date">{created_at}</span>
          </p>
          <p className="comment-text">
            {text}
          </p>
    </div>
    )
}