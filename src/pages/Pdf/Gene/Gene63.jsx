import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene63 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"メチオニンサイクル"} containerStyle={{marginBottom: "10rem"}}/>

            <GeneInformationMiddle
                geneName={"AHCY"}
                datas={[
                    "rs121918607", "rs757966746", "rs121918608", "rs369428934"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、細胞のメチル化反応が影響を受ける可能性があります。AHCY（Adenosylhomocysteinase）は、アデノシルホモシステイナーゼという酵素をコードしており、S-アデノシルホモシステイン（SAH）をホモシステインとアデノシンに分解する反応を触媒します。この酵素は、メチル基転移反応によって生成されるSAHを除去し、メチオニン代謝とメチル化サイクルの調整において重要な役割を果たしています。"}
            />
            <GeneInformationMiddle
                geneName={"BHMT"}
                datas={[
                    "rs3733890", "rs6875201"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、細胞のメチル化反応が影響を受ける可能性があります。BHMT（Betaine-Homocysteine Methyltransferase）は、ベタインを供与体としてホモシステインをメチオニンに再メチル化する酵素です。BHMTは、肝臓や腎臓で特に発現が高く、メチル化サイクルの一部としてホモシステイン濃度の調整に寄与します。"}
            />
            <GeneInformationMiddle
                geneName={"CTH"}
                datas={[
                    "rs1021737", "rs28941786"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、グルタミン酸代謝に関係する物質の生成がうまくできなくなる可能性があります。CTH（Cystathionine Gamma-Lyase）は、シスタチオニンγ-リアーゼという酵素をコードする遺伝子です。この酵素は、シスタチオニンをシステイン、アンモニア、そしてα-ケト酪酸に変換する反応を触媒します。"}
            />
            <GeneInformationMiddle
                geneName={"MTHFD1"}
                datas={[
                    "rs1801133"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、細胞のメチル化反応が影響を受ける可能性があります。MTHFD1（Methylenetetrahydrofolate Dehydrogenase 1）は、メチレンテトラヒドロ葉酸デヒドロゲナーゼという酵素をコードしており、テトラヒドロ葉酸を利用してさまざまな一炭素化合物（フォレート）を合成する役割を果たします。この酵素は、DNA合成や修復、メチル化反応に必要なメチル基の供給をサポートし、細胞の成長や遺伝情報の安定性維持に重要です。"}
            />

            <GenePageNumber>104</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene63;
