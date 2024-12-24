import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "G6PD",
    datas: ["rs137852318", "rs137852319", "rs137852321", "rs137852323", "rs137852324"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ミトコンドリア内での抗酸化防御機構が弱まる可能性があります。G6PD(Glucose-6-Phosphate Dehydrogenase）は、グルコース-6-リン酸デヒドロゲナーゼという酵素をコードしています。この酵素は、ペントースリン酸経路における重要な酵素で、グルコース-6-リン酸を酸化し、NADPHを生成します。",
  },
  {
    geneName: "IDO2",
    datas: ["rs4503083", "rs10109853"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ミトコンドリア内でのトリプトファン代謝や免疫応答が変化する可能性があります。IDO2（Indoleamine 2,3-Dioxygenase 2）は、インドールアミン2,3-ジオキシゲナーゼ2をコードしています。この酵素は、トリプトファンをキヌレニンに代謝する役割を担い、免疫応答の調節に関与しています。",
  },
  {
    geneName: "KYNU",
    datas: ["rs3768844", "rs606231307", "rs758865880", "rs147475752", "rs780720490", "rs770642379"],
    level: 0,
    description:
      "この遺伝子に変異がある場合、ミトコンドリア内でエネルギー産生が不十分になる可能性があります。KYNU（Kynureninase）は、キヌレニナーゼという酵素をコードしており、キヌレニン経路でキヌレニンを代謝してアントラニル酸に変換する役割を持ちます。この経路は、トリプトファン代謝における重要な経路であり、神経伝達物質や免疫応答に関わる代謝産物の生成に寄与しています。",
  },
];

const Gene22 = ({deltaPageCount}) => {
  // Fetch gene data from Redux store
  const geneData = useSelector((state) => state.pdfData?.geneData || []);

  // Memoize the updated gene data to avoid unnecessary recalculations
  const updatedGeneData = useMemo(() => {
    return updateDangerLevel(initialGeneData, geneData);
  }, [geneData]);

  return (
    <PageWrapper>
      {/* Render each gene information dynamically */}
      {updatedGeneData.map((item, index) => (
        <GeneInformationMiddle
          key={index}
          geneName={item.geneName}
          datas={item.datas}
          level={item.level}
          description={item.description}
        />
      ))}

      <GenePageNumber>{deltaPageCount+61}</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene22;
