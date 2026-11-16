import useForm from "../../hooks/useForm"

export default function CreateComment(){
  const {values, changeHandler, submitHandler} = useForm(text)



    return (
        <>
        <div className="comment-form">
          <form >
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
        </>
    )
}