import './TodoList.css';

import React, {useEffect} from 'react';
import { completedTodoRequest, loadTodos, removeTodoRequest } from './thunks';
import {
    getCompletedTodos,
    getIncompleteTodos,
    getTodosLoading
} from './selectors';

import { EuiText } from '@elastic/eui';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {connect} from 'react-redux'
import { isLoading } from './reducers';
import styled from 'styled-components';

const TodoList = ({completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    },[]);

    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />

            <EuiText>
                <h3>Incomplete:</h3>
            </EuiText>
            {incompleteTodos.map(todo => <TodoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onCompletedPressed={onCompletedPressed}/>)}
            
            <EuiText>
                <h3>Completed:</h3>
            </EuiText>
            {completedTodos.map(todo => <TodoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onCompletedPressed={onCompletedPressed}/>)}

        </div>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state)
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(completedTodoRequest(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);