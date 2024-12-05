import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene29 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"PANK2"}
                datas={[
                    "rs137852963",
                    "rs137852960",
                    "rs137852965",
                    "rs137852964",
                    "rs137852966",
                    "rs137852962",
                    "rs137852959",
                    "rs137852969",
                    "rs137852968",
                    "rs137852961",
                    "rs1250997630",
                    "rs148987163",
                    "rs28939088",
                    "rs1057518915",
                    "rs753376100",
                    "rs137852967",
                    "rs780551883",
                    "rs863223343",
                ]}
                level={-1}
                description={
                    "Variants in this gene may affect mitochondrial energy metabolism and fatty acid metabolism. PANK2 (Pantothenate Kinase 2) encodes the enzyme pantothenate kinase 2, which is involved in the first step of coenzyme A (CoA) biosynthesis by phosphorylating pantothenic acid (vitamin B5), contributing to the regulation of CoA production."
                }
            />

            <GenePageNumber>68</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene29;
