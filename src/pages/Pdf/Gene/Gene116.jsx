import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene116 = () => {
    return (
        <PageWrapper>
            <Text
                sidebar={1}
                textContent={"トラウマ"}
                containerStyle={{ marginBottom: "10rem" }}
            />

            <GeneInformationMiddle
                geneName={"CRHR1"}
                datas={["rs242924", "rs110402"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、トラウマ体験後のストレス反応に影響を与える可能性があります。CRHR1は、コルチコトロピン放出ホルモン受容体1をコードしており、ストレス応答における中心的な役割を果たします。この受容体は、視床下部で分泌されるコルチコトロピン放出ホルモン（CRH）と結合して、下垂体からの副腎皮質刺激ホルモン（ACTH）の分泌を促進し、ストレスホルモンであるコルチゾールの分泌を誘導します。"
                }
            />

            <GenePageNumber>147</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene116;
