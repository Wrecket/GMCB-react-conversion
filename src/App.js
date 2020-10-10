import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import RecipeList from './Component/RecipeList/RecipeList';
import { Route, BrowserRouter } from 'react-router-dom'
import RecipeItemDetails from './Component/RecipeItemDetails/RecipeItemDetails';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Route exact path="/GMCB-react-conversion/" component={RecipeList} />
      <Route exact path="/GMCB-react-conversion/recipes" component={RecipeList} />
      <Route exact path="/GMCB-react-conversion/recipes/:id" component={RecipeItemDetails} />
    </div>
    </BrowserRouter>
  );
}

export default App;
