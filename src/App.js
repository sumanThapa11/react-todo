import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';

import React from 'react';
import TodoList from './todos/TodoList';
import {hot} from 'react-hot-loader';

const App = () => (

        <div className="App">
            <TodoList />
        </div>
       
)

export default hot(module)(App);