import React, { Component } from 'react'

class SearchComp extends Component {

    render() {        
        return (
            <>
                <label htmlFor="searchTodo"><h5>Search Tasks</h5></label>
                <div className="form-group mb-2 ">
                    <input type="text" className="form-control w-50 d-inline" id="searchTodo" placeholder="Search" />

                </div>
            </>
        )
    }
}



export default SearchComp;