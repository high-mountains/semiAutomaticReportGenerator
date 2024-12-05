import React from 'react';
import Eachperiod from './Eachperiod.jsx';

const Fourperiod = (props) => {
    return (
        <div className='flex flex-col gap-[0rem] my-[30rem] items-center justify-center' style={props.addStyle}>
            <Eachperiod
                imgURL={"./bg/child.svg"}
                sentences={props.firstSenctences}
                style={{
                    paddingTop: "0rem"
                }}
            />
            <Eachperiod
                imgURL={"./bg/pub.svg"}
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