import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene31 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"SDHB"}
                datas={[
                    "rs528442805",
                    "rs202101384",
                    "rs267607032",
                    "rs751000085",
                    "rs794728948",
                    "rs794728950",
                    "rs747518441",
                    "rs876660642",
                    "rs876658540",
                    "rs727504457",
                    "rs1131691051",
                    "rs200245469",
                    "rs786201063",
                    "rs786201085",
                    "rs786201095",
                    "rs786203506",
                    "rs794728947",
                    "rs74315366",
                    "rs876658451",
                    "rs876658367",
                    "rs121917755",
                    "rs786202100",
                    "rs1131691058",
                    "rs786202732",
                    "rs876659330",
                    "rs772551056",
                    "rs74315367",
                    "rs587782703",
                    "rs1131691061",
                    "rs74315368",
                    "rs786203251",
                    "rs398122805",
                    "rs398123690",
                    "rs864321639",
                    "rs878854576",
                    "rs786201161",
                    "rs864321636",
                    "rs138996609",
                    "rs864321637",
                    "rs864321638",
                    "rs587782904",
                ]}
                level={-1}
                description={
                    " "
                }
            />

            <GenePageNumber>72</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene31;
