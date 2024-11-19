import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene26 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"NDUFS2"}
                datas={["rs150667550"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFS2（NADH Oxidoreductase Core Subunit S2）は、複合体Iのもう一つの主要サブユニットで、電子伝達とプロトンポンプ活動に関わっています。NDUFS2は、複合体Iの構造安定性を高め、ミトコンドリア内でのエネルギー生成の効率をサポートします。"}
            />
            <GeneInformationMiddle
                geneName={"NDUFS3"}
                datas={["rs863224106", "rs863224107", "rs28939714", "rs104894270"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFS3（NADH Oxidoreductase Core Subunit S3）は、複合体Iのコアサブユニットの一つであり、電子伝達の過程で中心的な役割を果たしています。NDUFS3は、プロトン勾配の形成を補助し、細胞のATP生成に重要です。"}
            />
            
            <GeneInformationMiddle
                geneName={"NDUFS4"}
                datas={["rs104893898", "rs104893899", "rs121908985", "rs587776949"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFS4（NADH Oxidoreductase Subunit S4）は、複合体Iの補助サブユニットで、プロトンポンプと電子伝達機能の調節に関わります。NDUFS4は、複合体Iの活性維持に寄与し、ミトコンドリアのエネルギー産生を支援しています。"}
            />
            
            <GeneInformationMiddle
                geneName={"NDUFS6"}
                datas={["rs267606913", "rs863224110", "rs863224111"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ATP合成効率が低下し、細胞のエネルギー供給が不足する可能性があります。NDUFS6（NADH Oxidoreductase Subunit S6）は、ミトコンドリア電子伝達系の複合体Iの補助サブユニットで、電子伝達とプロトン移動の機能をサポートしています。NDUFS6は、複合体Iの構造を安定させ、ATP合成のためのプロトン勾配形成に寄与しています。"}
            />

            <GenePageNumber>67</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene26;
