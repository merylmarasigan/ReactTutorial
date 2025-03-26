import {useState, useEffect} from 'react';
import PostsList from './PostsList';
const Home = () => {
    const [blogPosts, setBlogs] = useState([
        {title:'My first blog post!', body:'lorem ipsum...', author:'mario', id:1},
        {title:'Welcome party!', body:'lorem ipsum...', author:'yoshi', id:2},
        {title:'Web dev tips', body:'lorem ipsum...', author:'mario', id:3}
    ])

    function handleDelete(id){
        const newBlogs = blogPosts.filter((post) => post.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        alert('useEffect ran');
        console.log(blogPosts);
        }
    )
    
    return (  
        <div className='home'>
            <PostsList posts={blogPosts} title='All Posts' handleDelete={handleDelete}></PostsList>
        </div>
    );
}
 
export default Home;