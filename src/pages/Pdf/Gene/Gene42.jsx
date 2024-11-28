import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene42 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"フタル酸エステル"} containerStyle={{marginBottom: '10rem'}} />
            
            <GeneInformationMiddle
                geneName={"SOD2"}
                datas={[
                    "rs4880",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、フタル酸エステルによる酸化ストレスが高まる可能性があります。\nSOD2（Superoxide Dismutase 2）は、スーパーオキシドジスムターゼ2をコードしており、ミトコンドリア内で活性酸素種の一つであるスーパーオキシドラジカルを過酸化水素に変換する役割を持っています。SOD2は、ミトコンドリアの酸化ストレスを緩和し、細胞の酸化的損傷を防ぐ重要な抗酸化酵素です。"
                }
            />

            <GenePageNumber>80</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene42;
