import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Supplement1 from "./Supplement/Supplement1.jsx";
import Supplement2 from "./Supplement/Supplement2.jsx";
import Supplement3 from "./Supplement/Supplement3.jsx";
import Supplement4 from "./Supplement/Supplement4.jsx";
import Supplement5 from "./Supplement/Supplement5.jsx";
import Supplement6 from "./Supplement/Supplement6.jsx";
import Supplement7 from "./Supplement/Supplement7.jsx";
import Supplement8 from "./Supplement/Supplement8.jsx";
import Supplement9 from "./Supplement/Supplement9.jsx";
import Supplement10 from "./Supplement/Supplement10.jsx";
import Supplement11 from "./Supplement/Supplement11.jsx";
import Supplement12 from "./Supplement/Supplement12.jsx";
import Supplement13 from "./Supplement/Supplement13.jsx";
import Supplement14 from "./Supplement/Supplement14.jsx";

const SupplementTable = () => {
    const [deltaPageCount, setDeltaPageCount] = useState(
        useSelector((state) => state.pdfData.deltaPage)
    );
    const storeDelta = useSelector((state) => state.pdfData.deltaPage);

    useEffect(() => {
        setDeltaPageCount(storeDelta);
    }, [storeDelta]);

    return (
        <>
            <Supplement1 deltaPageCount={deltaPageCount} />
            <Supplement2 deltaPageCount={deltaPageCount} />
            <Supplement3 deltaPageCount={deltaPageCount} />
            <Supplement4 deltaPageCount={deltaPageCount} /> 
            <Supplement5 deltaPageCount={deltaPageCount} />
            <Supplement6 deltaPageCount={deltaPageCount} />
            <Supplement7 deltaPageCount={deltaPageCount} />
            <Supplement8 deltaPageCount={deltaPageCount} />
            <Supplement9 deltaPageCount={deltaPageCount} />
            <Supplement10 deltaPageCount={deltaPageCount} />
            <Supplement11 deltaPageCount={deltaPageCount} />
            <Supplement12 deltaPageCount={deltaPageCount} />
            <Supplement13 deltaPageCount={deltaPageCount} />
            <Supplement14 deltaPageCount={deltaPageCount} />
        </>
    );
};

export default SupplementTable;
