import React from 'react';
import {CustomInput , Button , Table } from 'reactstrap'
import PropTypes from 'prop-types';

export const TableView = ({todo , toggleSelect , toggleCompleted}) => {
    return (
        <>
        <tr>
            <td scope='row'>
                <CustomInput 
                    type = 'checkbox'
                    id = {todo.id}
                    checked = {todo.isSelect}
                    onChange = {() => toggleSelect(todo.id)}
                />
            </td>
            <td>
                {
                    todo.time.toDateString()
                }
            </td>
            <td>
                {
                    todo.text
                }
            </td>
            <td>
                {
                    <Button
                        color = {todo.isCompleted ? 'danger' : 'success'}
                        onClick={() => toggleCompleted(todo.id)}
                    >
                        {
                            todo.isCompleted ? 'Completed' : 'Running'
                        }
                    </Button>
                }
            </td>
        </tr>
            
        </>
    );
};

// export default TableView;

TableView.prototype = {
    todo : PropTypes.object.isRequired,
    toggleSelect : PropTypes.func.isRequired,
    toggleCompleted : PropTypes.func.isRequired,
}



const TableShow = ({todos , toggleSelect , toggleCompleted}) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>Todo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(todo => 
                        <TableView
                            key = {todo.id}
                            todo = {todo}
                            toggleSelect = { toggleSelect }
                            toggleCompleted = { toggleCompleted }
                         />)
                }
            </tbody>
            
        </Table>
    );
};

TableShow.propTypes = {
    todos : PropTypes.object.isRequired,
    toggleSelect : PropTypes.func.isRequired,
    toggleCompleted : PropTypes.func.isRequired,
}

export default TableShow;

