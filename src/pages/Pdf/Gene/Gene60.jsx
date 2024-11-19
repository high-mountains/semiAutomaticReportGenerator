import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene60 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"水銀"} containerStyle={{marginBottom: "10rem"}}/>

            <GeneInformationMiddle
                geneName={"CPOX4"}
                datas={[
                    "rs1131857"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、水銀への感受性が高まり、体内での毒性が増加する可能性があります。\nCPOX4（Coproporphyrinogen Oxidase）は、ヘム合成経路において、コプロポルフィリノーゲンをプロトポルフィリンノーゲンに変換する反応を触媒する酵素です。CPOX4は、ミトコンドリアで活性を持ち、最終的なヘムの生成に重要な役割を果たしています。"}
            />
            <GeneInformationMiddle
                geneName={"GCLM"}
                datas={[
                    "rs41303970"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、体内のグルタチオンレベルが低下し水銀の解毒が不十分となる可能性があります。GCLM（Glutamate-Cysteine Ligase Modifier Subunit）は、グルタミン酸システインリガーゼの修飾サブユニットをコードしており、GCLCとともにグルタチオン合成を促進します。GCLMは、GCLCの触媒活性を調節し、グルタチオンの生成を効率的に行うために必要です。"}
            />
            <GeneInformationMiddle
                geneName={"GSTM1"}
                datas={[
                    "rs366631"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。GSTM1（Glutathione S-Transferase Mu 1）は、グルタチオンS-トランスフェラーゼ（GST）ファミリーに属し、グルタチオンを用いて有害物質や環境毒素を無毒化する酵素です。GSTM1は、肝臓をはじめとする解毒に重要な組織で発現し、特に発がん性物質や毒素の解毒に特化しています。"}
            />
            <GeneInformationMiddle
                geneName={"GSTP1"}
                datas={[
                    "rs1695"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。GSTP1（Glutathione S-Transferase Pi 1）は、主に腫瘍抑制と酸化ストレス防御に関与するGSTファミリーの酵素です。この酵素は、グルタチオンと結合して有害物質を解毒し、細胞を酸化ストレスや発がん性物質から保護します。"}
            />

            <GenePageNumber>101</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene60;
