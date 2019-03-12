import React from 'react';
import ReactDOM from 'react-dom'
import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';

class App  extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:  "",
            ingredients: "",
            instructions: "",
            recipeList: []

        }
    }
    componentWillMount(){
        this.checkStorage()
    }

    componentDidMount(){
        this.checkStorage()
    }

    checkStorage = ()=>{
    if(localStorage.getItem("recipe")){
        this.setState({recipeList: JSON.parse(localStorage.getItem("recipe"))})
        
     }
    }


    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})    
    }

    clearState = () => {
        console.log("in")
    this.setState({
        name: "",
        ingredients: "",
        instructions: ""
    })
    
    }

    addRecipe = (event) => {
        
        event.preventDefault()
        let recipe = {}
        let forUpload = []
        let id = 1 + Math.random()
        const recipeList = this.state.recipeList
        const {name, ingredients, instructions} = this.state
    
        if(name.length > 0 && ingredients.length > 0 && instructions.length > 0){
            recipe = Object.assign({}, {id: id.toString(), name: name, ingredients: ingredients, instructions: instructions})
            forUpload = recipeList.concat(recipe)
            localStorage.setItem('recipe', JSON.stringify(forUpload))
            this.clearState()
            this.setState({recipeList: forUpload})
        }
        
        this.checkStorage()
    }   
    render(){
        return(
            <div className="main">
                <h1>Recipe Book</h1>
                <AddRecipe 
                list = {this.state}
                handleChange={this.handleChange}
                addRecipe={this.addRecipe}
                />
                <RecipeList recipeList = {this.state.recipeList}/>
            </div>
        
        )
    }
}
export default App