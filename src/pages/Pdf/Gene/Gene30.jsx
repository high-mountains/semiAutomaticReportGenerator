import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene30 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"SDHA"}
                datas={[
                    "rs587781720",
                    "rs200397144",
                    "rs142441643",
                    "rs786205210",
                    "rs786205145",
                    "rs786205209",
                    "rs876658486",
                    "rs781764920",
                    "rs387906780",
                    "rs151170408",
                    "rs886041867",
                    "rs137852767",
                    "rs9809219",
                    "rs766667009",
                    "rs748089700",
                    "rs746165168",
                    "rs878854632",
                    "rs878854628",
                    "rs878854627",
                    "rs876659595",
                    "rs397514541",
                    "rs137852768",
                ]}
                level={-1}
                description={
                    "Variants in this gene may impair the coordination between the citric acid cycle and the electron transport chain, leading to decreased ATP production. SDHA (Succinate Dehydrogenase Complex Flavoprotein Subunit A) is the major subunit of mitochondrial electron transport chain complex II and also participates in the TCA cycle as succinate dehydrogenase. SDHA converts succinate to fumarate while transferring electrons to ubiquinone, playing an important role in energy production and redox reactions."
                }
            />

            <GenePageNumber>69</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene30;
