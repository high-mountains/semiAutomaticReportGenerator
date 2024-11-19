import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene81 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"Longevity Genes"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"CETP"}
                datas={["rs5882"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、血中HDLコレステロールレベルに影響を与える可能性があります。CETPは、コレステリルエステル転送タンパク質をコードしており、リポタンパク質間でコレステロールエステルとトリグリセリドを交換する役割を持ちます。このタンパク質は、HDL（高密度リポタンパク質）とLDL（低密度リポタンパク質）の間でのコレステロールの移動を促進し、血中の脂質バランスを調節します。"
                }
            />

            <GeneInformationMiddle
                geneName={"COMT"}
                datas={["rs4680", "rs4633"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、ドーパミンやノルアドレナリンの代謝が阻害される可能性があります。COMT（Catechol-O-Methyltransferase）は、カテコール-O-メチルトランスフェラーゼという酵素をコードしています。この酵素は、カテコール基を持つ神経伝達物質（ドーパミン、ノルアドレナリン、アドレナリンなど）の代謝に関与し、これらの神経伝達物質を不活性化するためにメチル基を付加する反応を触媒します。"
                }
            />

            <GeneInformationMiddle
                geneName={"CYP2B6"}
                datas={[
                    "rs3745274",
                    "rs139801276",
                    "rs2279343",
                    "rs34097093",
                    "rs36079186",
                    "rs28399499",
                    "rs373489637",
                    "rs4803419",
                    "rs186335453",
                    "rs281864907",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、特定の薬物や化学物質の代謝が不十分となる可能性があります。\nCYP2B6（Cytochrome P450 Family 2 Subfamily B Member 6）は、シトクロムP450酵素ファミリーの一員で、薬物や環境毒素、内因性物質の代謝に関与しています。CYP2B6は、肝臓で発現が高く、特定の薬物を水溶性に変換して排泄を促進する役割を果たしています。"
                }
            />

            <GenePageNumber>122</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene81;
