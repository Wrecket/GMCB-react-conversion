import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import RecipeList from './Component/RecipeList/RecipeList';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import RecipeItemDetails from './Component/RecipeItemDetails/RecipeItemDetails';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={RecipeList} />
      <Route exact path="/recipes" component={RecipeList} />
      <Route exact path="/recipes/:id" component={RecipeItemDetails} />
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
