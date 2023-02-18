import React from 'react';

import LightCard from './UI/LightCard';
import DarkCard from './UI/DarkCard';

const FilterBar = (props) => {
    const onClickHandler = (e) => {
        props.getFilter(e.target.value);
    };

    return (
        <React.Fragment>
            {props.darkMode ? (
                <DarkCard>
                    <div>
                        <ul className='flex w-full'>
                            <li>All</li>
                            <li>Active</li>
                            <li>Completed</li>
                        </ul>
                    </div>
                </DarkCard>
            ) : (
                <LightCard>
                    <div>
                        <ul className='flex w-full'>
                            <li className='mx-2 font-bold cursor-pointer'>
                                <input
                                    type='radio'
                                    name='filter'
                                    id='all'
                                    className='peer hidden'
                                    onClick={onClickHandler}
                                    value='all'
                                    defaultChecked={true}
                                ></input>
                                <label
                                    htmlFor='all'
                                    className='peer-checked:text-[#3a7bfd] text-lg cursor-pointer transform-all duration-300'
                                >
                                    All
                                </label>
                            </li>
                            <li className='mx-2 font-bold cursor-pointer'>
                                <input
                                    type='radio'
                                    name='filter'
                                    id='active'
                                    className='peer hidden'
                                    onClick={onClickHandler}
                                    value='active'
                                ></input>
                                <label
                                    htmlFor='active'
                                    className='peer-checked:text-[#3a7bfd] text-lg cursor-pointer transform-all duration-300'
                                >
                                    Active
                                </label>
                            </li>
                            <li className='mx-2 font-bold cursor-pointer'>
                                <input
                                    type='radio'
                                    name='filter'
                                    id='completed'
                                    className='peer hidden'
                                    onClick={onClickHandler}
                                    value='completed'
                                ></input>
                                <label
                                    htmlFor='completed'
                                    className='peer-checked:text-[#3a7bfd] text-lg cursor-pointer transform-all duration-300'
                                >
                                    Completed
                                </label>
                            </li>
                        </ul>
                    </div>
                </LightCard>
            )}
        </React.Fragment>
    );
};

export default FilterBar;
