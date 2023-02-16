import React from 'react';
import Image from 'next/image';

import LightCard from './UI/LightCard';
import DarkCard from './UI/DarkCard';

import IconCheck from '../../public/images/icon-check.svg';
import IconCross from '../../public/images/icon-cross.svg';

const TodoItem = (props) => {
    return (
        <React.Fragment>
            {props.darkMode ? (
                <DarkCard>
                    <div className='flex items-center'>
                        <Image src={IconCheck} width={30} height={30} alt='toggle task completed' />
                        <p className='text-sm'>{props.children}</p>
                        <Image src={IconCross} className='ml-auto' alt='remove task' />
                    </div>
                </DarkCard>
            ) : (
                <LightCard>
                    <div className='flex items-center'>
                        <Image src={IconCheck} width={30} height={30} alt='toggle task completed' />
                        <p className='text-sm'>{props.children}</p>
                        <Image src={IconCross} className='ml-auto' alt='remove task' />
                    </div>
                </LightCard>
            )}
        </React.Fragment>
    );
};

export default TodoItem;
