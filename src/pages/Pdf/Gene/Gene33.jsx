import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene33 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"SLC16A1"}
                datas={[
                    "rs606231302",
                    "rs606231310",
                    "rs387906403",
                    "rs606231300",
                    "rs72552271",
                    "rs606231172",
                    "rs606231299",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、細胞のエネルギー代謝に問題が生じる可能性があります。SLC16A1（Solute Carrier Family 16 Member 1）は、モノカルボン酸輸送体1（MCT1）をコードしています。このタンパク質は、主に乳酸やピルビン酸などのモノカルボン酸を細胞膜を通して輸送する役割を担い、エネルギー代謝や酸化還元バランスの調整に重要です。"
                }
            />
            <GeneInformationMiddle
                geneName={"UQCRB"}
                datas={[
                    "rs863224259",
                    "rs886043294",
                    "rs863224257",
                    "rs863224258",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。UQCRB（Ubiquinol-Cytochrome c Reductase Binding Protein）は、ミトコンドリア電子伝達系の複合体III（シトクロムbc1複合体）のサブユニットである結合タンパク質をコードしています。UQCRBは、ユビキノールからシトクロムcへの電子伝達を支える役割を果たし、プロトン勾配を形成してATP生成を促進します。"
                }
            />

            <GeneInformationMiddle
                geneName={"UQCRQ"}
                datas={["rs11544803"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。UQCRQ（Ubiquinol-Cytochrome c Reductase Complex III Subunit VIII）は、複合体IIIの小サブユニットの一つで、ユビキノールからシトクロムcへの電子移動の効率化を補助しています。"}
            />

            <GenePageNumber>74</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene33;
