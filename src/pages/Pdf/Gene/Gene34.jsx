import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene34 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"栄養"} />

            <GeneInformationMiddle
                geneName={"ACAT1"}
                datas={[
                    "rs3741049",
                    "rs148639841",
                    "rs120074141",
                    "rs120074144",
                    "rs120074147",
                    "rs199524907",
                    "rs762991875",
                    "rs145229472",
                    "rs797044633",
                    "rs727503796",
                    "rs398123097",
                    "rs398123096",
                    "rs879255505",
                    "rs886041122",
                    "rs120074140",
                    "rs532190594",
                    "rs120074146",
                    "rs387906282",
                    "rs387906283",
                    "rs120074145",
                    "rs794727475",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、ミトコンドリア内でのアセトアセチルCoAの生成が阻害される可能性があります。ACAT1（Acetyl-CoA Acetyltransferase 1）は、アセチル-CoAアセチルトランスフェラーゼ1をコードしています。この酵素は、細胞内でアセチル-CoA分子を結合し、ケトン体合成やコレステロール代謝に関与します。"
                }
            />

            <GenePageNumber>75</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene34;
