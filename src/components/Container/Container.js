import React, { Component } from 'react'
import AddComp from '../AddComponent/AddComp'
import SearchComp from '../SearchComponent/SearchComp';
import ListNDeleteComp from '../ListDeleteComponent/ListNDeleteComp';

class Container extends Component {    

    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="alert alert-secondary mt-3 w-75" role="alert">
                    <h3 className="text-center">Todo App</h3>
                    <AddComp />
                    <hr />
                    <h3>Tasks</h3>
                    <SearchComp />
                    <hr />
                    <ListNDeleteComp />
                </div>
            </div>
        )
    }
}

export default Container;