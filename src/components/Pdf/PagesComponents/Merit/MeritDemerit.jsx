import React from 'react';
import Rit from './MeritComponent'

const MeritDemerit = (props) => {
    return (
        <div className='flex flex-row items-start gap-[30rem] justify-center'>
            <Rit tag="メリット" data={props.merit}></Rit>
            <Rit tag="デメリット" data={props.demerit}></Rit>
        </div>
    );
};

export default MeritDemerit;