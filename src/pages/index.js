import React, { useState } from 'react';

import TodoList from '@/components/TodoList';

const DUMMY_DATA = [
    {
        content: 'Complete online JavaScript course',
        complete: true,
    },
    {
        content: 'Jog around the park 3x',
        complete: false,
    },
    {
        content: '10 minutes meditation',
        complete: false,
    },
    {
        content: 'Read for 1 hour',
        complete: false,
    },
    {
        content: 'Pick up groceries',
        complete: false,
    },
    {
        content: 'Complete Todo App on Frontend Mentor',
        complete: false,
    },
];

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? 'w-full h-full' : 'w-full h-full bg-[#fafafa]'}>
            {darkMode ? (
                <div className='absolute w-full h-[25vh] bg-mobile-dark bg-no-repeat bg-cover lg:bg-desktop-dark'></div>
            ) : (
                <div className='absolute w-full h-[25vh] bg-mobile-light bg-no-repeat bg-cover lg:bg-desktop-light'></div>
            )}

            <TodoList darkMode={darkMode} data={DUMMY_DATA} />
        </div>
    );
};

export default Home;
