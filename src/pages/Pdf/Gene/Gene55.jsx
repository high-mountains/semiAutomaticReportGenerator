import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene55 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"化学物質過敏"}
            />

            <GeneInformationMiddle
                geneName={"CAT"}
                datas={["rs769217", "rs1001179", "rs7943316"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、過酸化水素の分解が不十分となり、酸化ストレスに対する体内の防御が弱まる可能性があります。CAT（Catalase）は、カタラーゼという抗酸化酵素をコードしています。この酵素は、細胞内で過酸化水素を水と酸素に分解する反応を触媒し、酸化ストレスから細胞を保護する役割を果たします。"
                }
            />
            <GeneInformationMiddle
                geneName={"CYP2C9"}
                datas={[
                    "rs1057910",
                    "rs1799853",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、特定の薬物や化学物質の解毒が遅れる可能性があります。CYP2C9（Cytochrome P450 Family 2 Subfamily C Member 9）は、薬物や内因性化合物の代謝に関与するシトクロムP450酵素で、肝臓で主に発現しています。CYP2C9は、特定の薬物（抗凝血薬や抗炎症薬など）を酸化し、代謝と排泄を促進します。"
                }
            />
            <GeneInformationMiddle
                geneName={"GSTM1"}
                datas={["rs366631"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。GSTM1（Glutathione S-Transferase Mu 1）は、グルタチオンS-トランスフェラーゼ（GST）ファミリーに属し、グルタチオンを用いて有害物質や環境毒素を無毒化する酵素です。GSTM1は、肝臓をはじめとする解毒に重要な組織で発現し、特に発がん性物質や毒素の解毒に特化しています。"
                }
            />
            <GeneInformationMiddle
                geneName={"GSTP1"}
                datas={["rs1695"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。GSTP1（Glutathione S-Transferase Pi 1）は、主に腫瘍抑制と酸化ストレス防御に関与するGSTファミリーの酵素です。この酵素は、グルタチオンと結合して有害物質を解毒し、細胞を酸化ストレスや発がん性物質から保護します。"
                }
            />

            <GenePageNumber>96</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene55;
