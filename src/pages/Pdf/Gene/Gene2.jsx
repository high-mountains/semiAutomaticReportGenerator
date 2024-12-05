import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper";
import GenePageNumber from "../../../components/Pdf/GenePageNumber";
import Text from "../../../components/Pdf/Text";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene1 = () => {
    return (
        <PageWrapper>

            <Text sidebar={1} textContent={"Glutamate Metabolism"} containerStyle={{marginBottom: '10rem'}} />
            
            <GeneInformationMiddle
                datas={["rs121964962", "rs121964963", "rs121964965", "rs121964967","rs121964972", "rs375846341","rs398123151"]}
                geneName={"CBS"}
                level={-1}
                description={"If this gene has a mutation, it may reduce the metabolism of glutamate in the body. CBS (Cystathionine Beta-Synthase) encodes an enzyme called cystathionine β-synthase. This enzyme plays an important role in the methionine metabolic pathway and catalyzes the conversion of homocysteine to cystathionine."}
            />

            <GenePageNumber>41</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene1;
