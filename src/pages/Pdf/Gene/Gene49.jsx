import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene48 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"SULT1E1"}
                datas={[
                    "rs3736599",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、エストロゲンの代謝が低下し、ホルモンバランスが乱れる可能性があります。SULT1E1（Sulfotransferase Family 1E Member 1）は、エストロゲンに硫酸基を転移するスルホトランスフェラーゼ酵素をコードしており、特にエストロゲンの代謝と不活性化に関与しています。この酵素は、エストロゲンの生物活性を調整し、体内のホルモンバランスを維持するために重要です。"
                }
            />
            <GeneInformationMiddle
                geneName={"SULT2A1"}
                datas={["rs2547231"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、ステロイドホルモンや胆汁酸への代謝機能が低下する可能性があります。SULT2A1（Sulfotransferase Family 2A Member 1）は、デヒドロエピアンドロステロン（DHEA）やステロイドホルモンに対して硫酸化を行うスルホトランスフェラーゼ酵素をコードしています。この酵素は、DHEAや他のステロイドの不活性化と排泄を助け、ホルモン代謝の調整に重要です。"
                }
            />
            <GeneInformationMiddle
                geneName={"SULT2B1"}
                datas={["rs140526640", "rs1303127476", "rs1114167425"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、コレステロールやステロイドの代謝への代謝機能が低下する可能性があります。SULT2B1（Sulfotransferase Family 2B Member 1）は、コレステロールおよびデヒドロエピアンドロステロン（DHEA）に対して硫酸基を転移する酵素をコードしています。この酵素には、2つのアイソフォーム（SULT2B1aとSULT2B1b）が存在し、異なる組織で役割を果たしています。"
                }
            />

            <GenePageNumber>90</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene48;
