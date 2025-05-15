import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RidesSection from './components/RidesSection';

const Offers = () => <div className="mt-[100px]">Offers Page</div>;
const Rides = () => <div className="mt-[100px]">Rides Page</div>;
const Restaurants = () => <div className="mt-[100px]">Restaurants Page</div>;
const Events = () => <div className="mt-[100px]">Events Page</div>;
const Bangalore = () => <div className="mt-[100px]">Welcome to Bangalore Park</div>;
const Kochi = () => <div className="mt-[100px]">Welcome to Kochi Park</div>;
const Hyderabad = () => <div className="mt-[100px]">Welcome to Hyderabad Park</div>;
const RidesName = () => <div className="mt-[100px]">Welcome to New Ride</div>;
const ExploreRides = () => <div className="mt-[100px]">Welcome to Explore All Rides</div>;
const BookTickets = () => <div className="mt-[100px]">Welcome to Explore All Rides</div>;
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RidesSection />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/events" element={<Events />} />
        <Route path="/bangalore" element={<Bangalore />} />
        <Route path="/kochi" element={<Kochi />} />
        <Route path="/hyderabad" element={<Hyderabad />} />
        <Route path="/rides/:ride-name" element={<RidesName/>} />
        <Route path="/explore-all-rides" element={<ExploreRides/>} />
        <Route path=" /book-ticket" element={<BookTickets/>} />
       
      </Routes>
    </Router>
  );
};

export default App;
