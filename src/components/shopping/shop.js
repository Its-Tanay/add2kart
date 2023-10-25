import { useEffect } from "react"
import Card from "./prodCard"
import { useDispatch } from 'react-redux';
import { setProducts } from "../../redux/features/prodSlice";
import { useSelector } from 'react-redux';
import productsData from "../../data.json"
import { Link } from "react-router-dom";

export default function Shop(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts(productsData));
    }, [dispatch])

    const products = useSelector((state) => state.products.items);

    return (
    <>
        <div className="grid grid-cols-1 grid-rows-6 content-center items-center justify-items-center tablet:grid-cols-2 tablet:grid-rows-3 laptop:grid-cols-3 laptop:grid-rows-2 laptop:p-x-4">
            {products.map((product) => (
                    <Link to={`/shop/${product.id}`}>
                        <Card
                            key={product.id}
                            imgUrl={product.image}
                            name={product.name}
                            price={product.price}
                            id={product.id}
                        />
                    </Link>
            ))}
        </div>
    </>
    )
}