import React, { Component } from 'react';
import { Form, FormGroup, Input, Label , Button} from 'reactstrap';


class CreateTodoForm extends Component {
    state = {
        text: '' ,
        description : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createTodo(this.state)
        e.target.reset()
        this.setState({name : '' , description : ''})
    }


    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Enter You Task</Label>
                    <Input 
                        placeholder = 'Do you some text'
                        type = 'text'
                        name = 'text'
                        value ={this.state.text}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Describe Task</Label>
                    <Input 
                        placeholder = 'Write some short description about your task'
                        type = 'textarea'
                        name = 'description'
                        value ={this.state.description}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type="submit">
                    Create Task
                </Button>
            </Form>
        );
    }
}

export default CreateTodoForm;




// import React, {  useState } from 'react';
// import { Form, FormGroup, Input, Label , Button} from 'reactstrap';

// const CreateTodoForm = ({createTodo}) => {
//     const [data , setData] = useState({ 
//         name : '',
//         description : ''
//     })

//         const handleChange = (e) => {
//             setData({
//                 [e.target.name] : e.target.value
//             })
//         }

//         const handleSubmit = (e) => {
//             e.preventDefault()

//             createTodo(data)

//             e.target.reset()
//             setData({name : '' , description : ''})
//         }

//     return (
//         <div>
//             <Form onSubmit={handleSubmit}>
//               <FormGroup>
//                     <Label>Enter You Task</Label>
//                     <Input 
//                          placeholder = 'Do you some code'
//                         //  name = 'name'
//                          type = 'text'
//                          value ={data.text}
//                          onChange={handleChange}
//                      />
//                  </FormGroup>
//                  <FormGroup>
//                      <Label>Describe Task</Label>
//                      <Input 
//                          placeholder = 'Write some short description about your task'
//                         //  name = 'description'
//                          type = 'textarea'
//                          value ={data.description}
//                          onChange={handleChange}
//                     />
//                  </FormGroup>
//                  <Button type="submit">
//                      Create Task
//                  </Button>
//              </Form>
//         </div>
//     );
// };

// export default CreateTodoForm;