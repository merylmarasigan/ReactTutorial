// import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import supabase from "./config/supabaseClient";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [postingPending, setPostingPending] = useState(false) //when we first load this page, we don't submit form right away. Only after button has been clicked.
    const [formError, setFormError] = useState(null)
    const history = useHistory();

    // function handleSubmit(event){
    //     // default action on submit is to refresh the form, we don't want that
    //     event.preventDefault();

    //     let post = {title, body, author};
    //     setPostingPending(true);
        
    //     fetch('http://localhost:8000/blogs',
    //         {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'}, //specifies the type of content we're sending with this request (json)
    //             body: JSON.stringify(post) // need to convert object into JSON b/c we're saying we're sending JSON
    //         }).then(
    //             //fetch is async and returns a promise so we can add .then method which calls a function when post is complete
    //             () => {
    //                 console.log('new post added!');
    //                 setPostingPending(false);
    //                 history.push('/'); //redirects to home page
    //             }
    //         )
        

    // }

    const handleSubmit = async (e) => {

        e.preventDefault();
        setPostingPending(true);

        const { data, error } = await supabase.from('Posts').insert([{title, body, author}]).select()

        if(error){
            setPostingPending(false);
            console.log(error);
            setFormError('Please fill in all fields correctly.');
        }

        if(data){
            console.log('new post aded!')
            console.log(data);
            setFormError(null);
            setPostingPending(false);
            history.push('/');
        }

    }
    return (  
        <div className="create">
            <h2>Add a New Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type='text'
                    required
                    value= {title}
                    onChange = {(event) => {setTitle(event.target.value)}}
                />

                <label>Body:</label>
                <textarea
                required
                value = {body}
                onChange = {(event) => {setBody(event.target.value)}}
                >
                </textarea>

                <label>Author:</label>
                <select
                    value = {author}
                    onChange = {(event) => {setAuthor(event.target.value);}}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>

                {formError && <p className="error">{formError}</p>}
                {!postingPending && <button>Post</button>}
                {postingPending && <button disabled>Publishing Post...</button>}


            </form>
        </div>
    );
}
 
export default Create;



