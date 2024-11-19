import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene11 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"ヒスタミン生成"} />

            <GeneInformationMiddle
                geneName={"HDC"}
                datas={["rs267606861", "rs2073440"]}
                level={-1}
                description={"この遺伝子に変異がある場合、体内のヒスタミン生成が阻害される可能性があります。HDC（Histidine Decarboxylase）は、ヒスチジン脱炭酸酵素をコードしています。この酵素は、ヒスチジンからヒスタミンを生成する反応を触媒します。"}
            />
           
            <GenePageNumber>52</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene11;
