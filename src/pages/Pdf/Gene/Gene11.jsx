import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene11 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"Histamine Production"} containerStyle={{marginBottom: '10rem'}} />

            <GeneInformationMiddle
                geneName={"HDC"}
                datas={["rs267606861", "rs2073440"]}
                level={-1}
                description={"Variants in this gene may inhibit histamine production in the body. HDC (Histidine Decarboxylase) encodes the enzyme histidine decarboxylase. This enzyme catalyzes the reaction that produces histamine from histidine."}
            />
           
            <GenePageNumber>50</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene11;
