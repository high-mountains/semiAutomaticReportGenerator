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
    {
        geneName: "CTH",
        datas: [
            "rs1021737",
            "rs28941786"
        ],
        level: 0,
        description:
            "この遺伝子に変異がある場合、グルタミン酸代謝に関係する物質の生成がうまくできなくなる可能性があります。CTH（Cystathionine Gamma-Lyase）は、シスタチオニンγ-リアーゼという酵素をコードする遺伝子です。この酵素は、シスタチオニンをシステイン、アンモニア、そしてα-ケト酪酸に変換する反応を触媒します。",
    },
    {
        geneName: "DAO",
        datas: [
            "rs2111902"
        ],
        level: 0,
        description:
            "この遺伝子に変異がある場合、グルタミン酸の分解が正しく行われず、体内でグルタミン酸がたまりやすくなる可能性があります。DAO（D-amino Acid Oxidase）は、D-アミノ酸オキシダーゼという酵素をコードしています。この酵素は、D-型アミノ酸、特にD-セリンやD-グルタミン酸などを分解する役割を持ち、神経伝達物質の調節に関与します。"
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
