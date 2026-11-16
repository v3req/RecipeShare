import { useParams } from "react-router";
import { postComment } from "../../api/comment-api";
import useAuth from "../../hooks/useAuth";
import useForm from "../../hooks/useForm"

export default function CreateComment(){
  const { recipeId } = useParams();
  const { user } = useAuth();
  const author = user?.email

  const postCommentHandler = async (values) => {
    try {
      await postComment({ ...values, author, recipe_id:recipeId });
    } catch (error) {
      console.log(error.message);
    }
  }

  const {values, changeHandler, submitHandler} = useForm({text: ''}, postCommentHandler)

    return (
        <>
        <div className="comment-form">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="comment-text">Your Comment</label>
              <textarea
                className="form-control"
                id="comment-text"
                name="text"
                placeholder="Share your thoughts..."
                required=""
                value={values.text}
                onChange={changeHandler}
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