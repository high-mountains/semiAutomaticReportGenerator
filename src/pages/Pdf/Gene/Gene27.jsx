import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene20 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"NDUFS7"}
                datas={["rs11551664", "rs104894705"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFS7（NADH Oxidoreductase Core Subunit S7）は、複合体Iのコアサブユニットの一つであり、NADHからユビキノンへの電子移動を促進する役割を担っています。NDUFS7は、エネルギー生成プロセスの効率を高めるためにプロトン勾配の維持をサポートしています。"
                }
            />
            <GeneInformationMiddle
                geneName={"NDUFS7"}
                datas={[
                    "rs764276946",
                    "rs863224114",
                    "rs143337739",
                    "rs397514617",
                    "rs863224115",
                    "rs121912638",
                    "rs28939679",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFS8（NADH Oxidoreductase Core Subunit S8）は、複合体Iの電子伝達を担うコアサブユニットで、電子の流れとプロトンポンプの機能において中心的な役割を果たします。NDUFS8は、ATP合成のためのプロトン勾配を形成するために、複合体Iの機能を維持し、エネルギー産生の効率化に寄与しています。"
                }
            />

            <GeneInformationMiddle
                geneName={"NDUFV2"}
                datas={["rs371040282"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFV2（NADH Oxidoreductase Core Subunit V2）は、ミトコンドリア電子伝達系の複合体Iに属するコアサブユニットで、NADHからユビキノンへの電子伝達に関わります。NDUFV2は、プロトン勾配の形成を助けてATP合成を支援し、エネルギー生成の効率化に貢献しています。"}
            />

            <GenePageNumber>68</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene20;
