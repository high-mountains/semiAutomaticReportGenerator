import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene26 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"NDUFS2"}
                datas={["rs150667550"]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency and lead to inadequate cellular energy supply. NDUFS2 (NADH Oxidoreductase Core Subunit S2) is another major subunit of Complex I, involved in electron transfer and proton pump activity. NDUFS2 enhances the structural stability of Complex I and supports efficient energy generation in the mitochondria."
                }
            />
            <GeneInformationMiddle
                geneName={"NDUFS3"}
                datas={["rs863224106", "rs863224107", "rs28939714", "rs104894270"]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency and lead to inadequate cellular energy supply. NDUFS3 (NADH Oxidoreductase Core Subunit S3) is one of the core subunits of Complex I and plays a central role in the electron transfer process. NDUFS3 helps assist the formation of the proton gradient, which is crucial for ATP production in the cell."
                }
            />
            
            <GeneInformationMiddle
                geneName={"NDUFS4"}
                datas={["rs104893898", "rs104893899", "rs121908985", "rs587776949"]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency and lead to inadequate cellular energy supply. NDUFS4 (NADH Oxidoreductase Subunit S4) is an auxiliary subunit of Complex I, involved in the regulation of proton pump and electron transfer functions. NDUFS4 contributes to the maintenance of Complex I activity and supports energy production in the mitochondria."
                }
            />
            
            <GeneInformationMiddle
                geneName={"NDUFS6"}
                datas={["rs267606913", "rs863224110", "rs863224111"]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency and lead to inadequate cellular energy supply. NDUFS6 (NADH Oxidoreductase Subunit S6) is an auxiliary subunit of Complex I in the mitochondrial electron transport chain, supporting the functions of electron transfer and proton movement. NDUFS6 stabilizes the structure of Complex I and contributes to the formation of the proton gradient necessary for ATP synthesis."
                }
            />

            <GenePageNumber>65</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene26;
