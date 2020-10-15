import React from 'react';
import { Link } from 'react-router-dom'
import './FilterItem.css'

const Filteritem = ({filter}) => { 
    return ( 
        <div className="filterItem">
            <div className=" welcome__menu-box-outer">
                    <div className="welcome__menu-box-inner">
                        <Link to={`/${filter.filter}/recipes`} id={filter.filter} className="recipe__link">
                        <img src={filter.image} alt="mains" className="welcome__menu-box-img"/>
                        <div className="welcome__menu-name-wrap">
                            <h3 className="welcome__menu-box-img-text font">{filter.name}</h3>
                        </div>
                        </Link>
                    </div>
             </div>
        </div>
     );
}
 
export default Filteritem;