import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene19 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"COQ6"}
                datas={["rs397514479", "rs753489572"]}
                level={-1}
                description={
                    "Variants in this gene may impair the biosynthesis of CoQ10, potentially reducing energy production. COQ6 (Coenzyme Q6, Monooxygenase) encodes a monooxygenase enzyme involved in a series of oxidation reactions required for the biosynthesis of coenzyme Q. COQ6 is particularly important in catalyzing the hydroxylation of the aromatic ring and plays a crucial role in the intermediate stages of ubiquinone production."
                }
            />
            <GeneInformationMiddle
                geneName={"COQ7"}
                datas={["rs864321686"]}
                level={-1}
                description={
                    "Variants in this gene may impair the biosynthesis of CoQ10, potentially reducing energy production. COQ7 (Coenzyme Q7, Hydroxylase) encodes an enzyme that catalyzes the hydroxylation reaction of the aromatic ring in the biosynthetic pathway of coenzyme Q. COQ7 is essential for the formation of the complete structure of coenzyme Q and is crucial for maintaining mitochondrial function."
                }
            />
            <GeneInformationMiddle
                geneName={"COQ8A"}
                datas={["rs863223884","rs863223887","rs387906299","rs387906298","rs119468005","rs119468008","rs748118737","rs755933881","rs201908721","rs199874519","rs578189699","rs119468004","rs771578775","rs119468009","rs119468006","rs886042265"]}
                level={-1}
                description={
                    "Variants in this gene may impair the biosynthesis of CoQ10, potentially reducing energy production. COQ8A (Coenzyme Q8A, ATPase) and COQ8B (Coenzyme Q8B, ATPase) are proteins that have ATPase activity and are involved in the stability and regulation of the coenzyme Q biosynthesis complex. These proteins play a role in supporting the biosynthetic pathway of coenzyme Q."
                }
            />
            
            <GenePageNumber>58</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene19;
