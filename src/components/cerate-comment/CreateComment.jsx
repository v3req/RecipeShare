import { useParams } from "react-router";
import { postComment } from "../../api/comment-api";
import useAuth from "../../hooks/useAuth";
import useForm from "../../hooks/useForm"

export default function CreateComment({onCreate}){
  const { recipeId } = useParams();
  const { user } = useAuth();
    
  const {values, changeHandler, setValues} = useForm({text: ''},)

  const addCommentAction = async (formData) => {
        const newComment = {
            text: formData.get('text'),
            author: user?.email,
            recipe_id: recipeId,
        }

        try {
            const result = await postComment(newComment);
            onCreate(); 
            setValues({text:''})
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <>
        <div className="comment-form">
          <form action={addCommentAction}>
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