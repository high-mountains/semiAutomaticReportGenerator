import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene46 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"フェーズII グルタチオントランスフェラーゼ"} containerStyle={{marginBottom: '10rem'}} />

            <GeneInformationMiddle
                geneName={"GSTP1"}
                datas={["rs1695"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、細胞内での有害物質の代謝と解毒が不十分となる可能性があります。GSTP1（Glutathione S-Transferase Pi 1）は、主に腫瘍抑制と酸化ストレス防御に関与するGSTファミリーの酵素です。この酵素は、グルタチオンと結合して有害物質を解毒し、細胞を酸化ストレスや発がん性物質から保護します。"
                }
            />

            <GenePageNumber>84</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene46;
