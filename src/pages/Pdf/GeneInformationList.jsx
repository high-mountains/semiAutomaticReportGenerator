
import React from 'react';

const GeneInformationList = () => {
    // Create an array of component numbers
    const geneComponents = Array.from({ length: 117 }, (_, i) => i + 1).filter(num => num !== 34 && num !== 35); // Exclude Gene34 and Gene35 if needed

    return (
        <>
            {geneComponents.map(num => {
                const Gene = React.lazy(() => import(`./Gene/Gene${num}.jsx`)); // Dynamically import components
                return (
                    <React.Suspense fallback={<div className='font'>Loading Gene{num}...</div>} key={num}>
                        <Gene />
                    </React.Suspense>
                );
            })}
        </>
    );
};

export default GeneInformationList;