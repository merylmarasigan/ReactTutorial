import {useState, useEffect} from 'react';
import PostsList from './PostsList';
const Home = () => {
    const [blogPosts, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setBlogs(data);
          })
      }, [])
    

    return (  
        <div className='home'>
           { blogPosts && <PostsList posts={blogPosts} title='All Posts'></PostsList>}
        </div>
    );
}
 
export default Home;

