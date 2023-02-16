import React from 'react';

import TodoItem from './TodoItem';

const TodoList = () => {
    return (
        <div>
            <TodoItem>Jog around the park 3x</TodoItem>
            <TodoItem>10 minutes meditation</TodoItem>
            <TodoItem>Read for 1 hour</TodoItem>
            <TodoItem>Pick up groceries</TodoItem>
            <TodoItem>Complete Todo App on Frontend Mentor</TodoItem>
        </div>
    );
};

export default TodoList;
