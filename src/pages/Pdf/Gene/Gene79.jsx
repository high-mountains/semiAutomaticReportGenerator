import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene79 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"Leaky"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"HLA-DQ2.2"}
                datas={["rs7775228", "rs2395182"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、免疫系が過剰に反応しやすくなり、腸内バリアの透過性が増加する可能性があります。HLA-DQ2.2は、ヒト白血球抗原（HLA）システムのクラスII分子の一種で、DQA1およびDQB1遺伝子の特定のアレル組み合わせによって形成されます。このHLA分子は、細胞表面で抗原をT細胞に提示し、免疫応答を誘導する役割を持っています。"
                }
            />

            <GeneInformationMiddle
                geneName={"HLA-DQ8"}
                datas={[
                    "rs7454108"
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、免疫系が過剰に反応しやすくなり、腸内バリアの透過性が増加する可能性があります。HLA-DQ8は、HLAクラスII分子の一つで、DQA1およびDQB1遺伝子の異なるアレルによって構成されます。この分子は、免疫系が病原体や自己抗原を認識するために抗原提示を行い、特にT細胞の活性化に関与します。"
                }
            />
            
            <GeneInformationMiddle
                geneName={"HLA-DQA1"}
                datas={["rs9271588"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、免疫系が過剰に反応しやすくなり、腸内バリアの透過性が増加する可能性があります。HLA-DQA1は、HLAクラスII分子のα鎖をコードする遺伝子です。このα鎖は、β鎖と対になることでHLA-DQ分子を形成し、外来抗原や自己抗原をT細胞に提示します。HLA-DQA1の異なるアレルは、抗原提示の効率や特異性に影響を与え、免疫応答の強さや方向性に寄与します。"
                }
            />

            <GeneInformationMiddle
                geneName={"IL10"}
                datas={["rs1800871", "rs1800896", "rs3024505"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、免疫系が過剰に反応しやすくなり、腸内バリアの透過性が増加する可能性があります。IL10（Interleukin 10）は、抗炎症性のサイトカインで、免疫応答の調節に重要な役割を果たします。この分子は、マクロファージやT細胞などの免疫細胞から分泌され、炎症性サイトカインの産生を抑制することで免疫系の過剰な活性化を防ぎます。"
                }
            />

            <GenePageNumber>120</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene79;
