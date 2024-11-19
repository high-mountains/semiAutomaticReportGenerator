import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene108 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"女性ホルモン"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"COMT"}
                datas={["rs4680", "rs4633"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、エストロゲンの代謝が遅くなり、ホルモンバランスが影響を受ける可能性があります。COMT（Catechol-O-Methyltransferase）は、カテコール-O-メチルトランスフェラーゼという酵素をコードしています。この酵素は、カテコール基を持つ神経伝達物質（ドーパミン、ノルアドレナリン、アドレナリンなど）の代謝に関与し、これらの神経伝達物質を不活性化するためにメチル基を付加する反応を触媒します。"
                }
            />
            <GeneInformationMiddle
                geneName={"ESR1"}
                datas={["ESR1"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、エストロゲンシグナル伝達が不十分となる可能性があります。ESR1は、エストロゲン受容体α（ERα）をコードしており、エストロゲンと結合して細胞内シグナル伝達を開始します。この受容体は、特に乳腺や骨、子宮などで発現が高く、性ホルモンの調整、骨密度維持、心血管の健康維持に関与します。"
                }
            />

            <GenePageNumber>149</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene108;
