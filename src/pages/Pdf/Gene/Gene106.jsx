import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene106 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"MAOA"}
                datas={["rs6323", "rs1137070", "rs72554632", "rs796065312"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、ドーパミンやセロトニン、ノルアドレナリンの代謝が阻害される可能性があります。MAOA（Monoamine Oxidase A）は、モノアミンオキシダーゼAという酵素をコードしています。この酵素は、セロトニン、ノルアドレナリン、ドーパミンなどのモノアミン神経伝達物質の分解に関与し、これらの伝達物質を酸化的に脱アミノ化して不活性化します。"
                }
            />
            <GeneInformationMiddle
                geneName={"MAOB"}
                datas={["rs1799836"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、主にドーパミンの代謝が阻害される可能性があります。MAOB（Monoamine Oxidase B）は、モノアミンオキシダーゼBという酵素をコードしています。この酵素は、ドーパミンやフェネチルアミンなどのモノアミン神経伝達物質を分解する役割を持ち、神経伝達物質の濃度を調節します。"
                }
            />
            <GeneInformationMiddle
                geneName={"SLC6A4"}
                datas={["rs1042173"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、セロトニン再取り込みが不十分となる可能性があります。SLC6A4は、セロトニントランスポーター（SERT）をコードしており、シナプス間隙からセロトニンを再取り込みすることで神経伝達を調整します。このトランスポーターは、神経細胞にセロトニンを再吸収することでセロトニンの作用を終了させ、気分、感情、睡眠、食欲の調整に関与しています。"
                }
            />

            <GenePageNumber>137</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene106;
