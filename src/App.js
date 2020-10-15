import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import RecipeList from './Component/RecipeList/RecipeList';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import RecipeItemDetails from './Component/RecipeItemDetails/RecipeItemDetails';
import Welcome from './Component/Welcome/Welcome';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <React.Fragment>
          <Navbar/>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/recipes" component={RecipeList} />
          <Route path="/recipes/:id" component={RecipeItemDetails} />
          </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
