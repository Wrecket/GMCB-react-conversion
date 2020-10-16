import React from 'react';
import './Welcome.css'
import Filteritem from '../FilterItem/FilterItem';
import Frec from '../Frec/Frec';
import Rrec from '../Rrec/Rrec';
import Nrec from '../Nrec/Nrec';
import filters from '../data/filters.json';
const Welcome = () => {
    
    return ( 
        <div className="welcome">
            <div className="container-fluid">
                <div className=" title-wrap container-fluid text-left">
                    <div className="welcome__title-wrap font container-fluid">
                        <h1 className="">Welcome.</h1>
                        <p>Grandma's Cookbook is a personal online repository, made to provide those that seek good food with the recipes needed to create it. Each recipe within this site has been sourced from all over the internet, edited and doctored by Grandma's magic touch, perfected and presented ready for use.</p>
                        <p className="">Please select a menu below</p>
                    </div>
                </div>    
                <div className="welcome__menu-box container-fluid">
                    {filters.map((filter) => <Filteritem key={filter.id} filter={filter} />)}
                    <Nrec/>
                    <Rrec/>
                    <Frec/>
                    
                </div>
                <div className="padder"></div>
            </div>
            
        </div>
        
     );
}
 
export default Welcome;