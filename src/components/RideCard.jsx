import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import rideData from '../data/rides.json';
import { Link, Links } from 'react-router-dom';

const CARD_WIDTH = 250;
const GAP = 16;

const RideCard = ({ category }) => {
  const [rides, setRides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const filteredRides = rideData[category] || [];
    setRides(filteredRides);
    setCurrentIndex(0);
  }, [category]);

  useEffect(() => {
    if (rides.length > 0) startAutoSlide();
    return stopAutoSlide;
  }, [rides]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      const visibleCards = 3;
      const maxIndex = rides.length - visibleCards;
      setCurrentIndex((prevIndex) =>
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const scrollToIndex = (index) => {
    stopAutoSlide();
    const visibleCards = 3;
    const maxIndex = rides.length - visibleCards;
    const newIndex = (index + rides.length) % rides.length;
    setCurrentIndex(newIndex > maxIndex ? 0 : newIndex);
    startAutoSlide();
  };

  return (
    <div className="w-full px-8 py-4 ml-12 bg-slate-700 flex flex-col justify-around items-start pt-32">
    
      <div className='flex gap-2 justify-between w-full items-center'>
        <div className='text-white text-6xl font-bold'>OUR ICONIC RIDES</div>
        <div className="top-4 left-4 z-20 flex gap-2 pr-10">
          <ChevronLeft
            className="w-12 h-12 text-blue-700 bg-yellow-500 rounded-full p-2 cursor-pointer"
            onClick={() => scrollToIndex(currentIndex - 1)}
          />
          <ChevronRight
            className="w-12 h-12 text-blue-700 bg-yellow-500 rounded-full p-2 cursor-pointer"
            onClick={() => scrollToIndex(currentIndex + 1)}
          />
        </div>
      </div>

      
      <div className="overflow-hidden mt-12 h-full  ">
        <div
          className="flex transition-transform duration-1000 ease-in-out gap-x-10"
          style={{
            transform: `translateX(-${currentIndex * (CARD_WIDTH + GAP)}px)`,
            width: `${rides.length * (CARD_WIDTH + GAP)}px`,
          }}
        >
          {rides.map((ride, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2  h-full"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-[420px] w-[250px]">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
                  src={ride.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="relative z-10 p-3 text-white bg-gradient-to-t from-black/70 to-transparent h-full flex flex-col justify-end">
                  <h2 className="text-2xl font-bold mb-1 drop-shadow">{ride.name}</h2>
                  <p className="text-sm mb-1 drop-shadow">{ride.location}</p>
                  <p className="text-sm mb-3 drop-shadow">{ride.description}</p>
                  <button className="px-4 py-2 w-[180px] cursor-pointer hover:scale-110 font-bold transition-all bg-[#FAD504] rounded-xl text-blue-700">
                   <Link to={`/rides/:${ride.name}`}> Ride Details </Link> 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div>
        <button className="mt-10 mb-10 px-24 py-4 hover:scale-110 font-bold transition-all bg-[#FAD504] rounded-full p-2 cursor-pointer text-blue-700">
        
           <Link to={`/explore-all-rides`}>   Explore All Rides</Link> 
        </button>
      </div>
    </div>
  );
};

export default RideCard;
