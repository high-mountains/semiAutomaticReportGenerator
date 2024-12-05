import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text";

const Gene4 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"Glutamate Transporter"} containerStyle={{marginBottom: '10rem'}} />
            <GeneInformationMiddle
                geneName={"SLC1A1"}
                datas={["rs2228622", "rs301430"]}
                level={-1}
                description={"If this gene has a mutation, the transport of glutamate in the body may not function properly, potentially affecting the function of nerve cells. SLC1A1 (Solute Carrier Family 1 Member 1) encodes a glutamate transporter. This transporter primarily functions in the central nervous system to uptake glutamate from the synaptic cleft."}
            />

            <GenePageNumber>43</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene4;
