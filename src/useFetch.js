import { useState, useEffect } from "react";
import supabase from "./config/supabaseClient";

const useFetch = (id=null) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {

            let isMounted = true; // This will prevent state updates after component's been unmounted

            const fetchPosts = async () => {
                //query is a query to get all posts 
                let query = supabase.from("Posts").select();

                if(id){
                    //if an id is provided, query is modified to get all post with matching id
                    query = query.eq("id", id).single();

                }

                const {data, error} = await query;

                if(isMounted){
                    if(error){
                        setError(error.message);
                        setData(null);
                    }

                    if(data){
                        setError(null);
                        setData(data);
                    }

                    setIsPending(false);

                }

            };

            fetchPosts();

            return () => {
                isMounted= false;

            };

        },[id]);


        return {data, isPending, error};

};

export default useFetch;
