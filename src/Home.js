import {useState, useEffect} from 'react';
import PostsList from './PostsList';
const Home = () => {
    const [blogPosts, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setBlogs(data);
          })

          setIsPending(false);
            
        }, 1000);
        
      }, [])
    

    return (  
        <div className='home'>
            {isPending && <div>Loading...</div>}
           { blogPosts && <PostsList posts={blogPosts} title='All Posts'></PostsList>}
           
        </div>
    );
}
 
export default Home;

