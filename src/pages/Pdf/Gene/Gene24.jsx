import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene24 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"NDUFA2"}
                datas={["rs863224084", "rs757982865"]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency and lead to inadequate cellular energy supply. NDUFA2 (NADH Oxidoreductase Subunit A2) is a subunit of Complex I that contributes to the structural stability of the electron transport chain. NDUFA2 supports ATP generation within the mitochondria by maintaining electron transfer and proton pump activity."
                }
            />
            <GeneInformationMiddle
                geneName={"NDUFA6"}
                datas={["rs763006208", "rs781099275"]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency and lead to inadequate cellular energy supply. NDUFA6 (NADH Oxidoreductase Subunit A6) is a subunit of Complex I that plays a role in the formation of the proton gradient. NDUFA6 contributes to the structural integration and function of Complex I, facilitating the smooth transfer of electrons from NADH to ubiquinone, thereby enhancing energy production efficiency."
                }
            />
            <GeneInformationMiddle
                geneName={"NDUFA9"}
                datas={["rs768333416"]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency and lead to inadequate cellular energy supply. NDUFA9 (NADH Oxidoreductase Subunit A9) encodes a component of Complex I in the mitochondrial electron transport chain. This subunit contributes to electron transfer and proton pump function, playing a crucial role in the stability and efficient energy production of Complex I. NDUFA9 supports the formation of the proton gradient for ATP generation."
                }
            />
            <GeneInformationMiddle
                geneName={"NDUFA10"}
                datas={["rs387906872"]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency and lead to inadequate cellular energy supply. NDUFA10 (NADH Oxidoreductase Subunit A10) participates in electron transfer and proton movement as part of Complex I, playing a key role in forming the proton gradient necessary for ATP synthesis. NDUFA10 helps stabilize Complex I structure and enhances energy generation efficiency."
                }
            />

            <GenePageNumber>63</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene24;
