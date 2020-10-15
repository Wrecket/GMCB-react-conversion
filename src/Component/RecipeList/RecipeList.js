import React from 'react';
import './RecipeList.css';
import recipes from '../data/recipes.json'
import RecipeItem from '../RecipeItem/RecipeItem';

class RecipeList extends React.Component { 

    constructor() {
        super()
        this.state = {
           recipes : recipes,
           searchInput: ""
        }
    }

    window = () => {
        console.log(window.location.search);
    }

    handleSearch = (e) => {
        e.preventDefault()
        this.setState({
            searchInput: e.target.value.toLowerCase()
        })
    }

    check = (e) => {
        e.preventDefault()
        this.setState({
            searchInput: e.target.id.toLowerCase()
        })
    }
    
    menuFunc = (e) => {
        e.preventDefault()
        this.setState({
            searchInput: e.target.id.toLowerCase()
        })
    }

    componentDidMount(props) {
        this.setState({
            searchInput: this.props.match.params.filter
        })
    }
    
    
    render() {
        let filteredRecipes = this.state.recipes.filter(recipe => {
            return recipe.category.toLowerCase().includes(this.state.searchInput) || recipe.name.toLowerCase().includes(this.state.searchInput) || recipe.time.toLowerCase().includes(this.state.searchInput)
        })
        if (recipes.length === 0) return <div className="noItems">No Items Found</div>;
        else
		    return <div className="recipeList">
                <div className="recipe__overwrap">
                    <div className="recipe__inputs container-fluid text-center">
                        <div className="recipe__input-wrap">
                            <input className="recipe__input" type="text" placeholder="Search..." onChange={this.handleSearch} />
                            <div className="recipe__input-wrap-inner container-fluid">
                                <button className="check btn btn-secondary" id="main" onClick={this.check}>Mains</button>
                                <button className="check btn btn-secondary" id="side" onClick={this.check}>Sides</button>
                                <button className="check btn btn-secondary" id="dessert" onClick={this.check}>Dessert</button>
                                <button className="check btn btn-secondary" id="starter" onClick={this.check}>Starters</button>
                                <button className="check btn btn-secondary" id="cake" onClick={this.check}>Cake</button>
                                <button className="check btn btn-secondary" id="" onClick={this.check}>All</button>
                            </div>
                            </div>
                    </div>
                    <div className="recipe container-fluid pl-5 pb-5">
                        {filteredRecipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)}
                    </div>
                    
                </div>  
                    </div>; 
    }
}

export default RecipeList;