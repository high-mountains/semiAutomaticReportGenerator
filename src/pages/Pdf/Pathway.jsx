import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import MethylationPathway from './Pathway/MethylationPathway.jsx'
import MitochondriaPathway from './Pathway/MitochondriaPathway.jsx'
import GlutamatePathway from './Pathway/GlutamatePathway.jsx'
import HistaminePathway from './Pathway/HistaminePathway.jsx'
import DetoxPathway from './Pathway/DetoxPathway.jsx'

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
        
            <MethylationPathway deltaPageCount={deltaPageCount}/>
            <MitochondriaPathway deltaPageCount={deltaPageCount}/>
            <GlutamatePathway deltaPageCount={deltaPageCount}/>
            <HistaminePathway deltaPageCount={deltaPageCount}/>
            <DetoxPathway deltaPageCount={deltaPageCount}/>
        </>
    );
};

export default Pathway;