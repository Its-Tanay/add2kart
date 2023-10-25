import addIcon from '../../assets/add.svg';
import { Link } from 'react-router-dom';
import { increment } from '../../redux/features/cartSlice';
import { decrement } from '../../redux/features/cartSlice';
import { useDispatch } from 'react-redux';

export default function Card({imgUrl, name, price, id, handleClick, quantity}){

    const dispatch = useDispatch();

    const handleIncrement = (id) => {
        dispatch(increment(id));
    }

    const handleDecrement = (id) => {
        dispatch(decrement(id));
    }

    return(
        <div id={id} className='flex flex-col relative w-mob-card h-mob-card p-4 gap-y-2 tablet:w-tab-card tablet:h-tab-card tablet:p-4 laptop:w-lap-card laptop:h-lap-card laptop:p-6'>
            <Link to={`/shop/${id}`} className='h-4/5 w-auto'>
                <img src={imgUrl} alt="prodImg" className='h-full w-full overflow-hidden'/>
            </Link>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-sm tablet:text-base laptop:text-lg'>{name}</h2>
                <h3 className='font-light text-xs tablet:text-sm laptop:text-base'>{price}</h3>
            </div>
            {quantity !== 0 ? <div className='flex items-center absolute bottom-12 right-6 tablet:bottom-16 tablet:right-8 laptop:bottom-24 laptop:right-6 gap-2 hover:transform'>
                    <button onClick={() => {handleDecrement(id)}} className="border-[1px] rounded-[50%] py-[0.2rem] px-[0.7rem] text-center">-</button>
                        <p>{quantity}</p>
                    <button onClick={() => {handleIncrement(id)}} className="border-[1px] rounded-[50%] py-[0.2rem] px-[0.7rem] text-center">+</button>
                    </div> : (<button onClick={handleClick} className='absolute bottom-12 right-6 tablet:bottom-16 tablet:right-8 laptop:bottom-24 laptop:right-6 flex gap-2 hover:transform '>Add to Cart<img src={addIcon} alt='addIcon' /></button>
            )}
        </div>
    )
}

