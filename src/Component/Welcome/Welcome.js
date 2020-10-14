import React from 'react';
import './Welcome.css'
import Filteritem from '../FilterItem/FilterItem';

const Welcome = () => {
    const filters = [
        {
            id: 1,
            name : "Mains",
            image: "https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            filter: "main"
        },
        {
            id: 2,
            name : "Sides",
            image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            filter: "side"
        },
        {
            id: 3,
            name: "Desserts",
            image: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            filter: "dessert"
        },
        {
            id: 4,
            name: "Starters",
            image: "https://images.pexels.com/photos/4173178/pexels-photo-4173178.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            filter: "starter"
        },
        {
            id: 5,
            name: "Cakes",
            image : "https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            filter: "cake"
        }]
    
    return ( 
        <div className="welcome">
            <div className="padder"></div>
            <div className="container-fluid text-left welcome__title-box">
                <h2 className="welcome__title font">Welcome.</h2>
                <p className="welcome__description"> Select a menu below</p>
            </div>
            <div className="container-fluid welcome__menu-box">
                {filters.map((filter) => <Filteritem key={filter.id} filter={filter} />)}
            </div>
            <div className="container-fluid welcome__title-box-bottom mt-5 pr-0">
                {/* <p className="welcome__description-bottom text-center mb-0">All recipes are sourced by Grandma from all over the net, editted and perfected by her expert touch.</p> */}
            </div>
        </div>
     );
}
 
export default Welcome;