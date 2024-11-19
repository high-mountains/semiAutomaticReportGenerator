import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene43 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"マイコトキシン"} />

            <GeneInformationMiddle
                geneName={"CYP1A2"}
                datas={["rs762551", "rs12720461", "rs72547517", "rs72547515"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、マイコトキシンへの解毒能力が不十分となる可能性があります。\nCYP1A2（Cytochrome P450 Family 1 Subfamily A Member 2）は、主に肝臓で発現するシトクロムP450酵素で、カフェインや特定の薬物、環境毒素の代謝に関与しています。CYP1A2は、化合物を酸化し水溶性を高めて排出を促進する解毒機能を持ちます。"
                }
            />
            <GeneInformationMiddle
                geneName={"UQCRB"}
                datas={[
                    "rs2740574",
                    "rs55785340",
                    "rs4986910",
                    "rs12721627",
                    "rs4987161",
                    "rs4986909",
                    "rs4986907",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。UQCRB（Ubiquinol-Cytochrome c Reductase Binding Protein）は、ミトコンドリア電子伝達系の複合体III（シトクロムbc1複合体）のサブユニットである結合タンパク質をコードしています。UQCRBは、ユビキノールからシトクロムcへの電子伝達を支える役割を果たし、プロトン勾配を形成してATP生成を促進します。"
                }
            />
            <GeneInformationMiddle
                geneName={"GSTA1"}
                datas={["rs3957356", "rs3957357"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、マイコトキシンへの解毒能力が不十分となる可能性があります。GSTA1（Glutathione S-Transferase Alpha 1）は、グルタチオンS-トランスフェラーゼ（GST）ファミリーの一種で、肝臓で高く発現し、解毒反応に関与しています。この酵素は、グルタチオンを用いて化合物を無毒化し、水溶性を高めて排出を促進する役割を果たします。"
                }
            />

            <GenePageNumber>84</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene43;
