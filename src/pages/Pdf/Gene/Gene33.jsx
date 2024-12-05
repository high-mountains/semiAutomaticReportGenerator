import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene33 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"SLC16A1"}
                datas={[
                    "rs606231302",
                    "rs606231310",
                    "rs387906403",
                    "rs606231300",
                    "rs72552271",
                    "rs606231172",
                    "rs606231299",
                ]}
                level={-1}
                description={
                    "Variants in this gene may cause problems in cellular energy metabolism. SLC16A1 (Solute Carrier Family 16 Member 1) encodes Monocarboxylate Transporter 1 (MCT1), a protein responsible for transporting monocarboxylates such as lactate and pyruvate across cell membranes. This protein plays an important role in energy metabolism and regulation of redox balance."
                }
            />
            <GeneInformationMiddle
                geneName={"UQCRB"}
                datas={[
                    "rs863224259",
                    "rs886043294",
                    "rs863224257",
                    "rs863224258",
                ]}
                level={-1}
                description={
                    "Variants in this gene may lead to reduced ATP synthesis efficiency, potentially resulting in insufficient cellular energy supply. UQCRB (Ubiquinol-Cytochrome c Reductase Binding Protein) encodes a binding protein subunit of mitochondrial electron transport chain Complex III (cytochrome bc1 complex). UQCRB supports electron transfer from ubiquinol to cytochrome c, forming a proton gradient that promotes ATP synthesis."
                }
            />

            <GeneInformationMiddle
                geneName={"UQCRQ"}
                datas={["rs11544803"]}
                level={-1}
                description={
                    "Variants in this gene may lead to reduced ATP synthesis efficiency, potentially resulting in insufficient cellular energy supply. UQCRQ (Ubiquinol-Cytochrome c Reductase Complex III Subunit VIII) is a small subunit of Complex III, assisting in the efficient electron transfer from ubiquinol to cytochrome c."
                }
            />

            <GenePageNumber>72</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene33;
