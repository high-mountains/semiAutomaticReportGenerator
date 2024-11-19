import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene13 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"HNMT"}
                datas={["rs12995000", "rs758252808", "rs11558538", "rs745756308", "rs1050891"]}
                level={-1}
                description={"この遺伝子に変異がある場合、体内でのヒスタミンの分解が不十分となり、アレルギー反応に影響を与える可能性があります。HNMT（Histamine N-Methyltransferase）は、ヒスタミンN-メチルトランスフェラーゼという酵素をコードしています。この酵素は、ヒスタミンをメチル化することで分解し、ヒスタミンの濃度を調節します。"}
            />
            <GeneInformationMiddle
                geneName={"NAT2"}
                datas={["rs1495741", "rs1208", "rs1799930", "rs769390", "rs1801279", "rs1799931", "rs1041983", "rs1799929"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ヒスタミンを代謝するプロセスが阻害される可能性があります。MAOA（Monoamine Oxidase A）は、モノアミンオキシダーゼAという酵素をコードしています。この酵素は、セロトニン、ノルアドレナリン、ドーパミンなどのモノアミン神経伝達物質の分解に関与し、これらの伝達物質を酸化的に脱アミノ化して不活性化します。"}
            />
            
            <GeneInformationMiddle
                geneName={"ADH1B"}
                datas={["rs1229984", "rs2066702"]}
                level={-1}
                description={"この遺伝子に変異がある場合、アルコール代謝酵素の働きが低下する可能性があります。\n ADH1B（Alcohol Dehydrogenase 1B）は、アルコールデヒドロゲナーゼ1Bという酵素をコードしています。この酵素は、エタノールをアセトアルデヒドに酸化する反応を触媒し、アルコール代謝の初期段階で活性を持ちます。"}
            />
            
            <GenePageNumber>54</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene13;
