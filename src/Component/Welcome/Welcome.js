import React from 'react';
import './Welcome.css'
import Filteritem from '../FilterItem/FilterItem';
import recipes from '../data/recipes.json'


const Nrec = () => {
    let newRecipe = recipes.filter(recipe => {
        return recipe.id === (recipes.length) 
    }) 
    console.log(newRecipe[0])
    return (
        <div className="welcome__new-description-new-rec container-fluid">
                <div className=" welcome__new-menu-box-outer">
                        <div className="welcome__new-menu-box-inner">
                            <img src={newRecipe[0].image} alt="mains" className="welcome__new-menu-box-img"/>
                            <div className="welcome__new-menu-name-wrap">
                                <h3 className="welcome__new-menu-box-img-text2 font">Newest Recipe:</h3>
                                <h3 className="welcome__new-menu-box-img-text font">{newRecipe[0].name}</h3>
                            </div>
                        </div>
                </div>
            </div>
      );
    }

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="padder"></div>
            <div className="container-fluid text-left welcome__title-box">
                <h2 className="welcome__title font">Welcome.</h2>
                <p className="welcome__description font"> Select a menu below</p>
=======
            <div className="container-fluid text-left welcome__title-box pl-0">
                <h2 className="welcome__title font mt-2">Welcome.</h2>
                <p className="welcome__description"> Please select a menu below</p>
>>>>>>> parent of 745e6ca4... update
=======
            <div className="container-fluid text-left welcome__title-box pl-0">
                <h2 className="welcome__title font mt-2">Welcome.</h2>
                <p className="welcome__description"> Please select a menu below</p>
>>>>>>> parent of 745e6ca4... update
=======
            <div className="container-fluid text-left welcome__title-box pl-0">
                <h2 className="welcome__title font mt-2">Welcome.</h2>
                <p className="welcome__description"> Please select a menu below</p>
>>>>>>> parent of 745e6ca4... update
            </div>
            <div className="welcome__menu-box">
                {filters.map((filter) => <Filteritem key={filter.id} filter={filter} />)}
            </div>
            <div className="padder"></div>
            <div className="d-flex">
            <div className="welcome__new-rec">
                {Nrec()}
            </div>
            <div className="container-fluid welcome__title-box-bottom mt-5 pr-0">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <h3 className="welcome__description-bottom-header font">All recipes</h3>
                <p className="welcome__description-bottom font">are sourced by Grandma from all over the net, editted and perfected by her expert touch.</p>
            </div>
=======
                <p className="welcome__description-bottom mb-0">All recipes are sourced by Grandma from all over the net, editted and perfected by her expert touch.</p>
>>>>>>> parent of 745e6ca4... update
=======
                <p className="welcome__description-bottom mb-0">All recipes are sourced by Grandma from all over the net, editted and perfected by her expert touch.</p>
>>>>>>> parent of 745e6ca4... update
=======
                <p className="welcome__description-bottom mb-0">All recipes are sourced by Grandma from all over the net, editted and perfected by her expert touch.</p>
>>>>>>> parent of 745e6ca4... update
            </div>
            
            
        </div>
     );
}
 
export default Welcome;