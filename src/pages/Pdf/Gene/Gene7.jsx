import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene7 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"Catecholamine Synthesis"} containerStyle={{marginBottom: '10rem'}} />

            <GeneInformationMiddle
                geneName={"DHFR"}
                datas={["rs121913223", "rs387906619"]}
                level={-1}
                description={"If this gene has a mutation, the production of cofactors necessary for catecholamine synthesis in the body may decrease. DHFR (Dihydrofolate Reductase) encodes the enzyme dihydrofolate reductase. This enzyme catalyzes the reduction of dihydrofolate to tetrahydrofolate and plays a critical role in folate metabolism."}
            />
            <GeneInformationMiddle
                geneName={"GCH1"}
                datas={["rs104894433", "rs104894435", "rs104894436", "rs104894437", "rs104894438", "rs104894439", "rs104894440", "rs104894441", "rs104894442", "rs104894443", "rs104894444", "rs104894445", "rs137852633", "rs137852633", "rs886039379"]}
                level={-1}
                description={"If this gene has a mutation, the production of cofactors necessary for catecholamine synthesis in the body may decrease. GCH1 (GTP Cyclohydrolase 1) encodes the enzyme GTP cyclohydrolase 1, which is involved in the synthesis of biopterin. Biopterin is a coenzyme required for synthesizing neurotransmitters such as dopamine, serotonin, and norepinephrine."}
            />
            
            <GeneInformationMiddle
                geneName={"TH"}
                datas={["rs80338892"]}
                level={-1}
                description={"If this gene has a mutation, the synthesis of catecholamines, including dopamine, may decrease. TH (Tyrosine Hydroxylase) encodes the enzyme tyrosine hydroxylase, which catalyzes the conversion of tyrosine to L-DOPA."}
            />
            
            <GenePageNumber>46</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene7;
