import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import DetoxPathway from './Pathway/DetoxPathway.jsx'
import MethylationPathway from './Pathway/MethylationPathway.jsx'

const Pathway = () => {

    const [deltaPageCount, setDeltaPageCount] = useState(
        useSelector((state) => state.pdfData.deltaPage)
    );
    const storeDelta = useSelector((state) => state.pdfData.deltaPage);

    useEffect(() => {
        setDeltaPageCount(storeDelta);
    }, [storeDelta]);

    return (
        <>
            <DetoxPathway deltaPageCount={deltaPageCount}/>
            <MethylationPathway deltaPageCount={deltaPageCount}/>
        </>
    );
};

export default Pathway;