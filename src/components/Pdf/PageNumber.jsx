import React, { useEffect, useState } from "react";

const PageNumber = (props) => {
    const [bottom, setBottom] = useState(15);

    useEffect(() => {
        setBottom(props.bottom)
    }, [])
    return (
        <div>
            <p className="absolute bottom-0 left-2/4 translate-x-[-50%] text-[9rem]"
                style={{
                    marginBottom: `${bottom}rem`
                }}>{props.children}</p>
        </div>
    )
}

export default PageNumber;