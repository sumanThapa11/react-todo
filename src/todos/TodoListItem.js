import './TodoListItem.css';

import { EuiButton, EuiText } from '@elastic/eui';

import React from 'react';

const TodoListItem = ({todo, onRemovePressed, onCompletedPressed }) => (
    <div className="todo-item-container">
        <EuiText>
            <h4>{todo.text}</h4>
        </EuiText> 
        <div className="buttons-container">
            {todo.isCompleted 
                ? null 
                : <EuiButton 
                   
                    size='s'      
                    onClick={()=>onCompletedPressed(todo.id)}
                    className="completed-button"
                    >
                        Mark As Completed
                    </EuiButton>}
            {/* <button 
                onClick={()=>onRemovePressed(todo.id)}
                className="remove-button">Remove</button> */}
                <EuiButton 
                    className='remove-button' 
                    fill='true'
                    size='s' 
                    color= 'danger' 
                    onClick={()=>onRemovePressed(todo.id)}>
                        Remove
                    </EuiButton>
        </div>     
    </div>
)

export default TodoListItem;