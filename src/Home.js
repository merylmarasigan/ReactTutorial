import {useState, useEffect} from 'react';
import PostsList from './PostsList';
const Home = () => {
    const [blogPosts, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {

        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {

                    if(!res.ok){
                        throw Error('could not fetch data for that resource'); // throws error when response is not ok
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            }) //catches the situation where we don't get a response
          
        }, 1000);
        
      }, [])
    

    return (  
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
           { blogPosts && <PostsList posts={blogPosts} title='All Posts'></PostsList>}
           
        </div>
    );
}
 
export default Home;

