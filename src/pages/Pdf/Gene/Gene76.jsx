import React from "react";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

const Gene76 = () => {
    return (
        <PageWrapper>

            <GeneInformationMiddle
                geneName={"CYP3A4"}
                datas={[
                    "rs2740574",
"rs55785340",
"rs4986910",
"rs12721627",
"rs4987161",
"rs4986909",
"rs4986907"

                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、薬物やホルモンの代謝が低下する可能性があります。CYP3A4（Cytochrome P450 Family 3 Subfamily A Member 4）は、肝臓と小腸で広く発現するシトクロムP450酵素で、多くの薬物やステロイドホルモンの代謝に関与しています。CYP3A4は、化合物を酸化し、水溶性を高めて排泄を促進することで解毒に寄与します。"}
            />
            <GeneInformationMiddle
                geneName={"CYP3A5"}
                datas={[
                    "rs4646450", "rs776746"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、様々な薬物の代謝が低下する可能性があります。CYP3A5（Cytochrome P450 Family 3 Subfamily A Member 5）は、CYP3Aファミリーの一員で、主に肝臓や腎臓で発現し、薬物やステロイドホルモンの代謝に関与します。CYP3A5はCYP3A4と協力し、薬物の酸化を通じて解毒と排泄を促進します。"}
            />
            <GeneInformationMiddle
                geneName={"CYP3A7"}
                datas={[
                    "rs45446698", "rs4646465"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、新生児や胎児期におけるステロイドホルモンの代謝が影響を受ける可能性があります。CYP3A7（Cytochrome P450 Family 3 Subfamily A Member 7）は、主に胎児期の肝臓で発現し、成長とともにその発現が減少します。CYP3A7は、ステロイドホルモンや内因性物質の代謝に関与し、胎児の発達と代謝において重要な役割を果たしています。"}
            />
            <GeneInformationMiddle
                geneName={"CYP4F2"}
                datas={[
                    "rs2108622"
                ]}
                level={-1}
                description={"この遺伝子に変異がある場合、ビタミンEやワルファリンなどの代謝に影響を与える可能性があります。CYP4F2（Cytochrome P450 Family 4 Subfamily F Member 2）は、ビタミンEや長鎖脂肪酸、エイコサノイドの代謝に関与するシトクロムP450酵素です。CYP4F2は、肝臓や腎臓で発現が高く、特にビタミンKの代謝にも関わるため、血液凝固や心血管の健康に影響を与えることがあります。"}
            />

            <GenePageNumber>117</GenePageNumber>
        </PageWrapper>
    );
};

export default Gene76;
