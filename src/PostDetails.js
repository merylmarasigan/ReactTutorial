import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const PostDetails = () => {
    const { id } = useParams();
    const {data: post, error, isPending} = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();


    const handleClick = () => {
        fetch("http://localhost:8000/blogs/"+ id, {
            method: "DELETE"
        }).then( () => {
            history.push('/');
        })
    }
    return (
        <div className='post-details'>
            {isPending && <div>Loading... </div>}
            {error && <div>{error} </div>}
            {post && 
            <article>
                <h2>{post.title}</h2>
                <p>Written by {post.author}</p>
                <div>
                    {post.body}
                </div>
                <button onClick={handleClick}>Delete</button>
            </article>}
        </div>
    );
}
 
export default PostDetails;