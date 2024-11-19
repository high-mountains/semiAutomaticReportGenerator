import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import PageHeader from "../../../components/Pdf/PageHeader.jsx";
import Text from "../../../components/Pdf/Text.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene2 = () => {
    return (
        <PageWrapper>
            <PageHeader
                subtitle={"Gene Information List"}
                mainTitle={"あなたの遺伝子情報一覧"}
            />

            <Text sidebar={1} textContent={"グルタミン酸合成"} />
            
            <GeneInformationMiddle
                datas={["rs2657879", "rs2638315"]}
                geneName={"GLS2"}
                level={-1}
                description={"この遺伝子に変異がある場合、体内のグルタミン酸合成を阻害する可能性があります。GLS2 (Glutaminase 2)は、肝臓に特異的なグルタミナーゼをコードする遺伝子です。この酵素は、グルタミンをグルタミン酸とアンモニアに変換する反応を触媒し、グルタミン代謝とエネルギー代謝において重要な役割を果たします。"}
            />  

            <GenePageNumber>42</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene2;