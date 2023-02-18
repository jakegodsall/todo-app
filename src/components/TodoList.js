import React from 'react';

import TodoItem from './TodoItem';
import DarkCard from './UI/DarkCard';
import LightCard from './UI/LightCard';

const TodoList = (props) => {
    const getSelectedHandler = (idOfSelected) => {
        props.getSelected(idOfSelected);
    };

    const getDeletedHandler = (idOfDeleted) => {
        props.getDeleted(idOfDeleted);
    };

    const getTotal = (data) => {
        console.log(data);
        const total = data.reduce((total, element) => {
            if (!element.complete) {
                return (total += 1);
            } else {
                return total;
            }
        }, 0);
        return total;
    };

    const onClearCompleted = () => {
        props.clearCompleted(true);
    };

    return (
        <div className='flex flex-col relative z-10 mt-40 mx-5 rounded-md'>
            {props.darkMode ? (
                <DarkCard>
                    <ul>
                        {props.data.map((el, idx) => {
                            return (
                                <li className='' key={idx}>
                                    <TodoItem
                                        complete={el.complete}
                                        darkMode={props.darkMode}
                                        getSelected={getSelectedHandler}
                                        getDeleted={getDeletedHandler}
                                        id={el.id}
                                    >
                                        {el.content}
                                    </TodoItem>
                                </li>
                            );
                        })}
                    </ul>
                </DarkCard>
            ) : (
                <LightCard>
                    <div className='flex flex-col'>
                        <ul>
                            {props.data.map((el, idx) => {
                                return (
                                    <li className='' key={idx}>
                                        <TodoItem
                                            complete={el.complete}
                                            darkMode={props.darkMode}
                                            getSelected={getSelectedHandler}
                                            getDeleted={getDeletedHandler}
                                            id={el.id}
                                        >
                                            {el.content}
                                        </TodoItem>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className='flex justify-between items-center'>
                            <p>{getTotal(props.data)} items left</p>
                            <button onClick={onClearCompleted}>Clear Completed</button>
                        </div>
                    </div>
                </LightCard>
            )}
        </div>
    );
};

export default TodoList;
