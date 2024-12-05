import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene22 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"G6PD"}
                datas={["rs137852318", "rs137852319", "rs137852321", "rs137852323", "rs137852324"]}
                level={-1}
                description={
                    "Variants in this gene may impair energy production within the mitochondria. G6PD (Glucose-6-Phosphate Dehydrogenase) encodes an enzyme that is involved in the pentose phosphate pathway, which is essential for producing NADPH, a molecule that helps maintain the redox balance in cells and supports mitochondrial function."
                }
            />
            <GeneInformationMiddle
                geneName={"IDO2"}
                datas={["rs4503083", "rs10109853"]}
                level={-1}
                description={
                    "Variants in this gene may affect tryptophan metabolism and immune responses within the mitochondria. IDO2 (Indoleamine 2,3-Dioxygenase 2) encodes an enzyme that metabolizes tryptophan into kynurenine, playing a role in regulating immune responses and affecting metabolic pathways in the mitochondria."
                }
            />
            <GeneInformationMiddle
                geneName={"KYNU"}
                datas={["rs3768844", "rs606231307", "rs758865880", "rs147475752", "rs780720490", "rs770642379"]}
                level={-1}
                description={
                    "Variants in this gene may impair energy production within the mitochondria. KYNU (Kynureninase) encodes an enzyme that metabolizes kynurenine into anthranilic acid in the kynurenine pathway. This pathway is crucial in tryptophan metabolism and contributes to the production of metabolites involved in neurotransmission and immune responses."
                }
            />

            <GenePageNumber>61</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene22;
