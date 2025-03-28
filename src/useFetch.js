import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {

        setTimeout(() => {
            fetch(url)
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
                setError(err.message);
                setIsPending(false);
            }) //catches the situation where we don't get a response
          
        }, 1000);
        
      }, [url])

      // can return any type
      return {data, isPending, error};

}

export default useFetch;
