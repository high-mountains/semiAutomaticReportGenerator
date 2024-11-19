import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene109 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"腸内フローラ"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"FLG"}
                datas={["rs61816761"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、腸内フローラのバランスに影響を与える皮膚や腸のバリア機能が損なわれる可能性があります。FLGは、フィラグリンというタンパク質をコードしており、皮膚の角質層でケラチンを結びつけて皮膚のバリア機能を形成する役割を持ちます。フィラグリンは、皮膚の水分保持と保護バリアを維持するために重要であり、FLGの機能低下は皮膚の乾燥やバリア機能の低下を引き起こす可能性があります。"
                }
            />
            <GeneInformationMiddle
                geneName={"FUT2"}
                datas={["rs601338", "rs1800028"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、腸内のビフィズス菌などの有益な細菌の定着が減少する可能性があります。FUT2は、フコース転移酵素2という酵素をコードしており、唾液や消化管の粘液中に存在する糖鎖にフコースを付加する役割を果たします。この酵素は、特に消化管の健康維持や腸内細菌叢（腸内フローラ）のバランスに影響を与えることが知られています。"
                }
            />
            <GeneInformationMiddle
                geneName={"HLA-DQ2.2"}
                datas={["rs7775228", "rs2395182"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、グルテンに対する過敏反応などのリスクが高まる可能性があります。HLA-DQ2.2は、ヒト白血球抗原（HLA）システムのクラスII分子の一種で、DQA1およびDQB1遺伝子の特定のアレル組み合わせによって形成されます。このHLA分子は、細胞表面で抗原をT細胞に提示し、免疫応答を誘導する役割を持っています。"
                }
            />
            <GeneInformationMiddle
                geneName={"HLA-DQ8"}
                datas={["rs7454108"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、グルテンに対する過敏反応などのリスクが高まる可能性があります。HLA-DQ8は、HLAクラスII分子の一つで、DQA1およびDQB1遺伝子の異なるアレルによって構成されます。この分子は、免疫系が病原体や自己抗原を認識するために抗原提示を行い、特にT細胞の活性化に関与します。"
                }
            />

            <GenePageNumber>150</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene109;
