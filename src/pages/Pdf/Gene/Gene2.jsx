import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

const initialGeneData = [
    {
        geneName: "CBS",
        datas: [
            "rs121964962",
            "rs121964963",
            "rs121964965",
            "rs121964967",
            "rs121964972",
            "rs375846341",
            "rs398123151",
        ],
        level: 0,
        description:
            "この遺伝子に変異がある場合、体の中でグルタミン酸の代謝が低下する可能性があります。CBS（Cystathionine Beta-Synthase）は、シスタチオニンβ-シンターゼという酵素をコードしています。この酵素は、メチオニン代謝経路において重要な役割を果たし、ホモシステインをシスタチオニンに変換する反応を触媒します。",
    },
];

const Gene1 = () => {
    const geneData = useSelector((state) => state.pdfData?.geneData || []);

    // Memoize the updated gene data to avoid unnecessary recalculations
    const updatedGeneData = useMemo(() => {
        return updateDangerLevel(initialGeneData, geneData);
    }, [geneData]);

    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"グルタミン酸代謝"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            {/* Gene Information Table */}
            {updatedGeneData.map((item, index) => (
                <GeneInformationMiddle
                    key={index}
                    geneName={item.geneName}
                    datas={item.datas}
                    level={item.level}
                    description={item.description}
                />
            ))}

            <GenePageNumber>41</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene1;
