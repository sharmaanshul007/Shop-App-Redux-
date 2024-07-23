import {FcDeleteDatabase} from "react-icons/fc"
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";
const CartItem = ({item,itemIndex}) => {
    const dispatch = useDispatch();
    function removeFromCart(){
        dispatch(remove(item.id));
        toast.success("Item Successfully removed");
    }
    return (
        <div>
            <div className="flex p-10 gap-10 mx-40 my-3 max-w-[1000px] border-b-black border-b-[1px]">
                <div>
                    <img src={item.image} width={400} height={400}></img>
                </div>
                <div className="flex flex-col justify-center max-w-lg">
                    <h1 className=" font-semibold text-left text-lg text-gray-700 truncate ">{item.title}</h1>
                    <h1 className="max-w-40 text-gray-400 font-normal  text-[10px] text-left mt-4">{item.description}</h1>
                    <div className="flex justify-between mt-8 text-green-600 font-semibold  w-full">
                        <span>${item.price}</span>
                        <div onClick={removeFromCart} className=" flex justify-center items-center h-8 w-8 rounded-full bg-green-400 text-black"><AiFillDelete /></div>
                    </div>
                </div>
            </div>
            <div>


            </div>
        </div>
    )
}
export default CartItem;