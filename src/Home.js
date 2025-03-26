import {useState} from 'react';
import PostsList from './PostsList';
const Home = () => {
    const [blogPosts, setBlogs] = useState([
        {title:'My first blog post!', body:'lorem ipsum...', author:'mario', id:1},
        {title:'Welcome party!', body:'lorem ipsum...', author:'yoshi', id:2}
    ])

    return (  
        <div className='home'>
            <PostsList posts={blogPosts} title='All Posts'></PostsList>
        </div>
    );
}
 
export default Home;