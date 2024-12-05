import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene28 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"OGDH"}
                datas={[
                    "rs740094",
                    "rs3801401",
                    "rs2300415",
                    "rs3735477",
                    "rs7805156",
                    "rs3735474",
                    "rs2268308",
                    "rs12155014",
                    "rs17133537",
                    "rs757702",
                    "rs142839706",
                    "rs710887",
                    "rs2070606",
                    "rs74673950",
                    "rs17133935",
                    "rs78889688",
                    "rs6971483",
                    "rs2070607",
                    "rs77887092",
                    "rs117706902",
                    "rs117387922",
                    "rs76446485",
                    "rs73109436",
                    "rs73109403",
                    "rs62460464",
                ]}
                level={-1}
                description={
                    "Variants in this gene may inhibit the citric acid cycle, potentially reducing energy production. OGDH (Oxoglutarate Dehydrogenase) encodes the enzyme responsible for converting 2-oxoglutarate into succinyl-CoA and carbon dioxide in the TCA cycle (Citric Acid Cycle)."
                }
            />

            <GenePageNumber>67</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene28;
