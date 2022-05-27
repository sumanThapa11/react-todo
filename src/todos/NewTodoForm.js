import './NewTodoForm.css';

import { EuiButton, EuiFieldText, EuiFlexGroup, EuiFlexItem } from '@elastic/eui';

import React from 'react';
import { addTodoRequest } from './thunks';
import { connect } from 'react-redux';
import { getTodos } from './selectors';
import { useState } from 'react';

const NewTodoForm = ({todos, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');
    return (
    <div className="new-todo-form">
        <EuiFlexGroup style={{ maxWidth: 600 }}>
            <EuiFlexItem  grow={false} style={{ width: 400 }}>
                <EuiFieldText 
                    className='new-todo-input'
                    placeholder='Type your new todo here'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}>
                </EuiFieldText>
            </EuiFlexItem>
            <EuiFlexItem grow={false} style={{width:170}} >
                <EuiButton 
                    className = 'new-todo-button'
                    onClick={() => {
                        const isDuplicateText = 
                            todos.some(todo => todo.text === inputValue);
                        if (!isDuplicateText){
                            onCreatePressed(inputValue);
                            setInputValue('');
                        }         
                    }}
                   
                    size='m'
                    
                    >
                    Create Todo
                </EuiButton>
            </EuiFlexItem>
        </EuiFlexGroup>
    </div>
);
}

const mapStateToProps = state => ({
    todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);