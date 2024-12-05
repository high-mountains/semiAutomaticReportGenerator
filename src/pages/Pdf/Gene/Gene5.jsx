import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene5 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"GABA Metabolism"} containerStyle={{marginBottom: '10rem'}} />
            <GeneInformationMiddle
                geneName={"ALDH5A1"}
                datas={["rs3765310", "rs2760118", "rs62621664"]}
                level={-1}
                description={"If this gene has a mutation, GABA metabolism in the body may not function properly, potentially affecting the nervous system. ALDH5A1 (Aldehyde Dehydrogenase 5 Family Member A1) encodes the enzyme succinate semialdehyde dehydrogenase (SSADH). This enzyme catalyzes the conversion of succinate semialdehyde to succinic acid in the GABA (γ-aminobutyric acid) metabolic pathway."}
            />

            <GenePageNumber>44</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene5;
