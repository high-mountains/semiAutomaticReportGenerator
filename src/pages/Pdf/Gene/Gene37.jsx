import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene37 = () => {
    return (
        <PageWrapper>
            <GeneInformationMiddle
                geneName={"SLC30A3"}
                datas={["rs11126936"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、神経系や免疫機能に関連する亜鉛バランスが崩れる可能性があります。\n SLC30A3（Solute Carrier Family 30 Member 3）は、亜鉛輸送体の一つで、細胞内から亜鉛イオンを細胞外へ、あるいは細胞小器官内へ移動させる役割を果たします。"
                }
            />
            <GeneInformationMiddle
                geneName={"SLC39A14"}
                datas={[
                    "rs121909791",
                    "rs121909798",
                    "rs121909799",
                    "rs121909792",
                    "rs121909800",
                    "rs121909793",
                    "rs121909790",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、鉄やマンガンの細胞内取り込みに問題が生じる可能性があります。\n SLC39A14（Solute Carrier Family 39 Member 14）は、亜鉛およびマンガンの輸送体をコードしており、細胞外から細胞内への金属イオンの取り込みを促進します。"
                }
            />
            <GeneInformationMiddle
                geneName={"VDR"}
                datas={["rs12325817"]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、カルシウム吸収や骨の健康、免疫調整に影響を与える可能性があります。VDR（Vitamin D Receptor）は、ビタミンD受容体をコードしています。この受容体は、ビタミンDが結合することで活性化され、カルシウムとリンの代謝を調節するための遺伝子発現を誘導します。"
                }
            />

            <GenePageNumber>78</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene37;
