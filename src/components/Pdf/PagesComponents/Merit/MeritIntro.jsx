import React, { useEffect } from 'react';
import Text from '../../Text'

const MeritIntro = (props) => {
    // useEffect(() => {
    //     console.log("props.data==>", props);
    // }, []);

    return (
        <>
            <Text
                sidebar= {1}
                textContent= {props.content1}
                sidebarColor= {props.maincolor}
                className={"font-bold leading-[1.448125]"}
                fontSize={16}
                sidebarHeight={"23rem"}
            />
            {props.content2 && <Text
                sidebar= {1}
                textContent= {props.content2}
                sidebarColor= {props.maincolor}
                className={`font-bold leading-[1.448125]`}
                fontSize={16}
                sidebarHeight={"23rem"}
            />}
        </>
    );
};

export default MeritIntro;