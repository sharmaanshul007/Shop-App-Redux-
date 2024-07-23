import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from '../components/CartItem';
import { useEffect , useState } from "react";
const Cart = () => {
    const {cart} = useSelector((state) => state || [])
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect(()=>{
        setTotalAmount((cart).reduce (( acc ,curr) => acc + curr.price ,0));
    },[cart])
    return ( 
        <div className="flex">
            <div>
                {
                    cart.length > 0 ? ( <div>
                        {
                            cart.map((item,index) => {
                                return <CartItem key = {item.id} item = {item} itemIndex = {index}></CartItem>
                            })
                        }

                    </div> ) :
                    ( <div className="min-h-[80vh] flex flex-col items-center justify-center ml-32 mr-96"> <h1 className="text-gray-700 font-semibold text-xl mb-2">Your Cart is Empty!</h1>
                    <Link to="/"><button>Shop Now</button></Link></div>)
                }
            </div>
            <div className="flex flex-col mr-20 mt-12">
                <div className="flex flex-col">
                    <div className=" text-green-600 font-semibold text-2xl">Your Cart</div>
                    <div className=" text-green-600 font-semibold text-5xl">Summary</div>
                    <p className="mt-[200px]">
                        <span className="font-bold text-[20px]">Total Items : {cart.length}</span>
                    </p>
                </div>
                <div>
                    <p className="font-bold text-[20px]">Total Amount :{totalAmount}</p>
                    <button className="px-10 py-2 font-semibold text-[16px] bg-green-600 rounded-md mt-10">Checkout Now</button>
                </div>
            </div>
        </div>
    )
}
export default Cart;


