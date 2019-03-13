import React from 'react';
import AddRecipe from './AddRecipe';
import RecipeNameList from './RecipeNameList';
import RecipeDetails from './RecipeDetails';

class App  extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:  "",
            ingredients: "",
            instructions: "",
            recipeList: [],
            selectedRecipe: "",
            modal: false

        }
    }
    componentWillMount(){
        this.checkStorage()
        this.checkFirstItem()
    }

    componentDidMount(){
        this.checkStorage()
        this.checkFirstItem()
    }

    checkFirstItem = ()=> {
        if (this.state.recipeList.length >= 1){
            const firstItem = this.state.recipeList.shift()
            this.setState({selectedRecipe: firstItem.id})
        }

    }
    checkStorage = ()=>{
        if(localStorage.getItem("recipe")){
        this.setState({recipeList: JSON.parse(localStorage.getItem("recipe"))})
     }
     
    }

    openModal = (event) =>{
        event.preventDefault()
        this.setState({modal: !this.state.modal})
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})    
    }
    
    nameClick=(id,key)=>{
        this.setState({selectedRecipe: id})
        this.setState({selectedRecipe: key})
    }

    clearState = () => {
        this.setState({
            name: "",
            ingredients: "",
            instructions: ""
        })
    
    }

    addRecipe = (event) => {
        event.preventDefault()
        const id = 1 + Math.random()
        const recipeList = this.state.recipeList
        const {name, ingredients, instructions} = this.state
    
        if(name.trim().length > 0 && ingredients.trim().length > 0 && instructions.trim().length > 0){
            const recipe = Object.assign({}, {id: id.toString(), name: name, ingredients: ingredients, instructions: instructions})
            const forUpload = recipeList.concat(recipe)
            localStorage.setItem('recipe', JSON.stringify(forUpload))
            this.clearState()
            this.setState({recipeList: forUpload})
        }
        this.checkStorage()
        this.setState({modal: !this.state.modal})
    }   

    deleteItem = (event) => {
        event.preventDefault()
        const updatedArr = this.state.recipeList.filter(item => item.id !== this.state.selectedRecipe)
        localStorage.setItem('recipe', JSON.stringify(updatedArr))
        this.checkStorage()
        this.checkFirstItem()
        console.log(updatedArr);

    }
    
    render(){
        return(
            <div className="container">
                <div className="recipe-container">
                    <AddRecipe 
                        list = {this.state}
                        handleChange={this.handleChange}
                        modal={this.state.modal}
                        openModal={this.openModal}
                        addRecipe={this.addRecipe}/>
                </div>
                <div className="recipe-container">
                    <RecipeNameList 
                        recipeList = {this.state.recipeList}
                        selectedId = {this.state.selectedRecipe}
                        openModal={this.openModal}
                        deleteItem={this.deleteItem}
                        nameClick={this.nameClick} />
                    <div className="recipe-container">
                        <RecipeDetails
                            //selectedName={this.state.recipeList.filter(recipe => recipe.id === this.state.selectedRecipe)}
                            recipeList={this.state.recipeList}
                            selectedId={this.state.selectedRecipe} />
                    </div>
                </div>
            </div>
        )
    }
}
export default App