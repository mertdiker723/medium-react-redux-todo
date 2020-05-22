import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodoAction, updateTodoAction, showUpdateAddButtonAction } from '../../action/action';
class AddComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: "",
        }
    }

    onChangeTodo = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.oneTodo.todo !== this.props.oneTodo.todo) {
            this.setState({
                todo: this.props.oneTodo.todo,
            })
        }        
    }

    addTodo = async (e) => {
        e.preventDefault();
        if (this.state.todo === "") {
            alert("Alan boş geçilemez!")
        }
        else {
            await this.props.onAddTodo({
                id: Math.random(),
                todo: this.state.todo,
                completed: false,
            });
            this.setState({
                todo: ""
            })
        }
    }

    updateTodo = async (e) => {
        e.preventDefault();
        await this.props.onUpdateTodo({
            id: this.props.oneTodo.id,
            todo: this.state.todo,
            completed: false,
        });
        this.props.onShowUpdateAddButton(false);
        this.setState({
            todo: "",
        })
    }
    
    render() {
        return (
            <div className="mb-4">
                <form onSubmit={this.props.buttonShow ? this.updateTodo : this.addTodo}>
                    <label htmlFor="enterTodo"><h5>Enter Down Todo</h5></label>
                    <input value={this.state.todo} onChange={this.onChangeTodo} maxLength="30" type="text" className="form-control" id="enterTodo" placeholder="Enter todo" />
                    {
                        this.props.buttonShow
                            ?
                            <button type="submit" className="btn btn-success mt-3">Update Task</button>
                            :
                            <button type="submit" className="btn btn-light mt-3">Add Task</button>
                    }
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        oneTodo: state.oneTodoReducer,
        buttonShow: state.showButtonReducer
    }
}

const mapDispatchToProps = {
    onAddTodo: addTodoAction,
    onUpdateTodo: updateTodoAction,
    onShowUpdateAddButton: showUpdateAddButtonAction
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComp);