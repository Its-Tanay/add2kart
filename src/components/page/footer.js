export default function Footer() {
    return (
        <footer className="flex flex-col bg-black text-white pt-10 pb-5">
                <div className="flex justify-evenly gap-4 flex-wrap">
                    <div>
                        <h1 className="text-lg pb-2 tablet:text-xl tablet:pb-2 laptop:text-2xl laptop:pb-4">Info</h1>
                        <ul className="font-extralight text-xs tablet:text-sm laptop:text-base">
                            <li>Contact Us</li>
                            <li>Releases</li>
                            <li>Stores</li>
                            <li>Brands</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-lg pb-2 tablet:text-xl tablet:pb-2 laptop:text-2xl laptop:pb-4">Policies</h1>
                        <ul className="font-extralight text-xs tablet:text-sm laptop:text-base">
                            <li>Privacy Policy</li>
                            <li>Returns & Exchange</li>
                            <li>Terms & Conditions</li>
                            <li>Orders & Shipping</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-lg pb-2 tablet:text-xl tablet:pb-2 laptop:text-2xl laptop:pb-4">Our Socials</h1>
                        <ul className="font-extralight flex justify-center gap-x-8 tablet:text-tab-base laptop:text-lap-base">
                            <li><i className="bi bi-instagram"></i></li>
                            <li><i className="bi bi-facebook"></i></li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg pb-2 mt-2 tablet:text-xl tablet:pb-2 tablet:m-0 laptop:text-2xl laptop:pb-4 laptop:m-0">Subscribe to our newsletter</label>
                        <div className="font-extralight text-xs tablet:text-sm laptop:text-base flex justify-between">
                            <input type="text" name="email" id="email" placeholder="Email" className="rounded-lg p-2"/>
                            <button className="font-extralight">Subscribe</button> 
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-center py-10">Made by <a href="https://www.github.com/Its-Tanay" className="font-extralight">Its-Tanay</a></p>
                </div>
                <div>

                </div>
        </footer>
    )
}