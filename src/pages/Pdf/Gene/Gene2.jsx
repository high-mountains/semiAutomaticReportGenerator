import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper";
import GenePageNumber from "../../../components/Pdf/GenePageNumber";
import Text from "../../../components/Pdf/Text";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene1 = () => {
    return (
        <PageWrapper>

            <Text sidebar={1} textContent={"グルタミン酸代謝"} />
            
            <GeneInformationMiddle
                datas={["rs121964962", "rs121964963", "rs121964965", "rs121964967","rs121964972", "rs375846341","rs398123151"]}
                geneName={"CBS"}
                level={-1}
                description={"この遺伝子に変異がある場合、体の中でグルタミン酸の代謝が低下する可能性があります。CBS（Cystathionine Beta-Synthase）は、シスタチオニンβ-シンターゼという酵素をコードしています。この酵素は、メチオニン代謝経路において重要な役割を果たし、ホモシステインをシスタチオニンに変換する反応を触媒します。"}
            />

            <GenePageNumber>43</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene1;
