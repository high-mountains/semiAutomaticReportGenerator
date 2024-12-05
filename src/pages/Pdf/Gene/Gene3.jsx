import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene3 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"DAOA"}
                datas={["rs2391191"]}
                level={-1}
                description={"If this gene has a mutation, the breakdown of glutamate may not function properly, leading to an accumulation of glutamate in the body. DAOA (D-amino acid oxidase activator) encodes a protein that activates D-amino acid oxidase (DAO). DAO is an enzyme that oxidizes D-amino acids and plays an important role, particularly in the nervous system. DAOA regulates DAO activity and is involved in the metabolism of neurotransmitter modulators like D-serine."}
            />
            <GeneInformationMiddle
                geneName={"GAD1"}
                datas={["rs769390", "rs2241165"]}
                level={-1}
                description={"If this gene has a mutation, the conversion of glutamate to GABA may be inhibited. GAD1 (Glutamate Decarboxylase 1) encodes the enzyme glutamate decarboxylase (GAD67). This enzyme is responsible for decarboxylating glutamate to produce GABA (γ-aminobutyric acid)."}
            />
            
            <GeneInformationMiddle
                geneName={"GLUD1"}
                datas={["rs121909730"]}
                level={-1}
                description={"If this gene has a mutation, issues may arise in glutamate metabolism or energy production in the body. GLUD1 (Glutamate Dehydrogenase 1) encodes an enzyme called glutamate dehydrogenase 1. This enzyme catalyzes the oxidative deamination of glutamate, producing α-ketoglutarate and ammonia."}
            />
            
            <GeneInformationMiddle
                geneName={"GLUL"}
                datas={["rs10911021"]}
                level={-1}
                description={"If this gene has a mutation, the synthesis of glutamine from glutamate may be inhibited. GLUL (Glutamine Synthetase) encodes the enzyme glutamine synthetase. This enzyme synthesizes glutamine from glutamate and ammonia as substrates."}
            />

            <GenePageNumber>42</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene3;
