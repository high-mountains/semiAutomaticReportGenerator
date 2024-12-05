import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene6 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"GABA Receptors"} containerStyle={{marginBottom: '10rem'}} />

            <GeneInformationMiddle
                geneName={"GABRA1"}
                datas={["rs2279020", "rs121434579"]}
                level={-1}
                description={"If this gene has a mutation, GABA transport in the body may not function properly, potentially affecting neuronal functions. SLC1A1 (Solute Carrier Family 1 Member 1) encodes the glutamate transporter. This transporter primarily functions in the central nervous system to take up glutamate from the synaptic cleft."}
            />
            <GeneInformationMiddle
                geneName={"GABRA2"}
                datas={["rs279871"]}
                level={-1}
                description={"If this gene has a mutation, the function of GABA receptors may decrease, disrupting the balance between excitation and inhibition. GABRA2 (Gamma-Aminobutyric Acid Type A Receptor Subunit Alpha2) encodes the α2 subunit of the GABA A receptor. This subunit is highly expressed in specific brain regions and is incorporated into the structure of GABA A receptors, contributing to their inhibitory effects on neurotransmission. The α2 subunit plays a role in suppressing excessive neuronal excitation in response to GABA."}
            />
            
            <GeneInformationMiddle
                geneName={"GABRG2"}
                datas={["rs211037", "rs796052504"]}
                level={-1}
                description={"If this gene has a mutation, the function of GABA receptors may decrease, disrupting the balance between excitation and inhibition. GABRG2 (Gamma-Aminobutyric Acid Type A Receptor Subunit Gamma2) encodes the γ2 subunit of the GABA A receptor. The γ2 subunit is a component of the GABA A receptor, particularly forming the benzodiazepine-binding site. This subunit enhances the inhibitory effects of neurotransmission by amplifying GABA’s action, especially in response to benzodiazepine drugs."}
            />
            
            <GenePageNumber>45</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene6;
