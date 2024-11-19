import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";
import Text from "../../../components/Pdf/Text.jsx";

const Gene42 = () => {
    return (
        <PageWrapper>
            <Text sidebar={1} textContent={"フタル酸エステル"} />

            
            <GeneInformationMiddle
                geneName={"HSPA1L"}
                datas={[
                    "rs2227956",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、フタル酸エステルによる細胞ストレスへの適応力が低下する可能性があります。HSPA1L（Heat Shock Protein Family A Member 1 Like）は、ヒートショックタンパク質ファミリーの一員で、細胞ストレス応答において重要な役割を担っています。このタンパク質は、ストレス条件下で損傷したタンパク質の修復や正しい折り畳みを助け、細胞の安定性と機能を維持します。"
                }
            />
            <GeneInformationMiddle
                geneName={"SOD2"}
                datas={[
                    "rs5746136",
                    "rs4880",
                ]}
                level={-1}
                description={
                    "この遺伝子に変異がある場合、フタル酸エステルによる酸化ストレスが高まる可能性があります。\n SOD2（Superoxide Dismutase 2）は、スーパーオキシドジスムターゼ2をコードしており、ミトコンドリア内で活性酸素種の一つであるスーパーオキシドラジカルを過酸化水素に変換する役割を持っています。SOD2は、ミトコンドリアの酸化ストレスを緩和し、細胞の酸化的損傷を防ぐ重要な抗酸化酵素です。"
                }
            />

            <GenePageNumber>83</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene42;
