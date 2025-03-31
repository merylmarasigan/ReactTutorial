import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController(); 
        // we can associate this abort controller with a specific fetch request and we can use it to stop the associated fetch request

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal}) // associating abort Controller with this fetch
                .then(res => {

                    if(!res.ok){
                        throw Error('could not fetch data for that resource'); // throws error when response is not ok
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
            .catch(err => {
                //aborting a fetch throws an error, so we don't want to update state when an abort error is thrown
                if (err.name === 'AbortError'){

                    console.log('fetch aborted')
                }else{
                    setError(err.message);
                    setIsPending(false);
                }

            }) //catches the situation where we don't get a response
          
        }, 1000);

        return () => {abortCont.abort();} //the cleanup method will call the abort function to stop the associated fetch
        
      }, [url])

      // can return any type
      return {data, isPending, error};

}

export default useFetch;
