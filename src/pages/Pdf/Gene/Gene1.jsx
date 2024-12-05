import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import PageHeader from "../../../components/Pdf/PageHeader.jsx";
import Text from "../../../components/Pdf/Text.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene2 = () => {
    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Gene Information List"}
                mainTitle={"Your Gene Information Overview"}
            />

            <Text sidebar={1} textContent={"Glutamate Synthesis"} containerStyle={{marginBottom: '10rem'}}/>
            
            <GeneInformationMiddle
                datas={["rs2657879", "rs2638315"]}
                geneName={"GLS2"}
                level={-1}
                description={"If this gene has a mutation, it may inhibit glutamate synthesis in the body. GLS2 (Glutaminase 2) is a gene that encodes a liver-specific glutaminase. This enzyme catalyzes the conversion of glutamine into glutamate and ammonia, playing an important role in glutamine metabolism and energy metabolism."}
            />  

            <GenePageNumber>40</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene2;
