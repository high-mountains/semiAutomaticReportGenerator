import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene13 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"HNMT"}
                datas={["rs758252808", "rs11558538", "rs745756308", "rs1050891"]}
                level={-1}
                description={"Variants in this gene may result in insufficient breakdown of histamine in the body, potentially influencing allergic reactions. HNMT (Histamine N-Methyltransferase) encodes the enzyme responsible for methylating and breaking down histamine, thereby regulating its concentration in the body."}
            />
            <GeneInformationMiddle
                geneName={"NAT2"}
                datas={["rs1208", "rs1799930", "rs769390", "rs1801279", "rs1799931", "rs1041983", "rs1799929"]}
                level={-1}
                description={"Variants in this gene may hinder histamine metabolism. NAT2 (N-Acetyltransferase 2) encodes an enzyme that participates in the acetylation of aromatic amines, playing a role in drug metabolism and potentially impacting the body's ability to metabolize histamine efficiently."}
            />
            <GeneInformationMiddle
                geneName={"ADH1B"}
                datas={["rs1229984", "rs2066702"]}
                level={-1}
                description={"Variants in this gene may reduce the efficiency of alcohol metabolism enzymes. ADH1B (Alcohol Dehydrogenase 1B) encodes the enzyme responsible for catalyzing the oxidation of ethanol to acetaldehyde, an essential step in the early stages of alcohol metabolism."}
            />
            <GenePageNumber>52</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene13;
