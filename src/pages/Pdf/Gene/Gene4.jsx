import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text";

const Gene4 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"グルタミン酸輸送体"} />
            <GeneInformationMiddle
                geneName={"SLC1A1"}
                datas={["rs2228622", "rs301430"]}
                level={-1}
                description={"この遺伝子に変異がある場合、体内のグルタミン酸輸送が正常に行われず、神経細胞の機能に影響を与える可能性があります。SLC1A1（Solute Carrier Family 1 Member 1）は、グルタミン酸トランスポーターをコードしています。このトランスポーターは、主に中枢神経系で、シナプス間隙からグルタミン酸を取り込む役割を果たします。"}
            />

            <GenePageNumber>45</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene4;
