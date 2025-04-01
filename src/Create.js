import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    return (  
        <div className="create">
            <h2>Add a New Blog Post</h2>
            <form>
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

                <button>Post</button>
                <p>title: {title}</p>
                <p>body: {body}</p>
                <p>author: {author}</p>
            </form>
        </div>
    );
}
 
export default Create;



