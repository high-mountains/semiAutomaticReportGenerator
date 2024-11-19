import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene105 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"GAD1"}
                datas={[
                    "rs3749034",
                    "rs1978340",
                    "rs3791878",
                    "rs769390",
                    "rs2241165",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、グルタミン酸からGABAへの変換が阻害される可能性があります。GAD1（Glutamate Decarboxylase 1）は、グルタミン酸脱炭酸酵素（GAD67）をコードしています。この酵素は、グルタミン酸を脱炭酸してGABA（γ-アミノ酪酸）を生成する役割を担います。"
                }
            />
            <GeneInformationMiddle
                geneName={"GCH1"}
                datas={[
                    "rs104894433",
                    "rs104894435",
                    "rs104894436",
                    "rs104894437",
                    "rs104894438",
                    "rs104894439",
                    "rs104894440",
                    "rs104894441",
                    "rs104894442",
                    "rs104894443",
                    "rs104894444",
                    "rs104894445",
                    "rs137852633",
                    "rs41298442",
                    "rs886039379",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、体内のカテコラミン合成に必要な補因子の生成が低下する可能性があります。GCH1（GTP Cyclohydrolase 1）は、GTPシクロヒドロラーゼ1という酵素をコードしており、ビオプテリンの合成に関与します。ビオプテリンは、ドーパミン、セロトニン、ノルアドレナリンなどの神経伝達物質を合成する際に必要な補酵素です。"
                }
            />
            <GeneInformationMiddle
                geneName={"HTR2"}
                datas={["rs6313"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、気分や行動、認知機能に変化を引き起こす可能性があります。HTR2は、セロトニン（5-HT）2受容体をコードしており、主に脳で発現しています。この受容体は、セロトニンと結合して細胞内シグナル伝達を調整し、気分、睡眠、食欲、感情処理に関与します。HTR2は、特に感情や気分の調節において重要で、セロトニンシステムを介して神経系のバランスを保つ役割を果たしています。"
                }
            />

            <GenePageNumber>146</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene105;
