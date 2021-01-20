import React from 'react';
import {ListGroup ,ListGroupItem , CustomInput , Button} from 'reactstrap';
import PropTypes from 'prop-types';

export const ListItem = ({todo , toggleSelect , toggleCompleted}) => {
    return (
        <>
            <ListGroupItem className="d-flex align-items-center">
                <CustomInput 
                    type = 'checkbox'
                    id = {todo.id}
                    checked = {todo.isSelect}
                    onChange = { () => toggleSelect(todo.id)}
                />
                <div className="mx-3">
                    <h4>{todo.text}</h4>
                    <p>{todo.time.toDateString()}</p>
                </div>
                <Button 
                className='ml-auto' 
                color = {todo.isCompleted ? 'danger' : 'success'}
                onClick={() => toggleCompleted(todo.id)}
                >
                    {
                        todo.isCompleted ? 'Complete' : 'Running'
                    }
                </Button>

            </ListGroupItem>
        </>
    );
};


ListItem.prototype = {
    todo : PropTypes.object.isRequired,
    toggleSelect : PropTypes.func.isRequired,
    toggleCompleted : PropTypes.func.isRequired,
}

// export default ListView;

const ListView = ({todos , toggleSelect , toggleCompleted}) => {
    return (
        <ListGroup>
            {
                todos.map(todo => 
                <ListItem 
                    key = {todo.id}
                    todo = { todo }
                    toggleCompleted = { toggleCompleted }
                    toggleSelect = { toggleSelect}
                />)
            }
        </ListGroup>
    )
}

ListView.propTypes = {
    todos : PropTypes.object.isRequired,
    toggleSelect : PropTypes.func.isRequired,
    toggleCompleted : PropTypes.func.isRequired,
}

export default ListView;