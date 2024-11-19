import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene6 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"GABA受容体"} />

            <GeneInformationMiddle
                geneName={"GABRA1"}
                datas={["rs2279020", "rs121434579"]}
                level={-1}
                description={"この遺伝子に変異がある場合、体内のグルタミン酸輸送が正常に行われず、神経細胞の機能に影響を与える可能性があります。SLC1A1（Solute Carrier Family 1 Member 1）は、グルタミン酸トランスポーターをコードしています。このトランスポーターは、主に中枢神経系で、シナプス間隙からグルタミン酸を取り込む役割を果たします。"}
            />
            <GeneInformationMiddle
                geneName={"GABRA2"}
                datas={["rs279871", "rs279858"]}
                level={-1}
                description={"この遺伝子に変異がある場合、GABA受容体の機能が低下し、興奮と抑制のバランスが崩れる可能性があります。GABRA2（Gamma-Aminobutyric Acid Type A Receptor Subunit Alpha2）は、GABRA2受容体のα2サブユニットをコードしています。このサブユニットは、特定の脳領域で発現が多く、GABRA2受容体の構造に組み込まれて、神経抑制作用を担います。α2サブユニットは、GABAの作用を受けて神経伝達の抑制的な制御に寄与し、神経の過剰な興奮を抑える役割を持ちます。"}
            />
            
            <GeneInformationMiddle
                geneName={"GABRG2"}
                datas={["rs211037", "rs796052504"]}
                level={-1}
                description={"この遺伝子に変異がある場合、GABA受容体の機能が低下し、興奮と抑制のバランスが崩れる可能性があります。GABRG2（Gamma-Aminobutyric Acid Type A Receptor Subunit Gamma2）は、GABRG2受容体のγ2サブユニットをコードしています。γ2サブユニットは、GABA A受容体の構成要素で、特にベンゾジアゼピンの結合部位を形成しています。このサブユニットは、ベンゾジアゼピン系薬物がGABAの作用を強化する役割を担っており、神経伝達の抑制効果を増強します。"}
            />
            
            <GenePageNumber>47</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene6;
