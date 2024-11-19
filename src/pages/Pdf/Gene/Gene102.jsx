import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene102 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"殺虫剤&農薬"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"BCHE"}
                datas={[
                    "rs2668207",
                    "rs1803274",
                    "rs1799807",
                    "rs28933389",
                    "rs28933390",
                    "rs1126680",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、血圧調節や炎症反応が影響を受ける可能性があります。ACEは、アンジオテンシン変換酵素をコードしており、血圧の調節と電解質バランスの維持に関与しています。この酵素は、アンジオテンシンIをアンジオテンシンIIに変換し、血管の収縮を促進することで血圧を上昇させます。"
                }
            />

            <GenePageNumber>143</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene102;
