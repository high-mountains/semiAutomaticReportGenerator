import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import PageHeader from "../../../components/Pdf/PageHeader.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

const initialGeneData = [
    {
        geneName: "GLS2",
        datas: ["rs2657879", "rs2638315"],
        level: 0,
        description:
            "この遺伝子に変異がある場合、体内のグルタミン酸合成を阻害する可能性があります。GLS2 (Glutaminase 2)は、肝臓に特異的なグルタミナーゼをコードする遺伝子です。この酵素は、グルタミンをグルタミン酸とアンモニアに変換する反応を触媒し、グルタミン代謝とエネルギー代謝において重要な役割を果たします。",
    },
];
const Gene2 = ({deltaPageCount}) => {
    // Fetch gene data from Redux store
    const geneData = useSelector((state) => state.pdfData?.geneData || []);

    // Memoize the updated gene data to avoid unnecessary recalculations
    const updatedGeneData = useMemo(() => {
        return updateDangerLevel(initialGeneData, geneData);
    }, [geneData]);

    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Gene Information List"}
                mainTitle={"あなたの遺伝子情報一覧"}
            />

            <Text
                sidebar={1}
                textContent={"グルタミン酸合成"}
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

            <GenePageNumber>{deltaPageCount+40}</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene2;
