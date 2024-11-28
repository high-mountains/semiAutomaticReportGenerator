import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene53 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"GSTM3"}
                datas={["rs7483"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、抗酸化・解毒機能が低下し、体内の酸化ストレスが増加する可能性があります。GSTM3（Glutathione S-Transferase Mu 3）は、GSTMファミリーに属し、GSTM1と同様にグルタチオンを利用して有害化合物の無毒化を行います。GSTM3は特に脳組織で発現しており、神経系の酸化ストレス防御や発がん物質の解毒に役立っています。"
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

            <GenePageNumber>91</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene53;
