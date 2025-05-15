import React, { useState } from 'react';
import {
  Menu,
  MapPin,
  Tag,
  FerrisWheel,
  Utensils,
  Calendar,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SideMenu from './SideMenu';

const locations = [
  {
    name: 'KOCHI',
    image: '../src/assets/Kochi.webp',
  },
  {
    name: 'BANGALORE',
    image: '../src/assets/Bangalore.webp',
    subOptions: [
      {
        name: 'Park',
        image: '../src/assets/bangalore-park.webp',
        path: '/bangalore/park',
      },
      {
        name: 'Resort',
        image: '../src/assets/bangalore-resort.webp',
        path: '/bangalore/resort',
      },
    ],
  },
  
  {
    name: 'HYDERABAD',
    image: '../src/assets/Hyderabad.webp',
  },
];

const Navbar = () => {
 
  const [showSidebar, setShowSidebar] = useState(false);
 

  return (
    <>
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed top-0 left-0 w-full h-full bg-black/40 z-20"
        ></div>
      )}

      <nav className="m-auto fixed top-[30px] left-[60px] right-[66px] rounded-xl px-12 py-4 h-[70px] bg-white  flex justify-between items-center shadow-md z-50">
        <Link to="/">
          <img
            src="../src/assets/Main_Logo.webp"
            alt="Wonderla Logo"
            className="h-10 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </Link>

        <ul className="hidden md:flex gap-6 items-center font-bold text-sm text-gray-500 cursor-pointer relative">
          {/* LOCATIONS with dropdown */}
         <div className="relative group cursor-pointer">
  <div className="flex items-center gap-2 ">
    <MapPin className="w-4 h-4" />
    LOCATIONS
    <ChevronDown className="w-4 h-4" />
  </div>

 
  <div className="absolute top-0 pt-16  -left-5   shadow-xl  p-4 w-64 z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300">
    <div className="flex flex-col gap-3 bg-white rounded-xl">
      {locations.map((loc) => (
        <div
          key={loc.name}
          className={`relative ${loc.name === 'BANGALORE' ? 'group/bangalore' : ''}`}
        >
          <Link to={`/${loc.name.toLowerCase()}`}>
            <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded">
              <img
                src={loc.image}
                alt={loc.name}
                className="w-10 h-10 rounded object-cover"
              />
              <span className="text-sm font-medium text-gray-700">
                {loc.name}
              </span>
              {loc.name === 'BANGALORE' && (
                <ChevronRight className="w-4 h-4 ml-auto" />
              )}
            </div>
          </Link>

         
          {loc.name === 'BANGALORE' && loc.subOptions && (
            <div className="absolute -top-1 left-full bg-white shadow-xl rounded-xl p-2 w-44 z-50 opacity-0 group-hover/bangalore:opacity-100 pointer-events-none group-hover/bangalore:pointer-events-auto transition duration-300">
              {loc.subOptions.map((option) => (
                <Link key={option.name} to={option.path}>
                  <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded">
                    <img
                      src={option.image}
                      alt={option.name}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {option.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>


          {/* Other menu items */}
          <Link to="/offers">
            <li className="flex items-center gap-2">
              <Tag className="w-4 h-4" /> OFFERS
            </li>
          </Link>
          <Link to="/rides">
            <li className="flex items-center gap-2">
              <FerrisWheel className="w-4 h-4" /> RIDES
            </li>
          </Link>
          <Link to="/restaurants">
            <li className="flex items-center gap-2">
              <Utensils className="w-4 h-4" /> RESTAURANTS
            </li>
          </Link>
          <Link to="/events">
            <li className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> EVENTS
            </li>
          </Link>
        </ul>

        <div className="flex items-center gap-4">
          <button className="bg-yellow-400 cursor-pointer px-4 py-2 rounded-lg font-bold text-blue-700 transition text-sm">
            <div className="flex items-center gap-x-2">
             <Link to="/book-ticket"> <p>BOOK TICKETS</p></Link>
            </div>
          </button>

          <Menu
            className="h-8 w-7 cursor-pointer text-blue-700 font-extrabold"
            onClick={() => setShowSidebar(true)}
          />
        </div>
      </nav>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 -right-10 h-full bg-white w-[40%] max-w-[300px] p-6 z-50 shadow-lg transform  transition-transform ease-in-out duration-300 ${
          showSidebar ? 'translate-x-full' : 'translate-x-full'
        }`}
      >
        {showSidebar && <SideMenu setShowSidebar={() => setShowSidebar(false)} />}
      </div>
    </>
  );
};

export default Navbar;
