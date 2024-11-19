import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene24 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"NDUFA2"}
                datas={["rs863224084", "rs757982865"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFA2（NADH Oxidoreductase Subunit A2）は、複合体Iのサブユニットで、電子伝達系の構造的安定性に寄与しています。NDUFA2は、電子の伝達とプロトンポンプ活性を維持することで、ミトコンドリア内でのATP生成を支援します。"}
            />
            <GeneInformationMiddle
                geneName={"NDUFA6"}
                datas={["rs763006208", "rs781099275"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFA6（NADH Oxidoreductase Subunit A6）は、複合体Iのサブユニットで、プロトン勾配の形成を助ける役割を果たしています。NDUFA6は、NADHからユビキノンへの電子伝達過程を円滑に進めるために、複合体Iの構造的統合と機能に関与し、エネルギー生産の効率を高めています。"}
            />
            
            <GeneInformationMiddle
                geneName={"NDUFA9"}
                datas={["rs768333416"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFA9（NADH Oxidoreductase Subunit A9）は、ミトコンドリア電子伝達系複合体Iの構成要素をコードしています。このサブユニットは、電子伝達とプロトンポンプの機能に寄与し、複合体Iの安定性と効率的なエネルギー生産に重要です。NDUFA9は、ATP生成のためのプロトン勾配の形成をサポートしています。"}
            />
            
            <GeneInformationMiddle
                geneName={"NDUFA10"}
                datas={["rs387906872"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFA10（NADH Oxidoreductase Subunit A10）は、複合体Iの一部として電子伝達とプロトン移動に関与し、ATP合成に必要なプロトン勾配を形成する役割を果たします。NDUFA10は、複合体Iの構造を安定させ、エネルギー生成の効率を高めています。"}
            />

            <GenePageNumber>65</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene24;
