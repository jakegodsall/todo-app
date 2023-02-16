import React from 'react';

import TodoItem from './TodoItem';

const TodoList = (props) => {
    return (
        <div className='flex flex-col'>
            <ul>
                {props.data.map((el, idx) => {
                    return (
                        <li className='' key={idx}>
                            <TodoItem complete={el.complete} darkMode={props.darkMode}>
                                {el.content}
                            </TodoItem>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TodoList;
