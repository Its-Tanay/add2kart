import addIcon from '../../assets/add.svg';

export default function Card({imgUrl, name, price, id}){

    return(
        <div id={id} className='flex flex-col relative w-48 h-60 p-4 gap-y-2 tablet:w-48 tablet:h-60 tablet:p-4 laptop:w-80 laptop:h-96 laptop:p-6'>
            <img src={imgUrl} alt="prodImg" className='h-4/5 w-auto overflow-hidden'/>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-sm tablet:text-base laptop:text-lg'>{name}</h2>
                <h3 className='font-light text-xs tablet:text-sm laptop:text-base'>{price}</h3>
            </div>
            <button className='absolute bottom-2 right-2 tablet:bottom:4 tablet:right:4 laptop:bottom-6 laptop:right-6'><img src={addIcon} alt='addIcon' /></button>
        </div>
    )
}

