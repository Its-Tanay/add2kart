import { Link } from "react-router-dom"
import logo from "../../assets/123.png"
import cartIcon from "../../assets/cart.svg"

export default function Header() {
    return (
        <div id="header" className="flex flex-col transition ease duration-500 justify-evenly items-center tablet:flex-row laptop:flex-row shadow-md ">

            <img src={logo} alt="logo" className="w-20 h-auto transition ease duration-500 tablet:w-24 tablet:h-auto laptop:w-28 laptop:h-auto" />

            <ul className="flex items-center gap-x-12 text-mob-base tablet:text-tab-base laptop:text-lap-base font-bold">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>  
                <li className="relative">
                    <Link to="/cart"><img src={cartIcon} alt="cart icon" className="w-8 h-auto" /></Link>
                </li>
            </ul>
        </div>
    )
}