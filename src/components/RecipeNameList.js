
import React, { Component } from 'react';
import propTypes from 'prop-types';


class RecipeNameList extends Component {
  render() { 
    const recipeList = this.props.recipeList
    
    const list = recipeList.map((recipe,i)=>{ 
        const classSel = () =>{
          if(i === 0 && this.props.selectedId.length === 0){
            return "selected"
          }
          return this.props.selectedId === recipe.id ? "selected" : ""
        }
          return(
            <li key={recipe.id} 
                className={classSel()}
                onClick={()=>this.props.nameClick(recipe.id,recipe.id)}>
                {recipe.name}
                </li>
          )  
     });
    return(
        <div className="name-list">
            <section>
              <span className="section-title">Recipes
                <button
                  value="Add" 
                  onClick={this.props.openModal} >
                  +
                </button>
                <button 
                  value="Edit"
                  hidden={this.props.recipeList.length === 0 && true }
                  onClick={this.props.openModal} >
                  ...
                </button>
                <button
                  value="Delete"
                  onClick={this.props.deleteItem} >
                  x
                </button>
              </span>
              <ul>
                {list}
              </ul>
            </section>   
        </div>
       
    )
    }
}


RecipeNameList.propTypes = {
   recipeList: propTypes.array.isRequired,
   nameClick: propTypes.func.isRequired,
   selectedId: propTypes.string.isRequired,
   openModal: propTypes.func.isRequired,
   deleteItem: propTypes.func.isRequired,
}

export default RecipeNameList