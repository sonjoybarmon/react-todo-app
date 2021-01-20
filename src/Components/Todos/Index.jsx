import React, { Component } from 'react';
import {  Modal, ModalHeader, ModalBody } from 'reactstrap';
import Controller from '../Controller/Controller';
import ListView from '../ListView/ListView';
import TableShow from '../TableView/TableView';
import CreateTodoForm from '../CreateTodoForm/CreateTodoForm'
import shortid from 'shortid';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

class Todos extends Component {

    state = {
        // isOpenTodoForm : false ,
        todos : 
                [
                    {
                        id : '014564' ,
                        text : 'i am sonjoy',
                        description : "i'm a front-end developer",
                        time : new Date() ,
                        isCompleted : false ,
                        isSelect : false

                    },
                    {
                        id : '453245364' ,
                        text : 'i am sree',
                        description : "i'm a front-end developer",
                        time : new Date() ,
                        isCompleted : false ,
                        isSelect : false

                    }
                ],
        isOpenTodoForm : false ,
        searchTerm : '',
        view : 'list',
        filter : 'all'

    }


    toggleSelect = id => {
        const todos = [...this.state.todos]
        const todo =  todos.find(t => t.id === id)
        todo.isSelect = !todo.isSelect;
        this.setState({todo})
    }

    toggleCompleted = (id) => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === id)
        todo.isCompleted = !todo.isCompleted
        this.setState({todos})
    }

    //open amd closed modal function
    toggleForm = () => {
        this.setState({
            isOpenTodoForm : !this.state.isOpenTodoForm
        })

    }

    //create todo function
    createTodo = (todo) => {
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isCompleted = false
        todo.isSelect = false

        const todos = [todo , ...this.state.todos]
        this.setState({todos})
        this.toggleForm()

        console.log(todo)
    }

    //handle search function
    toggleSearch = (value) => {
        this.setState({searchTerm : value})
    }
    performSearch = () => {
        return this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    // handle filter function
    handleFilter = filter => {
        this.setState({filter})
    }
    performFilter = (todos) => {
        const {filter} = this.state
        if( filter === 'completed') {
            return todos.filter(todo => todo.isCompleted)
        }else if( filter === 'running'){
            return todos.filter(todo => !todo.isCompleted)
        }else{
            return todos;
        }
    }


    //view change function
    changeView = (e) => {
        this.setState({
            view : e.target.value
        })
    }

    clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelect)
        this.setState({todos})
    }

    clearCompleted = () => {
        const todos = this.state.todos.filter(todo => !todo.isCompleted)
        this.setState({todos})
    }

    reset = () => {
        this.setState({ 
            filter : 'all',
            searchTerm : '', 
            view : 'list',
            isOpenTodoForm : false,
            
        })
    }



    getView = () => {
        let todos = this.performSearch();
            todos = this.performFilter(todos)
        return this.state.view === 'list' ?
            <ListView
                todos = {todos}
                toggleCompleted = { this.toggleCompleted }
                toggleSelect = {this.toggleSelect}
            />
            :
            <TableShow
                todos = {todos}
                toggleCompleted = { this.toggleCompleted }
                toggleSelect = {this.toggleSelect}
            />
    }

    render() {
        return (
            <div>
                <h1 className=" display-4 text-center mb-5">Stack Todos</h1>
                <Controller 
                    term = {this.state.searchTerm}
                    toggleForm = {this.toggleForm}
                    toggleSearch = {this.toggleSearch}
                    handleFilter = {this.handleFilter}
                    changeView = {this.changeView}
                    clearCompleted = {this.clearCompleted}
                    clearSelected = {this.clearSelected}
                    reset = {this.reset}
                    view = {this.state.view}
                />


                <div>
                    {
                        this.getView()
                    }
                </div>
                 
                {/* <div>
                    <ListView
                        todos = {this.state.todos}
                        toggleCompleted = { this.toggleCompleted }
                        toggleSelect = {this.toggleSelect}
                    />
                </div>
                <div>
                    <TableShow
                        todos = {this.state.todos}
                        toggleCompleted = { this.toggleCompleted }
                        toggleSelect = {this.toggleSelect}
                    />
                </div> */}


                <Modal
                    isOpen = {this.state.isOpenTodoForm}
                    toggle = {this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm}>
                        Create New Todo Item
                    </ModalHeader>
                    <ModalBody>
                       
                        <CreateTodoForm createTodo = {this.createTodo} />
                       
                    </ModalBody>
                </Modal>

                {/* <Button variant="outlined" color="primary" onClick={this.toggleForm}>
                        Open alert dialog
                </Button> */}

                {/* <Dialog
                        open={this.state.isOpenTodoForm}
                        onClose={this.toggleForm}
                    >
                        <DialogTitle >
                            Create New Todo Item
                        </DialogTitle>
                            <DialogContent>
                                <DialogContentText >
                                    <CreateTodoForm createTodo={this.createTodo} />
                                </DialogContentText>
                            </DialogContent>
                        <DialogActions>
                        </DialogActions>
                    </Dialog> */}
               
            </div>
        );
    }
}

export default Todos;