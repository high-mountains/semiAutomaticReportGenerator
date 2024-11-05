import React from 'react';
import Eachperiod from './Eachperiod.jsx';

const Fourperiod = (props) => {
    return (
        <div className='flex flex-col gap-[0rem] my-[30rem] items-center justify-center'>
            <Eachperiod
                imgURL={"./bg/guy.svg"}
                sentences={props.firstSenctences}
                style={{
                    paddingTop: "0rem"
                }}
            />
            <Eachperiod
                imgURL={"./bg/young.svg"}
                sentences={props.secondSenctences}
            />
            <Eachperiod
                imgURL={"./bg/adult.svg"}
                sentences={props.thirdSenctences}
            />
            <Eachperiod
                imgURL={"./bg/older.svg"}
                sentences={props.fourthSenctences}
                style={{
                    paddingBottom: "0rem"
                }}
            />
        </div>
    );
};

export default Fourperiod;