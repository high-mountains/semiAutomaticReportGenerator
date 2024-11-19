import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene5 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"GABA代謝"} />
            <GeneInformationMiddle
                geneName={"ALDH5A1"}
                datas={["rs3765310", "rs2760118", "rs62621664"]}
                level={-1}
                description={"この遺伝子に変異がある場合、体内のGABA代謝が正常に行われず、神経系の機能に影響を与える可能性があります。ALDH5A1（Aldehyde Dehydrogenase 5 Family Member A1）は、スキサリルセミアルデヒドデヒドロゲナーゼ（SSADH）という酵素をコードしています。この酵素は、GABA（γ-アミノ酪酸）代謝経路において、スキサリルセミアルデヒドをコハク酸に変換する反応を触媒します。"}
            />

            <GenePageNumber>46</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene5;
