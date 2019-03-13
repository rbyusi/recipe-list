
import React, { Component } from 'react'
import propTypes from 'prop-types'

class RecipeDetails extends Component {
    render() {
        let selected = []
        if(this.props.recipeList.length === 1 ){
             selected = this.props.recipeList
        }else{
            selected = this.props.recipeList.filter(recipe => recipe.id === this.props.selectedId)
        }

        return (
            <div>
                {selected.map((item) => {
                    const ingArr = item.ingredients.split('\n')
                    const insArr = item.instructions.split('\n')
                        return(
                            <div key={item.id}>
                                <div className="recipe-details">
                                    <section>
                                        <span className="section-title">Ingredients</span>
                                        <ul>
                                            {ingArr.map((item,i) => <li key={i}>{item.trim()}</li>)}
                                        </ul>
                                    </section>
                                </div>
                                <div className="recipe-details">
                                    <section>
                                        <span className="section-title">Instructions</span>
                                        <ol>
                                            {insArr.map((item,i)=> <li key={i}>{item.trim()}</li>)}
                                        </ol>
                                    </section>
                                </div>  
                            </div>
                         )
                })}
               
             </div>
    )
}
}


RecipeDetails.propTypes = {
    selectedId: propTypes.string.isRequired,
    recipeList: propTypes.array.isRequired
}
export default RecipeDetails