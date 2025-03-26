import {useState} from 'react';
const Home = () => {
    const [blogPosts, setBlogs] = useState([
        {title:'My first blog post!', body:'lorem ipsum...', author:'mario', id:1}
    ])

    return (  
        <div className='home'>
            {blogPosts.map(blog => (
                <div className="blog-preview" key={blog.id} >
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;