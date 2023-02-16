import React from 'react';

import TodoItem from './TodoItem';

const TodoList = (props) => {
    return (
        <div className='flex flex-col'>
            {props.data.map((el, idx) => {
                return (
                    <TodoItem key={idx} complete={el.complete}>
                        {el.content}
                    </TodoItem>
                );
            })}
        </div>
    );
};

export default TodoList;
