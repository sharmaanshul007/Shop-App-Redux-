import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/cartSlice"
const Product = ({post}) => {
    const [selected ,setSelected] = useState(false);
    const {cart} = useSelector((state) => state || [])
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to cart")
    }
    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.success("Item removed to cart")
    }
    return (
        
        <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded max-w-[500px] border-b-2 border-green-200 ">
            <div>
                <p className=" font-semibold text-left text-lg text-gray-700 truncate ">{post.title.split(" ").splice(0,2).join(" ") + "..."}</p>
            </div>
            <div className="max-w-40 text-gray-400 font-normal  text-[10px] text-left">
                {post.description.split(" ").splice(0,10).join(" ") + "..."}
            </div>
            <div className="h-[180px]">
                <img src={post.image} className="w-full h-full"></img>
            </div>
            <div className="flex justify-between w-full items-center ">
                <div className=" text-green-600 font-semibold  w-full mt-5 ">
                    ${post.price}
                </div>
                <div className="w-full mt-5">
                    {
                        (cart.some((p) => p.id === post.id) ? 
                        (<button onClick={removeFromCart} 
                            className=" text-gray-700 border-gray-700 rounded-full text-[11px] px-3 p-1 uppercase hover:bg-gray-700 hover:text-white
                              outline">Remove Item</button>) :
                        ( <button  
                            className=" text-gray-700 border-gray-700 rounded-full text-[11px] px-3 py-1 uppercase  hover:bg-gray-700 hover:text-white outline" onClick={addToCart}>Add to Cart
                        </button>))
                    }
                </div>
            </div>
            
        </div>
    )
}
export default Product;