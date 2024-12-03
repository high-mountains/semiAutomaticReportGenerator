
import React from 'react';

const GeneInformationList = () => {
    // Create an array of component numbers
    const geneComponents = Array.from({ length: 117 }, (_, i) => i + 1).filter(num => num !== 37 && num !== 54 && num !== 56 && num !== 80 && num !== 82 && num !==83); // Exclude Gene34 and Gene35 if needed

    return (
        <>
            {geneComponents.map(num => {
                const Gene = React.lazy(() => import(`./Gene/Gene${num}.jsx`)); // Dynamically import components
                return (
                    <React.Suspense fallback={<div style={{fontSize: 16}}>Loading Gene{num}...</div>} key={num}>
                        <Gene />
                    </React.Suspense>
                );
            })}
        </>
    );
};

export default GeneInformationList;