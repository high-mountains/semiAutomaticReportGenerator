import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene23 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"MT-CO1"}
                datas={["rs118203891", "rs118203894", "rs118203892", "rs118203893", "rs267606882", "rs267606883", "rs281865417", "rs387906732", "rs199476129"]}
                level={-1}
                description={
                    "Variants in this gene may impair energy production within the mitochondria. MT-CO1 (Mitochondrially Encoded Cytochrome c Oxidase I) encodes subunit I of cytochrome c oxidase, which is encoded by mitochondrial DNA. This enzyme is a key component of Complex IV in the mitochondrial electron transport chain and is responsible for the final step of ATP generation, using oxygen as the electron acceptor."
                }
            />
            <GeneInformationMiddle
                geneName={"NADSYN1"}
                datas={["rs1008561025", "rs368115694", "rs1327307171", "rs769220327", "rs189928649", "rs3829251"]}
                level={-1}
                description={
                    "Variants in this gene may result in insufficient NAD+ levels, leading to impaired energy metabolism and ATP synthesis. NADSYN1 (NAD Synthetase 1) encodes NAD synthetase 1, which is involved in the final step of NAD+ synthesis, converting nicotinamide adenine dinucleotide (NAD) from its precursors."
                }
            />
            <GeneInformationMiddle
                geneName={"NDUFA1"}
                datas={["rs104894884", "rs797044914"]}
                level={-1}
                description={
                    "Variants in this gene may reduce ATP synthesis efficiency and lead to inadequate cellular energy supply. NDUFA1 (NADH Oxidoreductase Subunit A1) encodes a protein that is part of Complex I in the mitochondrial electron transport chain. This subunit is critical for the transfer of electrons from NADH to ubiquinone and supports the formation of a proton gradient essential for ATP synthesis, promoting cellular energy production."
                }
            />

            <GenePageNumber>62</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene23;
