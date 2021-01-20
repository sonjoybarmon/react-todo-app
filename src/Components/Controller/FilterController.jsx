import React from 'react';
import {Button , ButtonGroup} from 'reactstrap'

const FilterController = ({handleFilter}) => {   
    return (
        <ButtonGroup>
            <Button onClick={() => handleFilter('all')}>All</Button>
            <Button onClick={() => handleFilter('running')}>Running</Button>
            <Button onClick={() => handleFilter('completed')}>Completed</Button>
        </ButtonGroup>
    );
};

export default FilterController;