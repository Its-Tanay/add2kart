import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextImg } from '../../redux/features/imgSlice';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import { Link } from 'react-router-dom';

const images = [img1, img2, img3, img4];

export default function Home() {
  const currentIndex = useSelector((state) => state.bgImgs.currentIndex);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextImg());
    }, 3000);
    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    const imgContainer = document.getElementById("imgContainer");
    if (imgContainer) {
      if (images && images.length > currentIndex) {
        imgContainer.style.backgroundImage = `url(${images[currentIndex]})`;
      }
    }
  }, [currentIndex]);

  return (
    <div>
        <div id="imgContainer" className="w-full h-screen bg-cover bg-no-repeat bg-center transition-background-image duration-1000 ease-in-out bg-opacity-100">
            <div className="flex flex-col gap-y-10 justify-center items-center w-full h-screen bg-black bg-opacity-70">
                <p className="text-center text-mob-para text-stone-50 w-6/12 tracking-widest font-bold tablet:text-tab-para laptop:text-lap-para">Discover the Intersection of Fashion and Minimalism at Add 2 Kart. Explore our curated collection of modern clothing, where clean lines and unique aesthetics meet to elevate your wardrobe to new heights.</p>
                <button className="p-4 bg-stone-50 text-black font-bold py-2 px-4 rounded-full transition ease duration-500 hover:bg-black hover:text-stone-50 tablet:text-tab-base laptop:text-lap-base"
                ><Link to="/shop">Start shopping</Link></button>
            </div>
        </div>
    </div>
  );
}
