
import React, { Component } from 'react';
import propTypes from 'prop-types';


class RecipeList extends Component {
  render() { 
    const recipeList = this.props.recipeList
    const list = recipeList.map(recipe=>{ 
          return(
            <div key={recipe.id} className="recipeList">
                <h3> Name: {recipe.name}</h3>
                <hr />
                <h3>{recipe.ingredients}</h3>
                <hr />
                <h3>{recipe.instructions}</h3>
                <hr />
            </div>
          )  
     });

    return(
        <div>
                 {list}
        </div>
       
    )
    }
}

RecipeList.propTypes = {
   recipeList: propTypes.array.isRequired
}

export default RecipeList