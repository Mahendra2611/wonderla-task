import React, { useState } from 'react';
import { X, MapPin, Info, Link2, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const parks = [

  { name: 'BANGALORE', image: 'https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c.jpg?w=96&q=75' },
  { name: 'KOCHI', image: 'https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748.jpg?w=96&q=75' },
  { name: 'HYDERABAD', image: 'https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb.jpg?w=96&q=75' },
];

const quickLinks = ['Restaurants', 'Merchandise', 'Events'];

const SideMenu = ({setShowSidebar}) => {
   
  const [showParks, setShowParks] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);

  return (
    <div className="fixed top-0 pb-20 right-80 h-screen px-6 w-[400px] bg-white shadow-lg   z-50 overflow-y-auto">
     
      <div className="sticky top-0 py-6 bg-white flex justify-between items-center mb-6">
        <Link to="/">
          <img

            src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75"
            alt="Wonderla Logo"
            className="h-10 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </Link>
       <button
  onClick={setShowSidebar}
  className="text-gray-500 hover:text-black cursor-pointer border border-gray-300 rounded-full p-1"
>
  <X size={24} />
</button>

      </div>

 
      <div className="mb-6  border-b border-gray-200 ">
        <div
          className="flex items-center justify-between mb-1 cursor-pointer"
          onClick={() => setShowParks(!showParks)}
        >
          <div className="flex items-center gap-2  font-semibold text-xl">
            <MapPin color='blue' size={20} />
           <div className=''>
             <span>Parks</span>
             <p className="text-sm text-gray-500 mb-4">Explore Your Favourite Wonderla Park</p>
          
           </div>
          </div>
          <span className="text-gray-500">{showParks ? '▲' : '▼'}</span>
        </div>
       

        <div
          className={`transition-all duration-1000 ease-in-out overflow-hidden ${showParks ? 'max-h-[500px]' : 'max-h-0'}`}
        >
          <div className="grid grid-cols-2 gap-4">
            {parks.map((park) => (
              <div
                key={park.name}
                className="bg-white shadow rounded-lg p-3 flex flex-col items-center cursor-pointer hover:shadow-md transition"
              >
                <img
                  src={park.image}
                  alt={park.name}
                  className="w-14 h-14 rounded-full object-cover mb-2"
                />
                <span className="text-sm font-medium">{park.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 border-b border-gray-200 pb-4">
          <Info className="text-blue-600" size={20} />
          <div>
            <p className="font-semibold text-xl text-gray-900">Resorts</p>
            <p className="text-sm text-gray-500">Know all about Wonderla</p>
          </div>
        </div>
         <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 border-b border-gray-200 pb-4">
          <Info className="text-blue-600" size={20} />
          <div>
            <p className="font-semibold text-xl text-gray-900">Resorts</p>
            <p className="text-sm text-gray-500">Offers and Combos</p>
          </div>
        </div>
         <div className="flex items-center gap-3 cursor-pointer hover:opacity-80  border-gray-200 pb-4">
          <Info className="text-blue-600" size={20} />
          <div>
            <p className="font-semibold text-xl text-gray-900">Timings and Guidelines</p>
            <p className="text-sm text-gray-500">Know all about Wonderla</p>
          </div>
        </div>
        </div>

      
      <div className="space-y-3  border-t border-gray-200 p-6">
        <div className="bg-yellow-400 flex items-center gap-x-4 text-black rounded-xl p-4 cursor-pointer hover:opacity-90">
                     <img src="https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75" alt="Time Img" className="w-10 h-" />
<div >
  
          <p className="font-bold text-lg flex items-center gap-2">
            Resorts
          </p>
          <p className="text-sm">Reach Out To Wonderla Team</p>
</div>
        </div>
        <div className="bg-blue-600 flex items-center gap-x-4 text-white rounded-xl p-4 cursor-pointer hover:opacity-90">
          <img src="https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg?w=96&q=75" alt="Time Img" className="w-10 h-10" />
         <div>
           <p className="font-bold text-lg flex items-center gap-2">
            
            Offers and Combo
          </p>
          <p className="text-sm">Reach Out To Wonderla Team</p>
         </div>
        </div>
       <div className="bg-yellow-400 flex items-center gap-x-4 text-black rounded-xl p-4 cursor-pointer hover:opacity-90">
                     <img src="https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75" alt="Time Img" className="w-10 h-" />
<div >
  
          <p className="font-bold text-lg flex items-center gap-2">
            Timing and Guidelines
          </p>
          <p className="text-sm">Reach Out To Wonderla Team</p>
</div>
        </div>
      </div>

     

    

     
      <div className="space-y-6">
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 border-b border-t border-gray-200 py-4">
          <Info className="text-blue-600" size={20} />
          <div>
            <p className="font-semibold text-xl text-gray-900">About Us</p>
            <p className="text-sm text-gray-500">Know all about Wonderla</p>
          </div>
        </div>

      <div className=" border-b border-gray-200 ">
        <div
          className="flex items-center justify-between mb-1 cursor-pointer"
          onClick={() => setShowQuickLinks(!showQuickLinks)}
        >
          <div className="flex items-center gap-2 text font-semibold text-xl">
            <Link2 size={20} color='blue'/>
            <div>
              <span>Quick Links</span>
             <p className="text-sm text-gray-500 mb-4">Explore attractions and activities</p>
            </div>
          </div>
          <span className="text-gray-500">{showQuickLinks ? '▲' : '▼'}</span>
        </div>
       

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${showQuickLinks ? 'max-h-40' : 'max-h-0'}`}
        >
          <ul className="space-y-2 pl-2">
            {quickLinks.map((link) => (
              <li key={link} className="text-gray-700 text-base font-medium cursor-pointer hover:text-blue-600">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
          <Headphones className="text-blue-600" size={20} />
          <div>
            <p className="font-semibold text-xl text-gray-900">Contact Us</p>
            <p className="text-sm text-gray-500">Get in touch with Wonderla Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
