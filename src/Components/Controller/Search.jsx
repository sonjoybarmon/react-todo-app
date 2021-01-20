import React from 'react';
import {Input , Button} from 'reactstrap'

const Search = ({term , toggleSearch , toggleForm}) => {
    return (
        <div className = 'd-flex my-4'>
            <Input 
                placeholder = 'Enter Search Term'
                className = 'mr-3'
                value = {term}
                onChange = {e => toggleSearch(e.target.value)}
            />

            <button className = 'btn btn-success' onClick={() => toggleForm()} >
                New
            </button>
            
            
        </div>
    );
};

export default Search;