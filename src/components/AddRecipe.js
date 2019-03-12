import React, { Component } from 'react'
import propTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddRecipe extends Component {
    constructor(props){
        super(props)
        this.state = {
            modal: false
        }
    }

    openModal = () =>{
        this.setState({modal: !this.state.modal})
    }
    render() {
    return (
        <div> 
            <Modal isOpen={this.state.modal}>
                <Form>
                    <ModalBody>
                        <FormGroup>
                            <Label for="name">Recipe Name</Label>
                            <Input type="text" name="name" value={this.props.list.name}  onChange={this.props.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label>ingredients</Label>
                            <Input type="textarea" name="ingredients" value={this.props.list.ingredients} onChange={this.props.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Instructions</Label>
                            <Input type="textarea" name="instructions" value={this.props.list.instructions} onChange={this.props.handleChange}/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button name="addRecipe" color="primary" onClick={this.props.addRecipe}>Add Recipe</Button>
                        <Button color="secondary" onClick={this.openModal}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </Modal>
            <Button name="add" color="secondary" onClick={this.openModal} >Add Recipe</Button>
        </div>
    )
  }
}

AddRecipe.propTypes = {
    list: propTypes.object.isRequired,
    addRecipe: propTypes.func.isRequired,
    handleChange: propTypes.func.isRequired
}

export default AddRecipe;

function newFunction() {
    return "addRecipe";
}
