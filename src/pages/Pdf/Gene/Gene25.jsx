import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene25 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"NDUFB11"}
                datas={["rs786205225", "rs1057519073", "rs876657384"]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency and lead to inadequate cellular energy supply. NDUFB11 (NADH Oxidoreductase Subunit B11) is a part of Complex I and plays a major role in assisting electron transfer. This subunit contributes to the structural stability of Complex I and supports the formation of the proton gradient, improving ATP synthesis efficiency within the mitochondria."
                }
            />
            <GeneInformationMiddle
                geneName={"NDUFS1"}
                datas={["rs863224103", "rs372691318", "rs786205666", "rs863224100", "rs149271416", "rs397515447", "rs199422225", "rs199422224", "rs397515383", "rs863224099", "rs151279101", "rs387907199", "rs863224097", "rs370009373", "rs767122069", "rs201034481", "rs370411488"]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency and lead to inadequate cellular energy supply. NDUFS1 (NADH Oxidoreductase Core Subunit S1) is one of the core subunits of Complex I in the mitochondrial electron transport chain and plays a crucial role in electron transfer from NADH to ubiquinone. NDUFS1 supports electron movement and proton pump function within Complex I, contributing to the maintenance of the proton gradient required for ATP synthesis."
                }
            />

            <GenePageNumber>64</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene25;
