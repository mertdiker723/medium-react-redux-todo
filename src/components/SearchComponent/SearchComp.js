import React, { Component } from 'react'

class SearchComp extends Component {
    render() {
        return (
            <form>
                <label htmlFor="searchTodo"><h5>Search Tasks</h5></label>
                <div className="form-group mb-2 ">
                    <input type="text" className="form-control w-50 d-inline" id="searchTodo" placeholder="Search" />
                    <div className="d-inline float-right">
                        <button type="submit" className="btn btn-primary ml-2 mb-1 d-inline">All </button>
                        <button type="submit" className="btn btn-primary ml-2 mb-1 d-inline">Completed </button>
                        <button type="submit" className="btn btn-primary ml-2 mb-1 d-inline">Not Completed</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchComp;