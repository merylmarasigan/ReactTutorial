import {useState} from 'react';
import PostsList from './PostsList';
const Home = () => {
    const [blogPosts, setBlogs] = useState([
        {title:'My first blog post!', body:'lorem ipsum...', author:'mario', id:1},
        {title:'Welcome party!', body:'lorem ipsum...', author:'yoshi', id:2},
        {title:'Web dev tips', body:'lorem ipsum...', author:'mario', id:3}
    ])

    return (  
        <div className='home'>
            <PostsList posts={blogPosts} title='All Posts'></PostsList>
            <PostsList posts={blogPosts.filter((post) => post.author === 'mario')} title="Mario' Posts"></PostsList>
        </div>
    );
}
 
export default Home;