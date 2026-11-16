export default function Comment({
  created_at,
  text,
  author
}) {
    return (
    <div className="comment">
          <p className="comment-name">
            {author}
            <span className="comment-date">{new Date(created_at).toLocaleDateString('en-GB')}</span>
          </p>
          <p className="comment-text">
            {text}
          </p>
    </div>
    )
}