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

    let data = [];
    if (props.filter === 'all') {
        data = props.data;
    } else if (props.filter === 'active') {
        data = props.data.filter((el) => !el.complete);
    } else if (props.filter === 'completed') {
        data = props.data.filter((el) => el.complete);
    }

    return (
        <React.Fragment>
            {props.darkMode ? (
                <DarkCard>
                    <ul>
                        {data.map((el, idx) => {
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
                    <div className='flex flex-col w-full'>
                        <ul>
                            {data.map((el, idx) => {
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
                        <div className='flex justify-between items-center text-[#d2d3db] text-sm font-bold px-8 pt-5 pb-2'>
                            <p>{getTotal(props.data)} items left</p>
                            <button onClick={onClearCompleted}>Clear Completed</button>
                        </div>
                    </div>
                </LightCard>
            )}
        </React.Fragment>
    );
};

export default TodoList;
