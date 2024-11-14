import React from 'react';

const Table = (props) => {
    return (
        <div className='mt-[10rem] w-[535rem] bg-red-200 font'>
            <table>
                <tr>
                    {props.tHeader.headerContent.map((item, index) => <th key={index}>{item}</th>)}
                </tr>
            </table>
        </div>
    );
};

export default Table;