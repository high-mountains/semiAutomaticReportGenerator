import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import PageWrapper from "../../../components/Pdf/PageWrapper.jsx";
import GenePageNumber from "../../../components/Pdf/GenePageNumber.jsx";
import GeneInformationMiddle from "../../../components/Pdf/GeneInformationList/GeneInformationMiddle.jsx";

import { updateDangerLevel } from "../Supplement/updateDangerValues.js";

// Centralized initial gene data
const initialGeneData = [
  {
    geneName: "BCHE",
    datas: [
      "rs1803274",
      "rs1799807",
      "rs28933389",
      "rs28933390",
      "rs1126680",
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、有機リン系化合物の解毒が不十分となる可能性があります。BCHEは、ブチリルコリンエステラーゼという酵素をコードしており、神経伝達物質の一種であるアセチルコリンの分解や、薬物や毒素の解毒に関与しています。BCHEは、主に肝臓で合成され、血中での解毒機能を担い、特定の薬物代謝や神経伝達の調整に寄与します。",
  },
  {
    geneName: "CYP2B6",
    datas: [
      "rs3745274",
      "rs139801276",
      "rs2279343",
      "rs34097093",
      "rs36079186",
      "rs28399499",
      "rs373489637",
      "rs4803419",
      "rs186335453",
      "rs281864907",
    ],
    level: 0,
    description:
      "この遺伝子に変異がある場合、有機リン系化合物の解毒が不十分となる可能性があります。CYP2B6（Cytochrome P450 Family 2 Subfamily B Member 6）は、シトクロムP450酵素ファミリーの一員で、薬物や環境毒素、内因性物質の代謝に関与しています。CYP2B6は、肝臓で発現が高く、特定の薬物を水溶性に変換して排泄を促進する役割を果たしています。",
  },
];

const Gene61 = () => {
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

      <GenePageNumber>97</GenePageNumber>
    </PageWrapper>
  );
};

export default Gene61;
