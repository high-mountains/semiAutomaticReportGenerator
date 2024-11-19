import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene22 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"G6PD"}
                datas={["rs137852318", "rs137852319", "rs137852321", "rs137852323", "rs137852324"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ミトコンドリア内でエネルギー産生が不十分になる可能性があります。COX4I2（Cytochrome c Oxidase Subunit 4 Isoform 2）は、シトクロムcオキシダーゼのサブユニット4のアイソフォーム2をコードしています。シトクロムcオキシダーゼはミトコンドリア電子伝達系の複合体IVに属し、酸素を最終電子受容体として利用してATPを生成します。"}
            />
            <GeneInformationMiddle
                geneName={"IDO2"}
                datas={["rs4503083", "rs10109853"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ミトコンドリア内でのトリプトファン代謝や免疫応答が変化する可能性があります。IDO2（Indoleamine 2,3-Dioxygenase 2）は、インドールアミン2,3-ジオキシゲナーゼ2をコードしています。この酵素は、トリプトファンをキヌレニンに代謝する役割を担い、免疫応答の調節に関与しています。"}
            />
            
            <GeneInformationMiddle
                geneName={"KYNU"}
                datas={["rs3768844", "rs606231307", "rs758865880", "rs147475752", "rs780720490", "rs770642379"]}
                level={-1}
                description={"この遺伝子に変異がある場合、ミトコンドリア内でエネルギー産生が不十分になる可能性があります。\n KYNU（Kynureninase）は、キヌレニナーゼという酵素をコードしており、キヌレニン経路でキヌレニンを代謝してアントラニル酸に変換する役割を持ちます。この経路は、トリプトファン代謝における重要な経路であり、神経伝達物質や免疫応答に関わる代謝産物の生成に寄与しています。"}
            />
            
            <GenePageNumber>63</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene22;
