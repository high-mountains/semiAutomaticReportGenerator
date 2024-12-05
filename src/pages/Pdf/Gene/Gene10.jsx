import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene10 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"Serotonin"} containerStyle={{marginBottom: '10rem'}} />

            <GeneInformationMiddle
                geneName={"HTR2A"}
                datas={["rs6314"]}
                level={-1}
                description={"Variants in this gene may cause changes in mood, behavior, and cognitive function. HTR2A (5-Hydroxytryptamine Receptor 2A) encodes the serotonin 2A receptor. This receptor is a G-protein-coupled receptor in the central nervous system, which activates intracellular signaling pathways when serotonin binds to it."}
            />
            <GeneInformationMiddle
                geneName={"GAD1"}
                datas={["rs6323", "rs1137070", "rs72554632", "rs796065312"]}
                level={-1}
                description={"Variants in this gene may inhibit the metabolism of dopamine, serotonin, and norepinephrine. MAOA (Monoamine Oxidase A) encodes the enzyme monoamine oxidase A. This enzyme is involved in breaking down monoamine neurotransmitters such as serotonin, norepinephrine, and dopamine by oxidatively deaminating them, rendering them inactive."}
            />

            <GenePageNumber>49</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene10;
