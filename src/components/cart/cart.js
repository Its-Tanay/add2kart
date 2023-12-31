import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/features/cartSlice"
import { decrement } from "../../redux/features/cartSlice"

export default function Cart() {

    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleIncrement = (e) => {
        dispatch(increment(e))
    }

    const handleDecrement = (e) => {
        dispatch(decrement(e))
    }
    
    const total = cartItems.reduce((acc, item) => acc + item.price.slice(2) * item.quantity, 0);

    return (
        <div className="flex flex-col m-6 gap-6">
            <h1 className="text-[1.5rem] mb-6 text-center tablet:text-[2rem]">Shopping Cart</h1>
                {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center gap-4 tablet:mx-[6rem] laptop:mx-[10rem]">
                            <img src={item.image} alt={item.name} className='w-[8rem] h-auto tablet:w-[12rem] laptop:w-[16rem] rounded-xl'/>
                            <p className="tablet:text-[1.5rem] laptop:text-[1.8rem]">{item.name}</p>
                            <div className="flex flex-col items-center justify-center gap-3">
                                <p className="text-lg tablet:text-xl font-light laptop:text-2xl">{item.price}</p>
                                <div className="flex gap-4 items-center">
                                    <button onClick={() => {handleDecrement(item.id)}} className="border-[1px] rounded-[50%] py-[0.2rem] px-[0.7rem] text-center">-</button>
                                    <p>{item.quantity}</p>
                                    <button onClick={() => {handleIncrement(item.id)}} className="border-[1px] rounded-[50%] py-[0.2rem] px-[0.7rem] text-center">+</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            <div className="tablet:mx-[6rem] laptop:mx-[10rem]">
                <h1 className="text-right tablet:text-xl laptop:text-2xl">Cart total:</h1>
                <p className="text-lg text-right font-light tablet:text-xl laptop:text-2xl">₹ {total}<span className="text-[0.5rem] ml-2 font-extralight tablet:text-[0.8rem] laptop:text-[1rem]">Inc. of all taxes</span></p>
            </div>
            <div className="flex items-center justify-center">
                <button className="border-black border-2 p-2 rounded-[20px] hover:text-white hover:bg-black w-[100%] h-[4rem] font-light tablet:w-[60%] laptop:w-[40%]">Proceed to checkout</button>
            </div>
        </div>
    )
}