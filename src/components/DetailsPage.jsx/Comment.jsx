export default function Comment({author, date, text}) {
    return (
    <div className="comment">
          <p className="comment-name">
            {author}
            <span className="comment-date">{date}</span>
          </p>
          <p className="comment-text">
            {text}
          </p>
    </div>
    )
}