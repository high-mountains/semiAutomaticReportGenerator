import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene20 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"NDUFS7"}
                datas={["rs11551664", "rs104894705"]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency and lead to inadequate cellular energy supply. NDUFS7 (NADH Oxidoreductase Core Subunit S7) is one of the core subunits of Complex I and facilitates the electron transfer from NADH to ubiquinone. NDUFS7 supports the maintenance of the proton gradient to enhance the efficiency of the energy generation process."
                }
            />
            <GeneInformationMiddle
                geneName={"NDUFS7"}
                datas={[
                    "rs764276946",
                    "rs863224114",
                    "rs143337739",
                    "rs397514617",
                    "rs863224115",
                    "rs121912638",
                    "rs28939679",
                ]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency and lead to inadequate cellular energy supply. NDUFS8 (NADH Oxidoreductase Core Subunit S8) is a core subunit of Complex I involved in electron transfer, playing a central role in electron flow and proton pump functions. NDUFS8 maintains the function of Complex I to form a proton gradient for ATP synthesis, contributing to the efficiency of energy production."
                }
            />

            <GeneInformationMiddle
                geneName={"NDUFV2"}
                datas={["rs371040282"]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency and lead to inadequate cellular energy supply. NDUFV2 (NADH Oxidoreductase Core Subunit V2) is a core subunit of Complex I in the mitochondrial electron transport chain, involved in electron transfer from NADH to ubiquinone. NDUFV2 assists in forming the proton gradient to support ATP synthesis and contributes to the efficiency of energy generation."
                }
            />

            <GenePageNumber>66</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene20;
