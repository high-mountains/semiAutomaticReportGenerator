import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene9 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"Dopamine Receptor"} containerStyle={{marginBottom: '10rem'}} />

            <GeneInformationMiddle
                geneName={"DRD1"}
                datas={["rs5326"]}
                level={-1}
                description={"Variants in this gene may affect cognitive functions and behavioral regulation. DRD1 (Dopamine Receptor D1) encodes the dopamine D1 receptor. This receptor is a type of G-protein-coupled receptor in the central nervous system, which activates adenylate cyclase and increases the intracellular concentration of cAMP (cyclic AMP) when dopamine binds to it."}
            />
            <GeneInformationMiddle
                geneName={"DRD2"}
                datas={["rs1076560", "rs6277", "rs1800497"]}
                level={-1}
                description={"Variants in this gene may influence the response of the reward system, motivation, and control functions. DRD2 (Dopamine Receptor D2) encodes the dopamine D2 receptor, a G-protein-coupled receptor that inhibits adenylate cyclase when dopamine binds to it. DRD2 plays a crucial role in neurotransmitter release, motor regulation, and the reward system, as well as in behavioral regulation and decision-making."}
            />
            
            <GeneInformationMiddle
                geneName={"DRD4"}
                datas={["rs4331145", "rs180095"]}
                level={-1}
                description={"Variants in this gene may affect attention and behavioral inhibition. DRD4 (Dopamine Receptor D4) encodes the dopamine D4 receptor, which, like DRD2, is a G-protein-coupled receptor that inhibits adenylate cyclase. DRD4 is highly expressed in the prefrontal cortex and is associated with cognitive functions, emotional regulation, and attention control."}
            />
            
            <GenePageNumber>48</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene9;
