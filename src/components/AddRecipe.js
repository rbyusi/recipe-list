import React, { Component } from 'react'
import propTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input,  Modal,  ModalBody, ModalFooter } from 'reactstrap';

class AddRecipe extends Component {
    render() {
    return (
        <div> 
            <Modal isOpen={this.props.modal}>
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
                        <Button   color="primary" onClick={this.props.addRecipe}>{this.props.buttonLabel}</Button>
                        <Button color="secondary"  onClick={this.props.openModal}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </div>
    )
  }
}

AddRecipe.propTypes = {
    list: propTypes.object.isRequired,
    addRecipe: propTypes.func.isRequired,
    handleChange: propTypes.func.isRequired,
    modal: propTypes.bool.isRequired,
    openModal: propTypes.func.isRequired,
    buttonLabel: propTypes.string.isRequired
}

export default AddRecipe;
