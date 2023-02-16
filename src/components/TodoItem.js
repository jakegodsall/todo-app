import React, { useState } from 'react';
import Image from 'next/image';

import LightCard from './UI/LightCard';
import DarkCard from './UI/DarkCard';

import IconCheck from '../../public/images/icon-check.svg';
import IconCross from '../../public/images/icon-cross.svg';

const TodoItem = (props) => {
    const [isSelected, setIsSelected] = useState(props.complete);

    const onClickHandler = (e) => {
        setIsSelected((prevState) => !prevState);

        props.getSelected(props.id);
    };

    return (
        <React.Fragment>
            {props.darkMode ? (
                <DarkCard>
                    <div className='flex items-center p-5'>
                        <Image src={IconCheck} width={30} height={30} alt='toggle task completed' />
                        <p className='text-sm'>{props.children}</p>
                        <Image src={IconCross} className='ml-auto' alt='remove task' />
                    </div>
                </DarkCard>
            ) : (
                <LightCard>
                    <div className='flex items-center p-5 border-b-2 border-[#d2d3db]'>
                        {isSelected && (
                            <div
                                className='rounded-full border-2 border-[#62c34a] w-8 h-8 mr-4 bg-[#62c34a] cursor-pointer'
                                onClick={onClickHandler}
                            >
                                <Image
                                    src={IconCheck}
                                    width={18}
                                    height={18}
                                    className='mx-auto my-2'
                                    alt='toggle completed'
                                />
                            </div>
                        )}
                        {!isSelected && (
                            <div
                                className='rounded-full border-2 border-[#e4e5f1] w-8 h-8 mr-4 cursor-pointer'
                                onClick={onClickHandler}
                            ></div>
                        )}

                        <p className='text-sm'>{props.children}</p>
                        <Image
                            src={IconCross}
                            className='ml-auto cursor-pointer'
                            alt='remove task'
                        />
                    </div>
                </LightCard>
            )}
        </React.Fragment>
    );
};

export default TodoItem;
