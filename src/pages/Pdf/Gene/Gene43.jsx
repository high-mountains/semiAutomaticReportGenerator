import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene43 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"マイコトキシン"} containerStyle={{marginBottom: '10rem'}} />

            <GeneInformationMiddle
                geneName={"CYP1A2"}
                datas={["rs12720461", "rs72547517", "rs72547515"]}
                level={0}
                description={
                    "この遺伝子に変異がある場合、マイコトキシンへの解毒能力が不十分となる可能性があります。\nCYP1A2（Cytochrome P450 Family 1 Subfamily A Member 2）は、主に肝臓で発現するシトクロムP450酵素で、カフェインや特定の薬物、環境毒素の代謝に関与しています。CYP1A2は、化合物を酸化し水溶性を高めて排出を促進する解毒機能を持ちます。"
                }
            />
            <GeneInformationMiddle
                geneName={"CYP3A4"}
                datas={[
                    "rs55785340",
                    "rs4986910",
                    "rs12721627",
                    "rs4987161",
                    "rs4986909",
                    "rs4986907",
                ]}
                level={0}
                description={
                    "この遺伝子に変異がある場合、マイコトキシンへの解毒能力が不十分となる可能性があります。\nCYP3A4（Cytochrome P450 Family 3 Subfamily A Member 4）は、肝臓と小腸で広く発現するシトクロムP450酵素で、多くの薬物やステロイドホルモンの代謝に関与しています。CYP3A4は、化合物を酸化し、水溶性を高めて排泄を促進することで解毒に寄与します。"
                }
            />
            <GeneInformationMiddle
                geneName={"GSTP1"}
                datas={["rs1695"]}
                level={0}
                description={
                    "この遺伝子に変異がある場合、マイコトキシンの代謝と解毒能力が不十分となる可能性があります。\nGSTP1（Glutathione S-Transferase Pi 1）は、主に腫瘍抑制と酸化ストレス防御に関与するGSTファミリーの酵素です。この酵素は、グルタチオンと結合して有害物質を解毒し、細胞を酸化ストレスや発がん性物質から保護します。"
                }
            />

            <GenePageNumber>81</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene43;
