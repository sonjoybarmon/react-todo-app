import React from 'react';
import {Button , ButtonGroup} from 'reactstrap'

const BulkController = ({clearSelected , clearCompleted , reset}) => {
      
    return (
        <ButtonGroup>
            <Button onClick={clearSelected}>Clear Selected</Button>
            <Button onClick={clearCompleted}>Clear Completed</Button>
            <Button onClick={reset}>reset</Button>
        </ButtonGroup>
    );
};

export default BulkController;