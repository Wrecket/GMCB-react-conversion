import React from 'react';
import './Welcome.css'
import Filteritem from '../FilterItem/FilterItem';
import recipes from '../data/recipes.json'
import {Link} from 'react-router-dom'


const Nrec = () => {
    let newRecipe = recipes.filter(recipe => {
        return recipe.id === (recipes.length) 
    }) 
    return (
        
            <div className=" welcome__menu-box-outer newrec">
                    <div className="welcome__menu-box-inner">
                    <h2 className="welcome__new-recipe font">Newest Recipe</h2>
                    <Link to={`/recipes/${recipes.length}`} id={newRecipe.name} className="recipe__link">
                        <img src={newRecipe[0].image} alt={newRecipe[0].name} className="welcome__menu-box-img"/>
                        <div className="welcome__menu-name-wrap">
                            <h3 className="welcome__menu-box-img-text font">{newRecipe[0].name}</h3>
                        </div>
                    </Link>    
                    </div>
             </div>
        
      );
    }

    const Rrec = () => {
        let random = Math.floor(Math.random() * (Math.floor(1+(recipes.length))))
        let newRecipe = recipes.filter(recipe => {
            return recipe.id === random
        }) 
        return (
                <div className=" welcome__menu-box-outer newrec">
                        <div className="welcome__menu-box-inner">
                        <h2 className="welcome__new-recipe font">Random Recipe</h2>
                        <Link to={`/recipes/${random}`} id={newRecipe.name} className="recipe__link">
                            <img src={newRecipe[0].image} alt={newRecipe[0].name} className="welcome__menu-box-img"/>
                            <div className="welcome__menu-name-wrap">
                                <h3 className="welcome__menu-box-img-text font">{newRecipe[0].name}</h3>
                            </div>
                        </Link>    
                        </div>
                 </div>
          );
        }
        const Frec = () => {
            let newRecipe = recipes.filter(recipe => {
                return recipe.id === 8
            }) 
            return (
                
                    <div className=" welcome__menu-box-outer newrec">
                            <div className="welcome__menu-box-inner">
                            <h2 className="welcome__new-recipe font">Featured Recipe</h2>
                            <Link to={`/recipes/${recipes.length}`} id={newRecipe.name} className="recipe__link">
                                <img src={newRecipe[0].image} alt={newRecipe[0].name} className="welcome__menu-box-img"/>
                                <div className="welcome__menu-name-wrap">
                                    <h3 className="welcome__menu-box-img-text font">{newRecipe[0].name}</h3>
                                </div>
                            </Link>    
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
                    {Nrec()}
                    {Rrec()}
                    {Frec()}
                </div>
            </div>
        </div>
     );
}
 
export default Welcome;