import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene20 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"COQ8B"}
                datas={["rs398122983", "rs398122981", "rs28493229", "rs398122978", "rs398122979", "rs398122980", "rs398122982"]}
                level={-1}
                description={
                    "Variants in this gene may impair the biosynthesis of CoQ10, potentially reducing energy production. COQ8B (Coenzyme Q8B, ATPase) encodes a protein with ATPase activity that is involved in the biosynthesis of coenzyme Q. This protein contributes to the stability and regulation of the coenzyme Q biosynthesis complex and plays a role in mitochondrial electron transport and energy production efficiency."
                }
            />
            <GeneInformationMiddle
                geneName={"COQ9"}
                datas={["rs786205897", "rs267606751"]}
                level={-1}
                description={
                    "Variants in this gene may impair the biosynthesis of CoQ10, potentially reducing energy production. COQ9 (Coenzyme Q9) encodes a protein that plays an auxiliary role in the coenzyme Q biosynthesis complex. COQ9 is involved in the structure and stability of coenzyme Q and supports the proper supply of ubiquinone in the electron transport chain."
                }
            />
            <GeneInformationMiddle
                geneName={"COQ10A"}
                datas={["rs199765776"]}
                level={-1}
                description={
                    "Variants in this gene may impair the biosynthesis of CoQ10, potentially reducing energy production. COQ10A and COQ10B (Coenzyme Q10 Homolog A/B) encode proteins that function as homologs of coenzyme Q. These proteins play a role in supporting the biosynthesis and stability of coenzyme Q, particularly in maintaining the supply of ubiquinone in the mitochondrial electron transport chain. The functions of COQ10A and COQ10B are similar and help maintain appropriate concentrations of coenzyme Q to support cellular energy production."
                }
            />

            <GenePageNumber>59</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene20;
