import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GeneInformationList = () => {
    
    const [deltaPageCount, setDeltaPageCount] = useState(
        useSelector((state) => state.pdfData.deltaPage)
    );
    const storeDelta = useSelector((state) => state.pdfData.deltaPage);

    useEffect(() => {
        setDeltaPageCount(storeDelta);
    }, [storeDelta]);

    // Create an array of component numbers
    const geneComponents = Array.from({ length: 113 }, (_, i) => i + 1).filter(num => num !== 37 && num !== 54 && num !== 56 && num !== 80 && num !== 82 && num !==83 && num !==91 && num !==94 && num !==97 && num !==110 && num !==111); // Exclude Gene34 and Gene35 if needed

    return (
        <>
            {geneComponents.map(num => {
                const Gene = React.lazy(() => import(`./Gene/Gene${num}.jsx`)); // Dynamically import components
                return (
                    <React.Suspense fallback={<div style={{fontSize: 16}}>Loading Gene{num}...</div>} key={num}>
                        <Gene deltaPageCount={deltaPageCount}/>
                    </React.Suspense>
                );
            })}
        </>
    );
};

export default GeneInformationList;