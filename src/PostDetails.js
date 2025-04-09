import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { useState, useEffect } from "react"; // Import useEffect here
import supabase from "./config/supabaseClient";


const PostDetails = () => {
    const { id } = useParams();

    // Fetch post data based on the id parameter
    const { data: post, error, isPending } = useFetch(id);
    const history = useHistory();

    const handleClick = async () => {
        // fetch("http://localhost:8000/blogs/"+ id, {
        //     method: "DELETE"
        // }).then(() => {
        //     history.push('/');
        // });

        const { data, error } = await supabase.from("Posts").delete().eq('id',id).select();

        if(error){
            console.log(error);
        }
        if(data){
            console.log(data)
            history.push('/');
        }
    }

    return (
        <div className="post-details">
            {isPending && <div>Loading... </div>}
            {error && <div>{error} </div>}
            {post && 
                <article>
                    <h2>{post.title}</h2>
                    <p>Written by {post.author}</p>
                    <div>{post.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            }
        </div>
    );
};

export default PostDetails;
