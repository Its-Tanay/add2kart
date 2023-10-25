import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addToCart } from '../../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/features/cartSlice';
import { decrement } from '../../redux/features/cartSlice';

export default function ProductPage() {
    const { id } = useParams();
    const numericId = parseInt(id, 10);

    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.items);
    console.log('All Products:', products); 

    const product = products.find((p) => (p.id === numericId));
    console.log('Selected Product:', product); 

    const handleAddToCart = (e) => {
        dispatch(addToCart(e))
        console.log('Added to cart:', e)
    }
    
    const cartItems = useSelector((state) => state.cart.cartItems);

    const cartQuantity = cartItems.find((item) => item.id === product.id)?.quantity || 0;

    const handleIncrement = (e) => {
        dispatch(increment(e))
    }

    const handleDecrement = (e) => {
        dispatch(decrement(e))
    }
   
    if (!product) {
        return <div>Product not found.</div>
    }
    return (
        <div className='flex flex-col justify-evenly items-center p-4 gap-4 laptop:flex-row laptop:p-8 laptop:gap-2'>
            <img src={product.image} alt={product.name} className='w-[20rem] h-auto laptop:w-[30rem] rounded-xl'/>
            <div className='w-[20rem] h-[100%] flex flex-col items-center gap-4'>
                <h2 className='text-2xl'>{product.name}</h2>
                <p className='text-xl font-light'>{product.price}</p>
                <p className='text-lg font-extralight text-center'>{product.description}</p>
                    { cartQuantity !== 0 ? <>
                        <button onClick={() => {handleDecrement(product.id)}} className="border-[1px] rounded-[50%] py-[0.2rem] px-[0.7rem] text-center">-</button>
                            <p>{cartQuantity}</p>
                        <button onClick={() => {handleIncrement(product.id)}} className="border-[1px] rounded-[50%] py-[0.2rem] px-[0.7rem] text-center">+</button>
                        </> : 
                        ( <button onClick={() => handleAddToCart(product)} className='border-black border-2 p-2 rounded-[20px] hover:text-white hover:bg-black'>Add to Cart</button>)
                    }
            </div>
        </div>
    );
}
