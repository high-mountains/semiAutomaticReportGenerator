import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Initial gene data
const initialGeneData = [
    {
        geneName: "DAOA",
        datas: ["rs2391191"],
        level: 0,
        description:
            "この遺伝子に変異がある場合、グルタミン酸の分解が正しく行われず、体内でグルタミン酸がたまりやすくなる可能性があります。DAOA（D-amino acid oxidase activator）は、D-アミノ酸オキシダーゼ（DAO）を活性化するタンパク質をコードしています。DAOは、D-アミノ酸を酸化する酵素であり、特に神経系において重要な役割を果たします。DAOAは、DAOの活性を調節し、D-セリンなどの神経伝達調節因子の代謝に関与しています。",
    },
    {
        geneName: "GAD1",
        datas: ["rs769390", "rs2241165"],
        level: 0,
        description:
            "この遺伝子に変異がある場合、グルタミン酸からGABAへの変換が阻害される可能性があります。GAD1（Glutamate Decarboxylase 1）は、グルタミン酸脱炭酸酵素（GAD67）をコードしています。この酵素は、グルタミン酸を脱炭酸してGABA（γ-アミノ酪酸）を生成する役割を担います。",
    },
    {
        geneName: "GLUD1",
        datas: ["rs121909730"],
        level: 0,
        description:
            "この遺伝子に変異がある場合、グルタミン酸の代謝や体のエネルギー産生に問題が生じる可能性があります。GLUD1（Glutamate Dehydrogenase 1）は、グルタミン酸デヒドロゲナーゼ1という酵素をコードしています。この酵素は、グルタミン酸を酸化的に脱アミノ化し、α-ケトグルタル酸とアンモニアを生成します。",
    },
    {
        geneName: "GLUL",
        datas: ["rs10911021"],
        level: 0,
        description:
            "この遺伝子に変異がある場合、グルタミン酸からグルタミンへの合成が阻害される可能性があります。GLUL（Glutamine Synthetase）は、グルタミン合成酵素をコードしています。この酵素は、グルタミン酸とアンモニアを基質としてグルタミンを合成します。",
    },
];

const Gene3 = () => {
        // Fetch gene data from Redux store
        const geneData = useSelector((state) => state.pdfData?.geneData || []);

        // Memoize the updated gene data to avoid unnecessary recalculations
        const updatedGeneData = useMemo(() => {
            return updateDangerLevel(initialGeneData, geneData);
        }, [geneData]);
    return (
        <PageWrapper>
            {updatedGeneData.map((item, index) => (
                <GeneInformationMiddle
                    key={index}
                    geneName={item.geneName}
                    datas={item.datas}
                    level={item.level}
                    description={item.description}
                />
            ))}

            <GenePageNumber>42</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene3;
