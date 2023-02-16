import React from 'react';
import Image from 'next/image';

import IconCheck from '../../public/images/icon-check.svg';
import IconCross from '../../public/images/icon-cross.svg';

const TodoItem = ({ children }) => {
    return (
        <div className='flex items-center'>
            <Image src={IconCheck} width={30} height={30} />
            <p>{children}</p>
            <Image src={IconCross} />
        </div>
    );
};

export default TodoItem;
