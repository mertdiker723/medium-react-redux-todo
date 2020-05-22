import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteTodoAction, getOneTodoAction, showUpdateAddButtonAction, completedTodoAction, clearSelectedTodoAction } from '../../action/action';

class ListNDeleteComp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    deleteTodo = (item) => {
        this.props.onDeleteTodo(item);
        this.props.onShowUpdateAddButton(false);
        this.props.onGetOneTodo({
            todo: ""
        })
    }

    editTodo = (item) => {
        this.props.onGetOneTodo({
            id: item.id,
            todo: item.todo,
            completed: item.completed,
        });
        this.props.onShowUpdateAddButton(true);
    }

    completeTask = async (item) => {
        await this.props.onCompletedTodo({
            id: item.id,
            todo: item.todo,
            completed: !item.completed
        });
    }

    checkBoxTodo = (e, item) => {        
        if (e.target.checked) {
            const x = [...this.state.data, item];
            this.setState({
                data: x
            })
        }
    }

    deleteAllSelectedTodos = () => {
        this.state.data.forEach(element => {
            this.props.onDeleteTodo(element);
        });
    }

    render() {
        console.log(this.props.clearTasks)
        return (
            <div>
                <ul className="list-group">
                    {this.props.todoTasks.map((item) => {
                        return (
                            this.todoList(item)
                        )
                    })}
                </ul>
                <button onClick={this.deleteAllSelectedTodos} className="btn btn-dark">Clear Tasks</button>
            </div>
        )
    }

    todoList = (item) => {
        return (
            <li key={item.id} className="list-group-item list-group-item-primary mb-3 ">
                <input onChange={(e) => this.checkBoxTodo(e, item)} type="checkbox" className="mr-3" />
                <span onClick={() => this.completeTask(item)} className={item.completed ? "list-item-font line-todo" : "list-item-font"}>{item.todo}</span>
                <div className="d-inline float-right">
                    <button onClick={() => this.editTodo(item)} className="mr-2"><img src="https://img.icons8.com/wired/64/000000/edit.png" alt="no edit icon" width="25" /></button>
                    <button onClick={() => this.deleteTodo(item)}><img src="https://img.icons8.com/officel/16/000000/delete-sign.png" alt="no delete icon" width="25" /></button>
                </div>
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todoTasks: state.todoReducer,
        clearTasks: state.clearSelectedReducer
    }
}

const mapDispatchToProps = {
    onDeleteTodo: deleteTodoAction,
    onGetOneTodo: getOneTodoAction,
    onShowUpdateAddButton: showUpdateAddButtonAction,
    onCompletedTodo: completedTodoAction,
    onClearSelectedTodo: clearSelectedTodoAction
}


export default connect(mapStateToProps, mapDispatchToProps)(ListNDeleteComp);