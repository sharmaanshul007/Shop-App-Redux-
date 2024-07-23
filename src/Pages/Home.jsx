import { useState  } from "react";
import { useEffect } from "react";
import Product from '../components/Product';
import Spinner from '../components/Spinner';
const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    async function fetchProductData(){
        setLoading(true);
        try{
            const result = await fetch(API_URL);
            const output = await result.json();
            console.log(output);
            setPosts(output);
        }
        catch(error){
            console.log("Error while handling the data");
            console.log(error);
            console.log("Error while fetching the data");
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchProductData();
    },[])
    return (<div>
        
        {
            loading ? (<Spinner></Spinner>) : 
            (posts.length <= 0 ? 
            (<div className="flex justify-center items-center h-[90vh] w-[100vw]">No product Available</div>) 
            : (<div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-[1000px] p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] mb-5">{
                    posts.map((post)=>( <Product key ={post.id} post={post}></Product>))
                }
                </div>
            ))
        }
    </div>)
}
export default Home;