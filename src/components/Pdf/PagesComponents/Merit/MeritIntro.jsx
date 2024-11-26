import React, { useEffect } from 'react';
import Text from '../../Text'

const MeritIntro = (props) => {

    return (
        <>
            <Text
                sidebar= {1}
                textContent= {props.content1}
                sidebarColor= {props.maincolor}
                className={"font-bold leading-[1.448125]"}
                fontSize={16}
                sidebarHeight={"30rem"}
            />
            {props.content2 && <Text
                sidebar= {1}
                textContent= {props.content2}
                sidebarColor= {props.maincolor}
                className={`font-bold leading-[1.448125]`}
                fontSize={16}
                sidebarHeight={"30rem"}
            />}
        </>
    );
};

export default MeritIntro;