import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
    {
        geneName: "COMT",
        datas: ["rs4680", "rs4633"],
        level: 0,
        description:
            "この遺伝子に変異がある場合、ドーパミンやノルアドレナリンの代謝が阻害される可能性があります。COMT（Catechol-O-Methyltransferase）は、カテコール-O-メチルトランスフェラーゼという酵素をコードしています。この酵素は、カテコール基を持つ神経伝達物質（ドーパミン、ノルアドレナリン、アドレナリンなど）の代謝に関与し、これらの神経伝達物質を不活性化するためにメチル基を付加する反応を触媒します。",
    },
    {
        geneName: "MAOA",
        datas: ["rs6323", "rs1137070", "rs72554632", "rs796065312"],
        level: 0,
        description:
            "この遺伝子に変異がある場合、ドーパミンやセロトニン、ノルアドレナリンの代謝が阻害される可能性があります。MAOA（Monoamine Oxidase A）は、モノアミンオキシダーゼAという酵素をコードしています。この酵素は、セロトニン、ノルアドレナリン、ドーパミンなどのモノアミン神経伝達物質の分解に関与し、これらの伝達物質を酸化的に脱アミノ化して不活性化します。",
    },
    {
        geneName: "MAOB",
        datas: ["rs1799836"],
        level: 0,
        description:
            "この遺伝子に変異がある場合、主にドーパミンの代謝が阻害される可能性があります。MAOB(Monoamine Oxidase B) は、モノアミンオキシダーゼBという酵素をコードしています。この酵素は、ドーパミンやフェネチルアミンなどのモノアミン神経伝達物質を分解する役割を持ち、神経伝達物質の濃度を調節します。",
        
        },
];

const Gene8 = ({deltaPageCount}) => {
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
                textContent={"カテコラミン代謝"}
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

            <GenePageNumber>{deltaPageCount+47}</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene8;
