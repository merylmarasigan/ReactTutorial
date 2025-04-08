import {useState, useEffect} from 'react';
import PostsList from './PostsList';
import useFetch from './useFetch';
import supabase from './config/supabaseClient';
const Home = () => {
    const  {error, isPending, data:blogPosts} = useFetch();

    

    return (  
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
           { blogPosts && <PostsList posts={blogPosts} title='All Posts'></PostsList>}
           
        </div>
    );
}
 
export default Home;

 