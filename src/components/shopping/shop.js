/* eslint-disable no-unused-vars */
import Card from "./prodCard"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToCart } from "../../redux/features/cartSlice";

export default function Shop(){

    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.items);

    const handleAddToCart = (e) => {
        dispatch(addToCart(e))
        console.log('Added to cart:', e)
    }

    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <>
        <div className="grid grid-cols-1 grid-rows-6 content-center items-center justify-items-center tablet:grid-cols-2 tablet:grid-rows-3 laptop:grid-cols-3 laptop:grid-rows-2 laptop:p-x-4 transition ease duration-500">
            {products.map((product) => (
                        <Card
                            key={product.id}
                            imgUrl={product.image}
                            name={product.name}
                            price={product.price}
                            id={product.id}
                            handleClick={() => handleAddToCart(product)}
                            quantity={cartItems.find((item) => item.id === product.id)?.quantity || 0}
                        />
            ))}
        </div>
        </>
    )
}