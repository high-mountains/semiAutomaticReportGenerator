import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene36 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"SLC39A14"}
                datas={[
                    "rs879253763"
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、鉄やマンガンの細胞内取り込みに問題が生じる可能性があります。\nSLC39A14（Solute Carrier Family 39 Member 14）は、亜鉛およびマンガンの輸送体をコードしており、細胞外から細胞内への金属イオンの取り込みを促進します。"
                }
            />
            <GeneInformationMiddle
                geneName={"VDR"}
                datas={["rs121909791", "rs121909798", "rs121909799", "rs121909792", "rs121909800", "rs121909793", "rs121909790"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、カルシウム吸収や骨の健康、免疫調整に影響を与える可能性があります。VDR（Vitamin D Receptor）は、ビタミンD受容体をコードしています。この受容体は、ビタミンDが結合することで活性化され、カルシウムとリンの代謝を調節するための遺伝子発現を誘導します。"
                }
            />

            <GenePageNumber>75</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene36;
