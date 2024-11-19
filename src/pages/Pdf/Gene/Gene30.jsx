import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene30 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"SDHA"}
                datas={[
                    "rs587781720",
                    "rs200397144",
                    "rs142441643",
                    "rs786205210",
                    "rs786205145",
                    "rs786205209",
                    "rs876658486",
                    "rs781764920",
                    "rs387906780",
                    "rs151170408",
                    "rs886041867",
                    "rs137852767",
                    "rs9809219",
                    "rs766667009",
                    "rs748089700",
                    "rs746165168",
                    "rs878854632",
                    "rs878854628",
                    "rs878854627",
                    "rs876659595",
                    "rs397514541",
                    "rs137852768",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、クエン酸回路と電子伝達系の連携が損なわれ、ATP生成が減少する可能性があります。SDHA（Succinate Dehydrogenase Complex Flavoprotein Subunit A）は、ミトコンドリア電子伝達系複合体IIの主要サブユニットで、スクシニン酸デヒドロゲナーゼとしてTCA回路にも関わります。SDHAはスクシニン酸をフマル酸に変換しながら電子をユビキノンに伝達し、エネルギー生成と酸化還元反応において重要な役割を果たします。"
                }
            />

            <GenePageNumber>71</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene30;
