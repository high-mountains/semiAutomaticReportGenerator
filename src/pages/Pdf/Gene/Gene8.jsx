import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene8 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"Catecholamine Metabolism"} containerStyle={{marginBottom: '10rem'}} />

            <GeneInformationMiddle
                geneName={"COMT"}
                datas={["rs4680", "rs4633"]}
                level={-1}
                description={"If this gene has a mutation, it may inhibit the metabolism of dopamine and norepinephrine. COMT (Catechol-O-Methyltransferase) encodes the enzyme catechol-O-methyltransferase. This enzyme is involved in the metabolism of catecholamine neurotransmitters (dopamine, norepinephrine, and adrenaline) that have a catechol group. It catalyzes the reaction of adding a methyl group to deactivate these neurotransmitters."}
            />
            <GeneInformationMiddle
                geneName={"MAOA"}
                datas={["rs6323", "rs1137070", "rs72554632", "rs796065312"]}
                level={-1}
                description={"If this gene has a mutation, it may inhibit the metabolism of dopamine, serotonin, and norepinephrine. MAOA (Monoamine Oxidase A) encodes the enzyme monoamine oxidase A. This enzyme is involved in the breakdown of monoamine neurotransmitters such as serotonin, norepinephrine, and dopamine, deactivating them through oxidative deamination."}
            />
            
            <GeneInformationMiddle
                geneName={"MAOB"}
                datas={["rs1799836"]}
                level={-1}
                description={"If this gene has a mutation, it may cause problems with the metabolism of glutamate and the body's energy production. GLUD1 (Glutamate Dehydrogenase 1) encodes the enzyme glutamate dehydrogenase 1. This enzyme oxidatively deaminates glutamate, producing α-ketoglutarate and ammonia."}
            />

            <GenePageNumber>47</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene8;
