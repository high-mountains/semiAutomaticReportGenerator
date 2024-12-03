import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

const initialGeneData = [
    {
        geneName: "ALDH5A1",
        datas: ["rs3765310", "rs2760118", "rs62621664"],
        level: 0,
        description:
            "この遺伝子に変異がある場合、体内のGABA代謝が正常に行われず、神経系の機能に影響を与える可能性があります。ALDH5A1（Aldehyde Dehydrogenase 5 Family Member A1）は、スキサリルセミアルデヒドデヒドロゲナーゼ（SSADH）という酵素をコードしています。この酵素は、GABA（γ-アミノ酪酸）代謝経路において、スキサリルセミアルデヒドをコハク酸に変換する反応を触媒します。",
    },
];

const Gene5 = () => {
    // Fetch gene data from Redux store
    const geneData = useSelector((state) => state.pdfData?.geneData || []);

    // Memoize the updated gene data to avoid unnecessary recalculations
    const updatedGeneData = useMemo(() => {
        return updateDangerLevel(initialGeneData, geneData);
    }, [geneData]);

    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"GABA代謝"}
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

            <GenePageNumber>44</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene5;
