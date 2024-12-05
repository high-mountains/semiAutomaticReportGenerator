import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene18 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"COQ2"}
                datas={["rs121918231", "rs121918233", "rs863223936", "rs767298430", "rs121918232"]}
                level={-1}
                description={
                    "Variants in this gene may impair the biosynthesis of CoQ10, potentially reducing energy production. COQ2 (Coenzyme Q2, Polyprenyltransferase) encodes an enzyme required in the biosynthetic pathway of coenzyme Q (ubiquinone). This enzyme adds a polyprenyl group to benzoquinone and plays a crucial role in ATP generation in the mitochondrial electron transport chain."
                }
            />
            <GeneInformationMiddle
                geneName={"COQ3"}
                datas={["rs6925344", "rs146934336", "rs6912105", "rs200092962", "rs9483838"]}
                level={-1}
                description={
                    "Variants in this gene may impair the biosynthesis of CoQ10, potentially reducing energy production. COQ3 (Coenzyme Q3, Methyltransferase) encodes an enzyme involved in the biosynthetic pathway of coenzyme Q that methylates the benzoquinone structure. This methylation is a crucial step in the production of ubiquinone."
                }
            />
            <GeneInformationMiddle
                geneName={"COQ4"}
                datas={["rs766317663", "rs775607037", "rs758522459", "rs143441644", "rs786204771"]}
                level={-1}
                description={
                    "Variants in this gene may impair the biosynthesis of CoQ10, potentially reducing energy production. COQ4 (Coenzyme Q4, Structural Component) encodes a protein involved in the structural stability of the coenzyme Q biosynthetic complex. COQ4 is important in assembling the coenzyme Q biosynthesis enzyme complex and enhancing the efficiency of its production."
                }
            />

            <GenePageNumber>57</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene18;
