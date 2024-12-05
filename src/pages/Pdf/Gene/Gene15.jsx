import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene14 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"Histamine Receptors"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"HRH1"}
                datas={["rs901865"]}
                level={-1}
                description={
                    "Variants in this gene may affect the regulation of allergic and inflammatory responses. HRH1 (Histamine Receptor H1) encodes the histamine H1 receptor. This receptor is a G protein-coupled receptor, and when histamine binds to it, intracellular calcium levels increase, contributing to allergic reactions, inflammation, and vasodilation."
                }
            />
            <GeneInformationMiddle
                geneName={"HRH3"}
                datas={["rs1009505922"]}
                level={-1}
                description={
                    "Variants in this gene may affect the regulation of allergic and inflammatory responses. HRH3 (Histamine Receptor H3) encodes the histamine H3 receptor, which is predominantly expressed in the central nervous system. This receptor regulates the release of histamine and other neurotransmitters, playing a role in feedback control of neurotransmission."
                }
            />
            <GeneInformationMiddle
                geneName={"HRH4"}
                datas={["rs11662595"]}
                level={-1}
                description={
                    "Variants in this gene may affect the regulation of allergic and inflammatory responses. HRH4 (Histamine Receptor H4) encodes the histamine H4 receptor. This receptor is primarily expressed in immune cells such as eosinophils and mast cells and plays a role in histamine responses in these cells."
                }
            />

            <GenePageNumber>54</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene14;
